---
title: "Python, Fast Json & 128 Bit Numbers"
date: 2022-11-22T18:02:28+02:00
slug: "python-fast-json-128-bit"
tags:
- Python
- JSON
- floss
summary: >
    Trying to serialize large numbers with fast Python JSON libraries.
---
At work we need to JSON serialize large amounts of monitoring data, which
takes it's toll on the Python app. In addition, JSON is the accepted content
for Celery, which could use a boost.

This we've embarked on a search for a faster JSON library, Rust or C++ based. 
Eventually settled on [orjson](https://github.com/ijl/orjson) - fast and can
handle more data types than others tested.

Following the change, CI and regression tests started to fail. Turns out we
use large numbers (>64 bits) in our monitoring data, which triggers a
[serialization failure](https://github.com/ijl/orjson/issues/116).


I've decided to compare orjson with the other libraries mentioned in their
[README](https://github.com/ijl/orjson#performance), and added 
[msgpack](https://pypi.org/project/msgpack/) to the mix:

{{< highlight bash >}}
at 17:34:56 ❯ pyenv virtualenv 3.10.3 jsontest

~ took 4s
at 17:36:00 ❯ pyenv activate jsontest

~ via  v3.10.3 (jsontest)
at 17:36:20 ❯ pip3 install orjson ujson python-rapidjson \
msgpack
{{< / highlight >}}

Let's play with them:

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

Summary:

* `orjson` and `msgpack` failed.
* `ujson` and `rapidjson` succeeded, however they fail at serializing dates.

We'll have to stay with built-in `json` as dates and large numbers are
passed around. `orjson` will probably be utilized at selected
endpoints, where we can ensure large numbers are not in use. Sadly it won't 
improve the heavy monitoring endpoints.

