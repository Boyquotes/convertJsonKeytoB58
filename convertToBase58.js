const bs58 = require('bs58');

// Clé privée sous forme de tableau d'octets (exemple)
const secretKey = new Uint8Array([
    6, 203, 68, 152, 17, 208, 87, 144, 213, 33, 96, 247, 14, 120, 234, 104,
    244, 85, 48, 122, 90, 218, 36, 166, 115, 175, 216, 5, 55, 86, 9, 121,
    47, 91, 239, 73, 158, 222, 115, 146, 110, 137, 233, 207, 133, 198, 28, 121,
    21, 40, 58, 110, 154, 99, 230, 120, 112, 94, 108, 151, 179, 142, 14, 6
]);

// Encoder la clé privée en Base58
const base58SecretKey = bs58.encode(secretKey);

console.log('Clé privée en Base58 :', base58SecretKey);
