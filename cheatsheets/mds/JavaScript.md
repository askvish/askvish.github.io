```js
const name = "Ashok";
console.log(name);
alert(name);
var variable1 = "Hello";
var variable2 = "World!<br><br>";
var messgae = variable1 + "" + variable2;
document.write(message);
document.write("<b>LESSON 1: PRINT HELLO WORLD USING VARIABLES</b><br><br>");

var n = 9;
var x = n * n;
document.write("Result of n*n=" + x);

// Loop
for (var i = 1; i <= 10; i++) {
  document.write(i);
  if (i < 10) {
    document.write(", ");
  }
}

// Function
function show_random_number() {
  var random_number = Math.random();
  // generate random number between 0 and 1
  alert(random_number);
  // show popup with a random number
}

applyDarkTheme = () => {
  if (document.body.style.color == "black") {
    document.body.style.color = "white";
    document.body.style.backgroundColor = "black";
  } else {
    document.body.style.color = "black";
    document.body.style.backgroundColor = "white";
  }
};

const validator = require("validator");
console.log(validator.isEmail("andrew@example.com"));

function encrypt() {
  console.log(CryptoJS.SHA256("Message"));
  console.log("Bye");
}
```
