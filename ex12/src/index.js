function logicOrder(num){
    if(num < 50){
        return "Less then 50";
    } else if (num < 100){
    return "Less then 100";
    } else if (num >= 100){
        return "Greater then or equal to 100";
    }
}

console.log(logicOrder(28));
console.log(logicOrder(60));
console.log(logicOrder(100));

module.exports = logicOrder;