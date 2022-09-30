const form = document.querySelector('.form');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Evento bloqueado!')

    const anoAtualInput = document.querySelector('#ano-atual');
    const idadeInput = document.querySelector('#idade');
    
    const anoAtual = Number(anoAtualInput.value);
    const idade = Number(idadeInput.value);
   
    const anoNascimento = calcularAnoNascimento(anoAtual,idade);
    const msg = `Seu ano de nascimento é ${anoNascimento}`
    //console.log(anoNascimento);
    resultado(msg, true)

    if(!anoAtual) return  resultado('Ano atual inválido!', false)
    if(!idade) return  resultado('idade inválida!', false)
})

function calcularAnoNascimento(anoAtual, idade) {
    const calculo = anoAtual - idade;
    return calculo;
}

function criarP () {
    const p = document.createElement('p');
    return p;
}

function resultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    
    const p = criarP();

   if(isValid) {
    p.classList.add('paragrafo-resultado-valido');
   } else {
    p.classList.add('bad')
   }

    p.innerHTML = msg;
    resultado.appendChild(p)
}








