from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
from sqlalchemy import String, Integer, DateTime, JSON, func, Boolean
from datetime import datetime


class Base(DeclarativeBase):
    pass


class User(Base):
    __tablename__ = "users"
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    email: Mapped[str] = mapped_column(String(255), unique=True, index=True)
    name: Mapped[str] = mapped_column(String(255))
    password_hash: Mapped[str] = mapped_column(String(255))
    role: Mapped[str] = mapped_column(String(64), default="individual")
    scope_code: Mapped[str | None] = mapped_column(String(64), default=None)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True)
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now()
    )
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now(), onupdate=func.now()
    )


class Paper(Base):
    __tablename__ = "papers"
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    title: Mapped[str | None] = mapped_column(String(512), default=None)
    authors_json: Mapped[dict | None] = mapped_column(JSON, default=None)
    checksum: Mapped[str | None] = mapped_column(String(128), default=None)
    size_bytes: Mapped[int | None] = mapped_column(Integer, default=None)
    bucket_key: Mapped[str] = mapped_column(String(1024))
    status: Mapped[str] = mapped_column(
        String(32), default="DRAFT"
    )  # DRAFT/READY/PUBLISHED
    owner_id: Mapped[int | None] = mapped_column(
        Integer, default=None
    )  # Foreign key to users
    scope_code: Mapped[str | None] = mapped_column(
        String(64), default=None
    )  # UNI/COL/DEPT codes
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now()
    )
