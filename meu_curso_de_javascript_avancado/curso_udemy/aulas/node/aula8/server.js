const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));

    app.get('/', (req, res) => {
        res.send(`
        <form action="/" method="POST">
        Nome do cliente: <input type="text" name="nome"><br>
        <button>Olá mundo</button>
        </form>
        `);
    })

app.get('/testes/:usuario?/:idProfile?', (req, res) => {
    console.log(req.params)
    res.send(req.params)
    // console.log(req.query.instagramProfile)
})



app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que você me enviou foi: ${req.body.nome}`);
})



app.listen(3000, () => {
    console.log('Acesse http://localhost:3000')
    console.log('Servidor executando na porta: 3000')
})

