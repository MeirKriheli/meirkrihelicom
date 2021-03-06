---
slug: fedora-get-your-upgrade-act-together
date: 2012-11-11T01:48:13
title: "פדורה - קחו את השדרוג בידיים"
tags:  
- floss
- Fedora
- yum
summary: >
    השדרוגים של פדורה מסתיימים אצלי בד"כ במפח נפש, הגיע הזמן שהם יתנו לזה עדיפות
    אם הם חפצים בבודקי גרסאות הפיתוח.
---

אני די מחבב את [פדורה](http://fedoraproject.org/), היא קרובה לגרסה מתגלגלת תוך
שמירה על יציבות יחסית.

נקודת התורפה העיקרית שלה לדעתי היא מדיניות השדרוג, המחסור בה ליתר דיוק - נראה
כאילו לא הוקדשה מחשבה יתרה לנושא.

preupgrade כבר שבר לי דברים בשדרוג גרסאות קודמות. כעת, מתוך רצון לנסות את גרסת
18 אלפא, מתברר כי preupgrade בדרכו החוצה ואינו עובד. אמור להיות מוחלף ע"י כלי
אחר (fedup) אשר סביר להניח שגם הוא יהיה בעייתי, לפחות בהתחלה.

ה-iso של גרסה 18 אלפא
[אינו כולל יכולת שדרוג](http://fedoraproject.org/wiki/Common_F18_bugs#No_upgrade_function_available_from_Fedora_17_to_Fedora_18_Alpha)
וכעת הדרך המומלצת לשדרוג היא
[בעזרת yum](http://fedoraproject.org/wiki/Upgrading_Fedora_using_yum#Fedora_17_-.3E_Fedora_18).
הבעיה ? תלויות שבורות אשר מונעות את השדרוג (לפחות במשך מספר הימים שניסיתי). לא
של חבילה השייכת למאגר צד ג\` אלא בסיסית הקשורה לתלויות סביבות העבודה של גנום -
רכיב הבלוטות\` של Network Manager או אחת התלויות שלו.

אתם רוצים בודקים לגרסאות המוקדמות ? תנו לאמצעי השדרוג עדיפות. אני מאמץ מוקדם של
גרסאות חדשות, אך אין בכוונתי לשחזר מחדש את ההתקנה המורכבת שלי בכל פעם ששדרוג
עומד בפתח.

אין פלא שאני עוזב את פדורה בד"כ בתקופות השדרוג.
