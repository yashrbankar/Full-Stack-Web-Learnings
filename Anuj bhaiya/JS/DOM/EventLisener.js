// const box=document.getElementById("box-1");
// console.log(box);
// let count=0;
// const countClick=(event)=>
// {
//     console.log("botton clicked ::",++count);
//     console.log(event);
// }
// box.addEventListener("click",countClick);

//  ! use of event and adding html tag at run time
// const box=document.getElementById("box-1");
// console.log(box);
// let count=0;
// const coordinates=document.createElement("h1"); // used for the creating html at run time
// document.body.appendChild(coordinates);// location of this html element 
// const countClick=(event)=>
// {
//     console.log("botton clicked ::",++count);
//     console.log(event); 
//     coordinates.innerHTML=`${event.offsetX} ${event.offsetY}`;// what is inside the h1 created child;
// }
// box.addEventListener("mousemove",countClick);

//! circle moving in box
const box=document.getElementById("box-1");
function MoveCircle(event)
{
    // console.log(event);
    box.style.left=`${event.offsetX}px`;
    box.style.top=`${event.offsetY}px`;
}
const coordinates=document.createElement("h1"); // used for the creating html at run time
con.addEventListener("mousemove",MoveCircle)



