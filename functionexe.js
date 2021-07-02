
const adult = function(age) {
    if (age >= 18); {
        return true;
    } else {
        return false;
    } 
};

const adult2 = function(age) {
   if (adult(age));{
    return 'Hello there';
}else{ 
    return 'Hi kiddo';
}
};

console.log (greet(44)); //hello there
console.log (greet (11)); //hello kiddo

const calculateVat = function (price, vatPrice){
    return price * (vatPrice / 100);
};

const priceWithVat = function (price, vatPrice){
    const VAT = calculateVat(price, vatPrice);
    return price + VAT;
};

console.log(priceWithVat(1000, 21)); //1210
console.log(priceWithVat(2, 9)); // 2.18

const basePriceCalc = function (priceWithVat, vatPercentage) {
    const basePrice = priceWithVat / ((100 + vatPercentage)/100);
    return basePrice;
};
const priceAndVat = function (priceWithVat, vatPercentage) {
    const basePrice = basePriceCalc(priceWithVat, vatPercentage);
    const VAT = priceWithVat - basePrice;
    return [basePrice, VAT];
}
console.log(priceAndVat(1210, 21)); // [1000, 210]
console.log(priceAndVat(2.18, 9)); //[2, 0.18]
