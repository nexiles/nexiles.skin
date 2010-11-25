from zope.interface import implements
from zope.component import getMultiAdapter

from Acquisition import aq_inner
from Products.Five import BrowserView

from nexiles.skin.browser.interfaces import INexilesView

import logging

COLUMN_LEFT_WIDTH = 3
COLUMN_RIGHT_WIDTH = 3
WITH_TOTAL = 16

logger = logging.getLogger("nexilesview")


class NexilesView(BrowserView):
    implements(INexilesView)

    # Utility methods

    def getColumnsClass(self, view=None, column='content'):
        """Determine whether a column should be shown. The left column is called
        plone.leftcolumn; the right column is called plone.rightcolumn.
        """
        context = aq_inner(self.context)

        logger.info("getColumnsClass: column=%s" % column)

        if column=='content':
            plone_view = getMultiAdapter((context, self.request), name=u'plone')
            sl = plone_view.have_portlets('plone.leftcolumn', view=view);
            sr = plone_view.have_portlets('plone.rightcolumn', view=view);
            portal_state = getMultiAdapter((context, self.request), name=u'plone_portal_state')

            logger.info("sl, sr = %s, %s" % (sl, sr))

            if sr:
                logger.info( "cell width-%d position-%d" % (WITH_TOTAL - COLUMN_RIGHT_WIDTH - COLUMN_LEFT_WIDTH, COLUMN_LEFT_WIDTH))
                return "cell width-%d position-%d" % (WITH_TOTAL - COLUMN_RIGHT_WIDTH - COLUMN_LEFT_WIDTH, COLUMN_LEFT_WIDTH)
            else:
                logger.info( "cell width-%d position-%d" % (WITH_TOTAL - COLUMN_LEFT_WIDTH, COLUMN_LEFT_WIDTH))
                return "cell width-%d position-%d" % (WITH_TOTAL - COLUMN_LEFT_WIDTH, COLUMN_LEFT_WIDTH)

        elif column=='left':
            logger.info( "cell width-%d position-0" % COLUMN_LEFT_WIDTH)
            return "cell width-%d position-0" % COLUMN_LEFT_WIDTH

        elif column=='right':
            logger.info( "cell width-%d position-%d" % (COLUMN_RIGHT_WIDTH, WITH_TOTAL - COLUMN_RIGHT_WIDTH))
            return "cell width-%d position-%d" % (COLUMN_RIGHT_WIDTH, WITH_TOTAL - COLUMN_RIGHT_WIDTH)

        else:
            logger.info( "cell width-full position-0")
            return "cell width-full position-0"

