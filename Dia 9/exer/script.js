// Conhencendo o usuário

let continuar = "";

do {
    // Entrada do usuario com suas informações
    let nome = prompt("Insira seu nome")
    let idade = Number(prompt("Insira sua idade"))
    let peso = Number(prompt("Insira seu peso"))
    let altura = Number(prompt("Insira sua altura"))
    let profissão = prompt("Insira sua profissão")

    console.log("Olá " + nome + ", você tem " + idade + " anos, é " + profissão
        + ", tem " + altura.toFixed(2) + "M de altura e pesa " + peso.toFixed(2) + "kg")

    // Verificar se é maior de idade e exibe uma mensagem
    if (idade >= 18) {
        console.log("Está liberado para tomar umas geladas")
    } else {
        console.log("Sem gelada para você")
    }

    // Idade em meses, semanas e dias
    let idadeMeses = idade * 12
    let idadeSemana = parseInt((idade * 365) / 7)
    let idadeDias = idade * 365

    console.log("Sua idade em meses, ano e dias é: " + idadeMeses + " meses "
        + idadeSemana + " semanas " + idadeDias + " dias")

    // Calculando seu IMC e verificando em que faixa ele está
    let imc = peso / (altura * altura)

    if (imc < 18.5) {
        console.log(imc + "kg/m2 -> Magreza")
    } else if (imc >= 18.5 && imc <= 24.9) {
        console.log(imc + "kg/m2 -> Normal")
    } else if (imc > 24.9 && imc <= 30) {
        console.log(imc + "kg/m2 -> Sobrepeso")
    } else {
        console.log(imc + "kg/m2 -> Obesidade")
    }

    // Descobrindo o ano que o usuario nasceu pela sua idade
    let anoAtual = 2024
    let anoNasc = anoAtual - idade
    console.log("O ano que o usuário nasceu é " + anoNasc)

    // Exibindo todos os anos que o usuario viveu e a idade dele em cada ano
    for (let i = 0; i <= idade; i++) {
        console.log((anoNasc + i) + " - " + i + " anos de idade")
    }

    continuar = prompt("Deseja inserir novos dados? (s/n)")

} while (continuar == "s")