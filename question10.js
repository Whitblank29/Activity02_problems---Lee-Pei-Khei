// 10. Write a function to print first n fibonacci numbers. 
// In fobonacci sequence, next number is the sum of previous 2 number. 
// First 2 numbers in sequence are constant ; 0, 1 is constant in fibonacci sequence.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89....

const fib = [0, 1]

    for(let i=fib.length; i<13; i++) {
        fib[i] = fib[i-2] + fib[i-1];
    }
    console.log(fib); 