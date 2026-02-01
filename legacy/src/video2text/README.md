# Video to Text Extraction Program

A Python program that extracts text from video audio using local or cloud speech recognition services.

## Features

- 🎥 Extract audio from video files (MP4, AVI, MOV, MKV, etc.)
- 🔊 Convert speech to text using multiple engines:
  - **Local**: OpenAI Whisper (free, offline)
  - **Cloud**: Azure Cognitive Services (paid, high accuracy)
- 🌍 Multi-language support
- 💰 Cost calculation for cloud services
- 📊 Video file information and analysis
- 💾 Save results in JSON and text formats

## Installation

### Prerequisites

1. **Python 3.8+**
2. **FFmpeg** - Required for audio extraction
   - Windows: Download from [FFmpeg official site](https://ffmpeg.org/download.html)
   - macOS: `brew install ffmpeg`
   - Linux: `sudo apt install ffmpeg`

### Install Dependencies

```bash
cd src/video2text
pip install -r requirements.txt
```

## Usage

### Basic Usage

```bash
# Extract text from video using local Whisper (English)
python main.py transcribe video.mp4 --language en

# Extract text using Azure Cloud (Chinese)
python main.py transcribe video.mp4 --language zh --engine azure --azure-key YOUR_KEY

# Specify output file
python main.py transcribe video.mp4 --language en --output result
```

### Commands

#### Transcribe Video
```bash
python main.py transcribe [OPTIONS] VIDEO_PATH

Options:
  -l, --language TEXT      Language code (e.g., en, zh, ja) [required]
  -e, --engine [whisper|azure]  Speech recognition engine (default: whisper)
  -o, --output PATH        Output file path
  --model-size [tiny|base|small|medium|large]  Whisper model size
  --azure-key TEXT         Azure subscription key
  --azure-region TEXT      Azure region (default: eastus)
  --keep-audio             Keep extracted audio file
```

#### Get Video Information
```bash
python main.py info video.mp4
```

#### List Supported Languages
```bash
# List languages for Whisper
python main.py languages --engine whisper

# List languages for Azure
python main.py languages --engine azure
```

#### Calculate Costs
```bash
# Calculate cost for 300 seconds (5 minutes) of audio
python main.py cost 300
```

## Language Codes

### Whisper (Simple Format)
- `en` - English
- `zh` - Chinese
- `ja` - Japanese
- `ko` - Korean
- `fr` - French
- `de` - German
- `es` - Spanish
- And many more...

### Azure (Extended Format)
- `en-US` - English (United States)
- `zh-CN` - Chinese (Simplified)
- `ja-JP` - Japanese
- `ko-KR` - Korean
- `fr-FR` - French
- `de-DE` - German
- `es-ES` - Spanish

## Cost Calculation

### Local (Whisper)
- **Cost**: Free
- **Notes**: Uses local compute resources, no cloud costs

### Azure Cloud
- **Standard**: $1.00 per hour of audio
- **Custom**: $6.00 per hour of audio

Example: A 30-minute video would cost approximately:
- Standard: $0.50
- Custom: $3.00

### Set Azure Credentials

Option 1: Environment variable
```bash
export AZURE_SPEECH_KEY="your_subscription_key"
```

Option 2: Command line parameter
```bash
python main.py transcribe video.mp4 --language en-US --engine azure --azure-key "your_key"
```

## Output Files

When you run the program, it creates:
- `result.json` - Complete transcription with metadata
- `result.txt` - Plain text transcription

### JSON Output Structure
```json
{
  "text": "Full transcribed text",
  "segments": [
    {
      "text": "Segment text",
      "start": 0.0,
      "end": 5.0
    }
  ],
  "language": "en",
  "engine": "whisper",
  "model_size": "base"
}
```

## Supported Video Formats

- MP4 (.mp4)
- AVI (.avi)
- MOV (.mov)
- MKV (.mkv)
- WMV (.wmv)
- FLV (.flv)
- WebM (.webm)

## Examples

### Extract English Subtitles from Movie
```bash
python main.py transcribe movie.mp4 --language en --model-size medium
```

### Extract Chinese Audio with Azure
```bash
python main.py transcribe video.mp4 --language zh-CN --engine azure --azure-key "your_key"
```

### Get Video Information
```bash
python main.py info movie.mp4
```

### Calculate Cost for 2-hour Movie
```bash
python main.py cost 7200
```

## Troubleshooting

### Common Issues

1. **FFmpeg not found**: Install FFmpeg and ensure it's in your PATH
2. **No audio track**: Check if your video file contains audio
3. **Memory issues with large videos**: Use smaller Whisper model (tiny, base)
4. **Azure authentication failed**: Verify your subscription key and region

### Performance Tips

- Use `--model-size tiny` for faster processing (lower accuracy)
- Use `--model-size large` for best accuracy (slower)
- For long videos, consider splitting them into smaller segments

## Development

### Project Structure
```
video2text/
├── main.py              # CLI interface
├── video_extractor.py   # Video to audio extraction
├── speech_to_text.py    # Speech recognition engines
├── utils.py             # Utilities and cost calculation
├── requirements.txt     # Dependencies
└── README.md           # This file
```

### Adding New Speech Recognition Engines

1. Add engine to `speech_to_text.py`
2. Update cost calculation in `utils.py`
3. Add CLI option in `main.py`

## License

This project is part of the program4kids educational initiative.