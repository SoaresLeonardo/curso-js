const form = document.querySelector('.form')

form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Evento previnido')

    let anoNascimento = document.querySelector('#anoNascimento');
    let anoAtual = document.querySelector('#ano');

    anoNascimento = Number(anoNascimento.value);
    anoAtual = Number(anoAtual.value);
    const calculodeidade = calculoIdade(anoAtual, anoNascimento)
    const msg = `Voçê tem ${calculodeidade} anos`
    setResultado(msg, true)


    if(!anoNascimento) return setResultado('O ano de nascimento é invalido!', false)
    if(!anoAtual) return setResultado('O ano atual é invalido!', false)
})

function criarP() {
    const p = document.createElement('p')
    return p 
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criarP()

    if(isValid) {
        p.classList.add('paragrafo-resultado-valido')
    } else {
        p.classList.add('bad')
    }

    p.innerHTML = msg;
    resultado.appendChild(p)
}

function calculoIdade(anoAtual, anoNascimento) {
    const calculo = anoAtual - anoNascimento;
    return calculo

}