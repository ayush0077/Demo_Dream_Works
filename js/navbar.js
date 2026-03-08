fetch("/Demo_Dream_Works/pages/navbar.html")
.then(response => response.text())
.then(data => {
document.getElementById("navbar").innerHTML = data;
});