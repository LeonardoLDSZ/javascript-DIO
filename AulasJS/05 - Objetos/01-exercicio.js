/*
1 - Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustivel por Kilometro rodado.
Crie um metodo que dado a quqantidade de quilometros e o preço do combustivel nos de o valor
gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca,cor,gastoMedioPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }
    
}

const hb20 = new Carro('Hyundai', 'Marrom', 1 / 14);
console.log(hb20.calcularGastoDePercurso(70, 5));

const jetta = new Carro('Volkswagen', 'Branco', 1/12)
console.log(jetta.calcularGastoDePercurso(70, 5));

