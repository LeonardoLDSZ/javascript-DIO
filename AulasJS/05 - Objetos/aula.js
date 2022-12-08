

//Objeto Literal - Coleção dinâmica de chave e Valor
const pessoa = {
    nome: 'Leonardo D. Souza',
    idade: 34,
    
    descrever: function() {
        
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}.`)
    }
};

const atributo = 'nome';

// Coleção
console.log(pessoa[atributo]); 



//pessoa.nome = 'Joao';
//pessoa.idade = 30;


// pessoa.descrever = function() {
//     console.log(`Meu nome é ${this.nome}`);
// }

// pessoa.descrever();



// console.log(leo.nome);
// console.log(leo.idade);
// console.log(leo);



// ====== Incremento ======
// leo.altura = 1.88;
// ========================
 
// ======= Delete ======
// delete leo.nome;
// =====================


//console.log(leo);