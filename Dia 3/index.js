// let e const -> palavra reservadas para criação de variáveis
let meuNome = "João Vitor Vale"
console.log(meuNome)
meuNome = "João Vitor Nascimento"
console.log(meuNome)

console.log("=========Constante========")

const nome = "João Vitor Vale"
console.log(nome)
/*nome = "João Vitor Nascimento"
console.log(nome)*/

console.log("=========Operadores Aritméticos========")

let num1 = 10;
let num2 = 5;

let soma = num1 + num2;
let sub = num1 - num2;
let multi = num1 * num2;
let div = num1 / num2;
let modulo = num1 % num2;

console.log("A soma dos dois números: " + soma)
console.log("A subtração dos dois números: " + sub)
console.log("A multiplicação dos dois números: " + multi)
console.log("A divisão dos dois números: " + div)
console.log("o módulo dos dois números: " + modulo)

console.log("=====Conversão de tipo de dados e entrada de dados=====")

let entradaDoUsuario = Number(prompt("Insira sua idade"))
console.log("O ano que o usuário nasceu é: " + (2024 - entradaDoUsuario))