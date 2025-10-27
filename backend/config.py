"""Configuration module for NCF CTF backend."""

import os
from typing import Dict


class Config:
    """Application configuration class."""
    
    # Application settings
    APP_NAME: str = "NCF CTF Backend"
    VERSION: str = "1.0.0"
    DEBUG: bool = os.getenv("DEBUG", "false").lower() == "true"
    
    # Server settings
    HOST: str = os.getenv("HOST", "localhost")
    PORT: int = int(os.getenv("PORT", "8000"))
    
    # CORS settings
    ALLOWED_ORIGINS: list = [
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "http://localhost:8080",
        "http://127.0.0.1:8080",
        "file://",  # For local HTML files
    ]
    
    # Challenge flags (in production, these should be in environment variables)
    CHALLENGE_FLAGS: Dict[str, str] = {
        "challenge1": "NCF{1nsp3ct_3l3m3nt_pr0}",
        "challenge2": "NCF{c0ns0l3_m4st3r_2024}",
        "challenge3": "NCF{c00k13_m0nst3r}",
        "challenge4": "NCF{sweden}",
        "challenge5": "NCF{st3g0_m4st3r_2024}",
        "challenge6": "NCF{b4s64_d3c0d3r}",
    }


config = Config()