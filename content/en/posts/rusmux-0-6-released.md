---
title: "Rusmux 0.6 Released"
date: 2024-08-28T00:36:33+03:00
slug: rusmux-0-6-released
draft: false
tags:
- rust
- rusmux
- tmux
- floss
summary: >
    Released rusmux 0.6 with a bug fix, a couple of new command aliases
    and a new tmux window options feature.
---
Just released [rusmux 0.6](https://github.com/MeirKriheli/rusmux/releases/tag/v0.6.0),
which includes:

* A new feature to set `tmux` window options per window.
* A couple of new command aliases. `start` and `kill` (for `run` and `stop`).
* Bug fix for "no space for new pane" with tiled layout and many panes.

[Rusmux is a `tmuxinator` replacement I've written in `Rust`]({{<ref "introducing-rusmux">}}),
to automate tmux sessions.

