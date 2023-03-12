const toggler= document.getElementById("toggler");
const navMenu=document.getElementById("nav-links");

toggler.addEventListener("click",()=>{
    navMenu.classList.toggle("active")
});