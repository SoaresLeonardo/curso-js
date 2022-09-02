const lamp = document.getElementById('lamp')
const powerOn = document.getElementById('powerOn')
const powerOf = document.getElementById('powerOf')

function isLampBroken () {
    //função que vai verificar se lampada está quebrada, caso sim ela não ira permitir a lâmpada ser ligada ou desligada a menos que o usuário use 'F5'
    return lamp.src.indexOf ('quebrada') > - 1
}

function lampOn() {
    if (!isLampBroken ()) {
        lamp.src = './img/ligada.jpg'
    }
    
}

function lampOf () {
    if (!isLampBroken ()) {
    lamp.src = './img/desligada.jpg'
    }
}

function lampToc () {
    lamp.src = './img/quebrada.jpg'
}

powerOn.addEventListener ('click', lampOn)
powerOf.addEventListener ('click', lampOf)
lamp.addEventListener ('dblclick', lampToc )
lamp.addEventListener ('mouseover', lampOn );
lamp.addEventListener ('mouseleave', lampOf );