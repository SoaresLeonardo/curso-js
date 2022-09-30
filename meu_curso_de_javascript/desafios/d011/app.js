function anobi() {
   var res = document.getElementById('res')
   var p3 = document.getElementById('p3')
   var ano = prompt('Qual é o ano que voçê quer verificar?')
   p3.innerHTML = `Analizando o ano de ${ano}...`
   p3.style.fontWeight = 'bold'
   p3.style.fontSize = '1.9em'
   if (ano%400 == 0) {
    res.innerHTML= `O ano de ${ano} <mark class="verde">É bissexto</mark> &#x2705
    `
   } else if(ano%4==0 && ano%100!=0){
      res.innerHTML= `O ano de ${ano} <mark class="verde">É bissexto</mark> &#x2705`
   } else
    res.innerHTML= `O ano de ${ano} <mark id="vermelho" >Não é bissexto</mark> &#x274C`
   
 
  
}