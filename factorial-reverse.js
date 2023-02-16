function factorial(numbers){
    let result=1;
    for (let i=numbers; i>=1; i--){
        result= result*i;
        console.log(i);
        
    }
    return result;
}
const numbers=5;
const result =factorial(numbers);
console.log('factorial of :',numbers, result);