// Estudos de arrays

let nomes = [];
let continuar = true;
let contador = 0;

while (continuar) {
    let nomeInserido = prompt("Insira um nome desejado para adicionar ao array")
    nomes[contador] = nomeInserido
    let desejaContinuar = prompt("Digite 1 para atribuir mais um nome ao seu array")
    if (desejaContinuar != "1") {
        continuar = false
    }
    contador++
}
