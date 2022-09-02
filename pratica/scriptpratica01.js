function verificar() {
 var idade = document.getElementById('txtid')
 var res = document.getElementById('res')
 res.innerHTML = `Sua idade é <strong>${idade.value} anos.</strong> <br>`
 res.style.marginTop = '30px'
 if (idade.value >= 18){
     res.innerHTML += '<p><strong> \u{2713} Maior de idade, </strong>pode dirigir.</p>'
 } 
  if(idade.value > 200){
    alert('[ERRO] verifique se os dados não estão em brancos!')
    res.innerHTML = ''
    res.innerHTML= 'Coloque uma idade real..'
 }
  else if (idade.value.length == 0 || idade.value < 1 ){
     alert('[ERRO] verifique se os dados não estão em brancos!')
     res.innerHTML = 'Coloque sua idade!'
     
 } else if (idade.value < 18){
     res.innerHTML += '<p><strong>\u{01F51E} Menor de idade,</strong> Não pode dirigir.</p>'
     res.style.marginTop = '15px'
     
 } 
 idade.value = ''
 idade.focus()
 
 
 
 
 
}
