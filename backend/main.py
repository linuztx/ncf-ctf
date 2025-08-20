"""Main FastAPI application for NCF CTF backend."""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .config import config
from .routes.flags import router as flags_router


def create_app() -> FastAPI:
    """
    Create and configure the FastAPI application.
    
    Returns:
        FastAPI: Configured application instance
    """
    app = FastAPI(
        title=config.APP_NAME,
        version=config.VERSION,
        description="Backend API for NCF CTF Challenge Platform",
        docs_url="/docs",
        redoc_url="/redoc"
    )
    
    # Add CORS middleware
    app.add_middleware(
        CORSMiddleware,
        allow_origins=config.ALLOWED_ORIGINS,
        allow_credentials=True,
        allow_methods=["GET", "POST", "PUT", "DELETE"],
        allow_headers=["*"],
    )
    
    # Include routers
    app.include_router(flags_router)
    
    @app.get("/")
    async def root() -> dict:
        """Root endpoint."""
        return {
            "message": "NCF CTF Backend API",
            "version": config.VERSION,
            "docs": "/docs"
        }
    
    @app.get("/health")
    async def health() -> dict:
        """Health check endpoint."""
        return {
            "status": "healthy",
            "app": config.APP_NAME,
            "version": config.VERSION
        }
    
    return app


# Create the application instance
app = create_app()


if __name__ == "__main__":
    import uvicorn
    
    uvicorn.run(
        "main:app",
        host=config.HOST,
        port=config.PORT,
        reload=config.DEBUG
    )