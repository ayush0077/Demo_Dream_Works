const repoName = "Demo_Dream_Works";

const basePath = window.location.hostname.includes("github.io")
  ? `/${repoName}/`
  : "/";

const pagePath = window.location.pathname.includes("/pages/")
  ? "../"
  : "";

fetch(basePath + pagePath + "pages/footer.html")
.then(res => res.text())
.then(data => {
  document.getElementById("footer").innerHTML = data;
});