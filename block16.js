const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

//Define a function called discount that takes an object as an argument:
const discount = (obj) => {
    //Set totalPrice to the product of the object's pricePerRefill and refills
    let totalPrice = obj.pricePerRefill * obj.refills;
    let result;
    //check if the object has a subscription but no coupon, and apply the 25% off total price
    if(obj.subscription && !obj.coupon) {
        result = totalPrice - totalPrice / 4;
    } else if(obj.coupon && !obj.subscription) { //check if the object has a coupon but no subscription, and apply the 10 dollars off total price
        result = totalPrice - 10;
    } else if(obj.coupon && obj.subscription) { //check if the object has a subscription AND coupon, and apply the 25% off total price and 10 dollars off
        result = (totalPrice - totalPrice / 4) - 10;
    }
    return result;
};

const timmyTotal = discount(timmy);
console.log(`Timmy, your grand total $${timmyTotal}`);//Outputs: Timmy, your grand total $65

const sarahTotal = discount(sarah);
console.log(`Sarah, your grand total $${sarahTotal}`);//Outputs: Sarah, your grand total $37.5

const rockyTotal = discount(rocky);
console.log(`Rocky, your grand total $${rockyTotal}`);//Outputs: Rocky, your grand total $102.5



