function myFunction() {
  var x = document.getElementById("list");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};


function Home() {
  document.querySelector(".backgound").style.backgroundColor = "grey";
};

function Green() {
  document.querySelector(".backgound").style.backgroundColor = "lightgreen";
};
function Yellow() {
  document.querySelector(".backgound").style.backgroundColor = "yellow";
};
function Blue() {
  document.querySelector(".backgound").style.backgroundColor = "lightblue";
};