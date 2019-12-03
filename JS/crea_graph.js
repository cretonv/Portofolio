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

function from_bottom(page_active){
    /*for(var i = 0; i < pages.length; i++){
        pages[i].classList.add('cate-cache')
    }*/
    pages[page_active].classList.add('open')
}

function triple_logo_appear(){
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
    console.log('aie');
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
    console.log('aie');
    ghibli_page.classList.remove('hidden')
    from_bottom(3);
    ghibli_top.classList.add('bloc-border-top');
    ghibli_left.classList.add('bloc-border-left');
    ghibli_right.classList.add('bloc-border-right');
    ghibli_bottom.classList.add('bloc-border-bottom');
    /*ghibli_fleche.classList.add('fleche');*/  /* A rajouter si on met une flèche et une nouvelle page */
    ghibli_content.classList.remove('hidden');
    ghibli_content.classList.add('bloc-content');
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
