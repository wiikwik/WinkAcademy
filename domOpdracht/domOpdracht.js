
// Assignment 1: Pin a click event to a button


    const myButton = document.getElementById("mybutton");
    myButton.addEventListener("click", function() {
        alert("button clicked");
    });
   
// Add a second button to your HTML that says "Change Background"
// change background

const changeBackground = function () {
    const bodyElement = document.body;
    bodyElement.classList.add("red-background");
  };
  const colorButton = function () {
    const changeColorButton = document.getElementById("backgroundbutton");
    changeColorButton.addEventListener("click", function () {
        changeBackground();
    });
  };
  colorButton();

// toggle
const colorToggle = function() {
    const bodyElement = document.body;
    bodyElement.classList.toggle("red-background");
};

const toggleBackground = function() {
    const toggleBackgroundButton = document.getElementById("backgroundbutton");
    toggleBackgroundButton.addEventListener("click", function() {
        colorToggle();
    });
};
toggleBackground();

