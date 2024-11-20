// Caixa Eletrônico

let saldoConta = 10550.67
let condicao = true
let somaValor = 0.0
let maiorValorInserido = 0
let contadorValorInserido = 0
let continuar

const nome = prompt("Insira seu nome")
const cpf = Number(prompt("Insira seu cpf"))

do {
    while (condicao) {
        const valor = parseFloat(prompt("Insira o valor desejado positivo"))
        if (valor < 0) {
            console.log("Desculpe, valor inserido negativo, insira novamente")
        } else {
            condicao = false
        }
    }
    let opcao = prompt("Deseja s - sacar ou d - depositar?")
    switch (opcao) {
        case "s":
            if (saldoConta >= valor) {
                saldoConta -= valor
            } else {
                console.log("Saldo indiponível para saque")
            }
            break;
        case "d":
            saldoConta += valor
            break;
        default:
            console.log("Opção inválida")
            break;
    }
    somaValor += valor
    contadorValorInserido++
    if (maiorValorInserido < valor) {
        maiorValorInserido = valor
    }
    continuar = prompt("Deseja continuar? 1 - continuar e 2 - parar")
    if (continuar == "1") {
        condicao = true
    }

} while (continuar == "1")

console.log("Nome do cliente - " + nome)
console.log("CPF do cliente - " + cpf)
console.log("O saldo total da conta é R$ " + saldoConta.toFixed(2))
console.log("O maior valor inserido é R$ " + maiorValorInserido.toFixed(2))
console.log("A média dos valores inseridos é R$ " + (somaValor / contadorValorInserido).toFixed(2))