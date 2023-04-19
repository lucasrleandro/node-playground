const fs = require('fs');
const crypto = require('crypto');

// call only once
function generateKeys() {


    try {


        const secretKey = crypto.randomBytes(32).toString('hex');
        fs.writeFileSync('secret-key.txt', secretKey, 'utf8');

        const ivString = crypto.randomBytes(32).toString('hex').slice(0, 16);
        fs.writeFileSync('iv-string.txt', ivString, 'utf8');

        // const buffToFile = crypto.randomBytes(32).toString('hex');

        // console.log(buffToFile)        
   
        // // console.log( Buffer.from(secretKey))
        // const buff =  Buffer.from(buffToFile, 'hex')

        // console.log(buff)

        // console.log(buff.toString('hex'))


        

    } catch (err) {
        console.log('erro ao gerar chaves', err)
    }
}

function encode(originalMsg) {

    const secretKey = Buffer.from(process.env.SECRET_KEY,'hex');
    const ivString = process.env.IV_STRING;

    const cipher = crypto.createCipheriv('aes-256-cbc', secretKey, ivString);

    // Encrypt the msg
    let encryptedMsg = cipher.update(JSON.stringify(originalMsg), 'utf8', 'hex');

    // Finalize the encryption process
    encryptedMsg += cipher.final('hex');

    return encryptedMsg;

}

function decode(encryptedMsg) {

    const secretKey = Buffer.from(process.env.SECRET_KEY,'hex');
    const ivString = process.env.IV_STRING;

    // Decrypt the integer
    const decipher = crypto.createDecipheriv('aes-256-cbc', secretKey, ivString);

    let decryptedMsg = decipher.update(encryptedMsg, 'hex', 'utf8');
    decryptedMsg += decipher.final('utf8');

    return decryptedMsg

}

module.exports = { generateKeys, encode, decode }