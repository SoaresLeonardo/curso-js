function getDate(data) {
    const diadasemanaatual = formatadatasemanal(diasemana)
    const dia = data.getDate();
    const mesDoAno = formatMes(mes + 1)
    const ano = data.getFullYear();
    const hora = zeroAesquerda(data.getHours());
    const min = zeroAesquerda(data.getMinutes());
    return `${diadasemanaatual}, ${dia} de ${mesDoAno} de ${ano} ${hora}:${min}`
}

function formatadatasemanal(diasemana) {
    let diaDasemanaTexto;
    switch(diasemana) {
        case 0:
        diaDasemanaTexto = 'Domingo'
        return diaDasemanaTexto
        case 1:
        diaDasemanaTexto = 'Segunda'
        return diaDasemanaTexto
        case 2:
        diaDasemanaTexto = 'Terça'
        return diaDasemanaTexto
        case 3:
        diaDasemanaTexto = 'Quarta'
        return diaDasemanaTexto
        case 4:
        diaDasemanaTexto = 'Quinta'
        return diaDasemanaTexto
        case 5:
        diaDasemanaTexto = 'Sexta'
        return diaDasemanaTexto
        case 6:
        diaDasemanaTexto = 'Sabádo'
        return diaDasemanaTexto

        default:
        diaDasemanaTexto = 'Ouve um erro!'
}
}


function formatMes(mes) {
    let mesDoAno;
    switch (mes) {
        case 1:
        mesDoAno = 'Janeiro'
        return mesDoAno;
        case 2:
        mesDoAno = 'Fevereiro'
        return mesDoAno;
        case 3:
        mesDoAno = 'Março'
        return mesDoAno;
        case 4:
        mesDoAno = 'Abril'
        return mesDoAno;
        case 5:
        mesDoAno = 'Maio'
        return mesDoAno;
        case 6:
        mesDoAno = 'Junho'
        return mesDoAno;
        case 7:
        mesDoAno = 'Julho'
        return mesDoAno;
        case 8:
        mesDoAno = 'Agosto'
        return mesDoAno;
        case 9:
        mesDoAno = 'Setembro'
        return mesDoAno;
        case 10:
        mesDoAno = 'Outubro'
        return mesDoAno;
        case 11:
        mesDoAno = 'Novembro'
        return mesDoAno;
        case 12:
        mesDoAno = 'Dezembro'
        return mesDoAno;

        default:
        mesDoAno = 'Ouve um erro!'
    }
}

function zeroAesquerda(num) {
    return num >= 10 ? num : `0${num}`
}

const h1resultado = document.querySelector('.h1Tela')
const data = new Date();
const diasemana = data.getDay();
const mes = data.getMonth();
const dataatual = getDate(data)
h1resultado.innerHTML = dataatual

