const express = require('express');
const route = express.Router()
const homeControler = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController')

function meuMiddlware(req, res, next) {
    req.session = {nome: 'Leonardo', sobrenome: 'Henrique'}
    console.log()
    console.log('Passei no seu middlware.')
    console.log()
    next()
}
// Rotas da home

route.get('/', meuMiddlware, homeControler.paginaInicial)
route.post('/', homeControler.trataPost)

// Rotas contato
route.get('/contato', contatoController.paginaInicial)

module.exports = route;