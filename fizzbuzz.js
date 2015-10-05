var printer = {
  phrase: 'Hello World!'
};

console.log(printer.phrase);

var fb = function(n) {
  if (n % 3 === 0) {
    console.log('Fizz');
  } else {
    console.log(n);
  }
}

fb(3);
fb(5);
