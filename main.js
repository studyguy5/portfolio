
function init() {
    startIntervals();
    if (localStorage.getItem('lang') == '') {
        localStorage.setItem('lang', 'en');
    }
    checkLanguage();
}

function initPrivacy() {
    checkLanguage();
    startIntervals2();
}


let lan = document.getElementsByClassName("language")[0]
let hover = document.getElementsByClassName("language_Hover")[0]

lan.addEventListener('click', package);
hover.addEventListener('click', package);

function package() {
    changeLanguage();
    changeLanguageMobile();
}

let collectIntervalls2 = null;
function startIntervals2() {
    if (collectIntervalls2 != null) { clearInterval(collectIntervalls2); }
    let allIntervals2 = setInterval(() => {
        checkLegalNotice();
    }, 100);
}

let currentLang;
function changeLanguage() {
    console.log("change language normal")
    let basic = document.getElementsByClassName("language")[0]
    if (basic.src.includes('english.png')) {
        switchToGerman();
    } else {
        switchToEnglish();
    }
}

function switchToGerman() {
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

function switchToEnglish() {
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


let langMobile = document.getElementsByClassName("languageMobile")[0]
let langMobileHover = document.getElementsByClassName("languageMobile_Hover")[0]

langMobile.addEventListener('click', packageMobile);
langMobileHover.addEventListener('click', packageMobile);

function packageMobile() {
    changeLanguage();
    changeLanguageMobile();
}


function changeLanguageMobile() {
    console.log("change language mobile")
    let basic = document.getElementsByClassName("languageMobile")[0]
    if (basic.src.includes('english.png')) {
        switchMobileToGerman();
    } else {
        switchMobileToEnglish();
    }
}

function switchMobileToGerman() {
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

function switchMobileToEnglish() {
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

function checkLanguage() {
    if (localStorage.getItem('lang') != 'en') {
        changeLanguage();
        changeLanguageMobile();
    } else { }
}

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

function checkLegalNotice() {
    let legal = document.querySelector('.link3Floor');
    let image = document.querySelector('.link3Floor img');
    let imageh = document.querySelector('.link3Floor[hover] img');
    if (legal.innerText != "Legal Notice") {
        legal.style.minWidth = "100px";
        image.style.marginLeft = "-16px";
    }
}

let collectIntervalls = null;
function startIntervals() {
    if (collectIntervalls != null) { clearInterval(collectIntervalls); }
    let allIntervals = setInterval(() => {
        checkLegalNotice();
        changeWidthOnLetsTalk();
        changeAbsolutePosition();
        checkContacSection();
        checkContactFormAria();
        changeProjectFontSize();
    }, 100);
}
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

function adjustHeader(p){
    if (p == "up") {
        makeHeaderSticky();
    } else {
        makeHeaderDissappear();
    }
}

function manipulateBackground(currentPosition, startPoint) {
    if (currentPosition > startPoint) {
        document.querySelector('.headfullsize').style.background = "rgba(0, 0, 0, 0.7)";
    } else {
        document.querySelector('.headfullsize').style.background = "rgba(0, 0, 0, 0)";
    }
}

function makeHeaderSticky() {
    document.querySelector('.headfullsize').style.transition = "0.5s";
    document.querySelector('.headfullsize').style.position = "sticky";
    document.querySelector('.headfullsize').style.top = "0px";
}

function makeHeaderDissappear() {
    document.querySelector('.headfullsize').style.transition = "0.5s";
    document.querySelector('.headfullsize').style.position = "unset";
    document.querySelector('.headfullsize').style.top = "-100px";
}

let done = false;
function moveOnce() {
    let once = document.querySelector(".schraffierter_bg");
    if (!done) {
        once.classList.remove("schraffierter_bg");
        once.classList.add("schraffierter_bgOnce");
        done = true;
    }
}
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

function changeAbsolutePosition() {
    let width = window.innerWidth;
    let contactP = document.querySelector(".Contact_ME p");
    let contactO = document.querySelector(".Contact_ME");
    regulateConctactME(contactO, contactP, width);
    regulateContactMEGermanVersion(contactO, contactP, width);
}


function regulateConctactME(contactO, contactP, width) {
    if (contactP.innerHTML == "Contact me" && width >= 378) {
        contactO.style.minWidth = "165px";
        contactP.style.left = "30px";
        contactP.style.width = "65%";
    } else if (contactP.innerHTML == "Contact me" && width <= 377) {
        contactO.style.minWidth = "145px";
        contactP.style.left = "28px";
    };
}

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

function changeProjectFontSize() {
    let width = window.innerWidth;
    let p = document.querySelector(".mainTopic");
    if (p.innerHTML == "Ausgewählte Projekte" && width <= 350) {
        p.style.fontSize = "40px";
    } else { p.style.fontSize = "48px" };
}


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

function hideFrame(event) {
    if (event.type === 'mouseleave') {
        document.querySelector(".easterEggDiv").style.display = "none";
    }
}



