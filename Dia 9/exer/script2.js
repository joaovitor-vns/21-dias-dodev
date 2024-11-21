// Aumento salarial anual dos clientes
let infoCorreta = "";
const anoAtual = 2024;
let salarioAtual;

do {
    let nome = prompt("Insira seu nome")
    let idade = parseInt(prompt("Insira sua idade"))
    salarioAtual = parseFloat(prompt("Insira seu salario em R$"))

    console.log("Nome -> " + nome)
    console.log("Idade -> " + idade)
    console.log("Sálario -> R$ " + salarioAtual)

    infoCorreta = prompt("As informações estão corretas? (s/n)")

} while (infoCorreta === "n")

let percetualAumento = 1.5 / 100;
console.log("Previsão de aumento salarial no próximos 10 anos")
// Realizando a previsão salarial para próximo 10 anos
for (let i = 1; i <= 10; i++) {
    salarioAtual = salarioAtual + (salarioAtual * percetualAumento)
    console.log((anoAtual + i) + " - R$ " + salarioAtual.toFixed(2))
    percetualAumento *= 2
}