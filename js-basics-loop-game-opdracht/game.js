
function myFunction() {
  var person = prompt("Welcome! What's your name?", "Vik");
  if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + person + "!";
  }
}

function number() {
    var number = prompt("Enter a number from 0 to 25 to start guessing", "5");
    if (number != null) {
      document.getElementById("demo1").innerHTML =
      "Number " + number + " is correct";
    }
  }
