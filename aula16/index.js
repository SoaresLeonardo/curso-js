const array = ['1 elemento', '2 elementos', '3 elementos', '4 elementos', '5 elementos'];

// Metodo mais simples para adicionar mais um elemento em um array -->

array.push('6 elementos');
// Outros metodos

// array[0] = 'Modificando elemento'  Editando um valor do array na posição -0-
// array[4] = 'Item';  Adicionando mais um item no array

// Adicionar um novo elemento no começo do array;

array.unshift('Novo elemento');

array.pop(); // remove o ultimo elemento do array; --> o elemento deletado pelo comando pode ser armazenado em uma variavel e ser mostrado por um console.log;  



// console.log(array.slice(0,3)); --> mostra o array porém podendo escolher até aonde visualizar os itens
console.log(array);

console.log(array.length + ' itens'); // Vendo o tamanho do array


// console.log(array instanceof Array); --> Verificando se o elemento é um array


