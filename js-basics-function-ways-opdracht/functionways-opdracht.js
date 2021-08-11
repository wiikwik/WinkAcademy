// declaration

  function multiply(number1, number2) {
    console.log((number1*number1 + number2*number2)*(number1*number1 + number2*number2));
    return multiply;
  }
  multiply(1,1)

// expression: 

const multiplyExp = function(number1, number2) {
  console.log((number1*number1 + number2*number2)*(number1*number1 + number2*number2));
  return multiplyExp;
}
multiplyExp(1,10)


// arrow

const multiplyArr = (number1, number2) =>{
  console.log((number1*number1 + number2*number2)*(number1*number1 + number2*number2));
  return multiplyArr;
}
multiplyArr(1,100)

const addAr = (number1, number2) => {
    console.log(number1 + number2)
    return number1 + number2;
  };
  addAr(7, 6); // 13