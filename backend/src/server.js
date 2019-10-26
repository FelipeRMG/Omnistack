const express = require ('express');/*Express é um framework para definir as rotas */
const mongoose = require ('mongoose');/*Express é um framework para definir as rotas */
const cors = require ('cors');/*Express é um framework para definir as rotas */

const routes = require ('./routes');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-skg9z.mongodb.net/aircnc?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,    
})

app.use(cors());
app.use(express.json());//informa ao express para utilizar o formato json
app.use(routes);

app.listen(3333);