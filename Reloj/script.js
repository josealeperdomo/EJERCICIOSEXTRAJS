
let hora = document.getElementById('hora')
let fecha = document.getElementById('fecha')

function tiempo(){
    let datos = new Date()
    let reloj = [datos.getHours(),datos.getMinutes(),datos.getSeconds(),datos.getDay(),datos.getMonth() + 1]
    for (let i = 0; i < reloj.length; i++) {
        if(reloj[i] < 10){
            reloj[i] = `0${reloj[i]}`
        }   
    }
    hora.textContent = `${reloj[0]}:${reloj[1]}:${reloj[2]}`

    fecha.textContent = `${reloj[3]}-${reloj[4]}-${datos.getFullYear()}`
}

tiempo()

setInterval(() => {
    tiempo()
}, 1000);