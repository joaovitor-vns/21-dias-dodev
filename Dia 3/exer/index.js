let nomeUsuario = prompt("Insira seu nome")
let idadeUsuario = Number(prompt("Insira sua idade"))
let alturaUsuario = Number(prompt("Insira sua altura"))
let pesoUsuario = Number(prompt("Insira seu peso"))

let anoDeNascimento = 2024 - idadeUsuario
let imc = pesoUsuario / (alturaUsuario * alturaUsuario)

console.log("Olá " + nomeUsuario + ", você tem " + idadeUsuario + " anos, nasceu em "
    + anoDeNascimento + ", tem " + alturaUsuario + " de altura, pesa "
    + pesoUsuario + "Kg seu IMC é " + imc + " Kg/m2")