let grid = document.getElementById("grid-container");
let imgHolderA = document.getElementById("img-holderA");
let imgHolderB = document.getElementById("img-holderB");
let imgHolderC = document.getElementById("img-holderC");
let aboutP = document.getElementById("about-p");
let shopP = document.getElementById("shop-p");
let portofolioP = document.getElementById("portofolio-p");
let socialP = document.getElementById("social-p");


aboutP.addEventListener("mouseover", backgroundOnB);
aboutP.addEventListener("mouseout", backgroundOffB);
shopP.addEventListener("mouseover", backgroundOnC);
shopP.addEventListener("mouseout", backgroundOffC);


// TO DO event handler. Extract id from event, look up css class and change it 

let bgHolderA = 1; // Default bg
let bgHolderB = 0; // No bg
let bgHolderC = 0; // No bg

function backgroundOnB() {
    imgHolderB.classList.add("background-2");
    imgHolderB.classList.toggle("opacitySwitch");
}

function backgroundOffB() {
    // imgHolderB.classList.toggle("background-2");
    imgHolderB.classList.toggle("opacitySwitch");
}

function backgroundOnC() {
    imgHolderC.classList.add("background-3");
    imgHolderC.classList.toggle("opacitySwitch");
}

function backgroundOffC() {
    // imgHolderB.classList.toggle("background-2");
    imgHolderC.classList.toggle("opacitySwitch");
}