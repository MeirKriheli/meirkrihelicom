---
slug: django-16-hebrew-translation-status
date: 2013-11-08T18:14:12
title: Django 1.6 Hebrew translation status
tags:
- floss
- Django
- Hebrew
- Translation
summary: >
    When got notified about Django 1.6's string freeze, I was shocked to find
    out that the overall Hebrew status was at 7%! Further investigation revealed
    the situation was not grave.
---
When got notified about
[Django 1.6's string freeze](https://groups.google.com/d/msg/django-i18n/EeuVNtobeqQ/b92CHUAkpIQJ),
I was shocked to find out that the overall Hebrew status was at 7%!
Further investigation revealed that Django's docs were added recently to
Transifex, dragging translation percentage way down.

After recovering from the initial shock, the translation process
commenced. When the smoke cleared, on deadline (Tue, Nov 5th), Hebrew is
back to 100% for:

*   django-core
*   django-localflavor (separated now from django-core)
*   django-people ([the website](https://people.djangoproject.com/))

So Hebrew's status should be as good as 
[previous Django releases](/en/2012/10/django-15-hebrew-translation-status/).

I've started some work on the documentation translation as well, however
it is quite a task. I'm not sure when or how it's gonna be used, so
it'll wait for now.

People always mention how good and comprehensive Django's documentation
is - trying to translate it validates that saying. Kudos to the team.
