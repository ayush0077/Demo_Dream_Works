const repoName = "Demo_Dream_Works";

const basePath = window.location.hostname.includes("github.io")
  ? `/${repoName}/`
  : "/";

const pagePath = window.location.pathname.includes("/pages/")
  ? "../"
  : "";

fetch(basePath + pagePath + "pages/navbar.html")
.then(res => res.text())
.then(data => {
  document.getElementById("navbar").innerHTML = data;
});