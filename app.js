var express = require('express');
const routes = require('./app/routes'); //ARQUIVO DE ROTA CHAMADO
const cors = require('cors');
const crypto = require('crypto');
const fs = require('fs');
const id = require('./app/id-encode')
require('dotenv').config();

var app = express();

app.set('port', process.env.PORT || 3005); // CONFIGURAÇÃO DA PORTA 
app.set('views', __dirname + '/app/server/views'); // 
app.set('view engine', 'ejs'); // 
app.use(express.static(__dirname + '/app/public')); //
app.set('trust proxy', true);

app.use(cors())
app.use(routes)
app.use(express.json());

const port = process.env.PORT || 3005;

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});

module.exports = app