"""
Video to Audio Extractor
Extracts audio from video files using FFmpeg.
"""

import os
import tempfile
from pathlib import Path
from moviepy.editor import VideoFileClip
import logging

logger = logging.getLogger(__name__)

class VideoExtractor:
    """Extracts audio from video files."""

    def __init__(self):
        self.supported_formats = ['.mp4', '.avi', '.mov', '.mkv', '.wmv', '.flv', '.webm']

    def extract_audio(self, video_path: str, output_path: str = None, audio_format: str = 'wav') -> str:
        """
        Extract audio from video file.

        Args:
            video_path: Path to the video file
            output_path: Path for the output audio file (optional)
            audio_format: Output audio format ('wav', 'mp3', 'flac')

        Returns:
            Path to the extracted audio file
        """

        # Validate input file
        video_path = Path(video_path)
        if not video_path.exists():
            raise FileNotFoundError(f"Video file not found: {video_path}")

        if video_path.suffix.lower() not in self.supported_formats:
            logger.warning(f"Unsupported video format: {video_path.suffix}. Trying anyway...")

        # Set output path if not provided
        if output_path is None:
            output_path = str(video_path.with_suffix(f'.{audio_format}'))

        output_path = Path(output_path)

        try:
            logger.info(f"Extracting audio from {video_path}")

            # Load video and extract audio
            with VideoFileClip(str(video_path)) as video:
                audio = video.audio

                if audio is None:
                    raise ValueError("No audio track found in the video file")

                # Write audio file
                audio.write_audiofile(str(output_path), verbose=False, logger=None)

                logger.info(f"Audio extracted successfully to {output_path}")

                return str(output_path)

        except Exception as e:
            logger.error(f"Failed to extract audio: {e}")
            raise

    def extract_audio_to_temp(self, video_path: str, audio_format: str = 'wav') -> str:
        """
        Extract audio to a temporary file.

        Args:
            video_path: Path to the video file
            audio_format: Output audio format

        Returns:
            Path to the temporary audio file
        """
        with tempfile.NamedTemporaryFile(suffix=f'.{audio_format}', delete=False) as temp_file:
            temp_path = temp_file.name

        return self.extract_audio(video_path, temp_path, audio_format)

    def get_video_info(self, video_path: str) -> dict:
        """
        Get basic information about the video file.

        Args:
            video_path: Path to the video file

        Returns:
            Dictionary with video information
        """
        video_path = Path(video_path)
        if not video_path.exists():
            raise FileNotFoundError(f"Video file not found: {video_path}")

        try:
            with VideoFileClip(str(video_path)) as video:
                info = {
                    'duration': video.duration,
                    'fps': video.fps,
                    'size': video.size,
                    'has_audio': video.audio is not None,
                    'file_size': video_path.stat().st_size
                }

                if video.audio:
                    info['audio_fps'] = video.audio.fps

                return info

        except Exception as e:
            logger.error(f"Failed to get video info: {e}")
            raise