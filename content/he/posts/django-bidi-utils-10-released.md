---
slug: django-bidi-utils-10-released
date: 2013-10-24T12:01:26
title: שוחרר django-bidi-utils 1.0
tags: 
- Django
- BiDi
- Cookiecutter
- Python
- floss
summary: >
    django-bidi-utils הוא יישום קטן אשר כתבתי לפני זמן רב ומספק Context Processor
    ו-filter אשר עוזרים בכתיבת תבניות Django דו־כיווניות. מאחר וחיפשתי תירוץ
    לשחק עם Cookiecutter, זו הייתה הזדמנות טובה לעדכון ושחרור גרסה 1.0.
---
[django-bidi-utils](https://pypi.python.org/pypi/django-bidi-utils) הוא יישום
קטן אשר כתבתי לפני זמן רב ומספק Context Processor ו-filter אשר עוזרים בכתיבת
תבניות Django דו־כיווניות.

הגרסה הקודמת עמדה על 0.2.1 ושוחררה במאי 2009. מאז היישם היה יציב ושמיש, ללא שום
שינויים.

עם זאת, התיעוד נזקק לשיפור והיישום לא נבדק כלל לתאימות עם פייתון 3. מאחר
וחיפשתי תירוץ לשחק עם
[Cookiecutter](https://pypi.python.org/pypi/cookiecutter/0.6.4), זו הייתה
הזדמנות טובה לעדכון ושחרור גרסה 1.0.

השתמשתי ב-Cookiecutter יחד עם תבנית
[cookiecutter-djangopackage](https://github.com/pydanny/cookiecutter-djangopackage).
מאחר והמנגנון מותאם לפרוייקטים חדשים נדרשו מספר שינויים במבנה התיקיות ומבנה
הבדיקות להתאמה לתבנית.

ה-README הישן נוקה והתיעוד נכתב מחדש בעזרת [Sphinx](http://sphinx-doc.org/).
כתוצאה:

*   היישום נבדק בעזרת [tox](http://tox.readthedocs.org/en/latest/) לתאימות עבור פייתון 2.6, 2.7 ו־3.3.
    
*   [Continuous integration עם Travis](https://travis-ci.org/MeirKriheli/django-bidi-utils).
    
*   [התיעוד החדש](http://django-bidi-utils.readthedocs.org) זמין ב־Read the Docs.
    
*   יש סמלים חדשים:
    
    [![https://badge.fury.io/py/django-bidi-utils.png](https://badge.fury.io/py/django-bidi-utils.png)](http://badge.fury.io/py/django-bidi-utils) [![https://travis-ci.org/MeirKriheli/django-bidi-utils.png?branch=master](https://travis-ci.org/MeirKriheli/django-bidi-utils.png?branch=master)](https://travis-ci.org/MeirKriheli/django-bidi-utils) [![https://pypip.in/d/django-bidi-utils/badge.png](https://pypip.in/d/django-bidi-utils/badge.png)](https://crate.io/packages/django-bidi-utils?version=latest)

Cookiecutter עשוי לעניין אתכם גם אם אינכם מפתחי פייתון, קיימות תבניות
לפרוייקטים מסוגים שונים (פרוייקט C פשוט עם autotools, תוסף jQuery וכו').
