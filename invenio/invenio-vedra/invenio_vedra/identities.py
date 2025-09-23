"""
Identity utilities: attach org scope and custom roles from headers/claims.

For local dev, we keep it simple: if incoming request carries HTTP headers
like X-Vedra-Role and X-Vedra-Scope, attach them. In production, you would
map OIDC claims to Identity 'provides'.
"""

from flask_principal import RoleNeed, UserNeed, Identity


def add_vedra_traits(identity: Identity, headers):
    role = headers.get("X-Vedra-Role", "").strip()
    scope = headers.get("X-Vedra-Scope", "").strip()  # e.g., "UNI:ENG:CS"
    sub = headers.get("X-Subject", "").strip()
    if sub:
        identity.provides.add(UserNeed(sub))
    if role:
        identity.provides.add(RoleNeed(role))
    if scope:
        # store as a simple attribute; real impl may use Needs
        identity.vedra_scope = scope
