// 1.checks if someone is an adult.

const ageCheck = function(age) {
    if (age > 18) {
        return true;
    } else {
        return false;
    }
};
console.log(ageCheck(20));

const adultCheck = function(age) {
    if (ageCheck ="true"){
        return "Hello there"
    } else {
        return "Hey kiddo"
    }
};
console.log();


// VAT calculations
const sumVat= function(input) {
    var sum=10
    console.log("sum = " + sum);
    console.log("VAT = " + sum * 0.2);
    console.log("total = " + sum * 1.2);
}
 
sumVat();