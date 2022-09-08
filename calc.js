function suma(a,b){
    
    if (!(typeof a == 'number')||!(typeof b == 'number')||(a===null || b === null))
        return 0;
    return a+b;
}

function resta(a,b){
    if (!(typeof a == 'number')||!(typeof b == 'number')||(a===null || b === null))
        return 0;
    return a-b;
}

function multiplicacion(a,b){
    if (!(typeof a == 'number')||!(typeof b == 'number')||(a===null || b === null))
        return 0;
    return a*b;
}

function division(a,b){
    if (!(typeof a == 'number')||!(typeof b == 'number')||(a===null || b === null))
        return 0;
    return a/b;
}

function potencia(a,b){
    if (!(typeof a == 'number')||!(typeof b == 'number')||(a===null || b === null))
        return 0;
    return a^b;
}


module.exports = {suma, resta, multiplicacion, division, potencia};
