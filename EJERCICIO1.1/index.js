// base 16* 23 cm
// altura 13 cm

const volumen = 16 * 23 * 13;
console. log('volumen', volumen + 'cm³');

// A= al + 2ab
const areaLateral = 23 * 13;
const areaBase = 16 * 23;
const areaTotal = areaLateral + 2*areaBase;
console. log('areaTotal', areaTotal + 'cm²');


// Generalización
const base = 23;
const altura = 13;
const ancho = 16;

const volumen2 = base * altura * ancho;
console.log('volumen2', volumen2 + 'cm³');

const area2 = base * altura + 2 * base * ancho;
console.log('area2', area2 + 'cm²');
