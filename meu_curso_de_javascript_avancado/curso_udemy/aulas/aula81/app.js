class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        
    }

    //A classe automaticamente coloca meus metodos no prototype ->

    falar() {
        console.log(`${this.nome} está falando`)
    }

}


const p1 = new Pessoa('Leonardo', 'Henrique');

console.log(p1)

