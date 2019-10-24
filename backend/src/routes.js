const express = require('express');

const routes = express.Router(); //Router responsável pelas rotas do express
//req.query é para acessar o query params (para filtros)
//req.params é para acessar route params (para edição, delete)
//req.body é para acessar corpo da requisição (para criação, edição)


routes.post('/users', (req, res) => {
    return res.json(req.body);
});

module.exports = routes; //exportando as rotas