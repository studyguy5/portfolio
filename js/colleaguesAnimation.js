
/**
 * This function activates the animation of the cards with colleagues feedback
 * if the user clicks on the arrow buttons, the cards slide to the left or to the right
 * @param {direction} direction of the animation
 * @returns void
 */
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

/**
 * This function puts the türkis colored dot to the right if the user clicks on the right arrow
 * in order to show the user which card is active
 * @returns void
 */
function changeDotToRight() {
    let d = document.querySelector(".dot_türkis");
    if (!d) return;
    d.src = "./img/dot_white.png";
    d.classList.remove("dot_türkis");
    d.classList.add("dot_white");
    let next = d.nextElementSibling;
    dotToRightAndStartLeftIfLast(next);
    

}

/**
 * This function puts the türkis colored dot to the left if the user clicks on the left arrow
 * and is a extension of the changeDotToRight function
 * @param {next} next sibling element of the dot 
 */
function dotToRightAndStartLeftIfLast(next){
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

/**
 * This function puts the türkis colored dot to the left if the user clicks on the left arrow
 * in order to show the user which card is active
 * @returns void
 */
function changeDotToLeft() {
    let d = document.querySelector(".dot_türkis");
    if (!d) return;
    d.src = "./img/dot_white.png";
    d.classList.remove("dot_türkis");
    d.classList.add("dot_white");
    let prev = d.previousElementSibling;
    dotToLeftAndStartRightIfFirst(prev)

}

/**
 * This function puts the türkis colored dot to the left if the user clicks on the left arrow
 * and is a extension of the changeDotToLeft function
 * @param {prev} prev the previous sibling element of the dot 
 */
function dotToLeftAndStartRightIfFirst(prev) {
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

/**
 * This function slides the cards to the left and switches the main three classes in order
 * to move every card to the right place
 * @returns void
 */
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
        letSlideOutAndLetCopieSlideFromRight(left);
    }
}

/**
 * This function slides the left card out, clones it and let the clone slide in from the right
 * in order to make a smooth transition
 * @param {left} left the previous sibling element of the active class (prev)
 * @returns void 
 */
function letSlideOutAndLetCopieSlideFromRight(left){
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

/**
 * This function slides the cards to the right and switches the main three classes in order
 * to move every card to the right place
 * @returns void
 */
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
        letSlideOutAndLetCopieSlideFromLeft(right);
    }
}

/**
 * This function slides the right card out, clones it and let the clone slide in from the left
 * in order to make a smooth transition
 * @param {right} right  
 * @returns void
 */
function letSlideOutAndLetCopieSlideFromLeft(right){
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