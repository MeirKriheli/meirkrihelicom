---
slug: disqus-and-rtl-no-dice
date: 2013-07-23T12:46:46
title: "Disqus and RTL: No dice"
tags:
- BiDi
- Hebrew
- Translation
- Disqus
- floss 
summary: >
    Old Disqus added the content to the page, thus allowing customization of the
    comments system, which is what I've done for proper Right-to-left layout.
    With the new Disqus that's not an option any more.
---
The previous Disqus added the content of the commenting system into the
page's DOM, which allowed overriding and adjusting the CSS.

> **Update**: [Disqus' RTL support is implemented now](/en/2013/09/disqus-got-rtl/)

Since this web site is bilingual, the other language being Hebrew, I've
used CSS to properly lay out the elements for
[Right-to-left](http://en.wikipedia.org/wiki/Right-to-left) (RTL).
Here's the `lesscss` excerpt I've used:

{{< highlight sass >}} 
html[dir=rtl] {
  #dsq-content ul, #dsq-content li, #dsq-content ol, #dsq-content cite,
  #dsq-content div, #dsq-content table, #dsq-content td, #dsq-content th,
  #dsq-content p, #dsq-content a, #dsq-content img, #dsq-content caption {
    text-align: right; }
  #dsq-content {
    .dsq-options span { margin-right: 0; margin-left: 10px; }
    .dsq-request-user-logout { float: left; }
    .dsq-request-user-name { padding: 0.25em 0.5em 0 0; vertical-align: top; direction:ltr }
    .dsq-post-footer .dsq-button { float: left; margin-right: 3px; margin-left:0;}
    .dsq-attach-media { float: right;}
    @dsq-margin: 30px;
    .dsq-comment { margin-left:0;}
    .dsq-depth-1 { margin-left:0 !important; margin-right: @dsq-margin;  }
    .dsq-depth-2 { margin-left:0 !important; margin-right: @dsq-margin * 2;  }
    .dsq-depth-3 { margin-left:0 !important; margin-right: @dsq-margin * 3;  }
    .dsq-depth-4 { margin-left:0 !important; margin-right: @dsq-margin * 4;  }

    .dsq-comment-hide-thread, .dsq-comment-show-thread {
      left:0; right: auto; text-indent: 0;
    }
  }
}
{{< /highlight >}}
But that's all gone with the new Disqus - `iframe` is used now, which
prevents usage of the above technique.

Contacting Disqus' support regarding the issue, and the response I've got is:

"_there is no concrete timeline for when this feature will be available_"

I've offered my help, since I have the domain knowledge and helped other
projects in the past with RTL issues, but got a response saying they are
aware of it, will look into the possibility of addding RTL support, and
will be in touch if an opportunity for collaboration arises.

I'm on Disqus' Transifex Hebrew team, but I see no point in helping with
translations as long as the layout is wrong.
