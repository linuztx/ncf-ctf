# NCF CTF Backend

This is the backend API for the NCF CTF Challenge Platform built with FastAPI.

## Features

- **Secure Flag Verification**: Removes hardcoded flags from frontend
- **RESTful API**: Clean and well-documented endpoints
- **CORS Support**: Allows frontend to communicate with backend
- **Modular Design**: Follows Python best practices and PEP8
- **Auto-generated Documentation**: Interactive API docs at `/docs`

## Project Structure

```
backend/
├── __init__.py          # Package initialization
├── main.py              # FastAPI application entry point
├── config.py            # Configuration settings
├── models.py            # Pydantic data models
├── requirements.txt     # Python dependencies
└── routes/
    ├── __init__.py      # Routes package initialization
    └── flags.py         # Flag verification endpoints
```

## Installation

1. Install Python dependencies:
```bash
pip install -r backend/requirements.txt
```

2. Start the server:
```bash
python3 start_server.py
```

The server will run on `http://localhost:8000` by default.

## API Endpoints

### Health Check
- **GET** `/health` - Check backend health status
- **GET** `/api/flags/health` - Check flags service health

### Flag Verification
- **POST** `/api/flags/verify` - Verify a submitted flag
  ```json
  {
    "challenge": "challenge1",
    "flag": "NCF{example_flag}"
  }
  ```

### Challenges
- **GET** `/api/flags/challenges` - Get list of available challenges

## API Documentation

Interactive API documentation is available at:
- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

## Configuration

The backend can be configured via environment variables:

- `DEBUG`: Enable debug mode (default: false)
- `HOST`: Server host (default: localhost)
- `PORT`: Server port (default: 8000)

## Security Considerations

In a production environment:
1. Move challenge flags to environment variables
2. Implement rate limiting
3. Add authentication if needed
4. Use HTTPS
5. Configure proper CORS origins

## Development

The backend follows PEP8 conventions and uses:
- **FastAPI**: Modern Python web framework
- **Pydantic**: Data validation using Python type hints
- **Uvicorn**: ASGI server implementation

To run in development mode with auto-reload:
```bash
uvicorn backend.main:app --reload --host localhost --port 8000
```