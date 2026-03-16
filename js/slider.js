const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const slider = document.querySelector(".slider-container");

let index = 0;
let autoSlide;

function showSlide(i){
    slides.forEach(slide => slide.classList.remove("active"));
    slides[i].classList.add("active");
}

function nextSlide(){
    index++;
    if(index >= slides.length){
        index = 0;
    }
    showSlide(index);
}

function prevSlide(){
    index--;
    if(index < 0){
        index = slides.length - 1;
    }
    showSlide(index);
}

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

/* AUTO SLIDE FUNCTION */

function startSlider(){
    autoSlide = setInterval(nextSlide, 4000);
}

function stopSlider(){
    clearInterval(autoSlide);
}

/* PAUSE ON HOVER */

slider.addEventListener("mouseenter", stopSlider);
slider.addEventListener("mouseleave", startSlider);

/* START SLIDER */

startSlider();

/* ---------------------- */
/* MOBILE SWIPE SUPPORT */
/* ---------------------- */

let startX = 0;
let endX = 0;

slider.addEventListener("touchstart", function(e){
    startX = e.touches[0].clientX;
});

slider.addEventListener("touchmove", function(e){
    endX = e.touches[0].clientX;
});

slider.addEventListener("touchend", function(){

    let diff = startX - endX;

    if(diff > 50){
        nextSlide();   // swipe left
    }

    if(diff < -50){
        prevSlide();   // swipe right
    }

});