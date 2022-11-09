function calcularimc(peso, altura) {
  return peso / Math.pow(altura, 2);
}

function classificarimc(imc) {
  if (imc < 18.5) {
    return "Abaixo do peso, com imc de " + imc.toFixed(1);
  } else if (imc >= 18.5 && imc <= 25) {
    return "Peso normal, com imc de " + imc.toFixed(1);
  } else if (imc >= 25 && imc <= 30) {
    return "Acima do peso com imc de " + imc.toFixed(1);
  } else if (imc >= 30 && imc <= 40) {
    return "Obeso, com imc de " + imc.toFixed(1);
  } else {
    return "Obesidade grave, com imc de " + imc.toFixed(1);
  }
}

function main() {
  const peso = 75;
  const altura = 1.75;
  const imc = calcularimc(peso, altura);
  console.log(classificarimc(imc));
}

main();
