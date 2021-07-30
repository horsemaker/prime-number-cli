var readlineSync = require('readline-sync')

var number = parseInt(readlineSync.question("Enter a number: "))
var primeFlag = true

function checkPrime() {
  if (number === 1) {
    console.log("1 is neither prime nor composite.")
    return
  } else if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        primeFlag = false
        break
      }
    }

    if (primeFlag) {
      console.log(`${number} is a prime number! :)`)
    } else {
      console.log(`${number} is not a prime number! :(`)
    }
  }
}

checkPrime()