# prints Hello World
def print
  puts 'Hello World!'
end

# FizzBuzz
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

# Age Check
def age_check(age)
  if age < 21
    puts "too young"
  else
    puts "proceed.."
  end
end

# Pigatize
def pigatize(text)
  if starts_with_vowel?(text)
    text + "way"
  else
    text[1..-1] + text[0] + "ay"
  end
end

def starts_with_vowel?(text)
  %w( a e i o u ).include?(text[0])
end
