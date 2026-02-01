"""
Utility functions for video to text conversion.
Includes cost calculation and file operations.
"""

import os
import json
import logging
from pathlib import Path
from typing import Dict, Any

logger = logging.getLogger(__name__)

class CostCalculator:
    """Calculates costs for cloud speech recognition services."""

    # Azure Speech Services pricing (as of 2024, per hour of audio)
    AZURE_PRICING = {
        'standard': 1.0,  # $1 per hour
        'custom': 6.0,    # $6 per hour for custom models
    }

    @staticmethod
    def calculate_azure_cost(audio_duration_seconds: float, pricing_tier: str = 'standard') -> float:
        """
        Calculate cost for Azure Speech Services.

        Args:
            audio_duration_seconds: Duration of audio in seconds
            pricing_tier: Pricing tier ('standard' or 'custom')

        Returns:
            Estimated cost in USD
        """
        if pricing_tier not in CostCalculator.AZURE_PRICING:
            raise ValueError(f"Invalid pricing tier: {pricing_tier}")

        audio_duration_hours = audio_duration_seconds / 3600
        cost_per_hour = CostCalculator.AZURE_PRICING[pricing_tier]

        # Minimum charge is for 1 second
        if audio_duration_hours < (1 / 3600):
            audio_duration_hours = 1 / 3600

        estimated_cost = audio_duration_hours * cost_per_hour
        return round(estimated_cost, 4)

    @staticmethod
    def get_cost_breakdown(audio_duration_seconds: float) -> Dict[str, Any]:
        """
        Get cost breakdown for different services.

        Args:
            audio_duration_seconds: Duration of audio in seconds

        Returns:
            Dictionary with cost breakdown
        """
        return {
            'whisper': {
                'cost': 0.0,
                'description': 'Free local processing',
                'notes': 'No cloud costs, requires local compute resources'
            },
            'azure_standard': {
                'cost': CostCalculator.calculate_azure_cost(audio_duration_seconds, 'standard'),
                'description': 'Azure Speech Services (Standard)',
                'notes': f'Estimated cost: ${CostCalculator.calculate_azure_cost(audio_duration_seconds, "standard"):.4f}'
            },
            'azure_custom': {
                'cost': CostCalculator.calculate_azure_cost(audio_duration_seconds, 'custom'),
                'description': 'Azure Speech Services (Custom)',
                'notes': f'Estimated cost: ${CostCalculator.calculate_azure_cost(audio_duration_seconds, "custom"):.4f}'
            }
        }


def setup_logging(level: str = "INFO"):
    """
    Setup logging configuration.

    Args:
        level: Logging level
    """
    logging.basicConfig(
        level=getattr(logging, level.upper()),
        format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
        handlers=[
            logging.StreamHandler(),
            logging.FileHandler('video2text.log')
        ]
    )


def save_transcription_result(result: Dict, output_path: str):
    """
    Save transcription result to file.

    Args:
        result: Transcription result dictionary
        output_path: Path to save the result
    """
    output_path = Path(output_path)

    # Save as JSON
    json_path = output_path.with_suffix('.json')
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(result, f, ensure_ascii=False, indent=2)

    logger.info(f"Transcription result saved to: {json_path}")

    # Save as text
    txt_path = output_path.with_suffix('.txt')
    with open(txt_path, 'w', encoding='utf-8') as f:
        f.write(result.get('text', ''))

    logger.info(f"Transcription text saved to: {txt_path}")

    return str(json_path), str(txt_path)


def format_duration(seconds: float) -> str:
    """
    Format duration in seconds to human-readable string.

    Args:
        seconds: Duration in seconds

    Returns:
        Formatted duration string
    """
    hours = int(seconds // 3600)
    minutes = int((seconds % 3600) // 60)
    secs = int(seconds % 60)

    if hours > 0:
        return f"{hours}h {minutes}m {secs}s"
    elif minutes > 0:
        return f"{minutes}m {secs}s"
    else:
        return f"{secs}s"


def get_file_size_mb(file_path: str) -> float:
    """
    Get file size in megabytes.

    Args:
        file_path: Path to file

    Returns:
        File size in MB
    """
    file_path = Path(file_path)
    if file_path.exists():
        return file_path.stat().st_size / (1024 * 1024)
    return 0.0


def validate_file_path(file_path: str) -> bool:
    """
    Validate that file path exists and is accessible.

    Args:
        file_path: Path to validate

    Returns:
        True if file is valid
    """
    try:
        path = Path(file_path)
        return path.exists() and path.is_file()
    except Exception:
        return False