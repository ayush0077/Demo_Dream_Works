const repoName = "Demo_Dream_Works";

const basePath = window.location.hostname.includes("github.io")
  ? `/${repoName}/`
  : "/";

let pagePath = "";

if (window.location.pathname.includes("/pages/projects/")) {
  pagePath = "../../";
} 
else if (window.location.pathname.includes("/pages/")) {
  pagePath = "../";
}

fetch(basePath + pagePath + "pages/navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
  });