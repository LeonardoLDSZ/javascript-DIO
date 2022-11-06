/*
Crie programa para calcular valor da viagem.
Variáveis:
1 - Preço do gasolina 
2 - Gasto médio de gasolina do carro por KM
3 - Distância em KM da viagem
Imprima no console o valor que será gasto para realizar a viagem.
*/

const precoGasolina = 4.79;
const kmPorLitros = 14;
const distanciaEmKm = 200;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoGasolina;
console.log('R$ ' + valorGasto.toFixed(2));