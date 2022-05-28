---
title: "האתר הוסב ל־Hugo"
slug: "website-converted-to-hugo"
date: 2022-05-27T12:02:32+03:00
tags:
- Hugo
- Django
- BiDi
- floss
draft: true
summary: >
    עד לאחרונה האתר היה מבוסס על 
    [מחולל תוכן סטטי שכתבתי](https://github.com/MeirKriheli/statirator/),
    כעת הוא שוכתב ומחולל בעזרת [Hugo](https://gohugo.io/).
---

עד לאחרונה האתר חולל בעזרת
[מחולל תוכן סטטי שכתבתי](https://github.com/MeirKriheli/statirator/) המבוסס
Django ומשתמש ב־[reStructuredText](https://docutils.sourceforge.io/rst.html) עבור תחביר התוכן.
עם הזמן הדבר הפך לעול, ולא הייתה לי האנרגיה להמשיך לתחזק אותו.

כעת הוא שוכתב ומחולל בעזרת [Hugo](https://gohugo.io/) - הפוסטים הקיימים שוכתבו
ב־[Markdown](https://gohugo.io/content-management/formats/#learn-markdown), תוך
תשומת לב לשמירה על הקישורים הישנים והתגובות.

המעבר כלל [הוספת תמיכה בדו־כיווניות לערכת הנושא Ananke](https://github.com/theNewDynamic/gohugo-theme-ananke/pull/532/commits)
ו[תרגום לעברית](https://github.com/theNewDynamic/gohugo-theme-ananke/pull/544).
