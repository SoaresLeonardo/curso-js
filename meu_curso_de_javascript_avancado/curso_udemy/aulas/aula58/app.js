// Função construtora -> obj
// Função fabrica -> obj
// construtora -> Pessoa(new)


function Pessoa(nome, sobrenome) {
    // Privadas
    const ID = 123456;

    // Atributos públicos
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = function() {
        console.log(this.nome + ': sou um metodo')
    }
}

            // Cria obj vazio
const p1 = new Pessoa('Leonardo', 'Henrique')

p1.metodo();
// Pessoa.nome = 