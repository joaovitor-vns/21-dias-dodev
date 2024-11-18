let num1
let num2
let opcao

num1 = Number(prompt("Insira o primeiro número"))
num2 = Number(prompt("Insira o segundo número"))
opcao = prompt("1 - soma, 2 - subtração, 3 - multiplicação e 4 - divisão")

switch (opcao) {
    case "1":
        soma = num1 + num2
        console.log("Soma = " + soma)
        break;
    case "2":
        sub = num1 - num2
        console.log("Subtração = " + sub)
        break;
    case "3":
        multi = num1 * num2
        console.log("Multiplicação = " + multi)
        break;
    case "4":
        div = num1 / num2
        if (num2 === 0) {
            console.log("Não existe divisão por 0")
        } else {
            console.log("Divisão = " + div)
        }
        break;
    default:
        console.log("Opção Inválida")
        break;
}
