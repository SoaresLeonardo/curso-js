const express = require('express');
const route = express.Router()
const homeControler = require('./controllers/homeController');
const contatoController = require('./controllers/contatoController')

// Rotas da home
route.get('/', homeControler.paginaInicial)
route.post('/', homeControler.trataPost)

// Rotas contato
route.get('/contato', contatoController.paginaInicial)

module.exports = route;