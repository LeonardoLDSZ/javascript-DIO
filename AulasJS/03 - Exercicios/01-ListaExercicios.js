/*
1) Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade
calcule e imprima a sua média e a sua classificação conforme tabela abaixo.

Média = (nota1 + nota2 + nota3) / 3;

Classificação:
- Média < 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;
*/

function calcularMedia(nota1, nota2, nota3) {
return (nota1 + nota2 + nota3) / 3;
}

function resultadoEscolar(media) {
if (media < 5) {
    return 'Reprovação, com nota ' + media.toFixed(1);
} else if (media >=5 && media < 7) {
    return 'Recuperação, com nota ' + media.toFixed(1);
} else {
    return 'Passou de semestre, com nota ' + media.toFixed(1);
}
}


function main() {
    const nota1 = 7;
    const nota2 = 7;
    const nota3 = 7;
    const media = calcularMedia(nota1,nota2, nota3);
    console.log(resultadoEscolar(media));
    }

    main();