
function hitungDiskon(harga, persen) {
    return harga - (harga * persen / 100);
}

module.exports = hitungDiskon;

const diskon = require('./getdiscount');

console.log(`Harga setelah diskon: Rp${diskon(100000, 10)}`);
