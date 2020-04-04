const grid = document.getElementById("grid-container");
const imgHolderA = document.getElementById("img-holderA");
const imgHolderB = document.getElementById("img-holderB");
const imgHolderC = document.getElementById("img-holderC");
const imgHolderD = document.getElementById("img-holderD");
const imgHolderE = document.getElementById("img-holderE");
const aboutP = document.getElementById("about-p");
const shopP = document.getElementById("shop-p");
const portofolioP = document.getElementById("portofolio-p");
const socialP = document.getElementById("social-p");

aboutP.addEventListener("mouseover", switchOpacity);
aboutP.addEventListener("mouseout", switchOpacity);
shopP.addEventListener("mouseover", switchOpacity);
shopP.addEventListener("mouseout", switchOpacity);
portofolioP.addEventListener("mouseover", switchOpacity);
portofolioP.addEventListener("mouseout", switchOpacity);
socialP.addEventListener("mouseover", switchOpacity);
socialP.addEventListener("mouseout", switchOpacity);

function switchOpacity(event) {
    const imgHolder = document.getElementById(mapHolderP[event.target.id]);
    imgHolder.classList.toggle("opacitySwitch");
}
const mapHolderP = {
    "about-p": "img-holderB",
    "shop-p": "img-holderC",
    "portofolio-p": "img-holderD",
    "social-p": "img-holderE"
}

let canvas = document.getElementById('about-canvas');


// canvas.width = canvas.height * (canvas.clientWidth / canvas.clientHeight);
// Set the values from CSS setting. TO DO update this when using requestAnimationFrame for dynamic resizing
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;


console.log(canvas.width);

ctx = canvas.getContext('2d');

ctx.fillStyle = 'yellow';
ctx.fillRect(0, 0, 64, 64);