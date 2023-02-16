function milesToKm (miles){
    const km= miles* 1.60934;
    return km;

}
const journeyMiles = 2;
const journeykm= milesToKm(journeyMiles);
console.log(journeykm);