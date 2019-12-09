var pages = document.querySelectorAll('.page-crea')
var page_active = 0;

var reportage_page = document.querySelector('#reportage')

var reportage_top = document.querySelector('#reportage-top');
var reportage_left = document.querySelector('#reportage-left');
var reportage_right = document.querySelector('#reportage-right');
var reportage_bottom = document.querySelector('#reportage-bottom');
var reportage_fleche = document.querySelector('#fleche-reportage');
var reportage_content = document.querySelector('#reportage-content');

function from_bottom(page_active){
    /*for(var i = 0; i < pages.length; i++){
        pages[i].classList.add('cate-cache')
    }*/
    pages[page_active].classList.add('open')
}

function reportage_appear(){
    console.log('aie');
    reportage_page.classList.remove('hidden')
    from_bottom(1);
    reportage_top.classList.add('bloc-border-top');
    reportage_left.classList.add('bloc-border-left');
    reportage_right.classList.add('bloc-border-right');
    reportage_bottom.classList.add('bloc-border-bottom');
    reportage_fleche.classList.add('fleche');
    reportage_content.classList.remove('hidden');
    reportage_content.classList.add('bloc-content');
}