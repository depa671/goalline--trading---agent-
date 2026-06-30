const {Keypair} = require('@solana/web3.js');      
const fs = require('fs');
const kp = Keypair.generate();
fs.writeFileSync('.config/solana-keypair.json', JSON.stringify(Array.from(kp.secretKey)));
console.log('Public Key:', kp.publicKey.toBase58());