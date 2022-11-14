// Camiseta = Cor, caneca = Material;
// Produto -> aumento, desconto
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
                    //Criando um obj vazio e inserindo o prototype nele de produto
Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta;

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
};

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
};
 
function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
}

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco)
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque;
        },

        set: function(value) {
            estoque = valor;
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const camiseta = new Camiseta('Regata', 8, 'preta')
camiseta.aumento(10)
console.log(camiseta)