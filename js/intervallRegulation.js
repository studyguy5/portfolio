function initCSS(){
    startIntervals();
}

/**
 * Here we start an intervall with the important functions to regulate CSS according to the language
 * wich is difficult to achive with plain CSS
 * @property {collectIntervalls} this is the interval that runs the functions above
 * @returns void
*/
let collectIntervalls = null;
function startIntervals() {
    if (collectIntervalls != null) { clearInterval(collectIntervalls); }
    collectIntervalls = setInterval(() => {
        checkLegalNotice();
        changeWidthOnLetsTalk();
        changeAbsolutePosition();
        checkContacSection();
        checkContactFormAria();
        changeProjectFontSize();
    }, 100);
}

/**
 * this function checks the innerHTML of an a-tag in the footer,
 * if the innerHTML is not "Legal Notice" it changes the style accordingly
 * and it runs every 100ms
 * @returns void
 */
function checkLegalNotice() {
    let legal = document.querySelector('.link3Floor');
    let image = document.querySelector('.link3Floor img');
    let imageh = document.querySelector('.link3Floor[hover] img');
    if (legal.innerText != "Legal Notice") {
        legal.style.minWidth = "100px";
        image.style.marginLeft = "-16px";
    }
}

/**
 * this function checks the language in a button and changes the width accordingly
 * in order to keep the paragraph within the button
 * @returns void
 */
function changeWidthOnLetsTalk() {
    let button = document.querySelector(".contactButton");
    let p = document.querySelector(".contactButton p");
    if (p.innerHTML == "Let's talk") {
        button.style.width = "110px";
        p.style.left = "13px";
        p.style.minWidth = "100px";
    };
    if (p.innerHTML == "Lass uns reden") {
        button.style.width = "150px";
        p.style.left = "10px";
        p.style.minWidth = "130px";
    }

}

/**
 * this function checks the language in the hero section and changes the css accordingly
 * german words need often more space than english ones
 * @returns void
 */
function changeAbsolutePosition() {
    let width = window.innerWidth;
    let contactP = document.querySelector(".Contact_ME p");
    let contactO = document.querySelector(".Contact_ME");
    regulateConctactME(contactO, contactP, width);
    regulateContactMEGermanVersion(contactO, contactP, width);
}

/**
 * this function checks the language in the contact section in a specific div and 
 * changes the css accordingly
 * simultaneoulsy we check the innerWidth of the screen and replace a media query
 * @returns void
 */
function checkContacSection() {
    let letsConnect = document.querySelector(".Contact_mainTopic");
    let connectDescription = document.querySelector(".contactDescriptionAria");
    if (letsConnect.innerHTML == "Lass uns zusammen<br> arbeiten" && window.innerWidth >= 820) {
        letsConnect.style.height = "232px";
    } else if (letsConnect.innerHTML == "Lass uns zusammen<br> arbeiten" && window.innerWidth <= 819) {
        letsConnect.style.height = "173px";
        connectDescription.style.height = "500px";
    }
}

/**
 * this function checks the language in the contact form and changes the css accordingly
 * simultaneoulsy we check the innerWidth of the screen and replace a media query
 * @returns void
 */
function checkContactFormAria() {
    let contactFormAria = document.querySelector(".Contact_mainTopic");
    let mesection = document.querySelector(".contact_Me_Section");
    let connectDescription = document.querySelector(".contactDescriptionAria");
    let p = document.querySelector(".paragraph")
    if (contactFormAria.innerHTML == "Lass uns zusammen<br> arbeiten" && window.innerWidth <= 420) {
        mesection.style.height = "1180px";
        connectDescription.style.width = "90%";
        p.style.width = "90%";
    }
}

/**
 * this function checks the language in the project section and changes the css
 * after a breakpoint in order to make it keep looking good
 * @returns void
 */
function changeProjectFontSize() {
    let width = window.innerWidth;
    let p = document.querySelector(".mainTopic");
    if (p.innerHTML == "Ausgewählte Projekte" && width <= 350) {
        p.style.fontSize = "40px";
    } else { p.style.fontSize = "48px" };
}

/**
 * This is the execution of the changeAbsolutePosition function above
 * @param {contactO} contactO the parent div 
 * @param {contactP} contactP the paragraph
 * @param {width} width the innerWidth
 * @returns void
 */
function regulateConctactME(contactO, contactP, width) {
    if (contactP.innerHTML == "Contact me" && width >= 378) {
        contactO.style.minWidth = "165px";
        contactP.style.left = "30px";
        contactP.style.width = "110px";
    } else if (contactP.innerHTML == "Contact me" && width <= 377) {
        contactO.style.minWidth = "115px";
        contactP.style.left = "12px";
        contactP.style.width = "85%";
    };
}

/**
 * This regulates the css in case the language is german
 * @param {contactO} contactO the parent div 
 * @param {contactP} contactP the paragraph
 * @param {width} width the innerWidth
 * @returns void
 */
function regulateContactMEGermanVersion(contactO, contactP, width) {
    if (contactP.innerHTML == "Kontaktiere mich" && width >= 378) {
        contactO.style.minWidth = "170px";
        contactP.style.left = "13px";
        contactP.style.minWidth = "130px";
        contactP.style.width = "94%";
    } else if (contactP.innerHTML == "Kontaktiere mich" && width <= 377) {
        contactO.style.minWidth = "145px";
        contactP.style.left = "14px";
        contactP.style.width = "94%";
    }
}