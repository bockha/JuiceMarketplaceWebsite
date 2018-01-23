const CryptoJS = require('crypto-js');
const fs = require('fs');
const path = require('path');
const config = require('../../config/config_loader');
const crypto = require("crypto");
const logger = require('../../global/logger');


const self  = {};

/**
 * Encrypt given data in 3 steps.
 *
 * 1. Encrypt the data with a random AES-key and IV
 * 2. Encrypt the generated AES-key with a public RSA-key
 * 3. Binary concat encrypted key, iv and encrypted data
 *
 * Returns a base64 encoded string of the concat.
 *
 * @param data
 * @return string
 */
self.encryptData = function(data) {
    try {
        // generate random key with 256 bit length
        const aesKey = CryptoJS.lib.WordArray.random(256 / 8);
        // generate random IV with 128 bit length
        const iv = CryptoJS.lib.WordArray.random(128 / 8);

        // encrypt data using AES with generated key, vi and CBC mode
        const encryptedData = CryptoJS.AES.encrypt(data, aesKey, {
            iv: iv,
            mode: CryptoJS.mode.CBC
        });

        // convert aes key into binary data
        const passwordBuffer = new Buffer(convertWordArrayToUint8Array(aesKey));

        // read public key from file
        const publicKeyPath = path.resolve(config.PUBLIC_KEY_FILE_FOR_ENCRYPTION);
        const publicKey = fs.readFileSync(publicKeyPath, 'utf8');

        // encrypt aes key using rsa with the public key
        const encryptedKey = crypto.publicEncrypt({
            key: publicKey,
            padding: crypto.constants.RSA_PKCS1_PADDING
        }, passwordBuffer);


        // bundle the encrypted key, iv and encrypted data
        const bundle = Buffer.concat([
            encryptedKey,
            new Buffer(convertWordArrayToUint8Array(iv)),
            new Buffer(convertWordArrayToUint8Array(encryptedData.ciphertext))]);

        return bundle.toString('base64');
    }
    catch (err) {
        logger.crit('[encryption_service] error while encrypting a recipe.');
        logger.crit(err);

        throw  err;
    }

};

function convertWordArrayToUint8Array(wordArray) {
    var len = wordArray.words.length,
        u8_array = new Uint8Array(len << 2),
        offset = 0, word, i
    ;
    for (i = 0; i < len; i++) {
        word = wordArray.words[i];
        u8_array[offset++] = word >> 24;
        u8_array[offset++] = (word >> 16) & 0xff;
        u8_array[offset++] = (word >> 8) & 0xff;
        u8_array[offset++] = word & 0xff;
    }
    return u8_array;
}

module.exports = self;

