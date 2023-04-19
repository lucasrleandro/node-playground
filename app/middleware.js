const aesId = require('./id-encode')

// This middleware checks the request information and allows a response if the information is valid. It also updates the value of a specific query parameter.

const idDecoder = (req, res, next) => {

    if(req.params?.id){

        const id = aesId.decode(req.params.id)
        console.log(id)

        next();

    } else {
        res.status(400).send('id is required')
    }

};

module.exports = idDecoder;