// mobile menu

const burgerIcon = document.querySelector("#burger");
const navbarMenu = document.querySelector("#nav-links");

burgerIcon.addEventListener("click", () => {
    navbarMenu.classList.toggle('is-active')
} );

// tabs

const tabs = document.querySelectorAll('.tabs li');
const tabsContentBoxes = document.querySelectorAll('#tab-content > div');

tabs.forEach((tab)=>{
    tab.addEventListener( 'click', ()=>{
        tabs.forEach( item => item.classList.remove('is-active'));
        tab.classList.add('is-active');

        const target = tab.dataset.target
        
        tabsContentBoxes.forEach(box => {
            if ( box.getAttribute('id') === target ) {
                box.classList.remove('is-hidden');
            } else {
                box.classList.add('is-hidden');
            }
        })
    })
});

// show a modal

const buttonAddCard = document.querySelector('#add_in_shop');
const modalBg = document.querySelector('.modal-background') ;
const modal = document.querySelector('.modal') ;
const buttonClose = document.querySelector('#close') ;

if ( buttonAddCard ) {

    buttonAddCard.addEventListener("click", () => {
        modal.classList.add('is-active');
    });
}

if ( buttonClose ) {    
    buttonClose.addEventListener( "click", ()=> {
        modal.classList.remove('is-active');
    } );
}

if (modalBg) {
    modalBg.addEventListener( "click", ()=> {
        modal.classList.remove('is-active');
    } );
}



//Font background -- Carousel
const imageBackFont = document.querySelector("imageFontShow");

bulmaCarousel.attach('#carousel-demo', {
    slidesToScroll: 1,
    slidesToShow: 1,
    loop : true,
    breakpoint: [
            { changePoint: 480, slidesToShow: 1, slidesToScroll: 1 }, 
            { changePoint: 640, slidesToShow: 1, slidesToScroll: 2 }, 
            { changePoint: 768, slidesToShow: 1, slidesToScroll: 3 } 
        ]
});

const options = {
    slidesToScroll: 1,
    slidesToShow: 1,
    loop: true,
    breakpoint: [
      { changePoint: 480, slidesToShow: 1, slidesToScroll: 1 },
      { changePoint: 640, slidesToShow: 1, slidesToScroll: 2 },
      { changePoint: 768, slidesToShow: 1, slidesToScroll: 3 },
    ],
  };
// Initialize all elements with carousel class.
const carousels = bulmaCarousel.attach('.carousel', options);

// To access to bulmaCarousel instance of an element
const element = document.querySelector('#my-element');
if (element && element.bulmaCarousel) {
	// bulmaCarousel instance is available as element.bulmaCarousel
}