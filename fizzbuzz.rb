def print
  puts 'Hello World!'
end

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

def age_check(age)
  if age < 21
    puts "too young"
  else
    puts "proceed.."
  end
end
