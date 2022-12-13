// try {

//     // É executada quando não há erros

// } catch(e) {

//     // É executada quando há erros

// } finally {

//     // Sempre

// }

function retornahora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError("Esperando instância de Date.");
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString("pt-BR", {});
}

const hora = retornahora();
console.log(hora);
