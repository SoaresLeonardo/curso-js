let numero = window.prompt('Digite um número:');
 let titulo = document.getElementById('numerotitulo');
 let texto = document.getElementById('textorezul');
 numero = Number(numero);
//  let temp = (numero ** (1/2))
//  let temp2 = (Number.isInteger(numero));
titulo.innerHTML = numero;
 //`Raiz quadrada: ${numero ** 0.5} <br> ${numero} é inteiro: ${Number.isInteger(numero)} <br> É NaN: ${Number.isNaN(numero)} <br>`

texto.innerHTML = `Raiz quadrada: ${numero ** 0.5} <br>`
texto.innerHTML += `${numero} é inteiro: ${Number.isInteger(numero)} <br>`
texto.innerHTML += `É NaN: ${Number.isNaN(numero)} <br>`
texto.innerHTML += `Arredondando para baixo: ${Math.floor(numero)} <br>`
texto.innerHTML += `Arredondando para cima: ${Math.ceil(numero)} <br>`
texto.innerHTML += `Com duas casas decimais: ${numero.toFixed(2)} `





