const footerBasePath = window.location.pathname.includes("/pages/") ? "../" : "";

fetch("/pages/footer.html")
.then(response => response.text())
.then(data => {
document.getElementById("footer").innerHTML = data;
});