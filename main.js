const hamburger = document.querySelector(".hamburger");
const headerList = document.querySelector(".header-list");

hamburger.addEventListener("click",function(){
    hamburger.classList.toggle("active");
    headerList.classList.toggle("active");
});
const headerLinks = document.querySelectorAll(".header-list a");
headerLinks.forEach((header) => {
    header.addEventListener("click",function(){
        hamburger.classList.remove("active");
        headerList.classList.remove("active");
});
});

const topImages = document.querySelectorAll(".top-image");
let currentIndex = 0;
setInterval(() => {
    topImages[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % topImages.length;
    topImages[currentIndex].classList.add("active");
},5000);

const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");
const staffScroll = document.querySelector(".staff-scroll");
btnRight.addEventListener("click",function(){
    staffScroll.scrollBy({
    left: staffScroll.clientWidth,
    behavior:"smooth"
});
});
btnLeft.addEventListener("click",function(){
    staffScroll.scrollBy({
    left: -staffScroll.clientWidth,
    behavior:"smooth"
});
});
const btnView = document.querySelector(".btn-view");
const moreStyle = document.querySelector(".more-style");
btnView.addEventListener("click", ()=>{
    moreStyle.classList.toggle("show");
});

const menuImages = document.querySelectorAll(".menu-img");
let currentImage = 0;
setInterval(() => {
    menuImages[currentImage].classList.remove("active");
    currentImage = (currentImage + 1) % menuImages.length;
    menuImages[currentImage].classList.add("active");
},5000);

const sections = document.querySelectorAll("section");
const naviLinks = document.querySelectorAll(".header-list a");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const id = entry.target.id;
            naviLinks.forEach((link) => {
            link.classList.remove("active");
        });
    const activeLink = document.querySelector(`a[href="#${id}"]`);
    if (activeLink) {
    activeLink.classList.add("active");
        }
        }
    });
    },
    {
         rootMargin:"-40% 0px -40% 0px"
    }
);
sections.forEach((section) => {
    observer.observe(section);
});

const fadeItems = document.querySelectorAll(".fade-up");
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("show");
            fadeObserver.unobserve(entry.target);
        }
    });
});
fadeItems.forEach((item) => {
    fadeObserver.observe(item);
});
