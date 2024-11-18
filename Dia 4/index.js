// if e else
// operadores relacionais -> ==, !=, >, >=, <, <=, ===, !==

let idade = Number(prompt("Insira sua idade"))
let nome = prompt("Insira seu nome")
if (idade >= 18) {
    console.log("Você é maior de idade")
} else {
    console.log("Você é menor de idade")
}

// escopo
if (idade <= 10) { // Outro escopo
    console.log(idade) // irá imprimir a idade, pois a variável está em um escopo global
    let outroVar = "João";
    console.log(outroVar) // irá imprimir o valor da variável e está dentro de um escopo local
    console.log("Você tem menos ou tem 10 anos")
} else { // Outro escopo
    console.log("Você tem mais de 10 anos")
}

//console.log(outraVar) -> vai dar um erro, pois como essa variável foi criada
// dentro de um escopo local, o valor dela não será passado para o escopo global

// Operadores E e OU
if (idade === 21 && nome === "João") { // As duas condições tem que ser verdadeiras
    console.log("Você tem 21 anos E seu nome é João")
} else if (idade === 21 || nome === "João") { // Apenas uma condição precisa ser verdadeira
    console.log("Você tem 21 anos OU seu nome é João")
} else {
    console.log("Você não tem 21 anos e seu nome não é João")
}
