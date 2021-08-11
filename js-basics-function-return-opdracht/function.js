// Function return statements: exercise
// 1. Checking if a number is big
const valueCheck = function(number1) {
  const value = number1;
  if (value>100) {
  return "true"; 
}
return "false";
}
const result1 = valueCheck(90);
console.log(result1);


// 2. Bouncer at a club
const age=18;
const currentNumber=300;
const maxNumber=200;
console.log(age);
console.log(currentNumber);
console.log(maxNumber);

// condition
if (age<18){
  
    console.log("this is a club for adults");
}else {
  if (age>=18 && currentNumber<200 ){
    console.log("come in");
 }else {
     console.log("it's too busy now, come back later");
   };
};

  

// 3. Calculating average
const calculateAverage = function(numbers) {
  const average = numbers.reduce((total, n) =>total +n)/numbers.length;
 
  console.log( Math.round(average));
  return;
};
calculateAverage([100,6, 2, 4, 8, 113]);
calculateAverage([89,6, 2, 4, 8, 113]);
