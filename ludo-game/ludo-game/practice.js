'use strict';
// const bookings = [];
// const createBooking = function(flightNum, numPassengers = 1, price = 199*numPassengers){
    // ES5 
    // numPassenger = numPassenger|| 1;
    // price = price || 199;
    
//     const booking = {
//         flightNum,
//         numPassengers,
//         price,
//     }
//     console.log(booking)
//     bookings.push(booking)
// };
// createBooking('LH1234')
// createBooking('LH123', 3, 4000)

// const flight = 'Lh123'
// const jonas = {
//     name: 'sudha kumari',
//     passport: 24798956409,
// };
// const checkIn = function (flightNum , passenger){
//     flightNum = 'LH234'
//     passenger.name = 'miss' + passenger.name;
//     if(passenger.passport ===  24798956409){
//         console.log('checked in')
//     }
//     else{
//         console.log('wrong password')
//     }
// }
// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const oneWord = function(str){ 
//     return str.replace(/ /g, '').toLowerCase();

// };
// const upperFirstword = function(str){
//     const [first, ...others] = str.split('');
//     return[first.toUpperCase(), ...others].join('')
// };
// // heigher order function
// const transformer = function(str, fn){
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`)
//     console.log(`Transfored by: ${fn.name}`)
// };
// transformer('Javascript is the best!', upperFirstword);
// transformer('Javascript is the best', oneWord);
// // js uses callbacks all the times
// const high5 = function(){
//     console.log('emoji')
// }
// document.body.addEventListener('click',high5);
// ['jones', 'marths', 'adam'].forEach(high5)

// const greet = function(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`);

//     };
// };
// const greeterHey = greet('hey');
// greeterHey('jonas');
// greeterHey('steven');
// greet('hello')('jonas')
// // challenge
// const greetArr = greeting => name =>console.log(`${greeting} ${name}`);
// greetArr('hi')('jonas');

//closer function
// const secureBooking = function(){
//     let passengerCount = 0;
// const let passengerCount: number{
    
//     return function(){
//         passengerCount++;
//         console.log(`${passengerCount} passengers`)

//     };
// };
// const booker = secureBooking();
// booker()
// booker()
// booker()

// conversion
console.log(Number('23'))
console.log(+'23')
// parsing
console.log(Number.parseInt('30px',10))
console.log(Number.parseInt('e23',10))

console.log(Number.parseInt('2.5rem'))
console.log(Number.parseFloat('2.5rem'))

console.log(Number.isNaN(20))
console.log(Number.isNaN('30'))
console.log(Number.isNaN(+'20x'))
console.log(Number.isNaN(23/0))
//checking if value is number
console.log(Number.isFinite(20))
console.log(Number.isFinite('20'))
console.log(Number.isFinite('20px'))

const now = new Date();
console.log(now)
console.log(new Date('2021-12-10T05:20:54.030Z'));
