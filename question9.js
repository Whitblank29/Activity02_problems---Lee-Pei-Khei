// 9. Write a function to print the factorial of number n. If n = 5, then factorial of 5 is 5 * 4 * 3 * 2 * 1. If n = 10, the factorial of 10 is 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1

// for loop version - (not for negative numbers)
function factorial(n){
    for(let i = n-1; i > 0 ;i--){
        n *=i;
    }
    return n;
}

console.log(factorial(10))


// if statement version - (suitable for all numbers)
function factorialize(num) {
    if (num < 0) 
          return (num * factorialize(num + 1));
    else if (num === 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }
  console.log(factorialize(-10));