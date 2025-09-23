from invenio_rdm_records.services.permissions import RDMRecordPermissionPolicy
from invenio_records_permissions.generators import Generator
from invenio_access.permissions import any_user, authenticated_user, RoleNeed

# RoleNeeds for our Option-B roles
InstitutionOverseer = RoleNeed("institution_overseer")
AdminUniversity = RoleNeed("institution_admin_university")
AdminCollege = RoleNeed("institution_admin_college")
AdminDepartment = RoleNeed("institution_admin_department")
Student = RoleNeed("institution_student")
Individual = RoleNeed("individual")
Publisher = RoleNeed("publisher")
Founder = RoleNeed("founder")


class IsRecordOwner(Generator):
    """Allow owner (submitter) to update their draft."""

    def needs(self, identity=None, record=None):
        # Using record parent owners (Invenio stores owners there)
        if record is None:
            return []
        owners = getattr(record.parent, "owners", [])
        # owners is a set of UserNeed or dict; keep simple:
        return list(owners)


class OrgScopedAdmin(Generator):
    """Admins at university/college/department levels."""

    def needs(self, identity=None, record=None):
        return [AdminUniversity, AdminCollege, AdminDepartment]


class VedraRecordPermissionPolicy(RDMRecordPermissionPolicy):
    """Override key actions to match Vedra rules."""

    # Read stays liberal: inherit defaults
    # can_read = RDMRecordPermissionPolicy.can_read

    # Create a new draft/record:
    # - individuals/publishers/founders can create directly
    # - students can create drafts (submit requests) but not publish
    can_create = [
        authenticated_user
        & (Individual | Publisher | Founder | Student | OrgScopedAdmin())
    ]

    # Update draft:
    can_update_draft = [IsRecordOwner() | OrgScopedAdmin()]

    # Publish:
    # - institution admins (uni/college/dept) can publish
    # - founders/individuals/publishers can publish their own
    can_publish = [
        OrgScopedAdmin() | IsRecordOwner() | Individual | Publisher | Founder
    ]

    # Manage record (delete/metadata changes) restricted to admins/owners
    can_manage = [OrgScopedAdmin() | IsRecordOwner()]

    # Simple moderation flow: department admins can approve student submissions
    can_review = [AdminDepartment | AdminCollege | AdminUniversity]
