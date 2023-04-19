const express = require('express');
const router = new express.Router();

idDecoder = require('./middleware'); //ARQUIVO DE ROTA CHAMADO

router.get('/teste/:id', idDecoder, function(req,res){ // BLOCO DE CÓDIGO QUE RESPONDE A PEDIDO DO CLIENTE '/'
    res.status(200).send(); // CHAMA INDEX
});

module.exports = router
