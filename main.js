
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