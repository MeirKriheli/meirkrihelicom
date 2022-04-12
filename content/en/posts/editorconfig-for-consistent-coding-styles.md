---
slug: editorconfig-for-consistent-coding-styles
date: 2014-08-08T10:58:26
title: EditorConfig for consistent coding styles
tags: 
- floss
- EditorConfig
- IDE
- Vim
- Emacs
- Gedit
- JetBrains
- coding-style
summary: >
    Keeping consistent coding style between multiple developers working on the
    same project is not a simple task, specially with todays proliferation of
    editors and IDEs.
---

Keeping consistent coding style between multiple developers working on the same
project is not a simple task, specially with todays proliferation of editors
and IDEs.

While there's support for that with 
[Vim modelines](http://vimdoc.sourceforge.net/htmldoc/usr_21.html#21.6) or 
[Emacs Local Variables](http://www.gnu.org/software/emacs/manual/html_node/emacs/File-Variables.html#File-Variables)
(and other editors defining their own), this is usually done on per file basis
and not supported well (if at all) in other editors. In addition, 
[Security is a problem](http://usevim.com/2012/03/28/modelines/) with modelines
and [Local Variables](http://www.gnu.org/software/emacs/manual/html_node/emacs/Safe-File-Variables.html#Safe-File-Variables).

[EditorConfig](http://editorconfig.org/) is a possible solution. It looks for
an INI style file named .editorconfig (usually placed at the root of the
project).

There's a core library (implementations of C, Python, JS and Java exists) for
developing plugins for various IDEs. When given an absolute path to a file
it'll look for .editorconfig file with the sections relevant to the file and
output the proper properties for the file.

For example, given the following .editorconfig file for a project:

{{< highlight ini >}}
root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false
{{< / highlight >}}

Running `editorconfig` on some file in the project:

{{< highlight shell >}}

    $ editorconfig ./src/app/app.js
    indent_style=space
    indent_size=2
    end_of_line=lf
    charset=utf-8
    trim_trailing_whitespace=true
    insert_final_newline=true
    tab_width=2
{{< /highlight >}}

EditorConfig supports glob and match patterns for file, definition the following
attributes:

* indent_style
* indent_size
* tab_width
* end_of_line
* charset
* trim_trailing_whitespace
* insert_final_newline

Plugins using one of the core implementations for various editors and IDEs
exist, including:

* Atom 
* Code::Blocks 
* Emacs 
* Geany 
* Gedit 
* JetBrain 
* jEdit 
* Notepad++ 
* Sublime Text 
* TextMate 
* Vim 
* Visual Studio 


It's nice to see project generators including this file in their templates, for
example [slush-angular](https://github.com/slushjs/slush-angular/blob/master/templates/_editorconfig)
and yeoman's
[generator-angular](https://github.com/yeoman/generator-angular/blob/master/.editorconfig).

P.S. Agreeing on an acceptable coding style is another holy war  
P.P.S Let's not forget the obligatory XKCD:  

![http://imgs.xkcd.com/comics/standards.png](http://imgs.xkcd.com/comics/standards.png)
