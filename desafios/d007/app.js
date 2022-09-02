var dolarhj = prompt('Antes de mais nada. Quanto está a cotação do dólar agora?')

function converter() {
   var reais =  prompt('Quantos R$ voçê tem na carteira?')
   var rest  = Number(reais) / Number(dolarhj)
   alert(rest.toFixed(2))
}