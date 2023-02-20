// ! Complete Namasate Js code

// var a=10;
// var b=8;
// function add()
// {
//     console.log(a);
//     console.log(b);
//     console.log("yashbankar");
//     return a+b;
// }
// console.log(add());
// var sub=function()
// {
//     console.log('sub function is called');
// }

// video 5 code

// var x=1;
// a();
// b();
// console.log(x);

// function a()
// {
//     var x=10;
//     console.log(x);
// }
// function b()
// {
//     var x=100;
//     console.log(x);
// }

//!video 6 : shortest js program 

// window
// this===window
// this

// console.log(a); // // undefined
// a=2;
// console.log(a);//// 2
// // var a=3;
// var a;
// console.log(a);//// 3

// !block scope shadowing

// var a=100;
// {
//     var a=10;
//     let b=20;
//     const c=30;
//     console.log(a);
//     console.log(b);
//     console.log(c); 
// }
// console.log(a);

// !closures:

// var a=function x()
// {
//     let a=15;
//     function y()
//     {
//         console.log(a);
//     }
//     y();
//     a=25;
//     return a;
// }

// var z=a();var z=a();

// console.log(a);
// // z();
// a();


// !settimeout

//? case 1
// function x()
// {
//     for(var i=1;i<=5;i++)
//     {
//         setTimeout(function()
//         {
//             console.log("------");
//             console.log(i);
//             console.log("------");
//         },i*1000)
//     }
//     console.log("Namaste js");
// }
// x();
//? case 2 with let
// function x()
// {
//     for(let i=1;i<=5;i++)
//     {
//         setTimeout(function()
//         {
//             console.log("------");
//             console.log(i);
//             console.log("------");
//         },i*1000)
//     }
//     console.log("Namaste js");
// }
// x();

//?case 3 with var and function 

// function x()
// {
//     for(var i=1;i<=5;i++)
//     {
//         function close(x)
//         {
//             setTimeout(function()
//             {
//                 console.log("------");
//                 console.log(x);
//                 console.log("------");
//             },x*1000);
//         }
//         close(i);
//     }
//     console.log("Namaste js");
// }
// x();


// ! Closure with examples

// var test;
// function outermost()
// {
//     return function outer(b)
//     {
//         let x=100;
//         var a=10;
//         function inner()
//         {
//             console.log(a,b,x);
//         }
//         inner();
//         // before the returning from the function clsure value and stored
//     }
// }
// var func=outermost()("fuck");//? the parameter of ()outer()
// console.log("this is second time use ");
// // func();
// console.log(func);

//! call back function in js
// ? it is responsible for asychrous nature of js

// setTimeout(function(){console.log("timer")},5000);

// var x=function(y){
//     console.log("x");
//     y();
// }

// x(function(){console.log("y called");});

// ? event lessner
// var count=0;
// !
// var count=0;
// document.getElementById("clickMe").addEventListener("click",function xyz(){
//     console.log("clicked",++count);
// });
//? data hiding 

// function attachEventListener()
// {
//     var count=0;
//     document.getElementById("clickMe").addEventListener("click",function xyz(){
//         console.log("clicked",++count);
//     });
// }
// attachEventListener();

//!event loop theory part 

//! trush issue with the setTimeout()

// console.log("started");
// setTimeout(function(){console.log("timer")},5000);
// console.log("ended");
// //? 1M lines of code to check this hypothesis
// let startDate=new Date().getTime();
// let endDate=startDate;
// while(endDate<startDate+10000)
// {
//     endDate=new Date().getTime();
// }
// //? this code works this 10 sec 
// console.log("while_ended");

//? output
// *started
// *learning.js:194 ended
// *learning.js:203 while_ended
// *learning.js:193 timer


//! setTimeout(0) (interview Q)

// console.log("started");
// setTimeout(function(){console.log("timer")},0);
// console.log("ended");

// this is basically used for runing the code at the end 
//  after main thread compiltion 
// ? Output:
//* start 
//* end 
//* timer

// ! Higher order function is js
// ? interview Q: write the code to find area of circle , circumfernce of circle , diameter of circle

//! code is correct bt not recommeded

// let radius=[1,2,3,4];

// function calculateDiameter()
// {
//     let output=[];
//     for(let i=0;i<radius.length;i++)
//     {
//         output.push(2*radius[i]);
//     }
//     return output;
// }

// console.log(calculateDiameter());

// function calculateArea()
// {
//     let output=[];
//     for(let i=0;i<radius.length;i++)
//     {
//         output.push(Math.PI*radius[i]*radius[i]);
//     }
//     return output;
// }

// console.log(calculateArea());

// function calculatecirm()
// {
//     let output=[];
//     for(let i=0;i<radius.length;i++)
//     {
//         output.push(2*Math.PI*radius[i]);
//     }
//     return output;
// }

// console.log(calculatecirm());
// ! this code doesnot follow DRY DONT REPEAT CODE PRICIPAL
 // ? Expected from you

// let radius=[1,2,3,4];
// let area=function(rad)
// {
//     return Math.PI*rad*rad;
// }
// let cirm=function(rad)
// {
//     return 2*Math.PI*rad;
// }
// let dia=function(rad)
// {
//     return 2*rad;
// }
// // ? impletmation of map similar
// Array.prototype.calculate=function (comp)
// {
//     let output=[];
//     for(let i=0;i<radius.length;i++)
//     {
//         output.push(comp(radius[i]));
//     }
//     return output;
// }

// console.log(radius.map(area));
// console.log("map");
// console.log(radius.calculate(area)); // this function is availble for arrays now
// console.log(calculate(area));

// console.log(calculate(cirm));
// console.log(calculate(dia));

