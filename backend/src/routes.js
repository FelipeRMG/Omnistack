const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');

const routes = express.Router(); //Router responsável pelas rotas do express
const upload = multer(uploadConfig);

//req.query é para acessar o query params (para filtros)
//req.params é para acessar route params (para edição, delete)
//req.body é para acessar corpo da requisição (para criação, edição)

routes.post('/sessions', SessionController.store);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);


module.exports = routes; //exportando as rotas