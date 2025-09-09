from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel
from sqlalchemy.orm import Session
import uuid
from ..deps import get_db
from ..models import User
from .auth_routes import get_current_user

router = APIRouter(prefix="/papers", tags=["papers"])


class CreateUploadIn(BaseModel):
    filename: str
    content_type: str


@router.post("/uploads")
def create_upload(body: CreateUploadIn, current_user: User = Depends(get_current_user)):
    # Mock upload endpoint for testing auth without AWS/S3
    # Any authenticated user can upload in Week-1.
    # Later you can gate by role (e.g., students submit requests only).
    if not body.filename or "/" in body.filename:
        raise HTTPException(400, "Invalid filename")

    object_key = f"papers/{uuid.uuid4()}--{body.filename}"

    # Return mock response without actual S3 upload URL
    return {
        "uploadUrl": f"https://mock-s3.example.com/{object_key}",
        "objectKey": object_key,
        "uploaderId": current_user.id,
        "uploaderName": current_user.name,
        "role": current_user.role,
        "scopeCode": current_user.scope_code,
        "message": "Mock upload endpoint - S3 functionality disabled for testing",
    }
