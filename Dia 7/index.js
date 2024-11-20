// Laço de repetição While e DoWhile

let condicao = true;
let idade;

while (condicao) {
    let idade = Number(prompt("Insira sua idade"))
    if (idade < 18) {
        console.log("Você é menor de idade")
        condicao = false
    }
}

do {
    idade = Number(prompt("Insira sua idade"))
} while (idade >= 18)

console.log("Você é menor de idade")