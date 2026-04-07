/* APPLY SAVED THEME */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
} else {
    document.body.classList.remove("dark-mode"); // default = light
}

/* TOGGLE */

document.addEventListener("click", function(e){

    if(e.target.closest(".dark-toggle")){

        const isDark = document.body.classList.toggle("dark-mode");

        localStorage.setItem("theme", isDark ? "dark" : "light");
    }

});