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

var ligne_reseau = document.querySelector('#ligne-reseau');

var realisations = document.querySelector("#realisations");
var photos = document.querySelector("#photos");
var profil = document.querySelector('#profil')

var display_underline = document.querySelectorAll(".display-underline");
var display_underline1 = display_underline[0];
var display_underline2 = display_underline[1];

var display_container = document.querySelectorAll(".display-container");
var display_container1 = display_container[0];
var display_container2 = display_container[1];

var slider = document.querySelector('.gallerie');
var slider_images = document.querySelectorAll('.gallerie-img');
var slider_2 = document.querySelector('.gallerie-2');
var slider_images_2 = document.querySelectorAll('.gallerie-img-2');
var slider_3 = document.querySelector('.gallerie-3');
var slider_images_3 = document.querySelectorAll('.gallerie-img-3');
var slide_value = 0;
var slide_select = 0;

var gallerie_Irlande = document.querySelector('#gallerie-Irlande');
var gallerie_Londres = document.querySelector('#gallerie-Londres');
var gallerie_Divers = document.querySelector('#gallerie-Divers');
var gallerie_active = 1;

var mosaiques = document.querySelector('#mosaiques')
var galleries = document.querySelector("#galleries")

var mosaique_Irlande = document.querySelector('#mosaique-Irlande')
var mosaique_Londres = document.querySelector('#mosaique-Londres')
var mosaique_Divers = document.querySelector('#mosaique-Divers')

var photo_back = document.querySelector('#photos-back')
var photos_zoom = document.querySelectorAll(".zoom-img")

var zoom_indicator = false;

/* variables de la page réalisations */

var left_bar_real = document.querySelector('.lat-border-bottom-left')
var right_bar_real = document.querySelector('.lat-border-bottom-right')

var left_top_bar_real = document.querySelector('.lat-border-left-top')
var left_bottom_bar_real = document.querySelector('.lat-border-left-bottom')

var right_top_bar_real = document.querySelector('.lat-border-right-top')
var right_bottom_bar_real = document.querySelector('.lat-border-right-bottom')

var top_middle_bar_real = document.querySelector('.lat-border-middle-top')
var bottom_middle_bar_real = document.querySelector('.lat-border-middle-bottom')

var real_category = document.querySelectorAll('.real-category')

/* Variables de la page mon profil */

var profil_content = document.querySelector('#profil-content-container')

var profil_active = 0;
var home_profil = document.querySelector('#home-profil')
var competences = document.querySelector('#competences')
var formation = document.querySelector('#formation')
var outils = document.querySelector('#outils')

var competences_descriptions = document.querySelectorAll('.competence-description')

/* Variables de la page contacts */

var contacts = document.querySelector('#contacts')

var contacts_content = document.querySelector('#contacts-content-container')

/*------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------*/
/*------------------------------------------------------------------------------------*/
/*-------------------------- PARTIE FONCTION --------------------------------*/

function burger_action(){

    burger_animation();                         // animation du bouton burger


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

        ligne_reseau.classList.add("opacity");


        menu.open = true                        // On met à jour l'indicateur d'état

    } else {                                    // Si le menu est ouvert

        menu.classList.remove('open')                    // On enlève la classe CSS et fais disparaitre le menu


        /*top_bar.classList.remove("top-apparition")                // Gere la disparition du menu, à voir si on garde
        bottom_bar.classList.remove("top-apparition")

        top_right_bar.classList.remove("middle-top-apparition")
        top_left_bar.classList.remove("middle-top-apparition")

        middle_left_bar.classList.remove("top-apparition")
        middle_right_bar.classList.remove("top-apparition")

        bottom_right_bar.classList.remove("middle-top-apparition")
        bottom_left_bar.classList.remove("middle-top-apparition")
*/
        /*ligne_reseau.classList.remove("opacity");*/


        menu.open = false                                       // On met à jour l'indicateur d'état
    }


}

//---------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------//

function realisations_access() {

    burger_animation()                                  // animation du bouton burger

    menu.classList.remove('open')                // On enlève la classe CSS et fais disparaitre le menu
    photos.classList.remove('open')              // On enlève la classe CSS et fais disparaitre la page photo si elle était ouverte
    profil.classList.remove('open')
    contacts.classList.remove('open')

    realisations.classList.add('open')                      // On ouvre la rubrique séléctionnés, ici realisations

    left_bar_real.classList.add('x-apparition')
    right_bar_real.classList.add('x-apparition')

    left_top_bar_real.classList.add('y-apparition')
    left_bottom_bar_real.classList.add('y-apparition')

    right_top_bar_real.classList.add('y-apparition')
    right_bottom_bar_real.classList.add('y-apparition')

    top_middle_bar_real.classList.add('x-apparition')
    bottom_middle_bar_real.classList.add('x-apparition')

    for(var i = 0; i < real_category.length; i++){
        real_category[i].classList.add('opacity');
        console.log("ça marche po")
    }

    menu.open = false                                       // On met à jour l'indicateur d'état
}


//---------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------//

function profil_access() {

    burger_animation()                                  // animation du bouton burger

    menu.classList.remove('open')                // On enlève la classe CSS et fais disparaitre le menu
    realisations.classList.remove('open')              // On enlève la classe CSS et fais disparaitre la page reéalisations si elle était ouverte
    photos.classList.remove('open')
    contacts.classList.remove('open')

    profil.classList.add('open')                      // On ouvre la rubrique séléctionnés, ici realisations

    profil_content.classList.remove('hidden-opacity')

    menu.open = false                                       // On met à jour l'indicateur d'état
}


//---------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------//

function photos_access() {

    burger_animation()                                  // animation du bouton burger

    menu.classList.remove('open')                // On enlève la classe CSS et fais disparaitre le menu
    realisations.classList.remove('open')              // On enlève la classe CSS et fais disparaitre la page reéalisations si elle était ouverte
    profil.classList.remove('open')
    contacts.classList.remove('open')

    photos.classList.add('open')                      // On ouvre la rubrique séléctionnés, ici realisations



    menu.open = false                                       // On met à jour l'indicateur d'état
}

function display_action(choix) {
    if (choix == 1) {
        display_underline2.classList.remove("display-underline-active");
        display_underline1.classList.add("display-underline-active")

        display_container2.classList.remove("display-container-active");
        display_container1.classList.add("display-container-active")

        galleries.classList.add("hidden")
        mosaiques.classList.remove("hidden")
    }
    else if (choix == 2) {
        display_underline2.classList.add("display-underline-active");
        display_underline1.classList.remove("display-underline-active")

        display_container2.classList.add("display-container-active");
        display_container1.classList.remove("display-container-active")

        mosaiques.classList.add("hidden")
        galleries.classList.remove("hidden")
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

/* Fonctions pour le slider */
function next_slide() {
    if ( slider.style.transform != "translateX(-289.5vh)" ) {
        slide_value -= 96.5
        console.log('next');
        slider.style.transform = "translateX(" + slide_value + "vh)"
        image_select_next()
    }
}

function prev_slide() {
    if (slider.style.transform != "translateX(0vh)") {
        slide_value += 96.5
        console.log('prev');
        slider.style.transform = "translateX(" + slide_value + "vh)"
        image_select_prev()
    }
}

function image_select_next() {
    console.log('ça appelle next');
    slider_images[slide_select].classList.remove('focus');
    if (slide_select < 4){
        slide_select ++;
    }
    slider_images[slide_select].classList.add('focus');
}

function image_select_prev() {
    slider_images[slide_select].classList.remove('focus');
    if ( slide_select > 0) {
        slide_select -= 1;
    }
    slider_images[slide_select].classList.add('focus');
    console.log('ça appelle prev');
}

function Irlande_view() {
    if(gallerie_active !=1) {
        for(var x = 0; x < 4; x++){
            slider_images[x].classList.remove('focus');
        }
        slide_select = 0;
        slider_images[slide_select].classList.add('focus');
        slide_value = 0;
        slider.style.transform = "translateX(" + slide_value + "vh)"
        gallerie_Londres.classList.add('hidden');
        gallerie_Divers.classList.add('hidden');
        mosaique_Londres.classList.add('hidden');
        mosaique_Divers.classList.add('hidden');
        gallerie_Irlande.classList.remove('hidden');
        mosaique_Irlande.classList.remove('hidden');
        gallerie_active = 1;
    }
}

function Londres_view() {
    if(gallerie_active !=2) {
        for(var x = 0; x < 4; x++){
            slider_images_2[x].classList.remove('focus');
        }
        slide_select = 0;
        slider_images_2[slide_select].classList.add('focus');
        slide_value = 0;
        slider_2.style.transform = "translateX(" + slide_value + "vh)"
        gallerie_Irlande.classList.add('hidden');
        gallerie_Divers.classList.add('hidden');
        mosaique_Irlande.classList.add('hidden');
        mosaique_Divers.classList.add('hidden');
        gallerie_Londres.classList.remove('hidden');
        mosaique_Londres.classList.remove('hidden');
        gallerie_active = 2;
    }
}

function Divers_view() {
    if(gallerie_active !=3) {
        for(var x = 0; x < 4; x++){
            slider_images_3[x].classList.remove('focus');
        }
        slide_select = 0;
        slider_images_3[slide_select].classList.add('focus');
        slide_value = 0;
        slider_3.style.transform = "translateX(" + slide_value + "vh)"
        gallerie_Irlande.classList.add('hidden');
        gallerie_Londres.classList.add('hidden');
        mosaique_Londres.classList.add('hidden');
        mosaique_Irlande.classList.add('hidden');
        gallerie_Divers.classList.remove('hidden');
        mosaique_Divers.classList.remove('hidden');
        gallerie_active = 3;
    }
}


/* Fonctions dédoublé avec les noms qui correspondent à la deuxième gallerie */

function next_slide_2() {
    if ( slider_2.style.transform != "translateX(-289.5vh)" ) {
        slide_value -= 96.5
        console.log('next');
        slider_2.style.transform = "translateX(" + slide_value + "vh)"
        image_select_next_2()
    }
}

function prev_slide_2() {
    if (slider_2.style.transform != "translateX(0vh)") {
        slide_value += 96.5
        console.log('prev');
        slider_2.style.transform = "translateX(" + slide_value + "vh)"
        image_select_prev_2()
    }
}

function image_select_next_2() {
    console.log('ça appelle next');
    slider_images_2[slide_select].classList.remove('focus');
    if (slide_select < 4){
        slide_select ++;
    }
    slider_images_2[slide_select].classList.add('focus');
}

function image_select_prev_2() {
    slider_images_2[slide_select].classList.remove('focus');
    if ( slide_select > 0) {
        slide_select -= 1;
    }
    slider_images_2[slide_select].classList.add('focus');
    console.log('ça appelle prev');
}

/* Fonctions dédoublé avec les noms qui correspondent à la troisième gallerie */

function next_slide_3() {
    if ( slider_3.style.transform != "translateX(-289.5vh)" ) {
        slide_value -= 96.5
        console.log('next');
        slider_3.style.transform = "translateX(" + slide_value + "vh)"
        image_select_next_3()
    }
}

function prev_slide_3() {
    if (slider_3.style.transform != "translateX(0vh)") {
        slide_value += 96.5
        console.log('prev');
        slider_3.style.transform = "translateX(" + slide_value + "vh)"
        image_select_prev_3()
    }
}

function image_select_next_3() {
    console.log('ça appelle next');
    slider_images_3[slide_select].classList.remove('focus');
    if (slide_select < 4){
        slide_select ++;
    }
    slider_images_3[slide_select].classList.add('focus');
}

function image_select_prev_3() {
    slider_images_3[slide_select].classList.remove('focus');
    if ( slide_select > 0) {
        slide_select -= 1;
    }
    slider_images_3[slide_select].classList.add('focus');
    console.log('ça appelle prev');
}

/* Fonction qui dois gérer le zoom */

function zoom(a, b) {
    console.log('#' + a)
    var img_zoom = document.querySelector('#' + a)
    var ovr_zoom = document.querySelector('#' + b)

    img_zoom.classList.remove('hidden');
    ovr_zoom.classList.remove('hidden');
    photo_back.classList.add('photo-back-low-opacity');
    zoom_indicator = true;

    /*border_top.classList.add('zoom-border-top-apparition');*/
}

function dezoom(a, b) {
    console.log('#' + a)
    var img_zoom = document.querySelector('#' + a)
    var ovr_zoom = document.querySelector('#' + b)
    img_zoom.classList.add('hidden');
    ovr_zoom.classList.add('hidden');
    photo_back.classList.remove('photo-back-low-opacity');
    zoom_indicator = false;
}

/*----------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------*/
/* Fonctions JS pour la partie mon profil */

function competences_view() {
    if(profil_active != 1) {
        home_profil.classList.add('hidden');
        outils.classList.add('hidden');
        formation.classList.add('hidden');
        competences.classList.remove('hidden');
        gallerie_active = 1;
    }
}

function formation_view() {
    if(profil_active != 2) {
        home_profil.classList.add('hidden');
        outils.classList.add('hidden');
        competences.classList.add('hidden');
        formation.classList.remove('hidden');
        gallerie_active = 2;
    }
}

function outils_view() {
    if(profil_active != 3) {
        home_profil.classList.add('hidden');
        formation.classList.add('hidden');
        competences.classList.add('hidden');
        outils.classList.remove('hidden');
        gallerie_active = 3;
    }
}

//---------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------//

function contacts_access() {

    burger_animation()                                  // animation du bouton burger

    menu.classList.remove('open')                // On enlève la classe CSS et fais disparaitre le menu
    realisations.classList.remove('open')              // On enlève la classe CSS et fais disparaitre la page reéalisations si elle était ouverte
    photos.classList.remove('open')
    profil.classList.remove('open')


    contacts.classList.add('open')                      // On ouvre la rubrique séléctionnés, ici realisations

    contacts_content.classList.remove('hidden-opacity')

    menu.open = false                                       // On met à jour l'indicateur d'état
}

function description_appear(a) {
    for(var i = 0; i < competences_descriptions.length; i++){
        competences_descriptions[i].classList.add('description-cache');
    }

    var target_description = document.querySelector('#competence-description-' + a)
    target_description.classList.remove('description-cache')
}
