
function init() {
    startIntervals();
}
let lan = document.getElementsByClassName("language")[0]
let hover = document.getElementsByClassName("language_Hover")[0]

lan.addEventListener('click', package);
hover.addEventListener('click', package);

function package() {
    changeLanguage();
    changeLanguageMobile();
}



let currentLang = 'en';
function changeLanguage() {
    console.log("change language normal")
    let basic = document.getElementsByClassName("language")[0]
    if (basic.src.includes('english.png')) {
        basic.style.transition = "0.2s";
        basic.style.opacity = "0";
        basic.src = "./img/german.png";  // Bild wechseln (während es unsichtbar ist)
        basic.style.opacity = "1";       // Fade in (mit 2s Transition)
        let hover = document.getElementsByClassName("language_Hover")[0]
        hover.src = "";
        switchLanguage('de');
        currentLang = 'de';
        setTimeout(() => {
            hover.src = "./img/german_hover.png";
        }, 80);
    } else {
        basic.style.transition = "0.2s";
        basic.style.opacity = "0";
        basic.src = "./img/english.png";  // Bild wechseln (während es unsichtbar ist)
        basic.style.opacity = "1";       // Fade in (mit 2s Transition)
        let hover = document.getElementsByClassName("language_Hover")[0]
        hover.src = "";
        switchLanguage('en');
        currentLang = 'en';
        setTimeout(() => {
            hover.src = "./img/english_hover.png";
        }, 80);
    }
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
        basic.style.transition = "0.2s";
        // basic.style.opacity = "0";
        basic.src = "./img/german.png";  // Bild wechseln (während es unsichtbar ist)
        // basic.style.opacity = "1";       // Fade in (mit 2s Transition)
        // basic.setAttribute('onclick',"switchLanguage('de')")
        // switchLanguage('de');
        let hover = document.getElementsByClassName("languageMobile_Hover")[0]
        hover.src = "";
        switchLanguage('de');
        currentLang = 'de';
        setTimeout(() => {
            hover.src = "./img/german_hover.png";
        }, 80);
    } else {
        basic.style.transition = "0.2s";
        // basic.style.opacity = "0";
        basic.src = "./img/english.png";  // Bild wechseln (während es unsichtbar ist)
        // basic.style.opacity = "1";       // Fade in (mit 2s Transition)
        // basic.setAttribute('onclick',"switchLanguage('en')")
        // switchLanguage('en');
        let hover = document.getElementsByClassName("languageMobile_Hover")[0]
        hover.src = "";
        switchLanguage('en');
        currentLang = 'en';
        setTimeout(() => {
            hover.src = "./img/english_hover.png";
        }, 80);
    }    
}

document.querySelector("#nav-icon1").addEventListener('click', toggleBurgerMenu);
function toggleBurgerMenu() {
    let t = document.getElementById("nav-icon1");
    t.classList.toggle('open');
    if (document.querySelector(".open")) {
        document.querySelector(".burgerMenuMobile").style.transition = "0.5s";
        document.querySelector(".burgerMenuMobile").style.opacity = "1";
    } else {
        document.querySelector(".burgerMenuMobile").style.transition = "0.5s";
        document.querySelector(".burgerMenuMobile").style.opacity = "0";
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
        // console.log("down")
    } else if (lastPosition > currentPosition && !heightChanged) {
        p = "up"
        if (currentPosition > startPoint) {
            document.querySelector('.headfullsize').style.background = "rgba(0, 0, 0, 0.7)";
            // console.log('current Position', currentPosition);
            // console.log('start Position', startPoint);
        } else {
            document.querySelector('.headfullsize').style.background = "rgba(0, 0, 0, 0)";
        }
    }
    if (p == "up") {
        document.querySelector('.headfullsize').style.transition = "0.5s";
        document.querySelector('.headfullsize').style.position = "sticky";
        // document.querySelector('.headfullsize').style.z-index = 5;
        document.querySelector('.headfullsize').style.top = "0px";
    } else {
        document.querySelector('.headfullsize').style.transition = "0.5s";
        document.querySelector('.headfullsize').style.position = "unset";
        document.querySelector('.headfullsize').style.top = "-100px";
    }

    lastPosition = currentPosition;
    lastHeight = currentHeight;
});

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

function checkContacSection(){
    let letsConnect = document.querySelector(".Contact_mainTopic");
    let connectDescription = document.querySelector(".contactDescriptionAria");
    if (letsConnect.innerHTML == "Lass uns zusammen<br> arbeiten" && window.innerWidth >= 820) {
        letsConnect.style.height = "232px";
    }else if (letsConnect.innerHTML == "Lass uns zusammen<br> arbeiten" && window.innerWidth <= 819) {
        letsConnect.style.height = "173px";
        connectDescription.style.height = "500px";
    }
}

function checkContactFormAria(){
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
    if (contactP.innerHTML == "Contact me" && width >= 378) {
        contactO.style.minWidth = "165px";
        contactP.style.left = "30px";
        contactP.style.width = "65%";
    } else if (contactP.innerHTML == "Contact me" && width <= 377) {
        contactO.style.minWidth = "145px";
        contactP.style.left = "28px";
    };
    if (contactP.innerHTML == "Kontaktiere mich" && width >= 378) {
        contactO.style.minWidth = "170px";
        contactP.style.left = "13px";
        contactP.style.minWidth = "130px";
        contactP.style.width = "94%";
    }else if (contactP.innerHTML == "Kontaktiere mich" && width <= 377) {
        contactO.style.minWidth = "145px";
        contactP.style.left = "14px";
        contactP.style.width = "94%";
    }
}

function changeProjectFontSize() {
    let width = window.innerWidth;
    let p = document.querySelector(".mainTopic");
    if(p.innerHTML == "Ausgewählte Projekte" && width <= 350){
        p.style.fontSize = "40px";
    }else{p.style.fontSize = "48px"};
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

function skipColleagues(direction) {
    let colleagueLeft = document.getElementsByClassName("singleColleaguesCardLeft");
    let colleagueRight = document.getElementsByClassName("singleColleaguesCardRight");
    let colleagueMiddle = document.getElementsByClassName("singleColleaguesCardMiddle");
    if (direction == "left") {
        slideToNext();
        changeDotToLeft();
    } else if (direction == "right") {
        slideToPrev();
        changeDotToRight();
    }
}

function changeDotToRight() {
    let d = document.querySelector(".dot_türkis");
    if (!d) return;
    d.src = "./img/dot_white.png";
    d.classList.remove("dot_türkis");
    d.classList.add("dot_white");
    let next = d.nextElementSibling;
    // next.src = "./img/dot_türkis.png";
    if (next.className == "dot_white") {
        next.src = "./img/dot_türkis.png";
        next.classList.remove("dot_white");
        next.classList.add("dot_türkis");
    }
    if (next.src.includes("/img/arrow_Right.png")) {
        let first = document.querySelector(".dot_white");
        first.src = "./img/dot_türkis.png";
        first.classList.remove("dot_white");
        first.classList.add("dot_türkis");
    };

}

function changeDotToLeft() {
    let d = document.querySelector(".dot_türkis");
    if (!d) return;
    d.src = "./img/dot_white.png";
    d.classList.remove("dot_türkis");
    d.classList.add("dot_white");
    let prev = d.previousElementSibling;
    // next.src = "./img/dot_türkis.png";
    if (prev.className == "dot_white") {
        prev.src = "./img/dot_türkis.png";
        prev.classList.remove("dot_white");
        prev.classList.add("dot_türkis");
    }
    if (prev.src.includes("/img/arrow_Left.png")) {
        let first = document.querySelector(".dot_white");
        let second = first.nextElementSibling.nextElementSibling.src = "./img/dot_türkis.png";
        first.nextElementSibling.nextElementSibling.classList.remove("dot_white");
        first.nextElementSibling.nextElementSibling.classList.add("dot_türkis");
    };

}

function slideToPrev() {
    let center = document.querySelectorAll(".active");
    let right = document.querySelectorAll(".next");
    let left = document.querySelectorAll(".prev");
    let colleagues = document.querySelectorAll(".colleaguesCards");
    if (center) {
        center[0].classList.remove("active");
        center[0].classList.add("prev");
    }
    if (right) {
        right[0].classList.remove("next");
        right[0].classList.add("active");
    }
    if (left) {
        let clone = left[0].cloneNode(true);
        clone.classList.remove("prev");
        clone.classList.add("slideInStart");
        colleagues[0].appendChild(clone);
        left[0].classList.remove("prev");
        left[0].classList.add("slideOut");
        setTimeout(() => {
            left[0].remove();
        }, 500);
        setTimeout(() => {
            clone.classList.remove("slideInStart");
            clone.classList.add("next");
        }, 50);
    }

}

function slideToNext() {
    let center = document.querySelectorAll(".active");
    let right = document.querySelectorAll(".next");
    let left = document.querySelectorAll(".prev");
    let colleagues = document.querySelectorAll(".colleaguesCards");
    if (center) {
        center[0].classList.remove("active");
        center[0].classList.add("next");
    }
    if (left) {
        left[0].classList.remove("prev");
        left[0].classList.add("active");
    }
    if (right) {
        let clone = right[0].cloneNode(true);
        clone.classList.remove("next");// next entfernen und links auserhalb hinzufügen
        clone.classList.add("slideOut");//hier links weite auserhalb hinzufügen
        colleagues[0].appendChild(clone);//ins DOm hinzufügen
        right[0].classList.remove("next"); //original next entfernen und nach rechts raushauen
        right[0].classList.add("slideInStart");
        setTimeout(() => {
            right[0].remove();
        }, 500);
        setTimeout(() => {
            clone.classList.remove("slideOut");
            clone.classList.add("prev");
        }, 50);
    }
}

function validateContactForm() {
    let name = document.getElementById("nameInput");
    let email = document.getElementById("emailInput");
    let message = document.getElementById("helpInput");
    let checkboxError = document.getElementById("errorDivCheckbox");
    if (name.value == "" && email.value == "" && message.value == "") {
        showErrorComplete();
    }
    if (name.value == "" || email.value == "" || message.value == "") {
        showSpecificError(name, email, message);
    }
    if (!validateCheckBox()) return;
    // showCheckboxError();

    if (validateNameField() && validateEmailField() && validateMessageField() && validateCheckBox()) {
        submitInfo();
    }
}

function showCheckboxError() {
    let checkbox = document.getElementById("agreeBox");
    checkbox.classList.add('agreeBoxError')
    let checkboxError = document.getElementById("errorDivCheckbox");
    checkboxError.style.color = "rgba(236, 123, 123, 0.8)";
    checkboxError.innerHTML = "Please accept the terms and conditions";

}


function showErrorComplete() {
    let nameError = document.getElementById("errorDivName");
    let emailError = document.getElementById("errorDivEmail");
    let messageError = document.getElementById("errorDivMessage");
    nameError.style.color = "rgba(236, 123, 123, 0.8)";
    nameError.innerHTML = "Please enter your name";
    emailError.style.color = "rgba(236, 123, 123, 0.8)";
    emailError.innerHTML = "Please enter your email";
    messageError.style.color = "rgba(236, 123, 123, 0.8)";
    messageError.innerHTML = "Please enter your message";
}

function showSpecificError(name, email, message) {
    let nameError = document.getElementById("errorDivName");
    let emailError = document.getElementById("errorDivEmail");
    let messageError = document.getElementById("errorDivMessage");
    if (name.value == "") {
        nameError.style.color = "rgba(236, 123, 123, 0.8)";
        nameError.innerHTML = "Please enter your name";
    }
    if (email.value == "") {
        emailError.style.color = "rgba(236, 123, 123, 0.8)";
        emailError.innerHTML = "Please enter your email";
    }
    if (message.value == "") {
        messageError.style.color = "rgba(236, 123, 123, 0.8)";
        messageError.innerHTML = "Please enter your message";
    }
    if (name.value == "" && email.value == "") {
        nameError.style.color = "rgba(236, 123, 123, 0.8)";
        nameError.innerHTML = "Please enter your name";
        emailError.style.color = "rgba(236, 123, 123, 0.8)";
        emailError.innerHTML = "Please enter your email";
    }
    if (name.value == "" && message.value == "") {
        nameError.style.color = "rgba(236, 123, 123, 0.8)";
        nameError.innerHTML = "Please enter your name";
        messageError.style.color = "rgba(236, 123, 123, 0.8)";
        messageError.innerHTML = "Please enter your message";
    }
    if (email.value == "" && message.value == "") {
        emailError.style.color = "rgba(236, 123, 123, 0.8)";
        emailError.innerHTML = "Please enter your email";
        messageError.style.color = "rgba(236, 123, 123, 0.8)";
        messageError.innerHTML = "Please enter your message";
    }
}



function validateNameField() {
    let name = document.getElementById("nameInput");
    let nameError = document.getElementById("errorDivName");
    if (!validateName(name) && name.value != "") {
        nameError.style.color = "rgba(236, 123, 123, 0.8)";
        nameError.innerHTML = "Please enter a correct name";
    } else if (name.value == "") {
        nameError.innerHTML = "Please enter your name";
    } else if (validateName(name) && name.value != "") {
        nameError.innerHTML = "";
    }
}

function validateEmailField() {
    let email = document.getElementById("emailInput");
    let emailError = document.getElementById("errorDivEmail");
    if (!validateEmail(email) && email.value != "") {
        emailError.style.color = "rgba(236, 123, 123, 0.8)";
        emailError.innerHTML = "Please enter a correct email";
    } else if (email.value == "") {
        emailError.innerHTML = "Please enter your email";
    } else if (validateEmail(email) && email.value != "") {
        emailError.innerHTML = "";
    }
}

function validateMessageField() {
    let message = document.getElementById("helpInput");
    let messageError = document.getElementById("errorDivMessage");
    if (!validateMessage(message) && message.value != "") {
        messageError.style.color = "rgba(236, 123, 123, 0.8)";
        messageError.innerHTML = "Please enter a correct message";
    } else if (message.value == "") {
        messageError.innerHTML = "Please enter your message";
    } else if (validateMessage(message) && message.value != "") {
        messageError.innerHTML = "";
    }
}

// function validatePrivacyandConditions() {
//     if (validateCheckBox()) {
//         clearCheckboxError();
//     } else {
//         showCheckboxError();
//     }
// }

function clearCheckboxError() {
    let checkbox = document.getElementById("agreeBox");
    checkbox.classList.remove('agreeBoxError')
    let checkboxError = document.getElementById("errorDivCheckbox");
    checkboxError.innerHTML = "";
}

function validateCheckBox() {
    let checkbox = document.getElementById("agreeBox");
    if (checkbox.checked == false) {
        showCheckboxError();
        return false;
    } else {
        clearCheckboxError();
        return true;
    }
}



function validateName(name) {
    const titleRegex = /^[A-Za-zÄÖÜäöüß\s.-]+$/;
    return titleRegex.test(name.value.trim());

}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]{3,}\.[^\s@]{2,}$/;
    return regex.test(email.value.trim());
}

function validateMessage(message) {
    const messageRegex = /^[A-Za-zÄÖÜäöüß\s.-]+$/;
    return messageRegex.test(message.value.trim());

}

function stopPropagation(event) {
    event.stopPropagation();
}