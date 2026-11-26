// TODO: Create a function called ‘multiply’ that will take in 3 parameter and multiply all 3 numbers together. Note: The argument passed must NOT be the same number.
function multiply(a,b,c){
    return a*b*c
}

// TODO: Create a function expression called ‘convertToSeconds’ that takes in a number of minutes as an argument and returns the amount in seconds. ***Do not use a console.log() inside of the function***
function convertToSeconds(n){
    return n*60
}

// TODO: Create a function called fahrenheitToCelsius that takes the temperature as an parameter and returns the equivalent temperature in Celsius. ***Do not use a console.log() inside of the function***
function fahrenheitToCelsius(f){
    return ((f-32)/1.8)
}

// TODO: Create a function that takes a string as a parameter and returns the reverse of the string. ***Do not use a console.log() inside of the function ***
function reverse(str){
    return str.split("").reverse().join("");
}
// console.log(reverse("random"))

// TODO: Create a function that takes in a string and returns the number of Vowels in the sentence. E.g. countVowels(‘Javascript’) //output =3 console.log() inside of the function*** ***Do not use a

function countVowels1(str){
    let arr = str.split("")
    let n = 0
    for(let i=0; i<str.length; i++){
        if (arr[i]== "a" || arr[i]== "e" || arr[i]== "i" || arr[i]== "o" || arr[i]== "u"){
            n++
        }
    }
    return ("Number of vowels = " + n)
}

function countVowels2(str) {
  let n = 0;

  for (const letter of str.toLowerCase()) {
    if ("aeiou".includes(letter)) {
      n++;
    }
  }

  return n;
}

// console.log(countVowels1("random"))
// console.log(`Number of vowels = ${countVowels2("random")}`);

// TODO: Create a “isPrime” function that takes a number as a parameter and returns true if the number is prime, and false otherwise. Make sure to test your code with 4 numbers
function isPrime(n){
    if(n<=1){
        return false
    } else {
        for (let i=2; i<n; i++){
            if(n%i === 0){
                return false
                break;
            }
        }
    }
    return true
}

// console.log(isPrime(1009))