function inverseWhite(){
    var i = 5;
    var fiveNumbers = "";
    while (i >= 0){
        if (i == 0){
            fiveNumbers+= i; 
        } else{
            fiveNumbers+= i + ',';
        }
        i--;
    }
    return fiveNumbers;
}

console.log(inverseWhite());
module.exports = inverseWhite;