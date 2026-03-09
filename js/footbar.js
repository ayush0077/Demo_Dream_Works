const basePath = window.location.pathname.includes("/pages/") ? "../" : "";

fetch(basePath + "pages/footer.html")
.then(res => res.text())
.then(data => {
document.getElementById("footer").innerHTML = data;
});