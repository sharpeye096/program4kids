"""
Speech to Text Converter
Converts audio to text using local (Whisper) or cloud (Azure) services.
"""

import os
import json
import logging
from pathlib import Path
from typing import Dict, List, Optional
import whisper
import azure.cognitiveservices.speech as speechsdk

logger = logging.getLogger(__name__)

class SpeechToText:
    """Converts speech to text using various engines."""

    def __init__(self):
        self.whisper_model = None
        self.azure_speech_config = None

    def transcribe_local_whisper(self, audio_path: str, language: str = None, model_size: str = "base") -> Dict:
        """
        Transcribe audio using local Whisper model.

        Args:
            audio_path: Path to audio file
            language: Language code (e.g., 'en', 'zh', 'ja')
            model_size: Whisper model size ('tiny', 'base', 'small', 'medium', 'large')

        Returns:
            Dictionary with transcription results
        """
        try:
            logger.info(f"Loading Whisper model: {model_size}")

            # Load model (cached after first load)
            if self.whisper_model is None or self.whisper_model.model_size != model_size:
                self.whisper_model = whisper.load_model(model_size)

            logger.info(f"Transcribing audio with Whisper: {audio_path}")

            # Prepare options
            options = {
                "fp16": False,  # Use FP32 for better compatibility
                "language": language
            }

            # Remove None values
            options = {k: v for k, v in options.items() if v is not None}

            # Transcribe
            result = self.whisper_model.transcribe(audio_path, **options)

            return {
                'text': result['text'],
                'segments': result.get('segments', []),
                'language': result.get('language', 'unknown'),
                'engine': 'whisper',
                'model_size': model_size
            }

        except Exception as e:
            logger.error(f"Whisper transcription failed: {e}")
            raise

    def transcribe_azure_cloud(self, audio_path: str, language: str,
                             subscription_key: str = None, region: str = "eastus") -> Dict:
        """
        Transcribe audio using Azure Cognitive Services.

        Args:
            audio_path: Path to audio file
            language: Language code (e.g., 'en-US', 'zh-CN', 'ja-JP')
            subscription_key: Azure subscription key
            region: Azure region

        Returns:
            Dictionary with transcription results
        """
        try:
            # Get subscription key from environment if not provided
            if subscription_key is None:
                subscription_key = os.getenv('AZURE_SPEECH_KEY')
                if not subscription_key:
                    raise ValueError("Azure subscription key not provided and AZURE_SPEECH_KEY environment variable not set")

            # Configure speech service
            speech_config = speechsdk.SpeechConfig(subscription=subscription_key, region=region)
            speech_config.speech_recognition_language = language

            logger.info(f"Transcribing audio with Azure: {audio_path}")

            # Create audio config
            audio_config = speechsdk.audio.AudioConfig(filename=audio_path)

            # Create speech recognizer
            speech_recognizer = speechsdk.SpeechRecognizer(
                speech_config=speech_config,
                audio_config=audio_config
            )

            # Perform recognition
            result = speech_recognizer.recognize_once()

            if result.reason == speechsdk.ResultReason.RecognizedSpeech:
                return {
                    'text': result.text,
                    'segments': [{'text': result.text, 'start': 0, 'end': 0}],
                    'language': language,
                    'engine': 'azure',
                    'confidence': result.properties.get(speechsdk.PropertyId.SpeechServiceResponse_JsonResult, 'unknown')
                }
            elif result.reason == speechsdk.ResultReason.NoMatch:
                raise Exception("No speech could be recognized")
            elif result.reason == speechsdk.ResultReason.Canceled:
                cancellation_details = result.cancellation_details
                raise Exception(f"Speech recognition canceled: {cancellation_details.reason}")
            else:
                raise Exception(f"Unexpected result: {result.reason}")

        except Exception as e:
            logger.error(f"Azure transcription failed: {e}")
            raise

    def get_supported_languages(self, engine: str = "whisper") -> List[str]:
        """
        Get list of supported languages for the specified engine.

        Args:
            engine: Speech recognition engine ('whisper' or 'azure')

        Returns:
            List of supported language codes
        """
        if engine == "whisper":
            # Whisper supports many languages
            return [
                'en', 'zh', 'ja', 'ko', 'fr', 'de', 'es', 'it', 'ru', 'pt',
                'nl', 'tr', 'ar', 'hi', 'th', 'vi', 'id', 'pl', 'uk', 'ro',
                'hu', 'cs', 'el', 'sv', 'da', 'fi', 'no', 'sk', 'hr', 'bg',
                'lt', 'sl', 'et', 'lv', 'mt', 'ga', 'is', 'mk', 'sq', 'sr'
            ]
        elif engine == "azure":
            # Azure Speech Services supported languages
            return [
                'en-US', 'zh-CN', 'zh-TW', 'ja-JP', 'ko-KR', 'fr-FR', 'de-DE',
                'es-ES', 'it-IT', 'ru-RU', 'pt-BR', 'nl-NL', 'tr-TR', 'ar-EG',
                'hi-IN', 'th-TH', 'vi-VN', 'id-ID', 'pl-PL', 'uk-UA', 'ro-RO',
                'hu-HU', 'cs-CZ', 'el-GR', 'sv-SE', 'da-DK', 'fi-FI', 'no-NO',
                'sk-SK', 'hr-HR', 'bg-BG', 'lt-LT', 'sl-SI', 'et-EE', 'lv-LV',
                'mt-MT', 'ga-IE', 'is-IS', 'mk-MK', 'sq-AL', 'sr-RS'
            ]
        else:
            raise ValueError(f"Unsupported engine: {engine}")

    def validate_language(self, language: str, engine: str = "whisper") -> bool:
        """
        Validate if language is supported by the engine.

        Args:
            language: Language code to validate
            engine: Speech recognition engine

        Returns:
            True if language is supported
        """
        supported_languages = self.get_supported_languages(engine)
        return language in supported_languages