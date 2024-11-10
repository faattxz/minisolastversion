// JavaScript Document
console.log("hi");

const carousel = document.querySelector('main section:nth-of-type(2) ol');
let scrollAmount = 0;
const scrollSpeed = 1;  

function autoScrollCarousel() {
    scrollAmount += scrollSpeed;
    if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
        scrollAmount = 0;  
    }
    carousel.scrollTo({
        left: scrollAmount,
        behavior: 'auto'  
    });
}

if (carousel) {
    setInterval(autoScrollCarousel, 16);
}


// met behulp van chatgpt.com
var menuButton = document.querySelector("nav button");

// Voeg een klik event toe aan de menu-knop
menuButton.onclick = function() {
    // Toggle de 'toonMenu' class op de nav om het menu te tonen of te verbergen
    document.querySelector("nav").classList.toggle("toonMenu");
};

// Bonus: sluit menu met Escape-toets
window.onkeydown = function(event) {
    if (event.key === "Escape") {
        document.querySelector("nav").classList.remove("toonMenu");
    }
};

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (prefersDarkScheme) {
    document.body.classList.add("dark-mode");
} else {
    document.body.classList.remove("dark-mode");
}

// met behulp van chatgpt



