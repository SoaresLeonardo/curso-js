function notas() {
  var paragrafo = document.getElementById('paragrafo')
  var res1 = document.getElementById('res1')
  var res2 = document.getElementById('res2')
  var nome =  prompt('Qual o nome do aluno:')
  var primeira_nota = prompt(`Primeira nota de ${nome}:`)
  var segunda_nota = prompt(`Segunda nota de ${nome}:`)
  paragrafo.innerHTML = `Analizando a situação de ${nome}`
  paragrafo.style.fontWeight = 'bold'
  var soma_das_notas = (Number(primeira_nota) + Number(segunda_nota)) / 2
  res1.innerHTML = `Com as notas ${primeira_nota} e ${segunda_nota} a média é ${soma_das_notas} `
  if(soma_das_notas > 6){
    res2.innerHTML = 'Com a média a cima de 6,0, o aluno está <mark id="verde">APROVADO</mark>'
  } else if(soma_das_notas <= 6) {
    res2.innerHTML = 'Com média entre 3,0 e 6,0, o aluno está em <mark id="amarelo">RECUPERAÇÃO</mark>'
  } if(soma_das_notas <= 3) {
    res2.innerHTML = 'Com média abaixo de 3,0, o aluno está <mark id="vermelho">REPROVADO</mark> '
  }


  
}