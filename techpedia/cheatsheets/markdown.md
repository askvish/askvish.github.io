# ![Markdown](https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg "Markdown")

# Markdown Cheatsheet (.md)

[The Markdown Guide](https://www.markdownguide.org "The Markdown Guide"), Refer to the reference guides for [basic syntax](https://www.markdownguide.org/basic-syntax) and [extended syntax](https://www.markdownguide.org/extended-syntax).

## Headings

| Markdown                 | HTML                       | Rendered Output          |
| ------------------------ | -------------------------- | ------------------------ |
| `# Heading level 1`      | `<h1>Heading level 1</h1>` | <h1>Heading level 1</h1> |
| `## Heading level 2`     | `<h2>Heading level 2</h2>` | <h2>Heading level 2</h2> |
| `### Heading level 3`    | `<h3>Heading level 3</h3>` | <h3>Heading level 3</h3> |
| `#### Heading level 4`   | `<h4>Heading level 4</h4>` | <h4>Heading level 4</h4> |
| `##### Heading level 5`  | `<h5>Heading level 5</h5>` | <h5>Heading level 5</h5> |
| `###### Heading level 6` | `<h6>Heading level 6</h6>` | <h6>Heading level 6</h6> |

---

## Emphasis

You can add emphasis by making text bold or italic.

## Bold

| Markdown         | HTML                          | Rendered Output                          |
| ---------------- | ----------------------------- | ---------------------------------------- |
| `**bold** text`  | `<strong>bold</strong> text`  | <html><strong>bold</strong> text</html>  |
| `__bold__ text`  | `<strong>bold</strong> text`  | <html><strong>bold</strong> text</html>  |
| `Love**is**bold` | `Love<strong>is</strong>bold` | <html>Love<strong>is</strong>bold</html> |

---

## Italic

| Markdown        | HTML                   | Rendered Output                   |
| --------------- | ---------------------- | --------------------------------- |
| `*italic* text` | `<em>italic</em> text` | <html><em>italic</em> text</html> |
| `_italic_ text` | `<em>italic</em> text` | <html><em>italic</em> text</html> |
| `A*cat*meow`    | `A<em>cat</em>meow`    | <html>A<em>cat</em>meow</html>    |

---

## Bold and Italic

| Markdown                | HTML                              | Rendered Output                              |
| ----------------------- | --------------------------------- | -------------------------------------------- |
| `***bold and italic***` | `<em><b>bold and italic</b></em>` | <html><em><b>bold and italic</b></em></html> |
| `___bold and italic___` | `<em><b>bold and italic</b></em>` | <html><em><b>bold and italic</b></em></html> |
| `A***cat***meow`        | `A<em><b>cat</b></em>meow`        | <html>A<em><b>cat</b></em>meow</html>        |

---

## Strikethrough

| Markdown                 | HTML                       | Rendered Output                       |
| ------------------------ | -------------------------- | ------------------------------------- |
| `~~The world is flat.~~` | `<s>The world is flat.<s>` | <html><s>The world is flat.<s></html> |

---

## Lists

|                | Markdown                                           | HTML                                                                               | Rendered Output                                                                  |
| -------------- | -------------------------------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Unordered List | - First item <br>- Second item <br>- Third item    | `<html><ul><li>First item</li><li>Second item</li><li>Third item</li></ul></html>` | <html><ul><li>First item</li><li>Second item</li><li>Third item</li></ul></html> |
| Ordered List   | 1. First item <br>2. Second item <br>3. Third item | `<html><ol><li>First item</li><li>Second item</li><li>Third item</li></ol></html>` | <html><ol><li>First item</li><li>Second item</li><li>Third item</li></ol></html> |

---

## Links and Images and More

|                 | Markdown                                    | HTML                                                   | Rendered Output                                                                                               |
| --------------- | ------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------- |
| Blockquotes     | `> Hello World!`                            | `<blockquote>Hello World!</blockquote>`                | <html><blockquote>Hello World!</blockquote></html>                                                            |
| Code            | `` type `nano` in cmd. ``                   | `type <code>nano</code> in cmd.`                       | type <code>nano</code> in cmd.                                                                                |
| Links           | `Link to [Google](https://www.example.com)` | `Link to <a href="https://www.google.com/">Google</a>` | <html>Link to <a href="https://www.google.com/">Google</a></html>                                             |
| Images          | `![alt text](https://image.jpg) `           | `<img src="https://image.jpg" alt="alt text">`         | <html><img src="https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg" alt="alt text"></html> |
| Horizontal Rule | `---` or `***`                              | `<html><hr></html>`                                    | <html><hr></html>                                                                                             |

---

## Table

```md
| Syntax    | Description |
| --------- | ----------- |
| Header    | Title       |
| Paragraph | Text        |
```

Rendered as:
| Syntax | Description |
| --------- | ----------- |
| Header | Title |
| Paragraph | Text |

---

## Fenced Code Block

<code>
```js<br>
{<br>
&nbsp; &nbsp; "firstName": "John",<br>
&nbsp; &nbsp; "lastName": "Smith",<br>
&nbsp; &nbsp; "age": 25<br>
}
</code>

Rendered as:

```js
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```