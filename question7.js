// 7. Write a function to convert age (in years) to the days. Assume that there are 365 days in 1 year.

function convertAgeToDays(age){
    return age * 365
}

console.log(convertAgeToDays(17))
console.log(`You are ${convertAgeToDays(17)} days old.`)