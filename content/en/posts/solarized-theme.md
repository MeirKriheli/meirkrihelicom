---
slug: solarized-theme
date: 2012-10-02T14:44:34
title: Solarized Theme
tags:
- floss
- Solarized
- Vim
summary: >
    Solarized has been for a long time one of my favorite color scheme in
    terminals and editors.
---

[Solarized](http://ethanschoonover.com/solarized) is my favorite color scheme,
used in my terminal and vim setups. It features:

*   Selective contrast (reduce brightness contrast, retaining contrasting hues
    for syntax highlighting).
*   Light and dark themes, each keeping the selective contrast.
*   16/5 palette modes (16 color palette, scales down to 5 for design work
    etc.).

It provides configuration for various editors and IDEs (Vim, Emacs, NetBeans
etc.) while one can find additional resources
([Gedit](http://www.webupd8.org/2011/04/solarized-must-have-color-paletter-for.html),
[Eclipse](http://xorcode.com/2011/04/11/solarized-vim-eclipse-ubuntu/)).

Here's a shot of my Vim which used the dark theme, while editing this post:

![/img/posts/vim_solarized.png](/img/posts/vim_solarized.png)

My site is based on that color scheme as well, here's the [less](http://lesscss.org/) snippet:

{{< highlight sass >}}
/* Solarized */
@base03:    #002b36;
@base02:    #073642;
@base01:    #586e75;
@base00:    #657b83;
@base0:     #839496;
@base1:     #93a1a1;
@base2:     #eee8d5;
@base3:     #fdf6e3;
@yellow:    #b58900;
@orange:    #cb4b16;
@red:       #dc322f;
@magenta:   #d33682;
@violet:    #6c71c4;
@blue:      #268bd2;
@cyan:      #2aa198;
@green:     #859900;

.rebase(@rebase03,@rebase02,@rebase01,@rebase00,@rebase0,@rebase1,@rebase2,@rebase3) {
    background-color:@rebase03;
    color:@rebase0;
    /* { color:@rebase0; }*/
    h1,h2,h3,h4,h5,h6 { color:@rebase1; border-color: @rebase0; }
    a, a:active, a:visited { color: @rebase1; }
}

.accentize(@accent) {
    a, a:active, a:visited, code.url { color: @accent; }
    h1,h2,h3,h4,h5,h6 {color:@accent; text-shadow: @base1 1px 0px 1px;  }
    html[dir=rtl] & {
    h1,h2,h3,h4,h5,h6 { text-shadow: @base1 -1px 0px 1px; }
    }   
}

/* light is default mode, so pair with general html definition */
.light { .rebase(@base3,@base2,@base1,@base0,@base01,@base01,@base02,@base03)}
.dark  { .rebase(@base03,@base02,@base01,@base00,@base0,@base1,@base2,@base3)}
{{< / highlight >}}
