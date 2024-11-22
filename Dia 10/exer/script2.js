// Exercicio 2 array

let numeros = [];
let num;
let contador = 0;

// Criação do elementos desse array
while (contador < 5) {
    num = parseInt(prompt("Insira o " + (contador + 1) + "º número"))
    numeros[contador] = num
    contador++
}

// Exibi os elementos de array
for (let i = 0; i < 5; i++) {
    console.log(numeros[i])
}

console.log("===================")

// Modifica os elementos desse array, fazendo sua inversão
for (let j = 5; j >= 0; j--) {
    console.log(numeros[j])
}


