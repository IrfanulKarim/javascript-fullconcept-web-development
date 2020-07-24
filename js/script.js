// // Defining Variable and function Part 1&2

// var x= "Hello";
// //   
// console.log(x);


// var message = "global message";
// console.log("the value is "+message);

// var a = function(){
//     var message="irfanul";
//     console.log(message);

//     var b=function(){
//         console.log(message);
//     }
//     b();
// }
// a();

// JS Types part 1&2

// var y;
// function a(){
//     console.log(y);
// }
// a();

// if(y==undefined){
//     console.log("y undefined");
// }

// y=5;
// if(y==undefined){
//     console.log("undefined");
// }
// else{
//     console.log("defined");
// }

// console.log(z);

// Common language construct part 1,2,3

var string = "hello";
string+="world";
console.log(string);

console.log(4/2);
console.log(undefined/0);

function test (a){
    console.log(a/4);
}
test();

var a="2" ,b=2;
if (a==b){
    console.log("equal");
}
if(a===b){
    console("equal");
}
else{
    console.log("not equal");
}

if(false||undefined||null||0||""||NaN){
    
}
else{
    console.log("false");
}

if(true&&1&&-1&&"false"&&"hi"){
    console.log("true");
}

// undefined 
// {} shouldnot line break
function q()
{
    return
    {
        console.log("hi")
    }
}
console.log(q());