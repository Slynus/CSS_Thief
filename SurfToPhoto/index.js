let grid = document.getElementById("grid-container");
let imgHolderA = document.getElementById("img-holderA");
let imgHolderB = document.getElementById("img-holderB");
let imgHolderC = document.getElementById("img-holderC");
let imgHolderD = document.getElementById("img-holderD");
let imgHolderE = document.getElementById("img-holderE");
let aboutP = document.getElementById("about-p");
let shopP = document.getElementById("shop-p");
let portofolioP = document.getElementById("portofolio-p");
let socialP = document.getElementById("social-p");


aboutP.addEventListener("mouseover", switchOpacity);
aboutP.addEventListener("mouseout", switchOpacity);
shopP.addEventListener("mouseover", switchOpacity);
shopP.addEventListener("mouseout", switchOpacity);
portofolioP.addEventListener("mouseover", switchOpacity);
portofolioP.addEventListener("mouseout", switchOpacity);
socialP.addEventListener("mouseover", switchOpacity);
socialP.addEventListener("mouseout", switchOpacity);

function switchOpacity(event) {
    let imgHolder = document.getElementById(mapHolderP[event.target.id]);
    imgHolder.classList.toggle("opacitySwitch");
}
let mapHolderP = {
    "about-p": "img-holderB",
    "shop-p": "img-holderC",
    "portofolio-p": "img-holderD",
    "social-p": "img-holderE"
}