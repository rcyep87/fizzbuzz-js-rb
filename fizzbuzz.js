var printer = {
  phrase: 'Hello World!'
};

console.log(printer.phrase);

var fb = function(n) {
  if (n % 3 === 0) {
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
