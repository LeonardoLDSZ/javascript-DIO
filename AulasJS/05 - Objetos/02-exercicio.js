/*
2 - Crie uma classe para representar pessoas.
Para cada pessoa teremos o satributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer
o valor de seu IMC,
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome,peso,altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
    }

    calcularIMC() {
        return (this.peso / Math.pow(this.altura, 2));
    }    

    classificarIMC(){
       const imc = this.calcularIMC();

       if (imc < 18.5) {
           return "abaixo do peso, com imc de " + imc.toFixed(1);
         } else if (imc >= 18.5 && imc <= 25) {
           return "peso normal, com imc de " + imc.toFixed(1);
         } else if (imc >= 25 && imc <= 30) {
           return "acima do peso com imc de " + imc.toFixed(1);
         } else if (imc >= 30 && imc <= 40) {
           return "obeso, com imc de " + imc.toFixed(1);
         } else {
           return "com obesidade grave, com imc de " + imc.toFixed(1);
         }
    }
}
const jose = new Pessoa ('José', 70, 1.75);
//console.log(jose.calcularIMC());
console.log(jose.classificarIMC());

const leonardo = new Pessoa ('Leonardo', 85, 1.88);
//console.log(leonardo.calcularIMC());
console.log(leonardo.classificarIMC());


