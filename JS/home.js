var lines = document.querySelectorAll(".burger-line-dark"); // Sélectionne les lignes du boutons burger dans un taleau
var line1 = lines[0];                                                // Associe chaque lignes à une variable
var line2 = lines[1];
var line3 = lines[2];

var closes = document.querySelectorAll(".burger-close-wrap"); // Sélectionne la croix du boutons burger dans un taleau
var close1 = closes[0];                                                // Associe chaque lignes de la croix à une variable
var close2 = closes[1];

var menu = document.querySelector("#menu");           //Stock dans une variable la div contenant tout le menu
menu.open = false; // garde en mémoire l'état du menu

var top_bar = document.querySelector(".verti-top");
var bottom_bar = document.querySelector(".verti-bottom");

var top_left_bar = document.querySelector(".border-top-left");
var top_right_bar = document.querySelector(".border-top-right");

var middle_left_bar = document.querySelector(".menu-border-left");
var middle_right_bar = document.querySelector(".menu-border-right");

var bottom_left_bar = document.querySelector(".border-bottom-left");
var bottom_right_bar = document.querySelector(".border-bottom-right");

var menu_items = document.querySelectorAll('.menu-item');
var menu1= menu_items[0];
var menu2= menu_items[1];
var menu3= menu_items[2];
var menu4= menu_items[3];

var reseau_item = document.querySelector(".reseau-element");



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
        menu.classList.add('open')              // On fais apparaitre le menu

        // Permet de créer l'animation du cadre qui se dessine
        top_bar.classList.add("top-apparition")
        bottom_bar.classList.add("top-apparition")

        top_right_bar.classList.add("middle-top-apparition")
        top_left_bar.classList.add("middle-top-apparition")

        middle_left_bar.classList.add("top-apparition")
        middle_right_bar.classList.add("top-apparition")

        bottom_right_bar.classList.add("middle-top-apparition")
        bottom_left_bar.classList.add("middle-top-apparition")

        menu1.classList.add("menu-item-visible");       // Fais apparaitre les items du menu
        menu2.classList.add("menu-item-visible");
        menu3.classList.add("menu-item-visible");
        menu4.classList.add("menu-item-visible");


        menu.open = true                        // On met à jour l'indicateur d'état

    } else {                                    // Si le menu est ouvert

        menu.classList.remove('open')                    // On enlève la classe CSS et fais disparaitre le menu


        top_bar.classList.remove("top-apparition")
        bottom_bar.classList.remove("top-apparition")

        top_right_bar.classList.remove("middle-top-apparition")
        top_left_bar.classList.remove("middle-top-apparition")

        middle_left_bar.classList.remove("top-apparition")
        middle_right_bar.classList.remove("top-apparition")

        bottom_right_bar.classList.remove("middle-top-apparition")
        bottom_left_bar.classList.remove("middle-top-apparition")


        menu.open = false                                       // On met à jour l'indicateur d'état
    }
}
