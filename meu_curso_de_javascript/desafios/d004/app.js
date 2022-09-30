function comprar(){
   var produto =  prompt('Que produto voçê está comprando?')
   var din = prompt(`Quanto custa ${produto} que voçê está comprando?`)
   var valor = prompt(`Qual foi o valor  que voçê deu para pagar  ${produto}`)
   var rest = valor 
   var rest2 = din
   var restt = rest - rest2
   prompt(`Voçê comprou ${produto} que custou R$${din}.
Deu R$${valor} e vai receber R$${restt} de troco.  
volte sempre! `)

}