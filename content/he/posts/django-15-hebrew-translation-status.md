---
title: "מצב התרגום לעברית של Django 1.5"
slug: django-15-hebrew-translation-status
date: 2012-10-25T11:42:59
tags:  
- floss
- Django
- Hebrew
- Translation
summary: "תרגום Django 1.5 לעברית הושלם (כולל Django People ו־localflavor)."
---

עם כניסת [Django](https://www.djangoproject.com/) לשלב האלפא של 1.5, 
[עודכנו תבניות התרגום](https://groups.google.com/d/topic/django-i18n/4Ju-mLi6pEo/discussion)
ב-Transifex.

אני שמח לדווח כי, בפעם הראשונה, 
[התרגום לעברית](https://www.transifex.com/projects/p/django/language/he/) עומד על 100%
(ומלא תקווה לחוסר שינוי גדול במחרוזות בגרסה הסופית).

זו לא הייתה משימה קלה. בתור מזימה מרושעת להקטנת אחוזי התרגום, האתר 
[Django People](https://people.djangoproject.com/) 
[הוכנס תחת מטריית הפרוייקט](https://groups.google.com/d/topic/django-i18n/f2fZZnJF5Ic/discussion).

אך החלק הקשה באמת היה תרגום מלא של
[localflavor](https://docs.djangoproject.com/en/1.4/ref/contrib/localflavor/).
הנטיה הראשונית שלי הייתה להשאירו כמות שהוא מאחר והוא 
[עתיד להפרד מ-Django](https://groups.google.com/d/topic/django-developers/OiyEGmXTifs/discussion)
בגרסאות הבאות. מאחר ורציתי להגיע ל-100%, ומהידיעה כי התרגום ימשיך עימו לאחר
הפרידה, הפשלתי שרוולים וניגשתי למלאכה.

לצערי זה לא היה פשוט, מאחר ונדרשתי לתרגם שמות מחוזות, ערים ואזורים מסביב לעולם
והוויקיפדיה העברית לא הכילה חלק גדול משתמות (לפחות לא בתעתיק אשר הופיע בתבנית
התרגום). שילוב של מספר מקורות שונים עזר במציאת תרגומים סבירים.

נכון לכתיבת ידיעה זו, עברית היא אחת מ-6 השפות אשר עומדות על 100% (לחצו על
התמונה לגרסה גדולה יותר):

[![Django transifex](/img/posts/t_transifex_django.png)](/img/posts/transifex_django.png)

תהנו.
