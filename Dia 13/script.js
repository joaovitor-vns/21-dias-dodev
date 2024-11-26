class Aluno {
    nome
    idade
    areaDeAtuacao
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    apresentar() {
        console.log("Olá meu nome é " + this.nome + ", tenho " + this.idade + " anos e minha area de atuação é: " + this.areaDeAtuacao)
    }
}

console.log("===== Cadastro de aluno =====")
let alunos = [];
let continuar = true;
let contadorAluno = 0;

while (continuar) {
    let nome = prompt("Insira o nome do aluno")
    let idade = parseInt(prompt("Insira a idade do aluno"))
    let aluno = new Aluno(nome, idade)

    let areaAtuacao = prompt("Insira a área de atuação do aluno")
    aluno.areaDeAtuacao = areaAtuacao

    alunos[contadorAluno] = aluno
    let desejaContinuar = prompt("Insira 1 para cadastrar novo aluno")
    if (desejaContinuar != "1") {
        continuar = false
    } else {
        contadorAluno++
    }

}