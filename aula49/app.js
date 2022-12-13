// declaração de função (function hoisting)

function oi() {
  console.log("oie");
}

// function expression
const souUmDado = function () {
  console.log("Eu sou um dado.");
};

function execultaFuncao(funcao) {
  funcao();
}

// execultaFuncao(souUmDado)

// arrow function

const funcaoArrow = () => {
  console.log("Sou uma arrow function");
};

// funcaoArrow()

// Dentro de um objeto

const obj = {
  falar() {
    console.log("Olá");
  },
};

obj.falar();
