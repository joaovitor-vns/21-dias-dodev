let nome = "";
let idade = 0;
let condicao1 = "";
let condicao2 = "";

nome = prompt("Insira seu nome")
idade = Number(prompt("Insira sua idade"))
condicao1 = prompt("Você possui habilitação?")
condicao2 = prompt("Você possui carro?")

if (idade < 18 || (condicao1 === "Não" || condicao1 === "não")) {
    console.log(nome + ", você não pode dirigir")
} else if (idade >= 18 && (condicao1 === "Sim" || condicao1 === "sim") && (condicao2 === "Não" || condicao2 === "não")) {
    console.log(nome + ", você pode dirigir, mas não tem carro")
} else if (idade >= 18 && (condicao1 === "Sim" || condicao1 === "sim") && (condicao2 === "Sim" || condicao2 === "sim")) {
    console.log(nome + ", você será o motorista")
}
