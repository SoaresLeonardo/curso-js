exports.paginaInicial = (req, res) => {
    console.log(req.flash('error'), req.flash('success'), req.flash('info'));
    res.render('index');
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
}

// const HomeModel = require('../models/HomeModel')

// HomeModel.create({
//     titulo: 'Outra coisa qualquer',
//     descricao: 'Outra descrição'
// })
// .then(dados => console.log(dados))
// .catch(e => console.log(e));