#!/usr/bin/env python3
"""
Example usage of the Video to Text extraction program.
This script demonstrates how to use the program programmatically.
"""

import os
import sys
from pathlib import Path

# Add parent directory to path for imports
sys.path.insert(0, str(Path(__file__).parent.parent))

from video2text.video_extractor import VideoExtractor
from video2text.speech_to_text import SpeechToText
from video2text.utils import save_transcription_result, CostCalculator


def example_basic_usage():
    """Example: Basic usage with local Whisper model."""

    print("=== Example 1: Basic Usage with Whisper ===")

    # Initialize components
    video_extractor = VideoExtractor()
    speech_to_text = SpeechToText()

    # Example video path (replace with actual path)
    video_path = "path/to/your/video.mp4"

    if not os.path.exists(video_path):
        print(f"Video file not found: {video_path}")
        print("Please update the video_path variable with a real video file.")
        return

    try:
        # Get video information
        video_info = video_extractor.get_video_info(video_path)
        print(f"Video duration: {video_info['duration']} seconds")
        print(f"Has audio: {video_info['has_audio']}")

        # Calculate costs
        cost_breakdown = CostCalculator.get_cost_breakdown(video_info['duration'])
        print(f"\nCost estimation:")
        for service, info in cost_breakdown.items():
            if service.startswith('azure'):
                print(f"  {info['description']}: ${info['cost']:.4f}")

        # Extract audio
        print("\nExtracting audio...")
        audio_path = video_extractor.extract_audio_to_temp(video_path)
        print(f"Audio extracted to: {audio_path}")

        # Transcribe with Whisper (English)
        print("\nTranscribing audio with Whisper...")
        result = speech_to_text.transcribe_local_whisper(
            audio_path, language='en', model_size='base'
        )

        # Save results
        output_path = "transcription_result"
        json_path, txt_path = save_transcription_result(result, output_path)

        print(f"\nTranscription completed!")
        print(f"Detected language: {result.get('language', 'unknown')}")
        print(f"Text length: {len(result.get('text', ''))} characters")
        print(f"Results saved to: {json_path} and {txt_path}")

        # Clean up
        if os.path.exists(audio_path):
            os.unlink(audio_path)
            print(f"Temporary audio file removed: {audio_path}")

    except Exception as e:
        print(f"Error: {e}")


def example_azure_usage():
    """Example: Usage with Azure Cloud services."""

    print("\n=== Example 2: Azure Cloud Usage ===")

    # Check for Azure credentials
    azure_key = os.getenv('AZURE_SPEECH_KEY')
    if not azure_key:
        print("Azure credentials not found. Set AZURE_SPEECH_KEY environment variable.")
        print("This example requires Azure Cognitive Services subscription.")
        return

    video_extractor = VideoExtractor()
    speech_to_text = SpeechToText()

    video_path = "path/to/your/video.mp4"

    if not os.path.exists(video_path):
        print(f"Video file not found: {video_path}")
        return

    try:
        # Extract audio
        audio_path = video_extractor.extract_audio_to_temp(video_path)

        # Transcribe with Azure (Chinese)
        print("Transcribing audio with Azure...")
        result = speech_to_text.transcribe_azure_cloud(
            audio_path, language='zh-CN',
            subscription_key=azure_key, region='eastus'
        )

        # Save results
        output_path = "azure_transcription_result"
        json_path, txt_path = save_transcription_result(result, output_path)

        print(f"Azure transcription completed!")
        print(f"Results saved to: {json_path}")

        # Clean up
        if os.path.exists(audio_path):
            os.unlink(audio_path)

    except Exception as e:
        print(f"Error: {e}")


def example_language_support():
    """Example: Check language support."""

    print("\n=== Example 3: Language Support ===")

    speech_to_text = SpeechToText()

    # Get supported languages for Whisper
    whisper_languages = speech_to_text.get_supported_languages('whisper')
    print(f"Whisper supports {len(whisper_languages)} languages")
    print("Sample languages:", whisper_languages[:10])

    # Get supported languages for Azure
    azure_languages = speech_to_text.get_supported_languages('azure')
    print(f"\nAzure supports {len(azure_languages)} languages")
    print("Sample languages:", azure_languages[:10])


def example_cost_calculation():
    """Example: Cost calculation for different scenarios."""

    print("\n=== Example 4: Cost Calculation ===")

    # Calculate costs for different durations
    durations = [300, 1800, 3600, 7200]  # 5min, 30min, 1h, 2h

    for duration in durations:
        cost_breakdown = CostCalculator.get_cost_breakdown(duration)
        print(f"\nFor {duration} seconds ({duration/60:.1f} minutes):")

        for service, info in cost_breakdown.items():
            if service.startswith('azure'):
                print(f"  {info['description']}: ${info['cost']:.4f}")


if __name__ == "__main__":
    print("Video to Text Extraction - Usage Examples")
    print("=" * 50)

    example_basic_usage()
    example_azure_usage()
    example_language_support()
    example_cost_calculation()

    print("\n" + "=" * 50)
    print("Examples completed!")