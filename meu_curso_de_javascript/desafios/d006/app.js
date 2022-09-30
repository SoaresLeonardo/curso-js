function temperatura() {
    var res = document.getElementById('res')
    var res2 = document.getElementById('res2')
    var res3 = document.getElementById('res3')
    var temperatura = prompt('Digite uma temperatura em oC (celsius)')
    res.innerHTML = `A temperatura de ${temperatura} oC, corresponde a... `
    res.style.fontSize = '1.7em'
    res.style.fontWeight = 'bold'
    var ke = Number(temperatura) +  273
    res2.innerHTML = `${ke} K (kelvin)`
    res2.style.fontSize = '1.2em'
    res2.style.marginTop = '20px'
    var fr = temperatura * 1.8 + 32
    res3.innerHTML = `${fr} F (Fahrenheit)`
    res3.style.fontSize = '1.2em'
    res3.style.marginTop = '20px'



    
}