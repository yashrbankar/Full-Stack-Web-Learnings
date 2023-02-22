const toggler= document.getElementById("toggler");
const navMenu=document.getElementById("nav-links");

console.log(navMenu);
console.log(toggler);
toggler.addEventListener("click",()=>{
    navMenu.classList.toggle("active")
});