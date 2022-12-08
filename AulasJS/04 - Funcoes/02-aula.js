function escreverNome(nome){
return'Meu nome é ' + nome;
}
escreverNome('Leonardo');
escreverNome('Luiz');

function checarMaioridade(idade){
     if (idade >= 18) {
        console.log(escreverNome('Leonardo') + ' e sou maior de idade');
    } else {
        console.log('Menor de idade');
    }    
}
checarMaioridade(18);