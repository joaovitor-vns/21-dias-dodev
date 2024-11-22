// Exercicio 3 array

let numeros = [];
let num;
let contador = 0;

// Criação do elementos desse array
let qtdeNum = Number(prompt("Insira quantos números você quer adicionar no array"))

while (contador < qtdeNum) {
    num = parseInt(prompt("Insira o " + (contador + 1) + "º número"))
    numeros[contador] = num
    contador++
}

// Exibi os elementos de array
for (let i = 0; i < qtdeNum; i++) {
    console.log(numeros[i])
}

console.log("===================")

// Modifica os elementos desse array, fazendo sua inversão
for (let j = qtdeNum; j >= 0; j--) {
    console.log(numeros[j])
}


