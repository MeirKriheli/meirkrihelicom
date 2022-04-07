---
slug: django-bidi-utils-10-released
date: 2013-10-24T12:01:26
title: django-bidi-utils 1.0 released
tags: 
- Django
- BiDi
- Cookiecutter
- Python
- floss
summary: >
    django-bidi-utils is a small app I've written long time ago. It provides
    a Context Processor and a filter, helping with development of BiDi Django
    templates.

    As I've wanted a chance to play with Cookiecutter, it was a good
    chance to update things and release 1.0 along the way.
---
[django-bidi-utils](https://pypi.python.org/pypi/django-bidi-utils) is a small
app I've written long time ago. It provides a Context Processor and a filter,
helping with development of BiDi Django templates.

The previous version was 0.2.1 released at May 2009. Since then the app has
been quite stable and usable, without any changes.

The docs still needed some love though, and it wasn't tested for Python 3
compatibility. As I've wanted a chance to play with
[Cookiecutter](https://pypi.python.org/pypi/cookiecutter/0.6.4), it was a good
chance to update things and release 1.0 along the way.

I've used Cookiecutter with the
[cookiecutter-djangopackage](https://github.com/pydanny/cookiecutter-djangopackage)
template. Since it's geared toward newly created packages, the app and tests
needed some messaging to fit into the template.

The old README was cleaned and the docs rewritten with
[Sphinx](http://sphinx-doc.org/). As a result:

*   The app is now tested for Python 3.3, 2.7 and 2.6 Compatibility with
    [tox](http://tox.readthedocs.org/en/latest/).
    
*   [Continuous integration with Travis](https://travis-ci.org/MeirKriheli/django-bidi-utils).
    
*   The [new documentation](http://django-bidi-utils.readthedocs.org) is available at Read the Docs.
    
*   Got the badges:
    
    [![https://badge.fury.io/py/django-bidi-utils.png](https://badge.fury.io/py/django-bidi-utils.png)](http://badge.fury.io/py/django-bidi-utils) [![https://travis-ci.org/MeirKriheli/django-bidi-utils.png?branch=master](https://travis-ci.org/MeirKriheli/django-bidi-utils.png?branch=master)](https://travis-ci.org/MeirKriheli/django-bidi-utils) [![https://pypip.in/d/django-bidi-utils/badge.png](https://pypip.in/d/django-bidi-utils/badge.png)](https://crate.io/packages/django-bidi-utils?version=latest)

Might want to checkout
[Cookiecutter](https://pypi.python.org/pypi/cookiecutter/0.6.4) even if you're
not a Python user, there are templates for various projects (C with autotools,
jQuery plugin and more).
