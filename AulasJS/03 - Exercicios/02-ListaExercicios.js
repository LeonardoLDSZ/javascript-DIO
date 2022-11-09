/*
2) O IMC - é um critério da Organização Mundial da Saude apra dar uma indicação sobre a condição
de peso de uma pessoa adulta.

Formula do IMC
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo
com a tabela abaixo:

IMC em adultos - condição:
- Abaixo de 18.5 - Abaixo do peso;
- Entre 18.5 e 25 - Peso normal;
- Entre 25 e 30 - Acima do peso;
- Entre 30 e 40 - Obeso;
- Acima de 40 - Obesidade Grave;
*/

const peso = 80;
const altura = 1.6;
const IMC = peso / Math.pow(altura,2);


if (IMC < 18.5) {
  console.log("Abaixo do peso, com IMC de " + IMC.toFixed(1));
} else if (IMC >= 18.5 && IMC <= 25) {

    console.log("Peso normal, com IMC de " + IMC.toFixed(1));
} else if (IMC >= 25 && IMC <= 30) {
  console.log("Acima do peso com IMC de " + IMC.toFixed(1));
} else if (IMC >= 30 && IMC <= 40) {
  console.log("Obeso, com IMC de " + IMC.toFixed(1));
} else {
  console.log("Obesidade grave, com IMC de " + IMC.toFixed(1));
}
