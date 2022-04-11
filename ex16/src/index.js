function switchCaseSequential(num){
    var answer = "";
    switch(true){
        case num == 1: 
            answer = "Low";
            break;
        case num == 2: 
            answer = "Low";
            break;
        case num == 3: 
            answer = "Low";
            break;
        case num == 4: 
            answer = "Mid";
            break;
        case num == 5: 
            answer = "Mid";
            break;
        case num == 6: 
            answer = "Mid";
            break;
        case num == 7: 
            answer = "High";
            break;
        case num == 8: 
            answer = "High";
            break;
        case num == 9: 
            answer = "High";
            break;
    }
    return answer;
}

console.log(switchCaseSequential(1));
console.log(switchCaseSequential(2));
console.log(switchCaseSequential(3));
console.log(switchCaseSequential(4));
console.log(switchCaseSequential(5));
console.log(switchCaseSequential(6));
console.log(switchCaseSequential(7));
console.log(switchCaseSequential(8));
console.log(switchCaseSequential(9));

module.exports = switchCaseSequential;

