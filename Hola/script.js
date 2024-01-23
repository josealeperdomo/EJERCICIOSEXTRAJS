function hola () {
    setInterval(() => {
        console.log('hola');
    }, 1000);
}

function mostrar(){
    let ventana = document.getElementById('ventana')
    ventana.style.display ='flex'
}

function ocultar(){
    let ventana = document.getElementById('ventana')
    ventana.style.display ='none'
}

hola()