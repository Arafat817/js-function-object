function inchTofeet(inches){
    const feet= inches/12;
    return feet;
}
const playerHeight = 84;
const playerFeet = inchTofeet(playerHeight);
console.log(playerFeet);