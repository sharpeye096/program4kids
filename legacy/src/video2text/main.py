#!/usr/bin/env python3
"""
Video to Text Extraction Program
Extracts text from video audio using local or cloud speech recognition.
"""

import os
import sys
import click
from pathlib import Path

# Add parent directory to path for imports
sys.path.insert(0, str(Path(__file__).parent.parent))

from video2text.video_extractor import VideoExtractor
from video2text.speech_to_text import SpeechToText
from video2text.utils import (
    CostCalculator, setup_logging, save_transcription_result,
    format_duration, get_file_size_mb, validate_file_path
)


@click.group()
@click.option('--log-level', default='INFO', help='Logging level')
def cli(log_level):
    """Video to Text Extraction Tool"""
    setup_logging(log_level)


@cli.command()
@click.argument('video_path', type=click.Path(exists=True))
@click.option('--language', '-l', required=True, help='Language code (e.g., en, zh, ja)')
@click.option('--engine', '-e', type=click.Choice(['whisper', 'azure']), default='whisper',
              help='Speech recognition engine')
@click.option('--output', '-o', type=click.Path(), help='Output file path')
@click.option('--model-size', default='base',
              type=click.Choice(['tiny', 'base', 'small', 'medium', 'large']),
              help='Whisper model size (for local engine)')
@click.option('--azure-key', help='Azure subscription key (or set AZURE_SPEECH_KEY env var)')
@click.option('--azure-region', default='eastus', help='Azure region')
@click.option('--keep-audio', is_flag=True, help='Keep extracted audio file')
def transcribe(video_path, language, engine, output, model_size, azure_key, azure_region, keep_audio):
    """Extract text from video audio."""

    click.echo(f"Processing video: {video_path}")

    try:
        # Initialize components
        video_extractor = VideoExtractor()
        speech_to_text = SpeechToText()

        # Get video information
        video_info = video_extractor.get_video_info(video_path)
        click.echo(f"Video duration: {format_duration(video_info['duration'])}")
        click.echo(f"File size: {get_file_size_mb(video_path):.2f} MB")

        if not video_info['has_audio']:
            click.echo("❌ No audio track found in video file")
            return

        # Show cost estimation
        cost_breakdown = CostCalculator.get_cost_breakdown(video_info['duration'])
        click.echo("\n💰 Cost Estimation:")
        for service, info in cost_breakdown.items():
            if service.startswith('azure'):
                click.echo(f"  - {info['description']}: ${info['cost']:.4f}")
            else:
                click.echo(f"  - {info['description']}: {info['notes']}")

        # Extract audio
        click.echo("\n🎵 Extracting audio from video...")
        audio_path = video_extractor.extract_audio_to_temp(video_path)
        click.echo(f"Audio extracted to: {audio_path}")

        # Transcribe audio
        click.echo(f"\n🔊 Transcribing audio with {engine} engine...")

        if engine == 'whisper':
            result = speech_to_text.transcribe_local_whisper(
                audio_path, language=language, model_size=model_size
            )
        elif engine == 'azure':
            # Convert language code format if needed
            if '-' not in language:
                # Try to map simple codes to Azure format
                language_map = {'en': 'en-US', 'zh': 'zh-CN', 'ja': 'ja-JP', 'ko': 'ko-KR'}
                language = language_map.get(language, f"{language}-{language.upper()}")

            result = speech_to_text.transcribe_azure_cloud(
                audio_path, language=language,
                subscription_key=azure_key, region=azure_region
            )

        # Set output path
        if output is None:
            output = str(Path(video_path).with_suffix(''))

        # Save results
        click.echo("\n💾 Saving transcription results...")
        json_path, txt_path = save_transcription_result(result, output)

        # Display results
        click.echo(f"\n✅ Transcription completed!")
        click.echo(f"Detected language: {result.get('language', 'unknown')}")
        click.echo(f"Text length: {len(result.get('text', ''))} characters")
        click.echo(f"JSON result: {json_path}")
        click.echo(f"Text file: {txt_path}")

        # Clean up temporary audio file
        if not keep_audio and os.path.exists(audio_path):
            os.unlink(audio_path)
            click.echo(f"Temporary audio file removed: {audio_path}")

    except Exception as e:
        click.echo(f"❌ Error: {e}", err=True)
        sys.exit(1)


@cli.command()
@click.argument('video_path', type=click.Path(exists=True))
def info(video_path):
    """Get information about video file."""

    try:
        video_extractor = VideoExtractor()
        info = video_extractor.get_video_info(video_path)

        click.echo(f"📹 Video Information:")
        click.echo(f"  Duration: {format_duration(info['duration'])}")
        click.echo(f"  FPS: {info['fps']}")
        click.echo(f"  Resolution: {info['size'][0]}x{info['size'][1]}")
        click.echo(f"  Has Audio: {'Yes' if info['has_audio'] else 'No'}")
        click.echo(f"  File Size: {get_file_size_mb(video_path):.2f} MB")

        if info['has_audio']:
            click.echo(f"\n💰 Cost Estimation:")
            cost_breakdown = CostCalculator.get_cost_breakdown(info['duration'])
            for service, cost_info in cost_breakdown.items():
                if service.startswith('azure'):
                    click.echo(f"  - {cost_info['description']}: ${cost_info['cost']:.4f}")
                else:
                    click.echo(f"  - {cost_info['description']}")

    except Exception as e:
        click.echo(f"❌ Error: {e}", err=True)
        sys.exit(1)


@cli.command()
@click.option('--engine', type=click.Choice(['whisper', 'azure']), default='whisper')
def languages(engine):
    """List supported languages for speech recognition."""

    try:
        speech_to_text = SpeechToText()
        languages = speech_to_text.get_supported_languages(engine)

        click.echo(f"🗣️ Supported languages for {engine}:")
        for lang in sorted(languages):
            click.echo(f"  - {lang}")

        click.echo(f"\nTotal: {len(languages)} languages")

    except Exception as e:
        click.echo(f"❌ Error: {e}", err=True)
        sys.exit(1)


@cli.command()
@click.argument('duration_seconds', type=float)
def cost(duration_seconds):
    """Calculate cost for speech recognition services."""

    try:
        cost_breakdown = CostCalculator.get_cost_breakdown(duration_seconds)

        click.echo(f"💰 Cost Estimation for {format_duration(duration_seconds)} of audio:")
        for service, info in cost_breakdown.items():
            if service.startswith('azure'):
                click.echo(f"\n  {info['description']}:")
                click.echo(f"    Estimated cost: ${info['cost']:.4f}")
                click.echo(f"    Notes: {info['notes']}")
            else:
                click.echo(f"\n  {info['description']}:")
                click.echo(f"    Notes: {info['notes']}")

    except Exception as e:
        click.echo(f"❌ Error: {e}", err=True)
        sys.exit(1)


if __name__ == '__main__':
    cli()