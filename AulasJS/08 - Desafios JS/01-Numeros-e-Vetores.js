
// DESAFIO
// Faça um Programa que leia cinco números inteiros e armazene-os em um vetor chamado VETOR. 
// Armazene os números pares no vetor PAR e os números ímpares no vetor IMPAR. 

// Entrada 
// Peça ao usuário que insira o valor de cinco números inteiros. 

// Saída
// Imprima os valores dos três vetores um em cada linha mostrando na primeira linha, os valores 
// no Vetor, na segunda linha os valores Par(es) e na terceira linha os valores ímpares Impar(es). 

// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

let vetor = [];
let pares = [];
let impares = [];

//TODO: Implemente uma condição para o armazenamento dos números PARES e ÍMPARES:

  for(let i = 0; i < 5; i++){
  vetor[i] = gets();
  if(vetor[i] % 2 === 0){
    pares.push(vetor[i]);
  } else {
    impares.push(vetor[i]);
  }
}


//TODO: Imprima os valores dos três vetores um em cada linha:

print("Vetor: " + vetor)

  print("Par(es): " + pares)

  print("Impar(es): " + impares)