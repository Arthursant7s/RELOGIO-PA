
// DOOM
const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')

// EVENTOS

setInterval(relogio,1000)

// AÇÃO

    function relogio(){

        hoje = new Date()
        h = hoje.getHours()
        m = hoje.getMinutes()
        s = hoje.getSeconds()

        horas.textContent = h
        minutos.textContent = m
        segundos.textContent = s


}