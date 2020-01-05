var lines = document.querySelectorAll(".burger-line-dark"); // Sélectionne les lignes du boutons burger dans un taleau
var line1 = lines[0];                                                // Associe chaque lignes à une variable
var line2 = lines[1];
var line3 = lines[2];

var closes = document.querySelectorAll(".burger-close-wrap"); // Sélectionne la croix du boutons burger dans un taleau
var close1 = closes[0];                                                // Associe chaque lignes de la croix à une variable
var close2 = closes[1];

var menu = document.querySelector("#menu");           //Stock dans une variable la div contenant tout le menu
menu.open = false; // garde en mémoire l'état du menu

var ligne_reseau = document.querySelector('#ligne-reseau');

/*-----------------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------------*/

var body = document.querySelector('body')

var pages = document.querySelectorAll('.page-crea')
var page_active = 0;

var qwwizzy_page = document.querySelector('#qwwizzy')

var qwwizzy_top = document.querySelector('#qwwizzy-top');
var qwwizzy_left = document.querySelector('#qwwizzy-left');
var qwwizzy_right = document.querySelector('#qwwizzy-right');
var qwwizzy_bottom = document.querySelector('#qwwizzy-bottom');
var qwwizzy_fleche = document.querySelector('#fleche-qwwizzy');
var qwwizzy_content = document.querySelector('#qwwizzy-content')

var doors_page = document.querySelector('#doors')

var doors_top = document.querySelector('#doors-top');
var doors_left = document.querySelector('#doors-left');
var doors_right = document.querySelector('#doors-right');
var doors_bottom = document.querySelector('#doors-bottom');
var doors_fleche = document.querySelector('#fleche-doors');
var doors_content = document.querySelector('#doors-content')

function from_bottom(page_active){
    /*for(var i = 0; i < pages.length; i++){
        pages[i].classList.add('cate-cache')
    }*/
    pages[page_active].classList.add('open')
}

function qwwizzy_appear(){
    doors_page.classList.add('hidden')
    qwwizzy_page.classList.remove('hidden')
    from_bottom(1);
    qwwizzy_top.classList.add('bloc-border-top');
    qwwizzy_left.classList.add('bloc-border-left');
    qwwizzy_right.classList.add('bloc-border-right');
    qwwizzy_bottom.classList.add('bloc-border-bottom');
    qwwizzy_fleche.classList.add('fleche');
    qwwizzy_content.classList.remove('hidden');
    qwwizzy_content.classList.add('bloc-content');
}

function doors_appear(){
    qwwizzy_page.classList.add('hidden')
    doors_page.classList.remove('hidden')
    from_bottom(2);
    doors_top.classList.add('bloc-border-top');
    doors_left.classList.add('bloc-border-left');
    doors_right.classList.add('bloc-border-right');
    doors_bottom.classList.add('bloc-border-bottom');
    doors_fleche.classList.add('fleche');
    doors_content.classList.remove('hidden');
    doors_content.classList.add('bloc-content');
}

function burger_action() {

    burger_animation();                         // animation du bouton burger


    if (!menu.open) {                           // si le menu est fermé
        menu.classList.add('open')              // On fais apparaitre le menu

        /*menu1.classList.add("menu-item-visible");       // Fais apparaitre les items du menu
        menu2.classList.add("menu-item-visible");
        menu3.classList.add("menu-item-visible");
        menu4.classList.add("menu-item-visible");*/

        ligne_reseau.classList.add("opacity");


        menu.open = true                        // On met à jour l'indicateur d'état

    } else {                                    // Si le menu est ouvert

        menu.classList.remove('open')                    // On enlève la classe CSS et fais disparaitre le menu

        menu.open = false                                       // On met à jour l'indicateur d'état
    }
}

function burger_animation() {                               // animation du bouton burger
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
}

function qwwizzy_menu(){
    qwwizzy_appear()
    burger_action()
    compteur_scroll == 1
}

function doors_menu(){
    doors_appear()
    burger_action()
    compteur_scroll == 2
}

/*-----------------------------------------------------------------------------------------------*/
/* Le code JS suivant concerne la gestion du scroll pour passer d'une page à une autre */

var compteur_scroll = 0;
var is_animating = false;


function animating(){
    is_animating = false;
}

window.addEventListener("mousewheel", function(event) {
    var scroll = event.deltaY;
    var scrollDown = scroll > 0;
    var scrollUp = scroll < 0;

    if (scrollDown) {
        if (!is_animating) {
            if (compteur_scroll == 0) {
                qwwizzy_appear()
                compteur_scroll++
                is_animating = true;
                var intervalID = window.setTimeout(animating, 3000);
            } else if (compteur_scroll == 1) {
                doors_appear()
                compteur_scroll++
                is_animating = true;
                var intervalID = window.setTimeout(animating, 3000);
            }
        }
    } else if (scrollUp) {
        if(!is_animating){
            if (compteur_scroll == 2){
                qwwizzy_appear()
                compteur_scroll--
                is_animating = true
                var intervalID = window.setTimeout(animating, 3000);
            }
        }
    }
})


