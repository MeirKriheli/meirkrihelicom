---
title: "פייתון, Json מהיר ומספרי 128 ביט"
date: 2022-11-22T18:02:28+02:00
slug: "python-fast-json-128-bit"
tags:
- Python
- JSON
- floss
summary: >
    ניסיון שימוש בספריות JSON מהירות עבור פייתון ומספרים גדולים.
---
בעבודה אנו מייצרים מבני JSON גדולים עבור הנתונים הנאספים במערכת. הדבר גובה מחיר
כבד מקוד הפייתון המשמש עבור REST. בנוסף JSON הוא התוכן המשמש את Celery, אשר
ישמח לכל שיפור אפשרי.

חיפשנו ספריות פייתון מהירות יותר אשר ממומשות ב־Rust ו־C++ ומצאנו את 
[orjson](https://github.com/ijl/orjson) - ספריה מהירה אשר יכולה לטפל במגוון רחב
של טיפוסי נתונים.

לאחר השינוי, ה־CI וה־regression החלו להכשל. מתברר שהמידע מכיל מספרים גדולים
(מעל 64 ביט) אשר [גורמים לכשלון](https://github.com/ijl/orjson/issues/116).


החלטתי להשוות בין orjson לספריות אחרות אשר מוזכרות 
ב־[README](https://github.com/ijl/orjson#performance) שלהם, והוספתי את
[msgpack](https://pypi.org/project/msgpack/) לקלחת.

{{< highlight bash >}}
at 17:34:56 ❯ pyenv virtualenv 3.10.3 jsontest

~ took 4s
at 17:36:00 ❯ pyenv activate jsontest

~ via  v3.10.3 (jsontest)
at 17:36:20 ❯ pip3 install orjson ujson python-rapidjson \
msgpack
{{< / highlight >}}

הבה נשחק עימם:

{{< highlight py >}}
>>> import orjson, ujson, rapidjson, msgpack, json
>>> data = {"q": 111111111111111111111}

>>> # -----------------------------------
>>> # |         built-in json           | 
>>> # -----------------------------------
>>> json.dumps(data)
'{"q": 111111111111111111111}'

>>> # -----------------------------------
>>> # |            orjson               | 
>>> # -----------------------------------
>>> orjson.dumps(data)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: Integer exceeds 64-bit range

>>> # -----------------------------------
>>> # |           rapidjson             | 
>>> # -----------------------------------
>>> rapidjson.dumps(data)
'{"q":111111111111111111111}'

>>> # -----------------------------------
>>> # |             ujson               | 
>>> # -----------------------------------
>>> ujson.dumps(data)
'{"q":111111111111111111111}'

>>> # -----------------------------------
>>> # |            msgpack              | 
>>> # -----------------------------------
>>> msgpack.dumps(data)
Traceback (most recent call last):
  File "msgpack/_packer.pyx", line 177, 
  in msgpack._cmsgpack.Packer._pack
OverflowError: Python int too large to convert to
C unsigned long
{{< / highlight >}}

לסיכום:

* `orjson` ו־`msgpack` נכשלו.
* `ujson` ו־`rapidjson` הצליחו, אך הם נכשלים בטיפול בתאריכים.

נצטרך להישאר עם ה־`json` המובנה - מספרים גדולים ותאריכים עוברים באופן קבוע
בין רכיבי המערכת השונים. `orjson` כנראה יהיה בשימוש במקומות ספציפיים, בהם
נוכל להבטיח שאין מספרים גדולים. אך לא נקבל את השיפור המייוחל בחילול התשובות
הגדולות.
