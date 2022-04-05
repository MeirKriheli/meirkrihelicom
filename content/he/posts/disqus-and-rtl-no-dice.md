---
slug: disqus-and-rtl-no-dice
date: 2013-07-23T12:46:46
title: "Disqus ותמיכה בדו־כיווניות: לא בבית ספרנו"
tags:
- BiDi
- Hebrew
- Translation
- Disqus
- FLOSS|floss 
summary: >
    Disqus הישן הוסיף את התוכן לעמוד, מה שאפשר התאמה של מערכת התגובות, תכונה
    שניצלתי להתאמת התצוגה בכיווניות ימין־שמאל. ה־Disqus החדש ביטל את היכולת הזו.
---
Disqus הישן הוסיף את תוכן מערכת התגובות ל-DOM של העמוד, מה שאפשר שינויים
והתאמות בעזרת CSS.

> **עדכון**: [Disqus תומכת כעת בדו-כיווניות](/2013/09/disqus-got-rtl/)

מאחר ואתר זה הוא דו־לשוני, עברית ואנגלית, השתמשתי ב־CSS להתאמת מערכת
התגובות כאשר הכיווניות היא ימין־שמאל. הנה קוד ה־lesscss אשר שימש אותי
לכך:

{{< highlight sass >}} 
html[dir=rtl] {
  #dsq-content ul, #dsq-content li, #dsq-content ol, #dsq-content cite,
  #dsq-content div, #dsq-content table, #dsq-content td, #dsq-content th,
  #dsq-content p, #dsq-content a, #dsq-content img, #dsq-content caption {
    text-align: right; }
  #dsq-content {
    .dsq-options span { margin-right: 0; margin-left: 10px; }
    .dsq-request-user-logout { float: left; }
    .dsq-request-user-name { padding: 0.25em 0.5em 0 0; vertical-align: top; direction:ltr }
    .dsq-post-footer .dsq-button { float: left; margin-right: 3px; margin-left:0;}
    .dsq-attach-media { float: right;}
    @dsq-margin: 30px;
    .dsq-comment { margin-left:0;}
    .dsq-depth-1 { margin-left:0 !important; margin-right: @dsq-margin;  }
    .dsq-depth-2 { margin-left:0 !important; margin-right: @dsq-margin * 2;  }
    .dsq-depth-3 { margin-left:0 !important; margin-right: @dsq-margin * 3;  }
    .dsq-depth-4 { margin-left:0 !important; margin-right: @dsq-margin * 4;  }

    .dsq-comment-hide-thread, .dsq-comment-show-thread {
      left:0; right: auto; text-indent: 0;
    }
  }
}
{{< /highlight >}}

יכולת התאמה זו חלפה עם הצגת ה־Disqus החדש ־ `iframe` משמש כעת להטמעת
התגובות, מה שמונע את השימוש בטכניקה הנ"ל. יצירת קשר עם התמיכה של Disqus
הניבה את התשובה:

"_אין לוח זמנים מוגדר לזמינות תכונה זו_"

הצעתי להם את עזרתי בנושא, מאחר ואני בעל ניסיון בתחום ותרמתי לפרוייקטים
נוספים בעבר בנושאי דו־כיווניות, והתשובה? הם מודעים לנושא, יבדקו את
אפשרות הוספת התמיכה בדו־כיווניות ויהיו איתי בקשר אם תתעורר האפשרות
לשיתוף פעולה.

אני חבר בצוות התרגום לעברית של Disqus ב־Transifex, אך איני מוצא טעם
בעזרה בתרגום כל עוד המערכת לא עובדת כראוי בכיווניות ימין־שמאל.
