---
slug: debian-org-il-reloaded
date: 2017-05-09T17:41:05
title: debian.org.il reloaded
tags:
- floss
- Django
- Debian
- Design
summary: >
    debian.org.il was a part of my big technical debt, Python 2.6 and Django
    pre-1.0.
---
[debian.org.il](http://debian.org.il) was a part of my big technical
debt. A simple site built with Django pre-1.0 and Python 2.6,
introducing some bad practices (like including the project name in
imports).

After uprading [whatsup.org.il](https://whatsup.org.il), which hosts
[debian.org.il](http://debian.org.il) as well, the virtualenv broke
(among other things on the server). I've decided to go ahead and bring
the code up to par.

The new code is deployed, featuring:

*   Mobile first, responsive design, based on
    [Pure.css](https://purecss.io/)
*   Python 3
*   Django 1.11
*   Using class based generic views
*   Better code organization
*   Replaced the custom tagging solution with
    [django-taggit](https://django-taggit.readthedocs.io)
*   Environment based settings, using
    [django-environ](http://django-environ.readthedocs.io)

I was annoyed by the fact that the code was never published (one
`settings.py` file with passwords and so on). That changed as well, find
the code at GitHub:
[https://github.com/MeirKriheli/debian.org.il](https://github.com/MeirKriheli/debian.org.il)
