// factory function (função fábrica)
// contructor function (função construtora)
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
         nome,
         sobrenome,

         get nomeCompleto() {
            return  `${this.nome} ${this.sobrenome}`
         },

         // Setter
         set nomeCompleto(valor) {
                valor = valor.split(' ');
                this.nome = valor.shift();
                this.sobrenome = valor.join(' ');
                console.log(valor)
         },

         fala: function(assunto) {
                      // Acessando a chave --nome-- dentro do objeto
            return `${this.nome} está ${assunto} `
         },

         altura: altura,
         peso: peso,

        // Getter
        get imc() {
            const indice = this.peso  / (this.altura ** 2);
            return indice.toFixed(2);
         }

    };
}

const p1 = criaPessoa('Leonardo', 'Henrique', 1.8, 80);
p1.nomeCompleto = 'Leonardo Henrique'
console.log(p1.nomeCompleto);

