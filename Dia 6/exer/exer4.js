// Algoritmo ultilizando a estrutura FOR que receba um número
// e exiba na tela qual o resultado de sua tabuada e dos próximos dois números

let tabuada = Number(prompt("Insira o número desejado"))
let resultTabuada

for (let i = tabuada; i <= tabuada + 2; i++) {
    console.log("A tabuada do número: " + i)
    for (let j = 0; j <= 10; j++) {
        resultTabuada = i * j
        console.log(i + " x " + j + " = " + resultTabuada)
    }
}