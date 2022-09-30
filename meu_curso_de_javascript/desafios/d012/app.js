function preco() {
    var paragrafo = document.getElementById('paragrafo')
   var res1 = document.getElementById('res1')
   var res2 = document.getElementById('res2')
   var res3 = document.getElementById('res3')
   var res4 = document.getElementById('res4')
   var preco_anterior =  prompt('Qual era o preço anterior do produto?')
   var preco_atual = prompt('Qual é o preço atual do produto?')
   paragrafo.innerHTML = `Analizando os valores informados`
   res1.innerHTML = `O produto custava R$ ${preco_anterior} e agora custa R$ ${preco_atual}.`
   if(preco_anterior < preco_atual) {
       res2.innerHTML = 'Hoje o produto está mais caro'
       let pat_ant = preco_atual - preco_anterior
       res3.innerHTML = `O preço subiu R$ ${pat_ant} em relação ao preço anterior`
   } else if(preco_anterior > preco_atual) {
    res2.innerHTML = 'Hoje o produto está mais barato'
    let ant_pat = preco_anterior - preco_atual
    res3.innerHTML = `O preço caio R$ ${ant_pat} em relação ao preço anterior`

} 

}