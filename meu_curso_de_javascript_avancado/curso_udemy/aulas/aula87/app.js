function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("Cai no erro");
        return;
      }
      resolve(msg.toUpperCase() + "- Passei na promise");
    }, tempo);
  });
}

function baixaPagina() {
  const emCache = true;

  if (emCache) {
    return Promise.resolve("Página em cache");
  } else {
    return esperaAi("Baixei a página", 3000);
  }
}

baixaPagina()
  .then((dadosPagina) => {
    console.log(dadosPagina);
  })
  .catch((e) => console.log(e));

// promisse.all promisse.race promisse.resolve promisse.reject

// const promises = [
//     esperaAi('Promisse 1', 3000),
//     esperaAi('Promisse 2', 500),
//     esperaAi('Promisse 3', 1000),

// ]

// Promise.race(promises)
// .then(function (valor) {
//     console.log(valor);
// })
// .catch(function(erro) {
//     console.log(erro)
// })
