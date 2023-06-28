$(window).on('load', function() {
    $('#slider').nivoSlider(); 	
}); 

$('.hamburguer-icon').on('click', function(){
  $('.nav__list').toggleClass('reveal');
})

// const menu = document.getElementById('hamburguer-icon');
// const nav = document.getElementById('nav__list');

// menu.addEventListener('click', function() {
//   nav.getElementById('nav__list').classList.toggle('reveal');
// })

'use strict'

const li        = document.querySelectorAll('.li')
const block    = document.querySelectorAll('.block')

// CLICK en li
    // TODOS .li quitar la clase activo
    // TODOS .bloque quitar la clase activo
    // .li con la posicion se añadimos la clase activo
    // .bloque con la posicion se añadimos la clase activo

// Recorriendo todos los LI
li.forEach( ( cadaLi , i )=>{
    // Asignando un CLICK a CADALI
    li[i].addEventListener('click',()=>{

        // Recorrer TODOS los .li
        li.forEach( ( cadaLi , i )=>{
            // Quitando la clase activo de cada li
            li[i].classList.remove('activo')
            // Quitando la clase activo de cada bloque
            block[i].classList.remove('activo')
        })

        // En el li que hemos click le añadimos la clase activo
        li[i].classList.add('activo')
        // En el bloque con la misma posición le añadimos la clase activo
        block[i].classList.add('activo')

    })
})

// Slider Productos

var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 2,
    stretch: 0,
    depth: 100,
    modifier: 3.35,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
    }
});

// Slider de Testimonios

var slide = document.getElementById("testimonial-slide");
var upArrow = document.getElementById("upArrow");
var downArrow = document.getElementById("downArrow");

let x = 0;

downArrow.onclick = function(){
  if(x > "-300"){
    x = x - 300;
    slide.style.top = x + "px";
  }
  
}

upArrow.onclick = function(){
  if(x < 0){
    x = x + 300;
    slide.style.top = x + "px";
  }
}

