// 3. Write a function to print all even numbers till n

function evenNumbers(n){
    for(let i = 0; i <= n; i++){
        if (i % 2 === 0){
            console.log(i)
        }
    }
}
evenNumbers(10)