
function openProject(img){

const modal = document.getElementById("projectModal");

document.getElementById("modalImage").src = img.dataset.full;
document.getElementById("modalTitle").innerText = img.dataset.title;
document.getElementById("modalDescription").innerText = img.dataset.description;

const location = img.dataset.location;
const year = img.dataset.year;

if(document.getElementById("modalLocation")){
document.getElementById("modalLocation").innerText = location || "";
}

if(document.getElementById("modalYear")){
document.getElementById("modalYear").innerText = year || "";
}

modal.style.display = "flex";
}


function closeProject(){
document.getElementById("projectModal").style.display = "none";
}



document.querySelectorAll(".project-card").forEach(card => {

const img = card.querySelector("img");

if(!img) return;

const title = img.dataset.title;

const titleElement = card.querySelector(".project-title");

if(titleElement){
titleElement.textContent = title;
}

});


// MODAL ELEMENTS
const modal = document.getElementById("projectModal");
const modalContent = document.querySelector(".modal-content");



modal.addEventListener("click", function(e){

if(!modalContent.contains(e.target)){
closeProject();
}

});


modalContent.addEventListener("click", function(e){
e.stopPropagation();
});



document.addEventListener("keydown", function(e){

if(e.key === "Escape"){
closeProject();
}

});