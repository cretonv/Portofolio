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

var pages = document.querySelectorAll('.page-crea')
var page_active = 0;

var triple_logo_page = document.querySelector('#triple-logo')

var triple_logo_top = document.querySelector('#triple-logo-top');
var triple_logo_left = document.querySelector('#triple-logo-left');
var triple_logo_right = document.querySelector('#triple-logo-right');
var triple_logo_bottom = document.querySelector('#triple-logo-bottom');
var triple_logo_fleche = document.querySelector('#fleche-triple-logo');
var triple_logo_content = document.querySelector('#triple-logo-content');

var casquette_page = document.querySelector('#casquette')

var casquette_top = document.querySelector('#casquette-top');
var casquette_left = document.querySelector('#casquette-left');
var casquette_right = document.querySelector('#casquette-right');
var casquette_bottom = document.querySelector('#casquette-bottom');
var casquette_fleche = document.querySelector('#fleche-casquette');
var casquette_content = document.querySelector('#casquette-content');

var ghibli_page = document.querySelector('#ghibli')

var ghibli_top = document.querySelector('#ghibli-top');
var ghibli_left = document.querySelector('#ghibli-left');
var ghibli_right = document.querySelector('#ghibli-right');
var ghibli_bottom = document.querySelector('#ghibli-bottom');
var ghibli_fleche = document.querySelector('#fleche-ghibli');
var ghibli_content = document.querySelector('#ghibli-content');

var echo_page = document.querySelector('#echo')

var echo_top = document.querySelector('#echo-top');
var echo_left = document.querySelector('#echo-left');
var echo_right = document.querySelector('#echo-right');
var echo_bottom = document.querySelector('#echo-bottom');
var echo_content = document.querySelector('#echo-content');

function from_bottom(page_active){
    /*for(var i = 0; i < pages.length; i++){
        pages[i].classList.add('cate-cache')
    }*/
    pages[page_active].classList.add('open')
}

function triple_logo_appear(){
    casquette_page.classList.add('hidden')
    ghibli_page.classList.add('hidden')
    echo_page.classList.add('hidden')
    triple_logo_page.classList.remove('hidden')
    from_bottom(1);
    triple_logo_top.classList.add('bloc-border-top');
    triple_logo_left.classList.add('bloc-border-left');
    triple_logo_right.classList.add('bloc-border-right');
    triple_logo_bottom.classList.add('bloc-border-bottom');
    triple_logo_fleche.classList.add('fleche');
    triple_logo_content.classList.remove('hidden');
    triple_logo_content.classList.add('bloc-content');
}

function casquette_appear(){
    ghibli_page.classList.add('hidden')
    triple_logo_page.classList.add('hidden')
    echo_page.classList.add('hidden')
    casquette_page.classList.remove('hidden')
    from_bottom(2);
    casquette_top.classList.add('bloc-border-top');
    casquette_left.classList.add('bloc-border-left');
    casquette_right.classList.add('bloc-border-right');
    casquette_bottom.classList.add('bloc-border-bottom');
    casquette_fleche.classList.add('fleche');
    casquette_content.classList.remove('hidden');
    casquette_content.classList.add('bloc-content');
}

function ghibli_appear(){
    casquette_page.classList.add('hidden')
    triple_logo_page.classList.add('hidden')
    echo_page.classList.add('hidden')
    ghibli_page.classList.remove('hidden')
    from_bottom(3);
    ghibli_top.classList.add('bloc-border-top');
    ghibli_left.classList.add('bloc-border-left');
    ghibli_right.classList.add('bloc-border-right');
    ghibli_bottom.classList.add('bloc-border-bottom');
    ghibli_fleche.classList.add('fleche');
    ghibli_content.classList.remove('hidden');
    ghibli_content.classList.add('bloc-content');
}

function echo_appear(){
    casquette_page.classList.add('hidden')
    triple_logo_page.classList.add('hidden')
    ghibli_page.classList.add('hidden')
    echo_page.classList.remove('hidden')
    from_bottom(4);
    echo_top.classList.add('bloc-border-top');
    echo_left.classList.add('bloc-border-left');
    echo_right.classList.add('bloc-border-right');
    echo_bottom.classList.add('bloc-border-bottom');
    /*echo_fleche.classList.add('fleche');*/  /* A rajouter si on met une flèche et une nouvelle page */
    echo_content.classList.remove('hidden');
    echo_content.classList.add('bloc-content');
}

/*--------------------——————————————--------------------------*/

function zoom(a, b, c) {
    console.log('#' + c)
    var img_zoom = document.querySelector('#' + a)
    var ovr_zoom = document.querySelector('#' + b)
    var back = document.querySelector('#' + c)
    img_zoom.classList.remove('hidden');
    ovr_zoom.classList.remove('hidden');
    back.classList.add('photo-back-low-opacity');
    zoom_indicator = true;

    /*border_top.classList.add('zoom-border-top-apparition');*/
}

function dezoom(a, b, c) {
    console.log('#' + c)
    var img_zoom = document.querySelector('#' + a)
    var ovr_zoom = document.querySelector('#' + b)
    var back = document.querySelector('#' + c)
    img_zoom.classList.add('hidden');
    ovr_zoom.classList.add('hidden');
    back.classList.remove('photo-back-low-opacity');
    zoom_indicator = false;
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

function logos_menu(){
    triple_logo_appear()
    burger_action()
    compteur_scroll == 1
}

function casquette_menu(){
    casquette_appear()
    burger_action()
    compteur_scroll == 2
}

function ghibli_menu(){
    ghibli_appear()
    burger_action()
    compteur_scroll == 3
}

function echo_menu(){
    echo_appear()
    burger_action()
    compteur_scroll == 4
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
                triple_logo_appear()
                compteur_scroll++
                is_animating = true;
                var intervalID = window.setTimeout(animating, 3000);
            } else if (compteur_scroll == 1) {
                casquette_appear()
                compteur_scroll++
                is_animating = true;
                var intervalID = window.setTimeout(animating, 3000);
            } else if (compteur_scroll == 2) {
                ghibli_appear()
                compteur_scroll++
                is_animating = true;
                var intervalID = window.setTimeout(animating, 3000);
            } else if (compteur_scroll == 3) {
                echo_appear()
                compteur_scroll++
                is_animating = true;
                var intervalID = window.setTimeout(animating, 3000);
            }

        }
    } else if (scrollUp) {
        if(!is_animating) {
            if (compteur_scroll == 2){
                triple_logo_appear()
                compteur_scroll--
                is_animating = true
                var intervalID = window.setTimeout(animating, 3000);
            } else if (compteur_scroll == 3){
                casquette_appear()
                compteur_scroll--
                is_animating = true
                var intervalID = window.setTimeout(animating, 3000);
            } else if (compteur_scroll == 4){
                ghibli_appear()
                compteur_scroll--
                is_animating = true
                var intervalID = window.setTimeout(animating, 3000);
            }
        }
    }
})