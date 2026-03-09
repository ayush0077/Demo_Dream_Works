const basePath = window.location.pathname.includes("/pages/") ? "../" : "";

fetch(basePath + "pages/navbar.html")
.then(res => res.text())
.then(data => {
document.getElementById("navbar").innerHTML = data;
});