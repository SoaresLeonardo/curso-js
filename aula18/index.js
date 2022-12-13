const pessoa1 = {
    nome: 'Leonardo',
    sobrenome: 'Henrique',
    idade: 15,
  
    fala() {
      console.log(`A minha idade atual é ${this.idade}.`);
    },
  
    incrementaIdade() {
      this.idade++;
    }
  };
  
  
  pessoa1.fala();