---
title: "Introducing Rusmux"
date: 2023-04-04T16:35:00+03:00
slug: introducing-rusmux
draft: false
tags: 
- rust
- rusmux
- tmux
- floss
summary: >
    `Tmuxinator` was a tool I've used for a long time, `rusmux`
    is a replacment I've written with `Rust`.
---
I've been using [tmuxinator](https://github.com/tmuxinator/tmuxinator) for a
long time to automate [tmux](https://tmux.github.io/) sessions for various
projects.

It's written in [Ruby](https://www.ruby-lang.org/en/), and various packages/gem
upgrades broke it occasionally, having me scrambling for a fix.

On top of that, installing it on various servers missing Ruby installation was
a chore.

Thus [rusmux](https://github.com/MeirKriheli/rusmux) was born. I've used it
as an opportunity to:

* Work with the existing `.yml` project files of `tmuxinator`.
* Provide a single binary I can copy around.
* Further my knowledge and understanding of [Rust](https://www.rust-lang.org/)
  and the tooling around it.

While not providing 100% of `tmuxinator`'s features, `rusmux` is ready to
replace it for my use cases.
