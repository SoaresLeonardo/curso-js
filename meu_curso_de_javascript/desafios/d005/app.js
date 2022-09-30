function converter() {
    var res = window.document.getElementById('res')
    var res2 = document.getElementById('res2')
    var res3 = document.getElementById('res3')
    var res4 = document.getElementById('res4')
    var res5 = document.getElementById('res5')
    var res6 = document.getElementById('res6')
    var res7 = document.getElementById('res7')
    
   var m = prompt('Digite uma distância em metros (m)')
   var km = Number.parseInt(m) / 1000 
 
   res.innerHTML = `A distância de ${m} metros, corresponde a...`
   res.style.marginTop = '50px'
   res.style.fontSize = '2em'
   res.style.fontWeight = 'bold'
   res2.innerHTML = `${km} quilometros (km) <br>`
   res2.style.marginTop = '50px'
   res2.style.fontSize = '2em'
   var hm = m / 100
   res3.innerHTML += `${hm} hectometros (hm) <br> `
   res3.style.marginTop = '50px'
   res3.style.fontSize = '2em'
   var dam = m / 10
   res4.innerHTML += `${dam} decametros (dam) <br> `
   res4.style.marginTop = '50px'
   res4.style.fontSize = '2em'
   var dm = m * 10
   res5.innerHTML += `${dm} decimetros (dm)`
   res5.style.marginTop = '50px'
   res5.style.fontSize = '2em'
   var cm = m * 100
   res6.innerHTML = `${cm} centimetros (cm)`
   res6.style.marginTop = '50px'
   res6.style.fontSize = '2em'
   var mm = m * 1000
   res7.innerHTML = `${mm} milimetros (mm)`
   res7.style.marginTop = '50px'
   res7.style.fontSize = '2em'
   


}