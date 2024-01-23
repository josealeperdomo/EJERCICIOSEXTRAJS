let menu = document.getElementById('menuG')

console.log(menu.style.display);
function hamburguesa(){
    menu.classList.toggle('menuGV')
}

let pantalla = document.getElementById('pantalla')
let cerrar = document.getElementById('cerrar')

function perfil(){
    pantalla.style.display = 'flex'
}

function x(){
    pantalla.style.display = 'none'
}