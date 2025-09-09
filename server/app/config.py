from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    # DB
    database_url: str

    # Auth (Auth0 / any OIDC issuer with RS256)
    jwt_secret: str = "dev-secret-change"  # (unused with Auth0; kept for local)
    auth0_domain: str | None = None  # e.g., dev-xyz123.us.auth0.com
    auth0_audience: str | None = None  # e.g., https://api.vedra.dev
    auth0_algorithms: tuple[str, ...] = ("RS256",)

    # Custom claim namespace for role/scope in tokens
    # e.g., https://vedra.dev/role, https://vedra.dev/scope_code
    custom_claim_ns: str = "https://vedra.dev"

    # CORS
    frontend_origin: str = "http://localhost:5173"

    class Config:
        env_file = ".env"


settings = Settings()
