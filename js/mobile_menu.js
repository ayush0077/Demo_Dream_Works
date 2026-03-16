function initMobileMenu(){

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
const overlay = document.querySelector(".nav-overlay");

if(!toggle || !nav || !overlay){
console.log("Navbar elements not found");
return;
}

toggle.onclick = function(){
nav.classList.toggle("active");
overlay.classList.toggle("active");
};

overlay.onclick = function(){
nav.classList.remove("active");
overlay.classList.remove("active");
};

}

/* Wait until navbar loads */
setTimeout(initMobileMenu, 300);

const dropdowns = document.querySelectorAll(".dropdown > a");

dropdowns.forEach(drop => {
drop.addEventListener("click", function(e){
if(window.innerWidth <= 768){
e.preventDefault();
this.parentElement.classList.toggle("active");
}
});
});