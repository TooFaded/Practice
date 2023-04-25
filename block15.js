const customer = {
    firstName: 'jake',
    lastName: 'smith',
    email: 'jaekSmih!aol.com',
    phone: undefined,
    zipCode: '631',
    favoriteFlavors: 32,
    cupSize: 'medium',
    favoriteStore: 'Target',
    firstVisit: false
};


console.log(customer.email);

customer.email = 'Jak3Smith1992@email.com';
customer.phone = 3195551234;
customer.zipCode = '63132';
customer.favoriteFlavors = ['coffee', 'strawberry', 'matcha'];

console.log(customer.email);
console.log(customer.phone);
console.log(customer.zipCode);
console.log(customer.favoriteFlavors);


delete customer.zipCode;
delete customer.favoriteStore;

customer.toppings = ['chocolate sprinkles', 'wafer straws', 'gummy bears'];
customer.furtureFlavors = 'mango';
customer.todaysPruchaseCost = 5.32;

console.log(customer);


for(key in customer) {
    console.log(key, customer[key]);

}