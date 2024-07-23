---
title: "python-bidi 0.5 released"
date: 2024-07-23T13:14:30+03:00
slug: "python-bidi-0-5-released"
tags:
- Python
- BiDi
- floss
- Rust
- PyO3
summary: >
  After several years, released python-bidi 0.5, this time based
  on the Rust crate unicode-bidi.
---
When I've set out to write
[python-bidi](https://github.com/MeirKriheli/python-bidi),
I had 3 goals in mind:

- Learn the [Unicode BiDi layout](https://www.unicode.org/reports/tr9/) algorithm.
- Simplfy package installation:
  [pyfribidi](https://pypi.org/project/pyfribidi/) required installing
  fribidi, which does not lend itself nicely into virtualenvs
  on different platforms.
- License, as pyfribidi was GPL 2.0.

While those goals were achieved, implementing version 5 of
the algorithm was not perfect - there were some bugs with special chars.
I've lost interest and moved on.

Redoing it with Rust as a learning experience seemed like a good idea.
However I've found the great
[unicode-bidi](https://crates.io/crates/unicode-bidi)
crate from the Servo project, which parts of it were incorporated into Firefox.

That crate, wheels, [PyO3](https://pyo3.rs/) and GitHub actions seemed like
the perfect comobo for the future path of python-bidi.

After much procrastination,
[python-bidi 0.5](https://pypi.org/project/python-bidi/0.5.0/)
was released. Note the following breaking changes:

- Dropped Python < 3.9 support.
- Removed `upper_is_rtl` params.
- Import of `get_display` changed: `from bidi import get_display`.

I'm off to close all those bugs.
