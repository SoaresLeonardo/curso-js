function desconto() {
    var res1 = document.getElementById('res1')
    var res2 = document.getElementById('res2')
    var res3 = document.getElementById('res3')
    var pp = document.getElementById('pp')
  var produto =   prompt('Qual é o produto que voçê está comprando?')
   var preco = prompt(`Qual é o preço de ${produto}`)
   pp.innerHTML = `Calculando desconto de 10% para ${produto}`
   pp.style.fontWeight = 'bold'
   res1.innerHTML = `O preço original era R$ ${preco}`
   var desconto = preco  / 100 * 10
   res2.innerHTML = `Voçê acaba de ganhar R$ ${desconto.toFixed(2)} de desconto (-10%)`
   var fim = preco - desconto
   res3.innerHTML += `No fim, voçê vai pagar R$ ${fim.toFixed(2)} no produto ${produto} `
}