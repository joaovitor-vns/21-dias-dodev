// Exercicio 1 array

let numeros = [];
let num;
let numArray;

num = parseInt(prompt("Insira um número inteiro positivos"))

for (let i = 0; i <= 9; i++) {
    numArray = parseInt(prompt("Insira um número inteiro positivo para popular o array"))
    numeros[i] = numArray
    if (numeros[i] === num) {
        console.log("índice em que o número inserido aparece no array: " + i)
    }
}


