function myForLoop1(){
    for (var i = 0; i < 10; i = i / 2){
        console.log(i);
    }
}

function myForLoop2(){

}

myForLoop1();
myForLoop2();

module.exports = {
    myForLoop1,
    myForLoop2
};