/* APPLY SAVED THEME */

if(localStorage.getItem("theme") === "light"){
    document.body.classList.remove("dark-mode");
} else {
    // default = dark
    document.body.classList.add("dark-mode");
}

/* WAIT FOR NAVBAR TO LOAD */

document.addEventListener("click", function(e){

if(e.target.closest(".dark-toggle")){

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){
localStorage.setItem("theme","dark");
}else{
localStorage.setItem("theme","light");
}

}

});