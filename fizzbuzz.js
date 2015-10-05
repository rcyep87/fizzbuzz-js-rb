var printer = {
  phrase: 'Hello World!'
};

// console.log(printer.phrase);

var fb = function(n) {
  if (n % 15 === 0) {
    console.log('FizzBuzz');
  } else if (n % 3 === 0) {
      console.log('Fizz');
  } else if (n % 5 === 0) {
      console.log('Buzz');
  } else {
      console.log(n);
  }
}

var age_check = function(age) {
  if (age < 21) {
    console.log('too young');
  } else {
    console.log('proceed');
  }
}
age_check(19);
age_check(22);
