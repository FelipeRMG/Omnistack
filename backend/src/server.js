const express = require ('express');/*Express é um framework para definir as rotas */
const mongoose = require ('mongoose');/*Express é um framework para definir as rotas */
const cors = require ('cors');/*Express é um framework para definir as rotas */
const path = require('path');
   
const socketio = require('socket.io');
const http = require('http');

const routes = require ('./routes');

const app = express();
const server = http.Server(app);//servidor http
const io = socketio(server);

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-skg9z.mongodb.net/aircnc?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,    
})

const connectedUsers = {};

io.on('connection', socket => {
    const { user_id } = socket.handshake.query;

    connectedUsers[user_id] = socket.id;
});

app.use((req, res, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;

    return next();
})

app.use(cors());
app.use(express.json());//informa ao express para utilizar o formato json
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

server.listen(3333);
