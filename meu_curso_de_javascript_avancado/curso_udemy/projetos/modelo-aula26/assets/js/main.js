const form = document.querySelector('.form');
const resultado = document.querySelector('.resultado');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Evento previnido com sucesso!!')
    const inputPeso = form.querySelector('#peso');
    const inputAltura = form.querySelector('#altura');
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    const imc = gerarImc(peso, altura);
    const nivelImc = gerarNivelImc(imc);
    const mensagemImc = `Seu IMC é ${imc} (${nivelImc})`;
    setResultado(mensagemImc, true);


    if (!peso) {
        setResultado('O peso é inválido!', false)
        return;
    }

    if (!altura) {
        setResultado('A altura é inválida!', false)
        return;
    }

    //continua o codigo
});

function gerarImc(peso, altura) {
    let imc = peso / altura ** 2;
    return imc.toFixed(2);
}

function gerarNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso,', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

function criarP() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    
    const p = criarP();
    
    if (isValid) {
        p.classList.add('paragrafo-resultado-valido')
    } else {
        p.classList.add('bad')
    }
    


    p.innerHTML = msg;
    resultado.appendChild(p);
    //insere um elemento nesta div==>

}


// evento.preventDefault();
// const peso = form.querySelector('#peso');
// const peso = form.querySelector('#peso');