---
title: "שוחררה python-bidi 0.5"
date: 2024-07-23T13:14:30+03:00
slug: "python-bidi-0-5-released"
tags:
  - Python
  - BiDi
  - floss
  - Rust
  - PyO3
summary: >
  לאחר מספר שנים, שחררתי את python-bidi 0.5, אשר מבוססת הפעם
  על Rust crate בשם unicode-bidi.
---

התחלתי לכתוב בזמנו את
[python-bidi](https://github.com/MeirKriheli/python-bidi)
עם 3 מטרות:

- לימוד אלגוריתם [Unicode BiDi layout](https://www.unicode.org/reports/tr9/).
- התקנה פשוטה יותר:
  [pyfribidi](https://pypi.org/project/pyfribidi/) דרש התקנה של
  fribidi, מה שלא תמיד היה נוח ופשוט ב־virtualenvs על פלטפורמות שונות.
- רישוי, pyfribidi היה תחת GPL 2.0.

המטרות הושגו, אך היישום של האלגוריתם היה בגרסה 5 (אשר התיישנה מאז),
ורחוקה משלמות עקב באגים עם תווים שונים ומשונים. איבדתי עניין והמשכתי הלאה.

כאשר התחלתי ללמוד Rust בזמנו, ליישם את האלגוריתם נראה רעיון לימודי נחמד, אך
גילתי כי קיים כבר crate בשם
[unicode-bidi](https://crates.io/crates/unicode-bidi)
מאת פרוייקט Servo, אשר חלקים ממנו שולבו בפיירפוקס.

ה־crate‏, wheels‏, [PyO3](https://pyo3.rs/) ו־GitHub actions נראו כמו
השילוב המושלם לעתיד python-bidi.

לאחר סחבת מרובה, שוחררה
[python-bidi 0.5](https://pypi.org/project/python-bidi/0.5.0/).
נא לשים לב לשינויים הבאים, אשר אינם תואמים אחורה:

- הוסרה התמיכה בפייתון מתחת ל־3.9.
- הוסר הפרמטר `upper_is_rtl`.
- ה־import של `get_display` שונה: `from bidi import get_display`.

כעת לסגור את כל הבאגים.
