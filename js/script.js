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


// function factory

// function makemultiplier(multiplier){
//     var myfunc=function(x){
//         return multiplier*x;
//     };
//     return myfunc;
// }

// var multiplyby3=makemultiplier(3);
// console.log(multiplyby3(5));

// // passing function by arguments

// function DoOperation(x, operation){
//     return operation(x);
// }

// var result=DoOperation(10,multiplyby3);
// console.log(result);


// 
// 
// 
// End 
// 
// 
// 


// pass by value vs pass by reference 

// var a=4;
// var b;
// b=a;
// console.log(a);
// console.log(b);

// console.log("after update");

// b=10;
// console.log(a);
// console.log(b);



// var a={x:7};
// var b;
// b=a;

// console.log(a.x);
// console.log(b.x);

// console.log("after update");

// b.x=200;

// console.log(a.x);
// console.log(b.x);



// // pass by value

// function passByValue(value){
//     console.log("Before passbyvalue a is "+value);

//     value=5;
//     console.log("aftre change value is "+value);

// }

// var a=10;
// passByValue(a);
// console.log("But after passbyvalue a is "+a);


// // pass by reference

// function passByrefence(object){
//     console.log("value is "+object.x);

//     object.x=5;
//     console.log("after change object value is");
//     console.log(object);

// }

// var b={x:10};
// passByrefence(b);
// console.log("after passbtrefernce b object value is ");
// console.log(b);

// 
// 
// 
// End 
// 
// 
// 

// function Constructor

// function test(){
//     console.log(this);
//     this.myname="irfan";
// }
// test();
// console.log(window.myname);

// function Circle(radius) {
//     this.radius=radius;
//     console.log(this.radius);
// }

// Circle.prototype.getArea=
//     function(){
//         return this.radius*2;
//     };

// var myCircle = new Circle(10);
// console.log(myCircle);

// var othercircle = new Circle(20);
// console.log(othercircle);

// 
// 
// 
// End 
// 
// 
// 

// Objective Literal and this keyword

// var literalCircle =  { //new object
//     radius: 10,

//     getArea: function () {
//         console.log(this);
//         var self = this;
//         var increaseradius = function () {
//           self.radius = 20;  
//         };
//         increaseradius();

//         console.log("change radius value "+this.radius);
//         return this.radius*2;
//     }

// };

// console.log(literalCircle.getArea());

// 
// 
// 
// End 
// 
// 
// 

// arrays part 1

// var array = new Array();
// array[0] = "irfan";
// array[1] = 26;
// array[2] = function (name){
//     console.log(name);
// };
// array[3] = {course: "HTML CSS JS"};

// console.log(array[0]);
// console.log(array[1]);
// array[2]("karim");
// array[2](array[0]);
// console.log(array[3].course);

// // Short Hand array creation

// var names = ["Muhammad","Irfanul","Karim"];
// console.log(names);

// for (var i=0; i<names.length; i++){
//     console.log("Hello "+names[i]);
// }

// names[100] = "sadia apu";
// for(i=0;i<names.length;i++){
//     console.log("hii "+names[i]);
// }

// var student = [
//     {name: "irfan"},
//     {name: "ehsan"},
//     "Imran"
// ]
// console.log(student);

// 
// 
// 
// End 
// 
// 
// 

// arrays part 2

// var names ={        //literal obj
//     name1: "irfan",
//     name2: "KARIM"
// }

// for(var prop in names){
//     console.log(prop+": "+names[prop]);
// }

// var student = [     //array
//     "imran",
//     "ehsan",
//     "irfan"
// ];

// for (var name in student){
//     console.log("Name is "+student[name]);
// }

// student.class = 5; //property

// for (var name in student){
//     console.log("name is "+student[name]);
// }

// 
// 
// 
// End 
// 
// 
//

// closures

// function makemultiplier(multiplier) {

//     console.log(multiplier);

//     return(
//         function (x) {
//             return multiplier*x;
//         }
//     );    
// }

// var doubleall = new makemultiplier(2);
// console.log(doubleall(10));



// 
// 
// 
// End 
// 
// 
//


// fake namespace
// johngreeter.sayhi();
// smithgreeter.sayhello();

// 
// 
// 
// End 
// 
// 
//

// Immedietly Invoked Function Expressions
// IIFE
// (function (name){
//     console.log("Assalamul Aykum "+name);
// })("irfan");

// johngreeter.sayhi();
// smithgreeter.sayhello();

// 
// 
// 
// End 
// 
// 
//