const footerBasePath = window.location.pathname.includes("/pages/") ? "../" : "";

fetch(footerBasePath + "pages/footer.html")
.then(response => response.text())
.then(data => {
document.getElementById("footer").innerHTML = data;
});