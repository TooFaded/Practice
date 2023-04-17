
// function that takes in an array 
function odd(arr) {
    const oddArr = [];
    // iterates through array
    for(let i = 0; i < arr.length; i++) {
        // checks for even integers then removes them
        if(arr[i] % 2 !== 0) {
            oddArr.push(arr[i]);
        }
    }
    // then prints new odd array
    console.log(oddArr);
}

//inputs to test
let firstArr = [2, 4, 6, 8, 11, 20, 15, 22];
let secondArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let thirdArr = [70, 42, 55, 81, 21, 91, 34];
let fourthArr = [2, 4, 6, 8, 10, 11, 12];


odd(firstArr);
odd(secondArr);
odd(thirdArr);
odd(fourthArr);


//function that take in a word
function vowelVSConstant(word) {
    // counter varibles to keep count of vowels and constants
    let constCounter = 0;
    let vowelCounter = 0;
    ///creates an array of characters from word
    let letterArray = word.split('')
    // iterates through array and checks if character is a vowel than increments counters
    for(let i = 0; i < letterArray.length; i++) {
        if(letterArray[i] === 'a' || letterArray[i] === 'e' || letterArray[i] === 'i' || letterArray[i] === 'o' || letterArray[i] === 'u') {
            vowelCounter++;
        } else {
            constCounter++;
        }
    }
    // prints results
    console.log(word + ` has ${constCounter} constants and ${vowelCounter} vowels`);
}


vowelVSConstant('hello');
vowelVSConstant('ukelele');
vowelVSConstant('awesome');
vowelVSConstant('onomonopia');
vowelVSConstant('textbook');


// function takes in an array and creates reversed array
function reversedArr(arr) {
    let reversed = arr.reverse();
    console.log(reversed);
}

//inputs to test
let array = [1, 2, 3];
let secondArray = [1, 3, 5, 7, 9, 11];
let thirdArray = [20, 50, 30, 60, 200];
let fourthArray = [1, -1, 2, -3, 5, -8, 13];

reversedArr(array);
reversedArr(secondArray);
reversedArr(thirdArray);
reversedArr(fourthArray);



// function prints each number from 1 to 100 on a new line
function fizzBuzz() {

    for(let i = 3; i <= 100; i++) {
        // For numbers that are multiples of both 3 and 5, print "FizzBuzz" instead of the number
        if(i % 3 === 0 && i % 5 === 0) {
            console.log('Fizz Buzz', i)
        // For each multiple of 3, print "Fizz" instead of the number
        } else if (i % 3 === 0) {
            console.log('Fizz', i);
        //For each multiple of 5, print "Buzz" instead of the number
        } else if(i % 5 === 0) {
            console.log('Buzz', i);
        }
    }
}

fizzBuzz();



