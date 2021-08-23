
function myFunction() {
  var x = document.getElementById("list");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
};


function Home() {
  var x = document.getElementById("list");
  document.querySelector(".backgound").style.backgroundColor = "grey";
  x.style.display = "none";
};

function Green() {
  var x = document.getElementById("list");
  document.querySelector(".backgound").style.backgroundColor = "lightgreen";
  x.style.display = "none";
};
function Yellow() {
  var x = document.getElementById("list");
  document.querySelector(".backgound").style.backgroundColor = "yellow";
  x.style.display = "none";
};
function Blue() {
  var x = document.getElementById("list");
  document.querySelector(".backgound").style.backgroundColor = "lightblue";
  x.style.display = "none";
};