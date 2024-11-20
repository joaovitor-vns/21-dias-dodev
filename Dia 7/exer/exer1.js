// Algoritmo que recebe a nota e o sexo do aluno, usando a estrutura WHILE
// e depois perguntar ao usuario se ele deseja cadastrar outra nota

let condicao = true
let nota = 0.0
let sexo = ""
let somaNota = 0
let contadorAluno = 0
let contadorHomem = 0
let contadorMulherNotaMaior7 = 0
let maiorNotaEntreHomem = 0
let cadastraOutroAluno = ""

while (condicao) {
    nota = parseFloat(prompt("Insira a nota do aluno"))
    sexo = prompt("Insira o sexo do aluno, sendo: h - homem e m - mulher")
    somaNota += nota
    contadorAluno++
    if (sexo === "h") {
        contadorHomem++
        if (maiorNotaEntreHomem < nota) {
            maiorNotaEntreHomem = nota
        }
    }
    if (sexo === "m" && nota > 7) {
        contadorMulherNotaMaior7++
    }
    cadastraOutroAluno = prompt("Deseja cadastrar outro aluno: (s/n)")
    if (cadastraOutroAluno === "n") {
        condicao = false
    }
}

console.log("A média geral dos alunos é: " + (somaNota / contadorAluno).toFixed(2))
console.log("A quantidade de homens que enviaram a nota é: " + contadorHomem)
console.log("A quantidade mulheres com nota acima de 7 é: " + contadorMulherNotaMaior7)
console.log("A maior nota entre os homens é: " + maiorNotaEntreHomem.toFixed(2))