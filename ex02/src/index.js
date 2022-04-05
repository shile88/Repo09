function myFunction(myParameter){
    if(myParameter == 5){
        return "The parameter is true!";
    }
    return "The parameter is false!";
}

console.log(myFunction(5));

module.exports = myFunction;