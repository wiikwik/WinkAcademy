// opdracht function arguments

// task 1: No arguments
const wallPaint= function() {
  console.log("The wall has been painted red");
}
  wallPaint();

  // task2: Single argument
  const wallPaintColor= function(color) {
    console.log("The wall has been painted" + color);
  }
  wallPaintColor(" green");
  wallPaintColor(" blue");

  wallPaintColor();
  // The wall has been paintedundefined

// task3: Multiple arguments
const wallsSelection = function(wall1, wall2) {
  const north ="The north wall has been painted orange";
  const south ="The south-east wall has been painted grey";
  console.log(north, south);
};


wallsSelection();

