// const data = new Date()
//                     // new = Sempre que eu uso o new eu estou chamando uma função construtora;

// // console.log(data.toString())

// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth());
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('Ms', data.getMilliseconds());
// console.log('Dia da semana', data.getDay());

function zeroAEsquerda(num) {
    return num >=10 ? num : `0${num}`
}

function formatData(data) {

    // console.log('Dia', data.getDate());
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth());
    const ano = zeroAEsquerda (data.getFullYear());
    const hora = zeroAEsquerda (data.getHours());
    const min = zeroAEsquerda (data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano}/${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formatData(data);
console.log(dataBrasil);