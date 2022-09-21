// 2. Write a function to print all odd numbers till n
// 1st attempt (simple version)
const x = [1,2,3,4,5,6,7,8,9,10]

let filtered = x.filter(function oddNumbers(x){
    return x % 2 !== 0
})

console.log(filtered)

// 2nd attempt (failed - only shows boolean value)

// let filtered = (function oddNumbers(i){
//     return i % 2 !== 0 
// })

// for(let i = 1; i <= 10; i++){
//     // console.log(i)
//     console.log(filtered(i))
// }

// 3rd attempt (learn from the Internet)
function oddNumbers(n){
    for (let i = 1; i <= n; i++){
        if (i % 2 !== 0){
            console.log(i)
        }
    }
}
oddNumbers(10)