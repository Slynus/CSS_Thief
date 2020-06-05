function enableBgAnim() {
    function toggle(el) {
        el.classList.toggle("opacitySwitch");
    }

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

    aboutP.addEventListener("mouseover", () => toggle(imgHolderB));
    aboutP.addEventListener("mouseout", () => toggle(imgHolderB));
    shopP.addEventListener("mouseover", () => toggle(imgHolderC));
    shopP.addEventListener("mouseout", () => toggle(imgHolderC));
    portofolioP.addEventListener("mouseover", () => toggle(imgHolderD));
    portofolioP.addEventListener("mouseout", () => toggle(imgHolderD));
    socialP.addEventListener("mouseover", () => toggle(imgHolderE));
    socialP.addEventListener("mouseout", () => toggle(imgHolderE));
}

export { enableBgAnim };