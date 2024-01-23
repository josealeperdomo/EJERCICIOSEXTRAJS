let tablero = document.getElementById('tablero')
let turnoh = document.getElementById('turno')
let turno = 0
if (localStorage.getItem('puntaje') == null){
    var puntajeX = 0
    var puntajeO = 0
}
let puntajex = document.getElementById('puntajex')
let puntajeo = document.getElementById('puntajeo')

function espar(num){
    return num % 2 == 0
}

function historial(){
    localStorage.setItem('puntajeX',puntajeX)
    localStorage.setItem('puntajeO',puntajeO)
}

function cargarHistorial(){
    const storedPuntajeX = localStorage.getItem('puntajeX')
    const storedPuntajeO = localStorage.getItem('puntajeO')

    if(storedPuntajeX){
        puntajeX = parseInt(storedPuntajeX)
    }
    if(storedPuntajeO){
        puntajeO = parseInt(storedPuntajeO)
    }

}

function mostrarHistorial(){
    if (localStorage.getItem('puntajeX') !== null) {
    puntajex.textContent = `Puntaje X = ${localStorage.getItem('puntajeX')}`
    puntajeo.textContent = `Puntaje O = ${puntajeO}` 
    }
}

function borrarHistorial(){
    puntajeX = 0
    puntajeO = 0
    puntajex.textContent = `Puntaje X = 0`
    puntajeo.textContent = `Puntaje O = 0`
    localStorage.setItem('puntajeX','0')
    localStorage.setItem('puntajeO','0')
    location.reload()
}

function modo(){
    let modo = document.getElementById('modo')
    modo.classList.toggle('botonOscuro')
    if(modo.classList[1] == 'botonOscuro'){
        modo.textContent = 'Modo Claro'
    }else{
        modo.textContent = 'Modo Oscuro'
    }
    let main = document.getElementById('main')
    let footer = document.getElementById('footer')
    document.getElementById('header').classList.toggle('modoOscuro')
    main.classList.toggle('modoOscuro')
    footer.classList.toggle('modoOscuro')
}

for(let i = 0; i < tablero.children.length; i++) {
tablero.children[i].addEventListener('click',(e)=>{
    if(e.target.id !== 'tablero' && e.target.classList[1] !== 'tocada' && espar(turno)){
    turno++
    e.target.classList.add('tocada')
    e.target.classList.add('tocadaX')
    e.target.textContent = 'X'
    turnoh.textContent ='Turno de O'
    }else if(e.target.id !== 'tablero' && e.target.classList[1] !== 'tocada' && !espar(turno)){
        turno++
        e.target.classList.add('tocada')
        e.target.classList.add('tocadaO')
        e.target.textContent = 'O'
        turnoh.textContent ='Turno de X'
    }
    if(tablero.children[0].classList[2] == 'tocadaX' && tablero.children[1].classList[2] == 'tocadaX' && tablero.children[2].classList[2] == 'tocadaX' || tablero.children[3].classList[2] == 'tocadaX' && tablero.children[4].classList[2] == 'tocadaX' && tablero.children[5].classList[2] == 'tocadaX' || tablero.children[0].classList[2] == 'tocadaX' && tablero.children[3].classList[2] == 'tocadaX' && tablero.children[6].classList[2] == 'tocadaX' || tablero.children[1].classList[2] == 'tocadaX' && tablero.children[4].classList[2] == 'tocadaX' && tablero.children[7].classList[2] == 'tocadaX' || tablero.children[2].classList[2] == 'tocadaX' && tablero.children[5].classList[2] == 'tocadaX' && tablero.children[8].classList[2] == 'tocadaX' || tablero.children[0].classList[2] == 'tocadaX' && tablero.children[4].classList[2] == 'tocadaX' && tablero.children[8].classList[2] == 'tocadaX' || tablero.children[2].classList[2] == 'tocadaX' && tablero.children[4].classList[2] == 'tocadaX' && tablero.children[6].classList[2] == 'tocadaX'){
        alert('GANAN LAS X')
        puntajeX++
        historial()
        location.reload()
    }else if(tablero.children[0].classList[2] == 'tocadaO' && tablero.children[1].classList[2] == 'tocadaO' && tablero.children[2].classList[2] == 'tocadaO' || tablero.children[3].classList[2] == 'tocadaO' && tablero.children[4].classList[2] == 'tocadaO' && tablero.children[5].classList[2] == 'tocadaO' || tablero.children[0].classList[2] == 'tocadaO' && tablero.children[3].classList[2] == 'tocadaO' && tablero.children[6].classList[2] == 'tocadaO' || tablero.children[1].classList[2] == 'tocadaO' && tablero.children[4].classList[2] == 'tocadaO' && tablero.children[7].classList[2] == 'tocadaO' || tablero.children[2].classList[2] == 'tocadaO' && tablero.children[5].classList[2] == 'tocadaO' && tablero.children[8].classList[2] == 'tocadaO' || tablero.children[0].classList[2] == 'tocadaO' && tablero.children[4].classList[2] == 'tocadaO' && tablero.children[8].classList[2] == 'tocadaO' || tablero.children[2].classList[2] == 'tocadaO' && tablero.children[4].classList[2] == 'tocadaO' && tablero.children[6].classList[2] == 'tocadaO'){
        alert('GANAN LAS O')
        puntajeO++
        historial()
        location.reload()
    }else if (turno == 9){
        alert('EMPATE')
        location.reload()
    }
})}

cargarHistorial()
mostrarHistorial()