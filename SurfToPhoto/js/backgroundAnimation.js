const mapHolderP = {
    "about-p": "img-holderB",
    "shop-p": "img-holderC",
    "portofolio-p": "img-holderD",
    "social-p": "img-holderE"
}

function switchOpacity(event) {
    const imgHolder = document.getElementById(mapHolderP[event.target.id]);
    imgHolder.classList.toggle("opacitySwitch");
}

function enableBgAnim() {
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
    console.log("test");
}

export { enableBgAnim };