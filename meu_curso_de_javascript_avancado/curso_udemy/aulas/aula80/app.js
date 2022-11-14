const pessoas = [
    {id: 3, nome: 'Leonardo'},
    {id: 2, nome: 'Lucas'},
    {id: 1, nome: 'Maria'},
];


const novasPessoas = new Map();

for(const pessoa of pessoas) {
    const {id} = pessoa;
   novasPessoas.set(id, {...pessoa})
}


console.log(novasPessoas);
