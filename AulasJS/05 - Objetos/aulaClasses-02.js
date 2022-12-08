
class Pessoa {
    nome;
    idade;
    anoDenascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDenascimento = 2022 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos de idade.`);
    }
}

function compararPessoas(p1,p2){
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const Leo = new Pessoa('Leo', 22);
const Lucas = new Pessoa('Lucas', 33);

compararPessoas(Leo, Lucas);
