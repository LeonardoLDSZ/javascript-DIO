/*
Crie programa para calcular valor da viagem.
Cinco variáveis:
1 - Preço do etanol 
2 - Preço do gasolina 
3 - Tipo de gasolina que esta no carro
4 - Gasto médio de combustível do carro por KM
5 - Distância em KM da viagem

Imprima no console o valor que será gasto para realizar a viagem.
*/

const precoEtanol = 4.30;
const precoGasolina = 4.79;
const kmPorLitros = 12;
const distanciaEmKm = 100;
const tipoCombustivel = "Etanol";

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoCombustivel === "Etanol") {
  valorGasto = litrosConsumidos * precoEtanol;

  console.log("R$ " + valorGasto.toFixed(2));
} else {
  valorGasto = litrosConsumidos * precoGasolina;
  console.log("R$ " + valorGasto.toFixed(2));
}
