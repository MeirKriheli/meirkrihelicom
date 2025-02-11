---
title: "שוחררה rusmux 0.6"
date: 2024-08-28T00:50:51+03:00
slug: rusmux-0-6-released
tags: 
- rust
- rusmux
- tmux
- floss
draft: false
summary: >
    שוחררה rusmux 0.6 עם תיקון באג, זוג שמות פקודה חדשים ותמיכה באפשרויות פר-חלון ב־tmux.
---
שוחררה [rusmux 0.6](https://github.com/MeirKriheli/rusmux/releases/tag/v0.6.0),
שינויים בגרסה זו כוללים:

* תכונה חדשה להגדרת אפשרויות `tmux` עבור כל חלון (`set -w`).
* זוג כינויים חדשים לפקודות. `start` ו־`kill` (עבור `run` ו־`stop`).
* תיקון באג ל-"no space for new pane" עם פריסת `tiled` וכמות גדולה של panes.

[Rusmux היא תחליף `tmuxinator` שכתבתי ב-`Rust`]({{<ref "introducing-rusmux">}}),
לאוטומציה של tmux sessions.
