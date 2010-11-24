from zope.interface import implements
from zope.component import getMultiAdapter

from Acquisition import aq_inner
from Products.Five import BrowserView

from nexiles.skin.browser.interfaces import INexilesView


class NexilesView(BrowserView):
    implements(INexilesView)

    # Utility methods

    def getColumnsClass(self, view=None, column='content'):
        """Determine whether a column should be shown. The left column is called
        plone.leftcolumn; the right column is called plone.rightcolumn.
        """
        context = aq_inner(self.context)

        if column=='content':
            plone_view = getMultiAdapter((context, self.request), name=u'plone')
            sl = plone_view.have_portlets('plone.leftcolumn', view=view);
            sr = plone_view.have_portlets('plone.rightcolumn', view=view);
            portal_state = getMultiAdapter((context, self.request), name=u'plone_portal_state')

            if sr:
                return "cell width-8 position-4"
            else:
                return "cell width-12 position-4"

        elif column=='left':
            return "cell width-4 position-0"

        elif column=='right':
            return "cell width-4 position-12"

        else:
            return "cell width-full position-0"

