let grid = document.getElementById("grid-container");
let imgHolderA = document.getElementById("img-holderA");
let imgHolderB = document.getElementById("img-holderB");
let aboutP = document.getElementById("about-p");
let shopP = document.getElementById("shop-p");
let portofolioP = document.getElementById("portofolio-p");
let socialP = document.getElementById("social-p");


aboutP.addEventListener("mouseover", backgroundOn);
aboutP.addEventListener("mouseout", backgroundOff);
shopP.addEventListener("mouseover", backgroundOn2);
shopP.addEventListener("mouseout", backgroundOff2);


// TO DO event handler. Extract id from event, look up css class and change it 

let bgHolderA = 1; // Default bg
let bgHolderB = 0; // No bg

function backgroundOn() {
    imgHolderB.classList.remove("background-2");
    imgHolderB.classList.add("background-1");
    imgHolderB.classList.toggle("img-holder-anim");
    imgHolderA.classList.toggle("img-holder-anim");
}

function backgroundOff() {
    // imgHolderB.classList.toggle("background-2");
    imgHolderB.classList.toggle("img-holder-anim");
    imgHolderA.classList.toggle("img-holder-anim");

}

function backgroundOn2() {
    imgHolderB.classList.remove("background-1");
    imgHolderB.classList.add("background-2");
    imgHolderB.classList.toggle("img-holder-anim");
}

function backgroundOff2() {
    // imgHolderB.classList.toggle("background-2");
    imgHolderB.classList.toggle("img-holder-anim");
}