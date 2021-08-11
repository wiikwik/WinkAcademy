// 1.Checks if someone is an adult.

const ageCheck = function(age) {
    if (age > 18) {
        return true;
    } else {
        return false;
    }
};
console.log(ageCheck(20));

const adultCheck = function(age) {
    if (ageCheck(age)) {
        return "Hello there"
    } else {
        return "Hey kiddo"
    }
};
console.log(adultCheck(11));
console.log(adultCheck(30));


// 2. VAT calculations
const sumVat= function(input) {
    var sum=10
    console.log("sum = " + sum);
    console.log("VAT = " + sum * 0.2);
    console.log("total = " + sum * 1.2);
}
 
sumVat();
