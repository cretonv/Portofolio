var lines = document.querySelectorAll(".burger-line-dark");
var line1 = lines[0];
var line2 = lines[1];
var line3 = lines[2];

var closes = document.querySelectorAll(".burger-close-wrap");
var close1 = closes[0];
var close2 = closes[1];

var menu = document.querySelector("#menu");
menu.open = false; // garde en mémoire l'état du menu

function burger_action(){

    if (line1.style.width == "0vh") {                       // animation des lignes du bouton
        line1.style.width = "5vh";
        line1.style.transition = "width 0.9s 1s";
    } else  {
        line1.style.width = "0vh";
        line1.style.transition = "width 0.9s";
    }
    if (line2.style.width == "0vh") {
        line2.style.width = "5vh";
        line2.style.transition = "width 0.7s 1s";
    } else  {
        line2.style.width = "0vh";
        line2.style.transition = "width 0.7s";
    }
    if (line3.style.width == "0vh") {
        line3.style.width = "5vh";
        line3.style.transition = "width 0.5s 1s";
    } else  {
        line3.style.width = "0vh";
        line3.style.transition = "width 0.5s";
    }

    if (close1.style.width == "0vh") {              // animation de la croix du bouton
        close1.style.width = "3vh";
        close1.style.transition = "width 0.7s 1s";
    } else {
        close1.style.width = "0vh";
        close1.style.transition = "width 0.7s";
    }
    if (close2.style.width == "0vh") {
        close2.style.width = "3vh";
        close2.style.transition = "width 0.7s 1s";
    } else {
        close2.style.width = "0vh";
        close2.style.transition = "width 0.7s";
    }


    if (!menu.open) {                           // si le menu est fermé
        menu.classList.add('open')
        menu.open = true
    } else {                                    // Si le menu est ouvert
        menu.classList.remove('open')        // On enlève la classe CSS
        menu.open = false                           // On met à jour l'indicateur d'état
    }
}
