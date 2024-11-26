let nome = ""
let salario = 0.0

function perguntarColocaborador() {
    nome = prompt("Insira o nome do colaborador")
    salario = Number(prompt("Insira o salario do colaborador"))

    reajuste(nome, salario)

}

function reajuste(nome, salario) {
    let aumento = 0;

    if (salario <= 1500) {
        aumento = 0.2
    } else if (salario >= 1501 || salario <= 2000) {
        aumento = 0.15
    } else if (salario >= 2001 || salario <= 3000) {
        aumento = 0.10
    } else {
        aumento = 0.05
    }

    let salarioNovo = salario + (salario * aumento)

    console.log("Nome do colaborador: " + nome)
    console.log("Salario: R$ " + salario)
    console.log("O aumento foi de: " + (aumento * 100) + "%")
    console.log("O salario reajustado é: R$ " + salarioNovo)

    calcularNovamente()

}

function calcularNovamente() {
    let resposta = prompt(("Deseja calcular novamente com novas informações? (s/n)"))
    if (resposta === "s") {
        perguntarColocaborador()
    } else {
        console.log("Programa Encerrado")
    }
}

perguntarColocaborador()