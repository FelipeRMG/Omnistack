const express = require ('express');/*Express é um framework para definir as rotas */

const app = express();

//req.query é para acessar o query params (para filtros)
//req.params é para acessar route params (para edição, delete)
//req.body é para acessar corpo da requisição (para criação, edição)

app.use(express.json());//informa ao express para utilizar o formato json

app.post('/users', (req, res) => {
    return res.json(req.body);
});

app.listen(3333);