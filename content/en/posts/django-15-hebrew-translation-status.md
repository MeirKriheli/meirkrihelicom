---
title: "Django 1.5 Hebrew Translation status"
slug: django-15-hebrew-translation-status
date: 2012-10-25T11:42:59
tags:  
- floss
- Django
- Hebrew
- Translation
summary: >
    Django 1.5 Hebrew translation completed (including Django People and
    localflavor).
---

As [Django](https://www.djangoproject.com/) 1.5 enters alpha stage, the
translation templates on Transifex 
[got the update](https://groups.google.com/d/topic/django-i18n/4Ju-mLi6pEo/discussion).

I'm happy to report, for the first time, that the 
[Hebrew translation](https://www.transifex.com/projects/p/django/language/he/) is at
100% (hoping the strings won't change too much).

It Wasn't easy getting there. As an evil plot to reduce translation percents,
the site [Django People](https://people.djangoproject.com/) was 
[added to the project's hub](https://groups.google.com/d/topic/django-i18n/f2fZZnJF5Ic/discussion).

Hardest part was getting
[localflavor](https://docs.djangoproject.com/en/1.4/ref/contrib/localflavor/)
into shape. My first inclination was to leave it, as it's going to 
[break out from Django](https://groups.google.com/d/topic/django-developers/OiyEGmXTifs/discussion)
in the following versions. Since I wanted to reach 100%, and knowing that the
translation will follow it after the planned breakup I've decided to go for it.

It wasn't easy, as I've needed to translated countless conunties, cities and
regions from around the world and Hebrew wikipedia didn't specify many of the
names (as transcribed in the template). Needed a mix of several resources to
find good translations.

For now Hebrew is one of the 6 languages at 100% (click image for larger
version):

[![Django transifex](/img/posts/t_transifex_django.png)](/img/posts/transifex_django.png)

Have fun.
