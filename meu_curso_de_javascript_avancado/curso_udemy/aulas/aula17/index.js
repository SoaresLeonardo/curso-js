function saudacao() {
  console.log("Bom dia!");
}

saudacao();

function teste(nome) {
  let mensagem = console.log(`Bom dia ${nome}`);
  return mensagem;
}

teste("Leonardo");

function somar(numero1, numero2) {
  return console.log(numero1 + numero2);
}
// função dentro de uma variavel; função anonima;
const raiz = (n) => {
  return n ** 0.5;
};

console.log(raiz(9));

// Modo simplificado de uma função com poucos parametros simples;
const raizeteste = (y) => y ** 0.5;

const pessoal = {
  nome: "Leonardo",
  sobrenome: "Henrique",
  idade: 15,
};

// console.log(pessoal);

function criapessoa(nome, sobrenome, idade) {
  return { nome, sobrenome, idade };
}

const pessoa1 = criapessoa("Leo", "henrique", 15);
console.log(pessoa1);

const pessoa = {
  nome: "Leonardo",
  sobrenome: "Henrique",
  idade: 15,

  fala() {
    // console.log(`${this.nome} ${this.sobrenome} mandou oi...`)
    console.log(`Minha idade é ${this.idade} `);
  },

  icrementaidade() {
    this.idade++;
  },
};

pessoa.fala();
pessoa.icrementaidade(); // Estoy chamando o metodo  dentro de pessoa e modificar no this.idade++;
pessoa.fala();

function somar(x, y) {
  return console.log(x + y);
}

somar(5, 5);
