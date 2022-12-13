const form = document.querySelector('.form')

form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Evento previnido!')
    let numero1 = document.querySelector('#numero1');
    let numero2 = document.querySelector('#numero2');
    numero1 = Number(numero1.value)
    numero2 =  Number(numero2.value)
    const somatotal = somatoria(numero1, numero2);
    console.log(somatotal);
})


function somatoria(numero1, numero2) {
    const soma = numero1 + numero2;
    return soma;
}
