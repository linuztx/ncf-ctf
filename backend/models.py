"""Pydantic models for NCF CTF backend."""

from pydantic import BaseModel, Field


class FlagSubmission(BaseModel):
    """Model for flag submission request."""
    
    challenge: str = Field(..., description="Challenge identifier")
    flag: str = Field(..., description="Submitted flag")
    
    class Config:
        """Pydantic model configuration."""
        
        json_schema_extra = {
            "example": {
                "challenge": "challenge1",
                "flag": "NCF{example_flag}"
            }
        }


class FlagVerificationResponse(BaseModel):
    """Model for flag verification response."""
    
    success: bool = Field(..., description="Whether flag is correct")
    message: str = Field(..., description="Response message")
    challenge: str = Field(..., description="Challenge identifier")
    
    class Config:
        """Pydantic model configuration."""
        
        json_schema_extra = {
            "example": {
                "success": True,
                "message": "Congratulations! You found the correct flag!",
                "challenge": "challenge1"
            }
        }


class ChallengesResponse(BaseModel):
    """Model for challenges list response."""
    
    challenges: list[str] = Field(..., description="List of available challenges")
    total: int = Field(..., description="Total number of challenges")
    
    class Config:
        """Pydantic model configuration."""
        
        json_schema_extra = {
            "example": {
                "challenges": ["challenge1", "challenge2", "challenge3"],
                "total": 6
            }
        }