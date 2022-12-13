class Movel {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }
}

class Armario extends Movel {
  constructor(nome, preco, cor) {
    super(nome, preco);
    this.cor = cor;
  }
}

const armario = new Armario("Armario 4 portas", 600, "preto");
console.log(armario);
