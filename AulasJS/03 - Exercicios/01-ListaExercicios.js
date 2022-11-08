/*
1) Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade
calcule e imprima a sua média e a sua classificação conforme tabela abaixo.

Média = (nota1 + nota2 + nota3) / 3;

Classificação:
- Média < 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;
*/


const nota1 = 5;
const nota2 = 6;
const nota3 = 7;

const media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log('Reprovação, com nota ' + media.toFixed(1));
} else if (media >=5 && media <= 7) {
    console.log('Recuperação, com nota ' + media.toFixed(1));
} else {
    console.log('Passou de semestre, com nota ' + media.toFixed(1));
}