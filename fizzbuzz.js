// prints Hello World!
var printer = {
  phrase: 'Hello World!'
};

// console.log(printer.phrase);

// prints a number, Fizz, Buzz or FizzBuzz where n = max num
var fb = function(n) {
  x = 0;
  while (x <= n) {
    if (x % 15 === 0) {
      console.log('FizzBuzz');
    } else if (x % 5 === 0) {
        console.log('Buzz');
    } else if (x % 3 === 0) {
        console.log('Fizz');
    } else {
        console.log(x);
    }
    x += 1;
  }
};

// checks to see if someone is the age of 21
var age_check = function(age) {
  if (age < 21) {
    console.log('too young');
  } else {
    console.log('proceed');
  }
};

// Pigatize
