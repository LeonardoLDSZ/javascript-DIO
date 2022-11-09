


function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

// const quadradoDeDez = quadrado(10);
console.log(incrementarJuros(100,10));
console.log(incrementarJuros(100,16));