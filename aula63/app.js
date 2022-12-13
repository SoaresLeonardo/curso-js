                //0       //1          2        3        4
const nomes = ["Maria", "Leonardo", "Lucas", "Julia", "Gabriel"];
//pop
const removidos = nomes.splice(3, 0, "Teste");
console.log(nomes, removidos);
