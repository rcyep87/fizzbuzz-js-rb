var printer = {
  phrase: 'Hello World!'
};

console.log(printer.phrase);

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

fb(3);
fb(4);
fb(5);
fb(6);
fb(15);
fb(16);
fb(17);
fb(30);
