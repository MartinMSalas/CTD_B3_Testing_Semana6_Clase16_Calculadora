//const { default: test } = require('node:test')
const { suma,resta,multiplicacion,division, potencia } = require('../calc.js')

describe("Pruebas de la funcion suma", () => {
    test('chequear q ambos sean numeros', () => {
        let resultado = suma("A",30);
        expect(resultado).toBe(0);
        resultado = suma(30,"A");
        expect(resultado).toBe(0);
        resultado = suma(null,10);
        expect(resultado).toBe(0);
        resultado = suma(10,null);
        expect(resultado).toBe(0);
        resultado = suma(undefined,10);
        expect(resultado).toBe(0);
        resultado = suma(10,undefined);
        expect(resultado).toBe(0);
    });
    
    test('validar suma correcta de dos numeros', () => {
        const resultado = suma(10,30);
        expect(resultado).toBe(40);
    });
    
    
})
describe("Pruebas de la funcion resta",() =>{

    test('chequear q ambos sean numeros', () => {
        let resultado = resta("A",30);
        expect(resultado).toBe(0);
        resultado = resta(30,"A");
        expect(resultado).toBe(0);
        resultado = resta(null,10);
        expect(resultado).toBe(0);
        resultado = resta(10,null);
        expect(resultado).toBe(0);
        resultado = resta(undefined,10);
        expect(resultado).toBe(0);
        resultado = resta(10,undefined);
        expect(resultado).toBe(0);

    });
    test('validar resta correcta de dos numeros', () => {
        const resultado = resta(20,10);
        expect(resultado).toBe(10);
    });
    
    
})
describe("Pruebas de la funcion multiplicacion",() =>{

    test('chequear q ambos sean numeros', () => {
        let resultado = multiplicacion("A",30);
        expect(resultado).toBe(0);
        resultado = multiplicacion(30,"A");
        expect(resultado).toBe(0);
        resultado = multiplicacion(null,10);
        expect(resultado).toBe(0);
        resultado = multiplicacion(10,null);
        expect(resultado).toBe(0);
        resultado = multiplicacion(undefined,10);
        expect(resultado).toBe(0);
        resultado = multiplicacion(10,undefined);
        expect(resultado).toBe(0);

    });
    test('validar multiplicacion correcta de dos numeros', () => {
        const resultado = multiplicacion(20,10);
        expect(resultado).toBe(200);
    });

    
    
})
describe("Pruebas de la funcion division",() =>{

    test('chequear q ambos sean numeros', () => {
        let resultado = division("A",30);
        expect(resultado).toBe(0);
        resultado = division(30,"A");
        expect(resultado).toBe(0);
        resultado = division(null,10);
        expect(resultado).toBe(0);
        resultado = division(10,null);
        expect(resultado).toBe(0);
        resultado = division(undefined,10);
        expect(resultado).toBe(0);
        resultado = division(10,undefined);
        expect(resultado).toBe(0);

    });
    test('validar division correcta de dos numeros', () => {
        const resultado = division(20,10);
        expect(resultado).toBe(2);
    });
    
    
})