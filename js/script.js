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


// 
// 
// 
// End 
// 
// 
//

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




// 
// 
// 
// End 
// 
// 
//




// Common language construct part 1,2,3

// var string = "hello";
// string+="world";
// console.log(string);

// console.log(4/2);
// console.log(undefined/0);

// function test (a){
//     console.log(a/4);
// }
// test();

// var a="2" ,b=2;
// if (a==b){
//     console.log("equal");
// }
// if(a===b){
//     console("equal");
// }
// else{
//     console.log("not equal");
// }

// if(false||undefined||null||0||""||NaN){
    
// }
// else{
//     console.log("false");
// }

// if(true&&1&&-1&&"false"&&"hi"){
//     console.log("true");
// }


// 
// 
// 
// End 
// 
// 
//


// // undefined 
// // {} shouldnot line break
// function q()
// {
//     return
//     {
//         console.log("hi")
//     }
// }
// console.log(q());


// 
// 
// 
// End 
// 
// 
//

// // handling default values
// function order(dish){
//     dish= dish || "fuska";
//     console.log("food is "+dish);
// }
// order("sinagar");
// order();


// 
// 
// 
// End 
// 
// 
//

// // hello will print 2 times
// // because console.log in if, will print hello in console but it will not return any value 
// // thats why it will be undefineds.
// var w=10;
// if (null || console.log("hello") || w>5 ){
//     console.log("hello")
// }

// 
// 
// 
// End 
// 
// 
// 

// Creating Object using new object syntax

// var company=new Object();
// company.name="karim";
// company.address="Chittagong";

// console.log(company);

// company.employee=new Object();
// company.employee.name="irfan";
// console.log("Employee name is "+company.employee.name);

// company.$employeesalary=11000;
// console.log("Salary is "+company.$employeesalary);

// company["employeage"]=30;
// console.log("Age is "+company["employeage"]);

// console.log("Company name is "+company["name"]);

// var number="employeNumber";
// company["number"] = 35;
// console.log("Employee Number is "+company["number"]);

// 
// 
// 
// End 
// 
// 
// 

// Better way: create object using object literal

// var facebook= {
//     name: "irfanul karim",
//     age: 25,
//     friends:{
//         firstF:"manjir",
//         secondF:"tanu"
//     },
//     year: 2011

// };
// console.log(facebook);
// console.log(facebook.friends.secondF);


// 
// 
// 
// End 
// 
// 
// 

