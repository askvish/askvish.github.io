# HTML Cheatsheet

## Boiler Plate

```html
<!DOCTYPE html>
<html lang="en|es|fr|..." dir="ltr|rtl|auto">
  <!-- Head of the html -->

  <head>
    <!-- Meta Information -->
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- Title of the website -->
    <title>Template</title>
    <!-- Linking the icon -->
    <link
      rel="shortcut icon"
      href="./icon.(svg|gif)"
      type="image/(x-icon|gif)"
    />
    <!-- Linking the stylesheet -->
    <link rel="stylesheet" href="./template.css" />
    <!-- Font Awesome -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@200&display=swap"
      rel="stylesheet"
    />

    <!-- Bootstrap -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
      crossorigin="anonymous"
    />
    <!-- SEO: keywords/description  -->
    <meta name="keyword" content="keyword1, keyword2, ..." />
    <meta name="description" content="description about the website" />
  </head>
  <!-- Body of the html -->

  <body>
    <!-- Header -->
    <header></header>
    <!-- Main -->
    <main>
      <!-- Headings: h1 to h6 -->
      <h1>Header</h1>
      <h2>Sub header</h2>
      <h3>Sub sub header</h3>
      <p>This is a paragraph.</p>
      <!-- Line break: <br /> -->
      <!-- Horizontal rule: <hr /> -->
      <b>Bold</b> or <strong>Strong</strong><br />
      <i>Italics/Emphasis</i> or <em>Italics/Emphasis</em><br />
      <u>Underline</u><br />
      This is a <sub>Sub Script</sub>. This is a <sup>Super Script</sup>.<br />
      <mark>Marked</mark> (highlited using bg color)<br />
      <small>Small</small> (Smaller than rest)<br />
      <div id="id" class="class1 class2">This is a div.</div>
      <span>This is a span.</span><br />
      Button:
      <button>Click Me</button><br />
      <!-- Link -->
      <a href="./link" target="_blank">Link</a><br />
      <!-- Link to image -->
      <a href="./link/to/image.jpg" target="_blank">Link to image</a><br />
      <!-- Image -->
      <img
        src="./path/to/image.jpg"
        alt="Alt Text"
        width="xpx"
        height="ypx"
      /><br />
      <!-- Audio -->
      <audio controls>
        <source src="./link/to/audio.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.</audio
      ><br />
      <!-- Videos -->
      <video controls autoplay width="50%">
        <source src="./link/to/video.mkv" type="audio/mpeg" />
        Your browser does not support the video element.</video
      ><br />
      <!-- Youtube Video Embed -->
      <iframe
        width="420px"
        height="315px"
        src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1&loop=1"
      >
        <!-- Playlist = http://www.youtube.com/embed/M7lc1UVf-VE-->
      </iframe>
      <!-- Lists -->
      <ol type="1|I|i|A|a">
        <li></li>
        <ul>
          <li type="disc|circle|square|none"></li>
          <li></li>
        </ul>
        <li></li>
      </ol>
      <i class="fa fa-instagram"></i><br />
      <!-- <marquee
        behavior="scroll"
        direction="left|right|up|down"
        scrollamount="1-50"
        height="20px"
        >Scrolling</marquee
      > -->
      <iframe
        src="https://www.javatpoint.com/"
        height="500px"
        width="1000px"
      ></iframe>
      <!-- PDF -->
      <iframe
        src="https://web.stanford.edu/group/csp/cs21/htmlcheatsheet.pdf"
        width="360px"
        height="400px"
      ></iframe>
      <embed
        src="https://web.stanford.edu/group/csp/cs21/htmlcheatsheet.pdf"
        type="application/pdf"
        width="360px"
        height="400px"
      />
      <object
        data="https://web.stanford.edu/group/csp/cs21/htmlcheatsheet.pdf"
        type="application/pdf"
        width="360px"
        height="400px"
      ></object
      ><br />
      <!-- Download an asset -->
      <a
        href="https://web.stanford.edu/group/csp/cs21/htmlcheatsheet.pdf"
        target="_blank"
        >Click here for download</a
      >
      <button onclick="alert('Hello User');">Say Hello</button>
      <button onclick="location.href='http://www.google.com';">
        Go to google
      </button>
      <button onclick="window.print();">Print this page</button>
      <input
        type="button"
        value="Print this page"
        onClick="window.print();"
      /><br />
      <!-- &nbsp; &copy; &reg; &quot; &#8482; &#8212; &lt; &gt; &amp; -->
      <!-- Form -->
      <form action="/action_page.php">
        <label for="uname">Username*</label>
        <input id="uname" type="text" name="Username" required size="35" maxlength="35" value=""
          placeholder="Enter your username" />
        <br />
        <label>Password*</label>
        <input type="password" name="password" required size="35" maxlength="15" value="" placeholder="Enter your Password"
          autocomplete="off" />
        <br />
        <label>Comments</label>
        <textarea name="Comments" cols="30" rows="1" wrap="on" placeholder="Write about youself"></textarea>
        <br />
        <input type="text" name="country" value="India" disabled />
        <br />

        <p>
          <label>Do you exercise at home?</label>
          <input type="radio" name="exe" value="1" />Yes
          <input type="radio" name="exe" value="2" />No
        </p>

        <p>
          <label>How do you like to read about your favorite topics?</label>
          <input type="checkbox" name="Books" />Books
          <input type="checkbox" name="Web" />Online resources
          <input type="checkbox" name="Phone" />Phone apps
          <input type="checkbox" name="Magazines" />Magazines
        </p>

        <p>
          <label>What genre of movies do you like?</label>
          <select name="moviepref">
            <option></option>
            <option value="1" selected="true">comedy</option>
            <!-- or just selected-->
            <option value="2">romance</option>
            <option value="3">thriller</option>
            <option value="4">horror</option>
            <option value="5">biopic</option>
          </select>
          <select>
            <optgroup label="Books">
              <option value="html">HTML</option>
              <option value="css">CSS</option>
            </optgroup>
            <optgroup label="Snippets">
              <option value="git">Git</option>
              <option value="java">Java</option>
            </optgroup>
          </select>
        <fieldset>
          <legend>SUBSCRIBE:</legend>
          Name: <input type="text" /><br />
          Email: <input type="text" /><br />
        </fieldset>
        </p>
        <input type="submit" value="Submit" />
        <button type="submit" class="btn btn-primary" onsubmit="submit();">Submit</button>
      </form>
    </main>
    <!-- Footer of the website -->
    <footer>
      <p>Copyright &copy; 2022-3022</p>
    </footer>
  </body>
</html>
```

## Header

```html
<ul id="nav">
  <li>
    <a href="https://askvish.github.io/resume/" target="_blank"
      ><i class="fa fa-file-text"></i
    ></a>
  </li>
  <li>
    <a href="https://food-recipes-app-1099.web.app/" target="_blank"
      ><i class="fa fa-laptop"></i
    ></a>
  </li>
  <li>
    <a href="https://github.com/askvish/" target="_blank"
      ><i class="fa fa-github"></i
    ></a>
  </li>
  <li>
    <a href="https://linkedin.com/in/askvish/" target="_blank"
      ><i class="fa fa-linkedin"></i
    ></a>
  </li>
  <li>
    <a
      href="mailto:johndoe@fakeemail.com?subject=this is how to use the mailto link &cc=jackdoe@fakeemail.com &bcc=jennydoe@fakeemail.com"
      target="_blank"
      ><i class="fa fa-envelope"></i
    ></a>
  </li>
</ul>
```
