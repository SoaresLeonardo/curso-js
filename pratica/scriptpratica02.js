function verificar() {
   var numero = document.getElementById('txtinp')
   var res = document.getElementById('res')
   if(numero.value == 0 || numero.value < 1){
      //Alerta de [erro] para caso o campo for deixado vazio ou o valor for nagativo!
      alert('[ERRO] Verifique os dados e tente novamente.')
      res.innerHTML = 'Coloque um número!'
      res.style.marginTop = '40px'
   } else if (numero.value%2 == 0){
      res.innerHTML = `<p>O número digitado foi: ${numero.value}</p> <br>`
      res.innerHTML += 'Ele é um número par! \u{1F604}'
   } else {
      res.innerHTML = `<p>O número digitado foi: ${numero.value}</p> <br>`
      res.innerHTML += 'Ele é um número impar! \u{1F600} '
   }
  
  
}