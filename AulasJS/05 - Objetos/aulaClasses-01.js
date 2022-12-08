
class Pessoa {
    nome;
    cor;
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

const leo = new Pessoa('Leonardo', 34);
const lucas = new Pessoa('Lucas', 30);

console.log(leo);




