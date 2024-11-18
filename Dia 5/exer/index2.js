let opcao
let valorDesejado
let qtdeLitro

opcao = prompt("Escolha uma opção: 1 - gasolina, 2 - alcool e 3 - calibrar pneus")

switch (opcao) {
    case "1":
        valor = Number(prompt("Insira o valor em R$ desejado"))
        qtdeLitro = valor / 5
        console.log("A quantidade de litro abastecida é " + qtdeLitro + " litros")
        break;
    case "2":
        valor = Number(prompt("Insira o valor em R$ desejado"))
        qtdeLitro = valor / 3
        console.log("A quantidade de litro abastecida é " + qtdeLitro + " litros")
        break;
    case "3":
        console.log("Pneus calibrados com sucesso!")
        break;
    default:
        console.log("Opção inválida")
        break;
}