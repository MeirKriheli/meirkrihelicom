---
title: "Stop using negative left or text indents for css hiding"
date: 2012-10-14T01:32:31
slug: stop-negative-left-indent-css-hiding
tags:
- floss
- BiDi
- css
summary: >
    Using Negative left or text-indent for hiding in CSS is problematic when the
    direction is rtl, there's an alternative.
---

There's a common practice of using negative values for hiding. To hide an element
while maintaining layout one might use something like:

{{< highlight css >}}
.popup {
    position: absolute;
    top: -1000px;
    left: -1000px;
}
{{< / highlight >}}

Another known trick is negative `text-indent` for hiding text while
keeping an image (plus, this 
[might hurt your ranking](http://luigimontanez.com/2010/stop-using-text-indent-css-trick/)), e.g:

{{< highlight css >}}
.logo {
    text-indent: -9999px;
    background-image: url("bla bla");
    overflow: hidden;
    width: 200px;
    height:60px;
}
{{< / highlight >}}


The problem ? The above yields an ugly and large horizontal scroll bar when the
document's `direction` is `rtl`.

To make things worst, some services (like ShareThis used in the blog), set those
in scripts, which means it can't be overridden using css. I hide the scrollbar
in rtl but the width is still there, scrolling sideways in the Hebrew version
will reveal the fact.

There are solutions to those issues. For `.popup` above, just specifying the
negative `top` and removing `left` from css will have same effect.

For `.logo` above I sometimes prefer:

{{< highlight css >}}
.logo {
    background-image: url("bla bla");
    line-height:800%;
    overflow: hidden;
    width: 200px;
    height:60px;
}{{< / highlight >}}

This will keep the text below the height, and since `overflow` is
`hidden` it won't be visible, while not breaking RTL documents.
