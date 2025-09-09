from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .config import settings
from .routes import health, auth_routes, papers


def create_app() -> FastAPI:
    app = FastAPI(title="Vedra API", version="0.1.0")
    app.add_middleware(
        CORSMiddleware,
        allow_origins=[settings.frontend_origin],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
    app.include_router(health.router)
    app.include_router(auth_routes.router)
    app.include_router(papers.router)
    return app


app = create_app()
