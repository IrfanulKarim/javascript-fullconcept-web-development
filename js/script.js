// Defining Variable and function Part 1&2

var x= "Hello";
//   
console.log(x);


var message = "global message";
console.log("the value is "+message);

var a = function(){
    var message="irfanul";
    console.log(message);

    var b=function(){
        console.log(message);
    }
    b();
}
a();



