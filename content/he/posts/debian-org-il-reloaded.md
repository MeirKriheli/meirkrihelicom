---
slug: debian-org-il-reloaded
date: 2017-05-09T17:41:05
title: debian.org.il המחודש
tags:
- floss
- Django
- Debian
- Design
summary: >
    debian.org.il היה חלק מה"חוב הטכני" שלי, כתוב בפייתון 2.6 ו-Django pre-1.0.
---
debian.org.il היה חלק מה"חוב הטכני" שלי. מדובר באתר די פשוט שנבנה עם
Django pre-1.0 ופייתון 2.6, והציג נהלים לקויים (כמו הכללת שם הפרוייקט
ב־import).

לאחר שדרוג [whatsup.org.il](https://whatsup.org.il), אשר מארח גם את
[debian.org.il](http://debian.org.il), הסביבה הוירטואלית נשברה (כמו גם
דברים אחרים בשרת). החלטתי לנצל את ההזדמנות ולעדכן את הפרוייקט למשהו סביר
יותר.

הקוד החדש באתר כולל:

*   עיצוב Mobile first וריספונסיבי, מבוסס על
    [Pure.css](https://purecss.io/)
*   פייתון 3
*   Django 1.11
*   משתמש ב־class based generic views
*   ארגון קוד משופר
*   החלפת יישום התגים המותאם ב־
    [django-taggit](https://django-taggit.readthedocs.io)
*   הגדרות מבוססות משתני סביבה, בעזרת
    [django-environ](http://django-environ.readthedocs.io)

הפריעה לי גם העובדה שהקוד מעולם לא פורסם (היה קובץ `settings.py` בודד,
עם הסיסמאות בתוכו וכד'). גם נקודה זו טופלה והקוד זמין כעת בגיטהאב:

[https://github.com/MeirKriheli/debian.org.il](https://github.com/MeirKriheli/debian.org.il)
