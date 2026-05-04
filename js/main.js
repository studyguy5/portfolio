
/**
 * This function is called when the index.html page is loaded
 * It starts the intervals, sets lang to en in the localStorage and checks the language after that
 * @returns void
 */
function init() {
    startIntervals();
    if (localStorage.getItem('lang') == '') {
        localStorage.setItem('lang', 'en');
    }
    checkLanguage();
}

/**
 * This function is called when the privacy-policy.html page is loaded
 * it checks the language and starts the intervals
 * @returns void
 */
function initPrivacy() {
    checkLanguage();
    startIntervals2();
}

/**
 * @param {lan} lan the language button img
 * @param {hover} hover the language hover img
 */
let lan = document.getElementsByClassName("language")[0]
let hover = document.getElementsByClassName("language_Hover")[0]

/**
 * This function is called when the language button is clicked
 * it calls the package function
 * @returns void
 */
lan.addEventListener('click', package);
hover.addEventListener('click', package);

/**
 * This function is called when the language button is clicked
 * it changes the language in desktop and mobile view
 * @returns void
 */
function package() {
    changeLanguage();
    changeLanguageMobile();
}


/**
 * @param {} basic 
 * This function starts a interval to check in which language the link legal Notice is in every 100ms
 * in order to change margins, with or other specifications
 * @returns void
 */
let intervall2 = null;
function startIntervals2() {
    if (intervall2 != null) { clearInterval(intervall2); }
    intervall2 = setInterval(() => {
        checkLegalNotice();
    }, 100);
}

/**
 * This function is called when the language button is clicked
 * it checks witch img is in the DOM and corrects accordingly
 * @param {currentLang} currentLang the current language
 * @returns void
 */
let currentLang;
function changeLanguage() {
    console.log("change language normal")
    let basic = document.getElementsByClassName("language")[0]
    if (basic.src.includes('english.png')) {
        switchToGerman(basic);
    } else {
        switchToEnglish(basic);
    }
}

/**
 * This function is called when the language button is clicked
 * it checks witch img is in the DOM and corrects accordingly and change the language afterwards
 * @param {basic} basic the language button img
 * @returns void 
 */
function switchToGerman(basic) {
    basic.style.transition = "0.2s";
    basic.style.opacity = "0";
    basic.src = "./img/german.png";  // Bild wechseln (während es unsichtbar ist)
    basic.style.opacity = "1";       // Fade in (mit 2s Transition)
    let hover = document.getElementsByClassName("language_Hover")[0]
    hover.src = "";
    switchLanguage('de');
    currentLang = 'de';
    localStorage.setItem('lang', 'de');
    setTimeout(() => {
        hover.src = "./img/german_hover.png";
    }, 80);
}

/**
 * This function is called when the language button is clicked and the current language is german
 * @param {basic} basic the language button img
 * @returns void 
 */
function switchToEnglish(basic) {
    basic.style.transition = "0.2s";
    basic.style.opacity = "0";
    basic.src = "./img/english.png";  // Bild wechseln (während es unsichtbar ist)
    basic.style.opacity = "1";       // Fade in (mit 2s Transition)
    let hover = document.getElementsByClassName("language_Hover")[0]
    hover.src = "";
    switchLanguage('en');
    currentLang = 'en';
    localStorage.setItem('lang', 'en');
    setTimeout(() => {
        hover.src = "./img/english_hover.png";
    }, 80);
}

/**
 * @param {langMobile} langMobile the language button img
 * @param {langMobileHover} langMobileHover the language hover img
 * @returns void
 */
let langMobile = document.getElementsByClassName("languageMobile")[0]
let langMobileHover = document.getElementsByClassName("languageMobile_Hover")[0]

langMobile.addEventListener('click', packageMobile);
langMobileHover.addEventListener('click', packageMobile);

/**
 * This function is called when the language button is clicked
 * it changes the language in desktop and mobile view
 * @returns void
 */
function packageMobile() {
    changeLanguage();
    changeLanguageMobile();
}

/**
 * This function changes the language in mobile view
 * @returns void
 */
function changeLanguageMobile() {
    console.log("change language mobile")
    let basic = document.getElementsByClassName("languageMobile")[0]
    if (basic.src.includes('english.png')) {
        switchMobileToGerman(basic);
    } else {
        switchMobileToEnglish(basic);
    }
}

/**
 * This function changes the language in mobile view to german
 * @param {basic} basic the language button img
 * @returns void 
 */
function switchMobileToGerman(basic) {
    basic.style.transition = "0.2s";
    basic.src = "./img/german.png";  // Bild wechseln (während es unsichtbar ist)
    let hover = document.getElementsByClassName("languageMobile_Hover")[0]
    hover.src = "";
    switchLanguage('de');
    currentLang = 'de';
    setTimeout(() => {
        hover.src = "./img/german_hover.png";
    }, 80);
}

/**
 * This function changes the language in mobile view to english
 * @param {basic} basic the language button img
 * @returns void 
 */
function switchMobileToEnglish(basic) {
    basic.style.transition = "0.2s";
    basic.src = "./img/english.png";  // Bild wechseln (während es unsichtbar ist)
    let hover = document.getElementsByClassName("languageMobile_Hover")[0]
    hover.src = "";
    switchLanguage('en');
    currentLang = 'en';
    setTimeout(() => {
        hover.src = "./img/english_hover.png";
    }, 80);
}

/**
 * This function checks in which language the user is and changes the language accordingly
 * we set a variable with the name lang : en  in the localStorage and check this variable everytime
 * @returns void
 */
function checkLanguage() {
    if (localStorage.getItem('lang') != 'en') {
        changeLanguage();
        changeLanguageMobile();
    } else { }
}

/**
 * @function {toggleBurgerMenu}
 * This function toggles the mobile menü with opacity and removing/adding pointer events
 * @property {#nav-icon1} this is the mobile menü container
 * @returns void
 */
document.querySelector("#nav-icon1").addEventListener('click', toggleBurgerMenu);
function toggleBurgerMenu() {
    let t = document.getElementById("nav-icon1");
    t.classList.toggle('open');
    if (document.querySelector(".open")) {
        document.querySelector(".burgerMenuMobile").style.transition = "0.5s";
        document.querySelector(".burgerMenuMobile").style.opacity = "1";
        document.querySelector(".burgerMenuMobile").style.pointerEvents = "all";
    } else {
        document.querySelector(".burgerMenuMobile").style.transition = "0.5s";
        document.querySelector(".burgerMenuMobile").style.opacity = "0";
        document.querySelector(".burgerMenuMobile").style.pointerEvents = "none";
    }
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
 * @property {lastPosition} this is the last scroll position
 * @property {lastHeight} this is the last scroll height
 * @function {window.addEventListener('scroll', function ()}
 * this function compares the last position with the current position 
 * if the last position is smaller than the current position it means the user scrolls down
 * if the last position is bigger than the current position it means the user scrolls up
 * at the end we update these two values
 * simultaniously we use the same method and check the currentHeight and the last height,
 * we combine this in the if statement to check if the height changed, after a stop it updates,
 * therefore we use the lastHeight and the currentHeight and update all values
 * @returns void
 */
let lastPosition = window.scrollY;
let lastHeight = document.documentElement.scrollHeight;
window.addEventListener('scroll', function () {
    let p = 0;
    let startPoint = 150;
    const currentPosition = window.scrollY;
    const currentHeight = document.documentElement.scrollHeight;
    const heightChanged = currentHeight !== lastHeight;
    if (lastPosition < currentPosition && !heightChanged) {
        p = "down"
    } else if (lastPosition > currentPosition && !heightChanged) {
        p = "up"
        manipulateBackground(currentPosition, startPoint);}
    adjustHeader(p);
    lastPosition = currentPosition;
    lastHeight = currentHeight;
});

/**
 * this function makes the header visible while scrolling up and dissappear while scrolling down
 * @param {p} p is scroll direction 
 * @returns void
 */
function adjustHeader(p){
    if (p == "up") {
        makeHeaderSticky();
    } else {
        makeHeaderDissappear();
    }
}

/**
 * in this function we check if the current scroll position is bigger than the startPoint,
 * if so we keep the opacity of the header to 0.7 and black
 * if not we keep the opacity of the header to 0
 * @param {currentPosition} currentPosition the current scroll position 
 * @param {startPoint} startPoint this is the point where the opacity of the header changes to 0
 * @returns void 
 */
function manipulateBackground(currentPosition, startPoint) {
    if (currentPosition > startPoint) {
        document.querySelector('.headfullsize').style.background = "rgba(0, 0, 0, 0.7)";
    } else {
        document.querySelector('.headfullsize').style.background = "rgba(0, 0, 0, 0)";
    }
}

/**
 * this function makes the header sticky if we scroll up
 * @returns void
 */
function makeHeaderSticky() {
    document.querySelector('.headfullsize').style.transition = "0.5s";
    document.querySelector('.headfullsize').style.position = "sticky";
    document.querySelector('.headfullsize').style.top = "0px";
}

/**
 * this function makes the header dissappear if we scroll down
 * @returns void
 */
function makeHeaderDissappear() {
    document.querySelector('.headfullsize').style.transition = "0.5s";
    document.querySelector('.headfullsize').style.position = "unset";
    document.querySelector('.headfullsize').style.top = "-100px";
}


/**
 * this function makes the schraffierter background appear once if we hover of the portrait image
 * @property {done} this is the boolean that checks if the background is already appeared
 * @returns void
 */
let done = false;
function moveOnce() {
    let once = document.querySelector(".schraffierter_bg");
    if (!done) {
        once.classList.remove("schraffierter_bg");
        once.classList.add("schraffierter_bgOnce");
        done = true;
    }
}

/**
 * This function searches after every "data-lang" in the DOM, reads the innerText and looks
 * in the translations object, if there is exactly this value
 * if so, it uses the value of the key it found, which is german if the current language is german
 * and vise versa
 * so we dont need an API or anything like that
 * the first forEach Loop is for input fields and textareas, the second one is for text elements and basic tags
 * @param {langcode} langcode is "en" or "de"
 * @returns void 
 */
function switchLanguage(langcode) {
    console.log("switch language " + langcode);
    const elements = document.querySelectorAll('[data-lang]');
    document.querySelectorAll('input[data-lang], textarea[data-lang]').forEach(input => {
        const baseKey = input.placeholder.trim();
        if (baseKey) {
            input.placeholder = translations[langcode][baseKey] || input.placeholder; // Fallback auf den Originaltext, wenn keine Übersetzung vorhanden ist
        }
    });
    elements.forEach(element => {
        const baseKey = element.innerText.trim();
        if (baseKey) {
            element.innerHTML = translations[langcode][baseKey] || element.innerHTML; // Fallback auf den Originaltext, wenn keine Übersetzung vorhanden ist
        }
    });
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
        contactP.style.width = "65%";
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
 * this function renders after the DOM is loaded the frame for the easter egg
 * @returns void
 */
document.addEventListener("DOMContentLoaded", renderFrame());
function renderFrame() {
    let frame = document.querySelector(".githubATag");
    if (frame)
        frame.innerHTML +=/*html*/`
    <div class="easterEggDiv">
        You found the Easter Egg!<br>
        I don't have LinkedIn, or in other words<br>
        my LinkedIn profile is empty. So let's connect in a traditional way:
    </div>
    `
}

/**
 * here i set the mouse events for the easter egg
 * and let it disappear on mouse leave and appear (display flex) on mouse enter
 * like a hovereffect
 * @param {event} event the mouse event
 * @returns void
 */
let l1 = document.querySelector(".linkedIn")
if (l1)
    l1.addEventListener('mouseenter', showFrame);
let l2 = document.querySelector(".linkedIn")
if (l2)
    l2.addEventListener('mouseleave', hideFrame);

function showFrame(event) {
    if (event.type === 'mouseenter') {
        document.querySelector(".easterEggDiv").style.display = "flex";
    }
}

/**
 * This function hides the frame if the user leaves the div with his mouse
 * @param {event} event mouse event 
 */
function hideFrame(event) {
    if (event.type === 'mouseleave') {
        document.querySelector(".easterEggDiv").style.display = "none";
    }
}



