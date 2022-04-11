var max = maxNumber;
var min = minNumber;

function randomRangeNumber(minNumber,maxNumber){
    var num = Math.floor(Math.random() * (max - min + 1)) + min;
    if(minNumber >= min){
    return num;
} if (maxNumber <= max){
    return num;
}
}

console.log(randomRangeNumber(80, 60));

module.exports = randomRangeNumber;
