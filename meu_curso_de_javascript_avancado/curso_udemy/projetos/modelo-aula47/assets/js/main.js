function criarHoraSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-Br', {
        hour12: false,
        timeZone: 'UTC'
    })
}


const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const parar = document.querySelector('.parar');

let segundos = 0;

let timer;


function iniciaRelogio() {
    timer = setInterval(function () {
        segundos++
        relogio.innerHTML = criarHoraSegundos(segundos)
    }, 1000)
}   


iniciar.addEventListener('click', function(event) {
    clearInterval(timer)
    iniciaRelogio()
    relogio.classList.remove('pause')
})

pausar.addEventListener('click', function(event) {
    return segundos > 0 ?  clearInterval(timer) + relogio.classList.add('pause') :   console.log('Inicie o cronômetro!')
})

parar.addEventListener('click', function(event) {
    clearInterval(timer)
    relogio.classList.remove('pause')
    segundos = 0
    relogio.innerHTML = '00:00:00'
})