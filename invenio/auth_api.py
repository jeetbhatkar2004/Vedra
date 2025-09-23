#!/usr/bin/env python3
"""
Simple authentication API for Vedra
Handles user registration and login with PostgreSQL backend
"""

import os
import hashlib
import secrets
from datetime import datetime, timedelta
import psycopg2
from psycopg2.extras import RealDictCursor
from fastapi import FastAPI, HTTPException, Depends, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel, EmailStr
import uvicorn

app = FastAPI(title="Vedra Auth API", version="1.0.0")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://localhost:5173",
    ],  # React dev servers
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Database connection
def get_db_connection():
    return psycopg2.connect(
        host=os.getenv("POSTGRES_HOST", "localhost"),
        port=os.getenv("POSTGRES_PORT", "5432"),
        database=os.getenv("POSTGRES_DB", "invenio"),
        user=os.getenv("POSTGRES_USER", "invenio"),
        password=os.getenv("POSTGRES_PASSWORD"),
        cursor_factory=RealDictCursor,
    )


# Pydantic models
class UserRegister(BaseModel):
    name: str
    email: EmailStr
    password: str
    role: str = "individual"
    scope_code: str | None = None


class UserLogin(BaseModel):
    email: EmailStr
    password: str


class UserResponse(BaseModel):
    id: int
    name: str
    email: str
    role: str
    created_at: datetime


# Utility functions
def hash_password(password: str) -> str:
    """Hash password using SHA-256 with salt"""
    salt = secrets.token_hex(16)
    password_hash = hashlib.sha256((password + salt).encode()).hexdigest()
    return f"{salt}:{password_hash}"


def verify_password(password: str, hashed_password: str) -> bool:
    """Verify password against hash"""
    try:
        salt, stored_hash = hashed_password.split(":")
        password_hash = hashlib.sha256((password + salt).encode()).hexdigest()
        return password_hash == stored_hash
    except:
        return False


def create_tables():
    """Create users table if it doesn't exist"""
    conn = get_db_connection()
    try:
        with conn.cursor() as cur:
            cur.execute(
                """
                CREATE TABLE IF NOT EXISTS users (
                    id SERIAL PRIMARY KEY,
                    name VARCHAR(255) NOT NULL,
                    email VARCHAR(255) UNIQUE NOT NULL,
                    password_hash VARCHAR(255) NOT NULL,
                    role VARCHAR(50) DEFAULT 'individual',
                    scope_code VARCHAR(50),
                    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
                )
            """
            )
            conn.commit()
    finally:
        conn.close()


# Initialize database
create_tables()


@app.get("/")
async def root():
    return {"message": "Vedra Auth API", "status": "running"}


@app.post("/api/register")
async def register_user(user_data: UserRegister):
    """Register a new user"""
    conn = get_db_connection()
    try:
        with conn.cursor() as cur:
            # Check if user already exists
            cur.execute("SELECT id FROM users WHERE email = %s", (user_data.email,))
            if cur.fetchone():
                raise HTTPException(
                    status_code=400, detail="User with this email already exists"
                )

            # Hash password
            password_hash = hash_password(user_data.password)

            # Insert user
            cur.execute(
                """
                INSERT INTO users (name, email, password_hash, role, scope_code)
                VALUES (%s, %s, %s, %s, %s)
                RETURNING id, name, email, role, created_at
            """,
                (
                    user_data.name,
                    user_data.email,
                    password_hash,
                    user_data.role,
                    user_data.scope_code,
                ),
            )

            user = cur.fetchone()
            conn.commit()

            return {"message": "User registered successfully", "user": dict(user)}
    except HTTPException:
        raise
    except Exception as e:
        conn.rollback()
        raise HTTPException(status_code=500, detail=f"Registration failed: {str(e)}")
    finally:
        conn.close()


@app.post("/api/login")
async def login_user(user_data: UserLogin):
    """Login user"""
    conn = get_db_connection()
    try:
        with conn.cursor() as cur:
            # Find user by email
            cur.execute(
                """
                SELECT id, name, email, password_hash, role, created_at
                FROM users WHERE email = %s
            """,
                (user_data.email,),
            )

            user = cur.fetchone()
            if not user:
                raise HTTPException(status_code=401, detail="Invalid email or password")

            # Verify password
            if not verify_password(user_data.password, user["password_hash"]):
                raise HTTPException(status_code=401, detail="Invalid email or password")

            return {
                "message": "Login successful",
                "user": {
                    "id": user["id"],
                    "name": user["name"],
                    "email": user["email"],
                    "role": user["role"],
                    "created_at": user["created_at"],
                },
            }
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Login failed: {str(e)}")
    finally:
        conn.close()


@app.get("/api/user")
async def get_current_user():
    """Get current user info (for session validation)"""
    # For now, return a demo user
    # In a real implementation, this would validate session tokens
    return {
        "id": 1,
        "name": "Demo User",
        "email": "demo@vedra.com",
        "role": "individual",
    }


@app.get("/health")
async def health_check():
    """Health check endpoint"""
    try:
        conn = get_db_connection()
        conn.close()
        return {"status": "healthy", "database": "connected"}
    except Exception as e:
        return {"status": "unhealthy", "error": str(e)}


if __name__ == "__main__":
    uvicorn.run("auth_api:app", host="0.0.0.0", port=8080, reload=True)
