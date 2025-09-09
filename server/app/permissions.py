from fastapi import HTTPException
from typing import Dict

# Centralized permissions derived from your hierarchy image
PERMISSIONS: Dict[str, Dict[str, bool]] = {
    "institution_overseer": {"monitor_all": True},
    "institution_admin_university": {
        "create_doi": True,
        "approve_doi": True,
        "monitor_all": True,
        "create_college": True,
    },
    "institution_admin_college": {
        "create_doi": True,
        "approve_doi": True,
        "monitor_all": True,
        "create_department": True,
    },
    "institution_admin_department": {
        "create_doi": True,
        "approve_doi": True,
        "monitor_all": True,
        "approve_student": True,
    },
    "institution_student": {"submit_request": True},
    "individual": {"create_doi": True, "monitor_self": True},
    "publisher": {"create_doi": True, "monitor_self": True},
    "founder": {"create_doi": True, "monitor_self": True, "lifetime_free": True},
}


def require_permission(user: dict, perm: str):
    role = (user.get("role") or "").strip()
    if not role:
        raise HTTPException(403, "Missing role")
    if not PERMISSIONS.get(role, {}).get(perm, False):
        raise HTTPException(403, f"Role '{role}' lacks '{perm}' permission")
