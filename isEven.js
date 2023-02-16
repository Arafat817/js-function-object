function isEven(number){
    const remainder= number%2;
    if(remainder==0){
        return true;
    }
    else{
        return false;
    }
}
// const myNum=isEven(98);
// console.log(' given number :' , myNum);
const myNum=isEven(117);
console.log('given number :' , myNum);