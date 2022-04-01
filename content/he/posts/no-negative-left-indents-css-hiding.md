---
title: "הפסיקו להשתמש בערכים שליליים עבור left ו־text-indent להסתרה ב־css"
date: 2012-10-14T01:32:31
slug: stop-negative-left-indent-css-hiding
tags:
- floss
- BiDi
- css
summary: >
    שימוש ב-left או text-indent שליליים להסתרת אלמנטים ב-css היא בעייתית כאשר
    הכיווניות היא מימין לשמאל, ישנה אפשרות אחרת.
---

שימוש בערכים שליליים להסתרה הוא מנהג ידוע . כדי להסתיר אלמנט, תוך שמירה על
ה-layout שלו יש שמשתמשים במשהו כמו:

{{< highlight css >}}
.popup {
    position: absolute;
    top: -1000px;
    left: -1000px;
}
{{< / highlight >}}

שיטה נפוצה נוספת היא שימוש ב-`text-indent` שלילי להסתרת טקסט תוך הצגת תמונה (מה
שגם עלול [לפגוע בדירוג שלכם](http://luigimontanez.com/2010/stop-using-text-indent-css-trick/)).
לדוגמא:

{{< highlight css >}}
.logo {
    text-indent: -9999px;
    background-image: url("bla bla");
    overflow: hidden;
    width: 200px;
    height:60px;
}
{{< / highlight >}}

והבעיה ? הנ"ל גורם להופעת פס גלילה אופקי מכוער וארוך כאשר כיווניות המסמך היא
מימין לשמאל.

כדי להוסיף חטא על פשע, יש שירותים (כגון ShareThis שמשמש כאן בבלוג) אשר קובעים
ערכים אלו בסקריפט, מה שמקשה מאוד על עקיפתם בעזרת css. אני מסתיר את פס הגלילה
בעזרת css, אך הרוחב עדיין קיים, כפי שתגלה גלילה אופקית באתר העברי.

קיימים פתרונות אחרים. עבור `‎.popup` ניתן להשתמש ב־`top` שלילי מבלי לציין
את ה־`left`, התוצאה תהיה זהה.

עבור `‎.logo` אני מעדיף משהו בסגנון:

{{< highlight css >}}
.logo {
    background-image: url("bla bla");
    line-height:800%;
    overflow: hidden;
    width: 200px;
    height:60px;
}{{< / highlight >}}

זה ימקם את הטקסט מתחת לגובה האלמנט. מאחר ו־`overflow` הוא `hidden` הטקסט יוסתר
ולא יופיע פס הגלילה.
