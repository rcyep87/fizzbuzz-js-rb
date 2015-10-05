# prints "Hello World!"
puts 'Hello World!'

def run_fb(n)
  fizz(buzz(fizzbuzz(n)))
end

def fizz(n)
  return 'Fizz' if (n % 3) == 0
  return n
end

def buzz(n)
  return 'Buzz' if (n % 5) == 0
  return n
end

def fizzbuzz(n)
  return 'FizzBuzz' if (n % 15) == 0
  return n
end
