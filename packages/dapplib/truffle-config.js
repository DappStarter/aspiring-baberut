require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose bottom tooth notice crime remain equip give clog outer trend'; 
let testAccounts = [
"0x09953cb4fd8de754a14407f37993e8fbb9500e50123db89e7e44ef1b6f561fa0",
"0x063869be1ea3b924c5ccf50aab01183cad6bbf451f1dd42bb94e59cb7a35c4cc",
"0x4fc047ae87d65104e50f2fa43d72a22b599f38ede3c530a3bbd4b96b39d257fb",
"0xc1a6ca43693c9b1f4a312ac13f7633a2c45f93cdc31825fb6b1c583c3eeeb82d",
"0x9cbf37a3d19dd1d65e831c1da214307a47c53ae30df1346a3114d469d19eb129",
"0xf7f47b709bd5d4377e838a0ab1017e9cdb3168c0ffcbda87e792828bb622642c",
"0x7a2a7d2f0ceb8ef7f4ef02848bd1b2fddf1e674ff7092f2e34581fc9c83a7bcb",
"0x93407425c60105e60d620b789ade9eb257b15e308a17bd6ca9e6acd8bef9636f",
"0xbbcedf9b7a2690b97f4ee57314f17609211f6438ed40f96c19654a81b15c365d",
"0xf8b4e18e6c97bbe0eea433a8fec89f6ba880be6664509851f3ee14727ce31127"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
