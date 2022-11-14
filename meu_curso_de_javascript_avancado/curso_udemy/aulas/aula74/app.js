function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = () => 'ORIGINAL:' + this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function () {
    return   this.nomeCompleto = () =>  this.nome + ' ' + this.sobrenome;
}
// instância
const pessoa1 = new Pessoa('leo', 'o')
console.dir(pessoa1)
