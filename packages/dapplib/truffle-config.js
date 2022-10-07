require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy renew stereo prosper hunt merry fog gate'; 
let testAccounts = [
"0xa47f305e96feecbfb17a8018caeef3976b9e71cf34184c2b42b914c39fa2793f",
"0xa0b7467ae77f2df5362bd77a33b9fa1adfa9dbd9a895308921b3a69038c74c52",
"0x9db24029e516d1fd4b98f87429a0bc2b831ba4a4294f5d04cc1d6f9294f9c977",
"0xe40ef881ceca32420c13bb912f94d0c6c51a78b5cba3cd6668c88e63848d3363",
"0x13a3cde4a203f6e9229fd201eab590133b7de4cbea4590d1de4d2bf2d4d5cf7e",
"0x4a344b61d75057a7708e0f3c845da93be76dcdbe660b5051eb76aec055962e14",
"0xa792e99b097ca88624bb603e6beb3da70876f75e3832d0f2d7193dd3846c9278",
"0x641681d5bf5c4481eeb969312d32dcf9085e3894ef9b69c683a6eaf098e36bd3",
"0xd76a3ac378f781ff81fca7f87d44c7d93affcd567ca8ce08be1c66d418e4b655",
"0xc05f2d15116273a73bcc1c9090b00fde43356bc16f9230b7b8ed94af700dbf13"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


