
document.addEventListener('click', () => {
    let basic = document.getElementsByClassName("language")[0]
    if (basic.src.includes('english.png')) {
        basic.style.transition = "0.2s";
        basic.style.opacity = "0";
        basic.src = "./img/german.png";  // Bild wechseln (während es unsichtbar ist)
        basic.style.opacity = "1";       // Fade in (mit 2s Transition)
        let hover = document.getElementsByClassName("language_Hover")[0]
        hover.src = "";
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
        setTimeout(() => {
            hover.src = "./img/english_hover.png";
        }, 80);
    }
})

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
    if (name.value == "" && email.value == "" && message.value == "") {
        name.style.color = "rgba(236, 123, 123, 0.8)";
        name.value = "Please enter your name";
        email.style.color = "rgba(236, 123, 123, 0.8)";
        email.value = "Please enter your email";
        message.style.color = "rgba(236, 123, 123, 0.8)";
        message.value = "Please enter your message";
    }
    if (name.value == "" || email.value == "" || message.value == "") {
    
        if(name.value == ""){
            name.style.color = "rgba(236, 123, 123, 0.8)";
            name.value = "Please enter your name";
        }
        if(email.value == ""){
            email.style.color = "rgba(236, 123, 123, 0.8)";
            email.value = "Please enter your email";
        }
        if(message.value == ""){
            message.style.color = "rgba(236, 123, 123, 0.8)";
            message.value = "Please enter your message";
        }
        if(name.value == "" && email.value == ""){
            name.style.color = "rgba(236, 123, 123, 0.8)";
            name.value = "Please enter your name";
            email.style.color = "rgba(236, 123, 123, 0.8)";
            email.value = "Please enter your email";
        }
        if(name.value == "" && message.value == ""){
            name.style.color = "rgba(236, 123, 123, 0.8)";
            name.value = "Please enter your name";
            message.style.color = "rgba(236, 123, 123, 0.8)";
            message.value = "Please enter your message";
        }
        if(email.value == "" && message.value == ""){
            email.style.color = "rgba(236, 123, 123, 0.8)";
            email.value = "Please enter your email";
            message.style.color = "rgba(236, 123, 123, 0.8)";
            message.value = "Please enter your message";
        }
    }
    return true;
}