function reajustar() {
  var res1 = document.getElementById('res1')
  var res3 = document.getElementById('res2')
  var res4 = document.getElementById('res3')
  var res5 = document.getElementById('res4')
  var nome =  prompt('Qual é o nome funcionário?')
  var salario = prompt(`Qual o salario de ${nome}?`)
  var reajustar = prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`)
    res1.innerHTML = `${nome} recebeu um aumento salarial!`
    res1.style.fontWeight = 'bold'
    res2.innerHTML = `O salario atual era R$ ${salario}. <br>`
    var reaj =  salario / 100 * reajustar
    res3.innerHTML += `Com o aumento de ${reajustar}, o salario vai aumentar R$${reaj.toFixed(2)} no próximo mes.`
    var final = Number(salario) + reaj
    res4.innerHTML = `A partir dai, ${nome} vai passar a ganhar ${final.toFixed(2)}.`


  }