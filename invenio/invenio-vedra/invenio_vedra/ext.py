from .config import vedra_settings


class VedraExt:
    """Register Vedra extension & config overrides."""

    def __init__(self, app=None):
        if app:
            self.init_app(app)

    def init_app(self, app):
        # Merge our settings
        app.config.update(vedra_settings(app))
        app.extensions["invenio-vedra"] = self
