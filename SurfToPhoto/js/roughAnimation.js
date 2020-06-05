import { annotate } from './rough-notation.js';

function enableRoughAnim() {
    const annotationConfig = {
        type: 'circle',
        color: '#9fcfe5',
        strokeWidth: 5,
        padding: 25,
        iterations: 1,
        animationDuration: 400,
    }

    const aboutP = document.getElementById("about-p");
    const shopP = document.getElementById("shop-p");
    const portofolioP = document.getElementById("portofolio-p");
    const socialP = document.getElementById("social-p");

    const annotationAboutP = annotate(aboutP, annotationConfig);
    const annotationShopP = annotate(shopP, annotationConfig);
    const annotationPortofolioP = annotate(portofolioP, annotationConfig);
    const annotationSocialP = annotate(socialP, annotationConfig);


    aboutP.addEventListener("mouseover", () => annotationAboutP.show());
    aboutP.addEventListener("mouseout", () => annotationAboutP.hide());
    shopP.addEventListener("mouseover", () => annotationShopP.show());
    shopP.addEventListener("mouseout", () => annotationShopP.hide());
    portofolioP.addEventListener("mouseover", () => annotationPortofolioP.show());
    portofolioP.addEventListener("mouseout", () => annotationPortofolioP.hide());
    socialP.addEventListener("mouseover", () => annotationSocialP.show());
    socialP.addEventListener("mouseout", () => annotationSocialP.hide());
}

export { enableRoughAnim };