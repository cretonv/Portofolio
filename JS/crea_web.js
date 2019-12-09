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
    console.log('aie');
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