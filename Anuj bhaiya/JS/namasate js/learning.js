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

// !video 5 code

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

var test;
function outer(b)
{
    var a=10;
    function inner()
    {
        console.log(a,b);
    }
    return inner;
    // before the returning from the function clsure value and stored
}
var func=outer("yash");
console.log("this is second time use ");
console.log(func);
func();




