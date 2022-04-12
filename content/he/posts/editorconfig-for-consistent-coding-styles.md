---
slug: editorconfig-for-consistent-coding-styles
date: 2014-08-08T10:58:26
title: EditorConfig לסגנון קוד אחיד
tags: 
- floss
- EditorConfig
- IDE
- Vim
- Emacs
- Gedit
- JetBrains
- coding-style
summary: >
    שמירה על סגנון תכנות אחיד (רווחים מול טאבים, גודל טאב וכד') בין כל המפתחים
    העובדים על פרוייקט מסויים אינו משימה פשוטה, במיוחד כאשר לוקחים בחשבון את
    ריבוי עורכי הטקסט וסביבות הפיתוח המשמשים אותנו.
---
שמירה על סגנון תכנות אחיד (רווחים מול טאבים, גודל טאב וכד') בין כל המפתחים
העובדים על פרוייקט מסויים אינו משימה פשוטה, במיוחד כאשר לוקחים בחשבון את ריבוי
עורכי הטקסט וסביבות הפיתוח המשמשים אותנו.

גם אם לוקחים בחשבון תכונות כמו 
[Vim modelines](http://vimdoc.sourceforge.net/htmldoc/usr_21.html#21.6) או
[Emacs Local Variables](http://www.gnu.org/software/emacs/manual/html_node/emacs/File-Variables.html#File-Variables)
(כאשר כלים אחרים מגדירים תחביר משלהם), זה בד"כ מוגדר ברמת קובץ בודד ולא
בפרוייקט כולו ולוקה בתמיכה מצד מגוון כלי־הפיתוח האחרים. בנוסף 
[אבטחה מהווה בעיה](http://usevim.com/2012/03/28/modelines/) בשימוש ב־modelines 
ו־[Local Variables](http://www.gnu.org/software/emacs/manual/html_node/emacs/Safe-File-Variables.html#Safe-File-Variables).

[EditorConfig](http://editorconfig.org/) מספק פתרון אפשרי לבעיה. הוא מחפש קובץ
INI בשם ‎.editorconfig במעלה התיקיות (ממוקם בד"כ בשורש הפרוייקט).

יש ספריית ליבה (מויישמת ב־C, פייתון, ג''אווהסריפט וג'אווה) המשמשת לפתח תוספים
עבור מגוון עורכים וסביבות פיתוח. בהינתן נתיב מוחלט לקובץ בפרוייקט יתבצע איתור
קובץ ה-‎.editorconfig והמדורים הרלוונטים בו עבורו כאשר התוצאה היא פלט
המכיל את ההגדרות המתאימות עבור הקובץ.

ניקח לדוגמא את קובץ ה־‎.editorconfig הבא:

{{< highlight ini >}}
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false
{{< / highlight >}}

הרצת הפקודה `editorconfig` עבור קובץ מסויים בפרוייקט תפיק:

{{< highlight shell >}}

    $ editorconfig ./src/app/app.js
    indent_style=space
    indent_size=2
    end_of_line=lf
    charset=utf-8
    trim_trailing_whitespace=true
    insert_final_newline=true
    tab_width=2
{{< /highlight >}}

EditorConfig תומך בתבניות להתאמת שמות קבצים ומאפשר הגדרת המאפיינים הבאים:

*   indent\_style
*   indent\_size
*   tab\_width
*   end\_of\_line
*   charset
*   trim\_trailing\_whitespace
*   insert\_final\_newline

תוספים, אשר משתמשים באחת מספריות הליבה, קיימים עבור העורכים וסביבות הפיתוח הבאים:

*   Atom
*   Code::Blocks
*   Emacs
*   Geany
*   Gedit
*   JetBrain
*   jEdit
*   Notepad++
*   Sublime Text
*   TextMate
*   Vim
*   Visual Studio

נחמד לראות מחוללי פרוייקטים כוללים את הקובץ הזה בתבניות שלהם, לדוגמא: [slush-angular](https://github.com/slushjs/slush-angular/blob/master/templates/_editorconfig) ו־yeoman [generator-angular](https://github.com/yeoman/generator-angular/blob/master/.editorconfig).

נ"ב הסכמה על סגנון תכנות המקובל על כולם זו מלחמת קודש נפרדת

ננ"ב לא נשכח את ה-XKCD המתבקש:

![http://imgs.xkcd.com/comics/standards.png](http://imgs.xkcd.com/comics/standards.png)
