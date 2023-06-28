//Scroll funtion


window.addEventListener('scroll', function(){
  
  var elemento = document.querySelectorAll('.burbuja');
  var titulo = document.querySelectorAll('.mensaje');

  for (var i = 0; i < titulo.length; i++){
    var altura = window.innerHeight/1.3;
    var distancia = titulo[i].getBoundingClientRect().top;
    var distanciaBot = titulo[i].getBoundingClientRect().bottom;

    // elemento[i].classList.add('transform_right')

    if(distancia <= altura && distanciaBot >= altura){
        elemento[i].classList.add('aparece');
    }

    else{
        elemento[i].classList.remove('aparece');
    }  
}
})

  

