---
title: "היכרות עם Rusmux"
date: 2023-04-04T16:35:00+03:00
draft: false
slug: introducing-rusmux
tags: 
- rust
- rusmux
- tmux
- floss
summary: >
    `Tmuxinator` הוא כלי אשר שימש אותי זמן רב. `rusmux` הוא תחליף
    שכתבתי ב־Rust.
---
השתמשתי ב־[tmuxinator](https://github.com/tmuxinator/tmuxinator) במשך זמן רב 
עבור אוטומציה של [tmux](https://tmux.github.io/) בעבודה על פרוייקטים שונים.

הוא כתוב ב[רובי](https://www.ruby-lang.org/en/) ועדכוני חבילות של ההפצה ו־gems
מקומיים נהגו לשבור אותו מדי פעם, והצריכו מציאת פתרונות.

התקנתו בשרתים אשר אינם בשליטתי וחסרי רובי היוותה משימה נוספת.

כך נולד [rusmux](https://github.com/MeirKriheli/rusmux), אשר מספק:

* עבודה עם קבצי ‎`.yml` קיימים של פרוייקטי `tmuxinator`.
* בינארי בודד הניתן להעתקה בין שרתים.
* הזדמנות להעמיק את הידע ב־[Rust](https://www.rust-lang.org/), הכלים והתשתיות
  סביבה.

`rusmux` עדיין לא מספק 100% מהתכונות של `tmuxinator`, אך הוא הגיע לנקודה בה הוא יכול
לשמש תחליף עבורי.
