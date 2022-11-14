function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
setTimeout(() => {
    console.log(msg)
}, tempo)
}

esperaAi('Frase1', rand(1, 3))
esperaAi('Frase2', rand(1, 3))
esperaAi('Frase3', rand(1, 3))