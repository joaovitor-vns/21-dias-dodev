let nomes = [];
let notas = [];
let continuar = true;
let contadorAluno = 0;
let somaNotas = 0.0;

do {
    let nomeInserido = prompt("Insira o nome do " + (contadorAluno + 1) + "º aluno")
    let notaInserida = Number(prompt("Insira a nota do " + (contadorAluno + 1) + "º aluno"))

    nomes[contadorAluno] = nomeInserido
    notas[contadorAluno] = notaInserida

    somaNotas += notaInserida
    contadorAluno++

    let parar = prompt("Deseja parar de inserir as informações: (s/n)")
    if (parar === "s") {
        continuar = false
    }

} while (continuar)

// Exibir a nota de cada aluno
console.log("O nome dos alunos e sua respectivas notas")
for (let i = 0; i < contadorAluno; i++) {
    console.log("Nome: " + nomes[i] + " Nota: " + notas[i])
}

console.log("A soma das notas do alunos é: " + somaNotas.toFixed(2))
console.log("A média geral dos alunos é: " + (somaNotas / contadorAluno).toFixed(2))