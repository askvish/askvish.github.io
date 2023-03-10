console.log("Hello World");
var j = 20;

setInterval(() => {
  console.log("iteration " + i);
  i++;
}, 1000);

for (i = 1; i <= 5; i++) {
  console.log("The number is " + j + " after iteration " + i);
  j++;
}
