
let dado = document.querySelector('#dado');
let lanzar = document.getElementById('boton')

// 
function random(min, max) {
  return min + Math.floor(Math.random() * max); 
}

function lanzarDado() {
    dado.textContent = random(1,6);
}

lanzar.addEventListener('click', lanzarDado);