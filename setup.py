from setuptools import setup, find_packages
import os

version = '0.1'

setup(name='nexiles.skin',
      version=version,
      description="nexiles GmbH Plone skin",
      long_description=open("README.txt").read() + "\n" +
                       open(os.path.join("docs", "HISTORY.txt")).read(),
      # Get more strings from
      # http://pypi.python.org/pypi?%3Aaction=list_classifiers
      classifiers=[
        "Framework :: Plone",
        "Programming Language :: Python",
        ],
      keywords='web zope plone theme',
      author='Stefan Eletzhofer',
      author_email='se@nexiles.de',
      url='git@github.com:nexiles/nexiles.skin.git',
      license='GPL',
      packages=find_packages(exclude=['ez_setup']),
      namespace_packages=['nexiles'],
      include_package_data=True,
      zip_safe=False,
      install_requires=[
          'setuptools',
          'z3c.jbot',
          # -*- Extra requirements: -*-
      ],
      entry_points="""
      # -*- Entry points: -*-

      [z3c.autoinclude.plugin]
      target = plone
      """,
      setup_requires=["PasteScript"],
      paster_plugins=["ZopeSkel"],
      )
