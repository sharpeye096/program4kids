#!/usr/bin/env python3
"""
Simple Video to Text Extraction
A minimal version that uses basic Python libraries for audio extraction
"""

import os
import sys
import subprocess
import tempfile
from pathlib import Path

# Add parent directory to path for imports
sys.path.insert(0, str(Path(__file__).parent.parent))

def extract_audio_simple(video_path: str, output_path: str = None) -> str:
    """
    Extract audio from video using FFmpeg command line.

    Args:
        video_path: Path to video file
        output_path: Output audio file path (optional)

    Returns:
        Path to extracted audio file
    """
    video_path = Path(video_path)

    if not video_path.exists():
        raise FileNotFoundError(f"Video file not found: {video_path}")

    # Set output path if not provided
    if output_path is None:
        output_path = str(video_path.with_suffix('.wav'))

    output_path = Path(output_path)

    print(f"Extracting audio from: {video_path}")
    print(f"Output audio file: {output_path}")

    # Use FFmpeg to extract audio
    cmd = [
        'ffmpeg',
        '-i', str(video_path),
        '-vn',  # No video
        '-acodec', 'pcm_s16le',  # WAV format
        '-ar', '16000',  # 16kHz sample rate (good for speech)
        '-ac', '1',  # Mono audio
        '-y',  # Overwrite output file
        str(output_path)
    ]

    try:
        result = subprocess.run(cmd, capture_output=True, text=True, check=True)
        print(f"✅ Audio extraction completed successfully!")
        return str(output_path)
    except subprocess.CalledProcessError as e:
        print(f"❌ Audio extraction failed: {e}")
        print(f"stderr: {e.stderr}")
        raise
    except FileNotFoundError:
        print("❌ FFmpeg not found. Please install FFmpeg:")
        print("   Windows: winget install ffmpeg")
        print("   macOS: brew install ffmpeg")
        print("   Linux: sudo apt install ffmpeg")
        raise

def extract_first_n_minutes(video_path: str, minutes: int = 5, output_path: str = None) -> str:
    """
    Extract first N minutes of audio from video.

    Args:
        video_path: Path to video file
        minutes: Number of minutes to extract
        output_path: Output audio file path

    Returns:
        Path to extracted audio file
    """
    video_path = Path(video_path)

    if not video_path.exists():
        raise FileNotFoundError(f"Video file not found: {video_path}")

    # Set output path if not provided
    if output_path is None:
        output_path = str(video_path.with_suffix(f'_first_{minutes}_min.wav'))

    output_path = Path(output_path)

    print(f"Extracting first {minutes} minutes from: {video_path}")
    print(f"Output audio file: {output_path}")

    # Use FFmpeg to extract first N minutes
    cmd = [
        'ffmpeg',
        '-i', str(video_path),
        '-vn',  # No video
        '-acodec', 'pcm_s16le',  # WAV format
        '-ar', '16000',  # 16kHz sample rate
        '-ac', '1',  # Mono audio
        '-t', str(minutes * 60),  # Duration in seconds
        '-y',  # Overwrite output file
        str(output_path)
    ]

    try:
        result = subprocess.run(cmd, capture_output=True, text=True, check=True)
        print(f"✅ Audio extraction completed successfully!")
        return str(output_path)
    except subprocess.CalledProcessError as e:
        print(f"❌ Audio extraction failed: {e}")
        print(f"stderr: {e.stderr}")
        raise
    except FileNotFoundError:
        print("❌ FFmpeg not found. Please install FFmpeg:")
        print("   Windows: winget install ffmpeg")
        print("   macOS: brew install ffmpeg")
        print("   Linux: sudo apt install ffmpeg")
        raise

def check_ffmpeg() -> bool:
    """Check if FFmpeg is available."""
    try:
        result = subprocess.run(['ffmpeg', '-version'], capture_output=True, text=True)
        return result.returncode == 0
    except FileNotFoundError:
        return False

def main():
    """Main function for simple audio extraction."""

    video_path = r"D:\迅雷下载1\棋士[4KHDR.CN]Playing.Go.2025.S01E22.2160P.60fps.WEB-DL.H265-4KHDR世界.mp4"

    if not Path(video_path).exists():
        print(f"Video file not found: {video_path}")
        return

    print(f"Processing video: {Path(video_path).name}")
    print(f"File size: {Path(video_path).stat().st_size / (1024*1024*1024):.2f} GB")

    # Check if FFmpeg is available
    if not check_ffmpeg():
        print("\nFFmpeg is not installed. Please install it first:")
        print("   Windows: winget install ffmpeg")
        print("   macOS: brew install ffmpeg")
        print("   Linux: sudo apt install ffmpeg")
        print("\nAfter installing FFmpeg, run this script again.")
        return

    print("\n✅ FFmpeg is available!")

    # Ask user what to extract
    print("\nChoose extraction option:")
    print("1. Extract full audio")
    print("2. Extract first 5 minutes (recommended for testing)")
    print("3. Extract first 10 minutes")

    choice = input("Enter choice (1-3): ").strip()

    try:
        if choice == '1':
            audio_path = extract_audio_simple(video_path)
        elif choice == '2':
            audio_path = extract_first_n_minutes(video_path, minutes=5)
        elif choice == '3':
            audio_path = extract_first_n_minutes(video_path, minutes=10)
        else:
            print("Invalid choice. Using default: first 5 minutes")
            audio_path = extract_first_n_minutes(video_path, minutes=5)

        print(f"\n🎵 Audio file created: {audio_path}")
        print(f"📊 Audio file size: {Path(audio_path).stat().st_size / (1024*1024):.2f} MB")

        print("\n🎉 Audio extraction completed!")
        print("\nNext steps:")
        print("1. Wait for Python dependencies to finish installing")
        print(f"2. Run: py src/video2text/main.py transcribe {audio_path} --language zh --model-size base")

    except Exception as e:
        print(f"\n❌ Error: {e}")

if __name__ == "__main__":
    main()