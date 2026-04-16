
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
    } else if (direction == "right") {
        slideToPrev();
        changeDot();
    }
}

function changeDot(){
    let d = document.querySelector(".dot_türkis");
    if(!d) return;
        d.src = "./img/dot_white.png";
        d.classList.remove("dot_türkis");
        d.classList.add("dot_white");
        let next = d.nextElementSibling;
        if(d.parentElement.lastElementChild.src=="./img/arrow_Right.png") return;
        if(next){
        d.nextElementSibling.src = "./img/dot_türkis.png";
        d.nextElementSibling.classList.remove("dot_white");
        d.nextElementSibling.classList.add("dot_türkis");
        }
    
}

function slideToPrev(){
    let center = document.querySelectorAll(".active");
    let right = document.querySelectorAll(".next");
    let left = document.querySelectorAll(".prev");
    if(center){
        center[0].classList.remove("active");
        center[0].classList.add("prev");
    }    
    if(right){
        right[0].classList.remove("next");
        right[0].classList.add("active");
    }
    if(left){
        left[0].classList.remove("prev");
        left[0].classList.add("next");
    }

}

function slideToNext(){
    let center = document.querySelectorAll(".active");
    let right = document.querySelectorAll(".next");
    let left = document.querySelectorAll(".prev");
    if(center){
        center[0].classList.remove("active");
        center[0].classList.add("next");
    }    
    if(right){
        right[0].classList.remove("next");
        right[0].classList.add("prev");
    }
    if(left){
        left[0].classList.remove("prev");
        left[0].classList.add("active");
    }
}