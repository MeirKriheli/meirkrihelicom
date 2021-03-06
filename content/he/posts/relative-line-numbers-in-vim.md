---
slug: relative-line-numbers-in-vim
date: 2014-06-22T03:04:13
title: מספרי שורה יחסיים ב־Vim
tags:
- floss
- Vim
summary: >
    שימוש במספרי שורה יחסיים ב־Vim יעזור לכם לנווט ולערוך קוד בצורה מהירה יותר.

---
כידוע לנו פקודות תנועה ועריכה ב־Vim לוקחות בחשבון את המספר אשר בא
לפניהן. לדוגמא, כדי לנוע 15 שורות למעלה אפשר להשתמש בפקודה `15k` וכדי
להזיח פנימה את 5 השורות הבאות משתמשים ב־ `5>>`.

מצד שני, ספירת או חישוב השורות אינה משימה מהנה במיוחד וגם לא מחוייבת
המציאות - מספור שורה יחסי, אשר הוצג ב־Vim 7.3, בא לעזרתנו. מפעילים אותה
בעזרת `:set relativenumber` (או `:set rnu`).

ניקח בחשבון את תצלום המסך הבא אשר כולל markdown עם רשימת אלמנטי html
וברצוני להזיח פנימה את כל האלמנטים הקשורים לטבלה (השורה הכוללת th). אני
נמצא כבר על אלמנט ה־table אז כמה שורות עלי להזיח ?

![/img/posts/vim-line-number.png](/img/posts/vim-line-number.png)

הבה נפעיל את מספור השורה היחסי:

![/img/posts/vim-relative-number.png](/img/posts/vim-relative-number.png)

כעת קל לראות שאלמנט ה־th נמצא תשע שורות למטה, לכן עלי להזיח 10 שורות
(כולל הנוכחית), כלומר `10>>`.

אם רציתי למחוק מהשורה הנוכחית למעלה, עד וכולל אלמנט ה־ blockquote ניתן
לראות בקלות שמדובר ב־7 שורות למעלה, לכן `d7k`.

כדי לחזור למספור שורה נורמלי יש להשתמש ב־ `:set norelativenumber` (או
`:set nornu` (וכדי להחליף בין המצבים `:set relativenumber!` או `:set
rnu!`).

למידע נוסף, כרגיל, `:h relativenumber`.
