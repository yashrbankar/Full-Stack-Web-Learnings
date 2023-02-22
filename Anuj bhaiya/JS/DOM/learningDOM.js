// !finding the element 

//? using id
// const byId=document.getElementById("box-3");
// console.log(byId);

//? using class name 

// const byclass=document.getElementsByClassName("box");//? this returns the HTML COLLECTION
// console.log(byclass);

//? using element 
// const bytag=document.getElementsByTagName("div");//? this returns the HTML COLLECTION
// console.log(bytag);
// console.log(bytag[7]);

// ? using css Query selector
// const byCssQ=document.querySelectorAll(".box");
// const byCssQ=document.querySelector(".box");
// const byCssQ=document.querySelectorAll("#box-2 strong");
// console.log(byCssQ);

//! DOM is basically used for runtime changes

//? chaning html 
document.getElementById("box-7").innerHTML= "<h3> INNER HTML CHANGED</h3>";
// ? changing the html attributes
document.getElementById("img1").src="https://via.placeholder.com/200";

// add/remove the class 
document.getElementById("box-6").classList.add("green");
document.getElementById("box-6").classList.remove("box");

// ?! creating the element at the runtime
const para= document.createElement("p");
const node=document.createTextNode("this is new");
para.appendChild(node);
const element=document.getElementById("box-3").appendChild(para);

// ?changing the style at runtime 
// !  for styling the kabab case is used !
// ! this will gives the error
// document.getElementById("box-5").style.border-radius="50%";
// ? this works fine
document.getElementById("box-5").style.borderRadius="50%";// camelcase




