//O switch case funciona como um if, porém pode ser mais rápido e prático usar ele do que o if em certos momentos, Porém ao declarar a condição no case é necessario colocar o Break;
function getDiaDaSemanaTexto(diaDasemana) {
    let diaDasemanaTexto;

    switch(diaDasemana) {
        case 0:
            diaDasemanaTexto = 'Domingo'
            return diaDasemanaTexto;
            case 1:
            diaDasemanaTexto = 'Segunda'
            return diaDasemanaTexto;
            case 2:
            diaDasemanaTexto = 'Terça'
            return diaDasemanaTexto;
            case 3:
            diaDasemanaTexto = 'Quarta'
            return diaDasemanaTexto;
            case 4:
            diaDasemanaTexto = 'Quinta'
            return diaDasemanaTexto;
            case 5:
            diaDasemanaTexto = 'Sexta'
            return diaDasemanaTexto;
            case 6:
            diaDasemanaTexto = 'Sabádo'
            return diaDasemanaTexto;
            default:
                diaDasemanaTexto = ''
            return diaDasemanaTexto;
        }
        
}

const data =  new Date();
let diaDasemana =  data.getDay();
const diasemanatexto = getDiaDaSemanaTexto(diaDasemana)
console.log(diaDasemana,diasemanatexto)

