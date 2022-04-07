---
slug: relative-line-numbers-in-vim
date: 2014-06-22T03:04:13
title: Relative line numbers in Vim
tags:
- floss
- Vim
summary: >
    Using relative line numbers in Vim can help you navigate and edit code
    faster.
---

As we all know, Vim movements and editing commands takes into account
the numbers preceding them. To move 15 lines up, one can issue the
command `15k` and to indent the next 5 lines use `5>>`.

Counting the line numbers is not always fun though - this is where
relative numbers introduced in Vim 7.3 comes in handy. Enable it with
`:set relativenumber` (or `:set rnu`).

Take into account the next screen shot containing a markdown list of
some html elements, and I want to indent all the table related elements
(the line with th). I'm already on the table line, so how many lines
should I indent ?

![/img/posts/vim-line-number.png](/img/posts/vim-line-number.png)

Let's turn on relative numbering:

![/img/posts/vim-relative-number.png](/img/posts/vim-relative-number.png)

Now it's easy to see that th is 9 lines down, so I need to indent 10
lines (including the current one), hence `10>>`.

If I wanted to delete the current line up to (and including blockquote)
one can easily see it's 7 lines up, so `d7k`.

To return to normal line numbering, use `:set norelativenumber` (or
`:set nornu`), to toggle relative numbers state, use `:set
relativenumber!` or `:set rnu!`).

For more information, as usual, `:h relativenumber`.
