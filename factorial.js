function factorial(numbers){
    let result=1;
    for(let i=1; i<=numbers; i++){
        result= result*i;
    }
    return result;
}

 let result= factorial(7);
console.log(result);