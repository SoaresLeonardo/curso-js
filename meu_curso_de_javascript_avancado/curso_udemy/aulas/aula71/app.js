function Produto(nome, preco, estoque) {
    // this.nome = nome;
    // this.preco = preco;
    // this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: false, // pode alterar ou não
        configurable: false // configuravel
    })
    // Object.defineProperty(this, 'estoque', {
    //     enumerable: true, // mostra a chave
    //     value: estoque, // valor
    //     writable: false, // pode alterar ou não
    //     configurable: true // configuravel
    // })
    
    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave
            value: nome, // valor
            writable: false, // pode alterar ou não
            configurable: false // configuravel
        },
        preco: {
            enumerable: true, // mostra a chave
            value: preco, // valor
            writable: false, // pode alterar ou não
            configurable: false // configuravel
        },
    })
}

const p1 = new Produto('Camiseta', 5, 4)
// p1.estoque = 43
// console.log(p1)
// console.log(Object.keys(p1))



function Produtos(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        value: estoque,
        writable: true,
        configurable: false
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: false,
            configurable: false
        },
        preco: {
            enumerable: true,
            value: preco,
            writable: false,
            configurable: false
        }
    })
}

const produto1 = new Produtos('Celular', 1400, 400 )
produto1.estoque = 21
const produto2 = new Produtos('televisão', 4500, 670 )


// console.log(produto1)


// console.log(produto2)

