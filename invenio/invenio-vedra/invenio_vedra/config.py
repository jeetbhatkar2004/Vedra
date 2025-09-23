from .permissions import VedraRecordPermissionPolicy


def vedra_settings(app):
    """Return settings we want to apply when the extension loads."""
    return {
        # Use our permission policy for RDM records
        "RDM_RECORDS_PERMISSION_POLICY": VedraRecordPermissionPolicy,
        # Optionally expose custom fields to stamp org codes, etc. (kept minimal)
        # "RDM_RECORDS_UI_EDIT_URL": "/uploads/<pid_value>/edit",
    }
