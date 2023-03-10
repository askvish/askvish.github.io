# ![Markdown](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg "Markdown")

# Markdown CheatSheet (.md)

[The Markdown Guide](https://www.markdownguide.org "The Markdown Guide"), Refer to the reference guides for [basic syntax](https://www.markdownguide.org/basic-syntax) and [extended syntax](https://www.markdownguide.org/extended-syntax).

---

## Table of Contents

- [Markdown-CheatSheet](#markdown-cheatsheet)
  - [Table of Contents](#table-of-contents)
  - [Headings](#headings)
  - [Styling Text](#styling-text)
  - [Bold / Strong](#bold--strong)
  - [Italics / Emphasis](#italics--emphasis)
  - [Strikethrough](#strikethrough)
  - [Horizantal Rule](#horizantal-rule)
  - [Quotes](#quotes)
  - [Variables](#variables)
  - [Links](#links)
  - [Unordered List](#unordered-list)
  - [Ordered List](#ordered-list)
  - [Table](#table)
  - [Raw HTML Tags](#raw-html-tags)
  - [Images](#images)
  - [Task Lists](#task-lists)
  - [Code and Syntax Highlighting](#code-and-syntax-highlighting)
    - [1. Inline code](#1-inline-code)
    - [2. Bash Commands](#2-bash-commands)
    - [3. Shell Script](#3-shell-script)
    - [4. C function](#4-c-function)
    - [5. JavaScript Function](#5-javascript-function)
    - [6. Python Function](#6-python-function)
    - [7. Bat Script](#7-bat-script)
  - [YouTube Videos](#youtube-videos)
  - [TeX Mathematical Formulae](#tex-mathematical-formulae)

---

<!-- Heading -->

## Headings

> | `Syntax`        | `Rendered as` |
> | --------------- | ------------- |
> | \# H1           | <h1>H1</h1>   |
> | \#\# H2         | <h2>H2</h2>   |
> | \#\#\# H3       | <h3>H3</h3>   |
> | \#\#\#\# H4     | <h4>H4</h4>   |
> | \#\#\#\#\# H5   | <h5>H5</h5>   |
> | \#\#\#\#\#\# H6 | <h6>H6</h6>   |
>
> <br>
> `Note:` By Default, a horizaontal rule is placed below Heading H1.<br>
>
> Alternatively, for headings H1 and H2, an underline-ish style: <br> > `Alternative Syntax for H1 and H2`
>
>     H1-Alternative
>     \==== (atleast one =)
>     H2-Alternative
>     \------- (atleast one -)
>
> <br>
<br>

---

## Styling Text

<!-- Bond / Strong -->

## Bold / Strong

> | `Syntax`            | `Rendered as`     |
> | ------------------- | ----------------- |
> | \*\*Bold/Strong\*\* | **Bold / Strong** |
> | \_\_Bold/Strong\_\_ | **Bold / Strong** |
>
> <br>
> `Note:` Double asterisks and double underscore do the same.
<br>

---

<!-- Italics / Emphasis -->

## Italics / Emphasis

> | `Syntax`               | `Rendered as`       |
> | ---------------------- | ------------------- |
> | \*Italics / Emphasis\* | _Italic / Emphasis_ |
> | \_Italics / Emphasis\_ | _Italic / Emphasis_ |
<br>

> `Note:` Asterisks and underscore do the same.
>
> <br>
---

<!-- Stirkethorugh -->

## Strikethrough

> | `Syntax`                 | `Rendered as`      |
> | ------------------------ | ------------------ |
> | \~\~ Strike Through \~\~ | ~~Strike Through~~ |
>
> <br>
> <br>
---

<!-- Horizonatal Rule -->

## Horizantal Rule

> | `Syntax` | `Rendered as` |
> | -------- | ------------- |
> | \---     | <hr>          |
> | \*\*\*   | <hr>          |
> | \_\_\_   | <hr>          |
<br>

> `Note:` All symbols are the same and three or more will work.
---

<!-- Block Quote -->

## Quotes

> | `Syntax` | `Rendered as` |
> | -------- | ------------- |
> | \> Quote | > Quote       |
<br>

---

<!-- Variables -->

## Variables

> | `Syntax`     | `Examples`                                  |
> | ------------ | ------------------------------------------- |
> | [key]: value | [google link]: https://www.google.com/      |
> | [key]: value | \[github link]: https://github.com/askvish/ |
<br>

---

<!-- Links -->

## Links

<!-- declared variable -->

[github link]: https://github.com/askvish/
[google]: https://www.google.com/

> | `Syntax`                                               | `Rendered as`                                         |
> | ------------------------------------------------------ | ----------------------------------------------------- |
> | https://www.google.com                                 | https://www.google.com                                |
> | \<https://www.google.com>                              | <https://www.google.com>                              |
> | \[Google](https://www.google.com/)                     | [Google](https://www.google.com/)                     |
> | \[Google with title](https://www.google.com/ "Google") | [Google with title](https://www.google.com/ "Google") |
> | \[GitHub]\[github link]                                | [GitHub][github link]                                 |
<br>

---

<!-- Unordered List -->

## Unordered List

> | `Syntax`                                                                                  | `Rendered as`                                                                    |
> | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
> | - Item 1 <br> - Item 2 <br> &emsp; - Sub Item 2.1 <br> &emsp; &emsp; - Sub sub item 2.1.1 | <ul> <li> Item 1 <li> Item 2 <ul> <li> Sub item 2.1 <ul> <li> Sub sub item 2.1.1 |
<br>

---

<!-- Ordered List -->

## Ordered List

> | `Syntax`                                                                                                                                                           | `Rendered as`                                                                                                              |
> | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
> | 1. Item 1 <br> 2. Item 2 <br> &emsp; 1. Sub item 2.1 <br> &emsp; 2. Sub item 2.2 <br> &emsp; &emsp; 1. Sub sub item 2.2.1 <br> &emsp; &emsp; 2. Sub sub item 2.2.2 | <ol> <li> Item 1 <li> Item 2 <ol> <li> Sub item 2.1 <li> Sub item 2.2 <ol> <li> Sub sub item 2.1.1 <li> Sub sub item 2.1.2 |
<br>

---

<!-- Tables -->

## Table

`Syntax`

> \| Name &emsp; &ensp; \| Email &emsp; &emsp; &emsp; &emsp; &ensp;\| <br> > \| ------------ \| -------------------- \| <br> > \| John Doe &nbsp; \| john@gmail.com &nbsp; \| <br> > \| Jahe Doe &nbsp; \| jahe@gmail.com &ensp; \| <br> > \| James Doe \| james@gmail.com \| <br> > \| Jimmy Doe \| jimmy@gmail.com \| <br>
`Rendered as`

| Name      | Email           |
| --------- | --------------- |
| John Doe  | john@gmail.com  |
| Jahe Doe  | jahe@gmail.com  |
| James Doe | james@gmail.com |
| Jimmy Doe | jimmy@gmail.com |

---

<!-- Inline Code Block -->

## Raw HTML Tags

> | `Syntax`            | `Rendered as`     |
> | ------------------- | ----------------- |
> | \<h3>Heading\</h3>  | <h3>Heading</h3>  |
> | \<p>Paragraph.\</p> | <p>Paragraph.</p> |
<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

<br>

---

<!-- Images -->

## Images

> | `Syntax`                                                                                                          | `Rendered as`                                                                                                   |
> | ----------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
> | \!\[MarkDown Logo 64](https://markdown-here.com/img/icon64.png "Markdown Logo 64")                                | ![MarkDown Logo](https://markdown-here.com/img/icon64.png "Markdown Logo 64")                                   |
> | \!\[MarkDown Logo svg](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg "Markdown Logo svg") | ![MarkDown Logo svg](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg "Markdown Logo svg") |
> | \!\[MarkDown Logo 128](https://markdown-here.com/img/icon128.png "Markdown Logo 128")                             | ![MarkDown Logo](https://markdown-here.com/img/icon128.png "Markdown Logo 128")                                 |
<br>

---

<!-- Task Lists -->

## Task Lists

`Synatx`

```
- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item
```

`Rendered as`

- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item

---

<!-- Code and Syntax Highlighting -->

## Code and Syntax Highlighting

### 1. Inline code

> | `Syntax`         | `Rendered as`  |
> | ---------------- | -------------- |
> | Use \`for\` loop | Use `for` loop |
<br>

### 2. Bash Commands

`Syntax`

> \`\`\`properties <br>
> apt update <br>
> apt list --upgradable <br>
> apt upgrade <br> > \`\`\`
`Rendered as`

```properties
apt update
apt list --upgradable
apt upgrade
```

### 3. Shell Script

`Synatx`

> \`\`\`sh <br>
> #!/bin/bash <br>
> echo "Hello World!" <br>
> winter="The winter is sparkling and frozen!" <br>
> echo $winter # The winter is sparkling and frozen! <br> > \`\`\`
`Rendered as`

```sh
#!/bin/bash
echo "Hello World!"
winter="The winter is sparkling and frozen!"
echo $winter # The winter is sparkling and frozen!
```

### 4. C function

`Synatx`

> \`\`\`C <br>
> #include <stdio.h> <br>
> int add(int num1, int num2) { <br> > &emsp; return num1 + num2; <br>
> } <br> > \`\`\`
`Rendered as`

```C
#include <stdio.h>
int add(int num1, int num2) {
  return num1 + num2;
}
```

### 5. JavaScript Function

`Syntax`

> \`\`\`javascript <br>
> function add(num1, num2) { <br> > &emsp; return num1 + num2; <br>
> } <br> > \`\`\`
`Rendered as`

```javascript
function add(num1, num2) {
  return num1 + num2;
}
```

### 6. Python Function

`Syntax`

> \`\`\`python <br>
> def add(num1, num2): <br> > &emsp; return num1+num2 <br> > \`\`\`
`Rendered as`

```python
  def add(num1, num2):
    return num1+num2
```

### 7. Bat Script

`Synatx`

> \`\`\`bat <br>
> cd \ <br>
> copy a b <br>
> ping google.com <br>
> ping 127.0.0.1 <br> > \`\`\`
`Rendered as`

```bat
cd \
copy a b
ping google.com- [Markdown-CheatSheet](#markdown-cheatsheet)
  - [Table of Contents](#table-of-contents)
  - [Headings](#headings)
  - [Bold / Strong](#bold--strong)
  - [Italics / Emphasis](#italics--emphasis)
  - [Strikethrough](#strikethrough)
  - [Horizantal Rule](#horizantal-rule)
  - [Quotes](#quotes)
  - [Variables](#variables)
  - [Links](#links)
  - [Unordered List](#unordered-list)
  - [Ordered List](#ordered-list)
  - [Table](#table)
  - [Raw HTML Tags](#raw-html-tags)
  - [Images](#images)
  - [Task List](#task-list)
  - [Code and Syntax Highlighting](#code-and-syntax-highlighting)
    - [1. Inline code](#1-inline-code)
    - [2. Bash Commands](#2-bash-commands)
    - [3. Shell Script](#3-shell-script)
    - [4. C function](#4-c-function)
    - [5. JavaScript Function](#5-javascript-function)
    - [6. Python Function](#6-python-function)
    - [7. Bat Script](#7-bat-script)
  - [YouTube Videos](#youtube-videos)
  - [TeX Mathematical Formulae](#tex-mathematical-formulae)
ping 127.0.0.1
```

---

## YouTube Videos

`Syntax (using raw html <a> tag)`

```
<a href="http://www.youtube.com/watch?feature=player_embedded&v=YOUTUBE_VIDEO_ID_HERE
" target="_blank"> <img src="http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg" alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>
```

`Example`

<a href="https://www.youtube.com/watch?feature=player_embedded&v=MEi47lmUjWs
" target="_blank">
<img src="https://img.youtube.com/vi/MEi47lmUjWs/0.jpg" title="Criminal" alt="Criminal" width="384" height="216" border="6" /></a>

`Syntax (in pure Markdown)`

```
[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)
```

> `Note:` No option for the image sizing and border.
`Example`

[![Criminal](https://img.youtube.com/vi/MEi47lmUjWs/0.jpg)](https://www.youtube.com/watch?v=MEi47lmUjWs "Criminal")

## TeX Mathematical Formulae

`Syntax`

```
$ax^2 + bx + c = 0, a \ne 0$
$\alpha/\beta$ = $-b \pm \sqrt{b^2 - 4ac} \over 2a$
$x = a_0 + \frac{1}{a_1 + \frac{1}{a_2 + \frac{1}{a_3 + a_4}}}$ $\forall x \in X, \quad \exists y \leq \epsilon$
$\sum_{n=1}^{\infty} 2^{-n} = 1$
$$\sum_{n=1}^{\infty} 2^{-n} = 1$$
```

`Rendered as`

> $ax^2 + bx + c = 0, a \ne 0$
>
> $\alpha/\beta$ = $-b \pm \sqrt{b^2 - 4ac} \over 2a$
>
> $x = a_0 + \frac{1}{a_1 + \frac{1}{a_2 + \frac{1}{a_3 + a_4}}}$ > $\forall x \in X, \quad \exists y \leq \epsilon$
>
> $\sum_{n=1}^{\infty} 2^{-n} = 1$ > $$\sum_{n=1}^{\infty} 2^{-n} = 1$$
>
> <br>
---

Gone camping! :tent: Be back soon.

That is so funny! :joy:

:wave:

This is [an example] [id] reference-style link.

[id]: http://example.com/ "Optional Title Here"

`` `sda` ``

Monospaced

<samp>The quick brown fox jumps over the lazy dog.</samp>

Underlined

<ins>The quick brown fox jumps over the lazy dog.</ins>

Strike-through

~~The quick brown fox jumps over the lazy dog.~~

Subscript <sub>The quick brown fox jumps over the lazy dog.</sub>

Superscript <sup>The quick brown fox jumps over the lazy dog.</sup>

```java
public static String monthNames[] = {"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"};
```

<p align="left">
<img src="https://images.unsplash.com/photo-1415604934674-561df9abf539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2772&q=80" width="100" height="100" border="10"/>
</p>

<h3 align="center"> My latest Medium posts </h3>

| Default    | Left align | Center align | Right align |
| ---------- | :--------- | :----------: | ----------: |
| 9999999999 | 9999999999 |  9999999999  |  9999999999 |
| 999999999  | 999999999  |  999999999   |   999999999 |
| 99999999   | 99999999   |   99999999   |    99999999 |
| 9999999    | 9999999    |   9999999    |     9999999 |

[The-Ultimate-Markdown-Cheat-Sheet][reference text]

[The-Ultimate-Markdown-Cheat-Sheet][1]

[Markdown-Cheat-Sheet]

[reference text]: https://github.com/lifeparticle/The-Ultimate-Markdown-Cheat-Sheet
[1]: https://github.com/lifeparticle/The-Ultimate-Markdown-Cheat-Sheet
[markdown-cheat-sheet]: https://github.com/lifeparticle/The-Ultimate-Markdown-Cheat-Sheet

<img src="https://media.giphy.com/media/qLHzYjlA2FW8g/giphy.gif" />

<img src="https://img.shields.io/badge/theultimatemarkdowncheatsheet-brightgreen.svg" />

Github. :octocat:

@askvish

#1
github-flavored-markdown#1
defunkt/github-flavored-markdown#1

GitHub supports emoji!

:+1: :sparkles: :camel: :tada:
:rocket: :metal: :octocat: