"""Flag verification routes for NCF CTF backend."""

from fastapi import APIRouter, HTTPException, status
from fastapi.responses import JSONResponse

from ..config import config
from ..models import FlagSubmission, FlagVerificationResponse, ChallengesResponse

router = APIRouter(prefix="/api/flags", tags=["flags"])


@router.post("/verify", response_model=FlagVerificationResponse)
async def verify_flag(submission: FlagSubmission) -> FlagVerificationResponse:
    """
    Verify a submitted flag for a challenge.
    
    Args:
        submission: Flag submission containing challenge ID and flag
        
    Returns:
        FlagVerificationResponse with verification result
        
    Raises:
        HTTPException: If challenge ID is invalid
    """
    challenge_id = submission.challenge.strip().lower()
    submitted_flag = submission.flag.strip()
    
    # Check if challenge exists
    if challenge_id not in config.CHALLENGE_FLAGS:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Challenge '{submission.challenge}' not found"
        )
    
    # Get the correct flag for the challenge
    correct_flag = config.CHALLENGE_FLAGS[challenge_id]
    
    # Case-insensitive flag comparison
    is_correct = correct_flag.lower() == submitted_flag.lower()
    
    if is_correct:
        return FlagVerificationResponse(
            success=True,
            message="🎉 Congratulations! You found the correct flag!",
            challenge=submission.challenge
        )
    else:
        return FlagVerificationResponse(
            success=False,
            message="❌ That's not the correct flag. Keep trying!",
            challenge=submission.challenge
        )


@router.get("/challenges", response_model=ChallengesResponse)
async def get_challenges() -> ChallengesResponse:
    """
    Get list of available challenges.
    
    Returns:
        ChallengesResponse with list of challenge IDs
    """
    challenge_list = list(config.CHALLENGE_FLAGS.keys())
    
    return ChallengesResponse(
        challenges=challenge_list,
        total=len(challenge_list)
    )


@router.get("/health")
async def health_check() -> dict:
    """
    Health check endpoint for the flags service.
    
    Returns:
        dict: Service health status
    """
    return {
        "status": "healthy",
        "service": "flags",
        "challenges_available": len(config.CHALLENGE_FLAGS)
    }