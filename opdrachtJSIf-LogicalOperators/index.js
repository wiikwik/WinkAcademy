// pub opdracht

const age=30;
console.log(age);
document.write(age);

const isFemale=true;
console.log(isFemale);
document.write(isFemale);

const driverStatus = "bob";
console.log(driverStatus);
document.write(driverStatus);

const firstName = "Sarah"
console.log(firstName);
document.write(firstName);

totalAmount = 100;
console.log(totalAmount);
document.write(totalAmount);

// age condition
if (age>=18){
  document.write("allow to enter");
  console.log("allow to enter");
}else {
    document.write("not allow to enter");
    console.log("allow to enternot allow to ente");
  }

  if (age>=18 && age <=25){
    document.write("get a 50% discount");
    console.log("get a 50% discount");
  }else {
      document.write("full ticket");
      console.log("full ticket");
    }


// gender condition
if (isFemale){
  document.write("free entrance");
  console.log("free entrance");
}else {
    document.write("buy a ticket");
    console.log("buy a ticket");
  }
 

  // drivestatus condition
  if (driverStatus === "bob"){
    document.write("is allowed to drive");
    console.log("is allowed to drive");
  }else {
      document.write("is not allowed to drive");
      console.log("is not allowed to drive");
    }
 
  // firstName condition
  if (firstName == "Sarah" || firstName == "Abraham" ){
    document.write("entitled to a free beer");
    console.log("entitled to a free beer");
  }else {
      document.write("need to pay for a beer");
      console.log("need to pay for a beer");
    }

      // totalAmount condition
      if (totalAmount >25 && totalAmount<=50) {
        document.write("get free (veggie) bitterballen");
        console.log("get free (veggie) bitterballen");
      
      } else if (totalAmount>50 && totalAmount<100) {
        document.write("get a free portion of nachos");
        console.log("get a free portion of nachos");
        
      }  else if (totalAmount>=100) {
        document.write("get a free bottle of champagne");
        console.log("get a free bottle of champagne");
      }