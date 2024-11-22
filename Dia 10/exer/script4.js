let num;
let numeros = [];
let contador = 0;

num = parseInt(prompt(("Insira um número inteiro positivo")))
// Criação do array pela sequencia de Fibonacci
numeros[0] = num - 1
numeros[1] = num
for (let i = 2; i <= 9; i++) {
    numeros[i] = numeros[0 + contador] + numeros[1 + contador]
    contador++
}

// Exibir o array
for (let j = 0; j <= 9; j++) {
    console.log(numeros[j])
}