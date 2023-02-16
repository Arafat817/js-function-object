function isLeapYear (year){
    const remainder =year%4;
    if(remainder==0){
        return true;
    }
    else{
        return false;
    }
}
const myYear=isLeapYear(2040);
console.log('My year: ', myYear);