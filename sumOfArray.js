function getSumOfArray (numbers){
    let sum =0;
     for (let i=0;  i<numbers.length; i++)
      {

        const index=i;
        const elements= numbers[index];
        sum = sum + elements;
        console.log(index,elements, sum); 
      }
      return sum;
}
const myNumbers =[12, 65, 45, 78, 65, 91, 73, 90];
getSumOfArray(myNumbers);