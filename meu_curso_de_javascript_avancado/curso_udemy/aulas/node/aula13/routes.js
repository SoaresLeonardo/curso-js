const express = require('express');
const route = express.Router()
const homeControler = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController')

function meuMiddlware(req, res, next) {
    console.log()
    console.log('Passei no seu middlware.')
    console.log()
    next()
}
// Rotas da home

route.get('/', meuMiddlware, homeControler.paginaInicial, function(req, res, next) {
    console.log();
    console.log('Ainda estou aqui....');
})
route.post('/', homeControler.trataPost)

// Rotas contato
route.get('/contato', contatoController.paginaInicial)

module.exports = route;