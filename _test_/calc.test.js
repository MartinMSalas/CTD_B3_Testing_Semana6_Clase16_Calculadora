//const { default: test } = require('node:test')
const { suma,resta,multiplicacion,division } = require('../calc.js')

test('validar suma correcta de dos numeros', () => {
    const resultado = suma(10,30);
    expect(resultado).toBe(40);
});


test('chequear q ambos sean numeros', () => {
    const resultado = suma("A",30);
    expect(resultado).toBe('Hay un error en la entrada de datos no son numeros');
});
