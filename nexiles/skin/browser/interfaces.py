from zope import interface
from plone.theme.interfaces import IDefaultPloneLayer


class IThemeSpecific(IDefaultPloneLayer):
    """Marker interface that defines a Zope 3 browser layer.
       If you need to register a viewlet only for the
       "nexiles GmbH Plone skin" theme, this interface must be its layer
       (in skin/viewlets/configure.zcml).
    """

class INexilesView(interface.Interface):
    """ """

    def getColumnsClass(view, column):
        """ Returns the CSS class based on columns presence. """
