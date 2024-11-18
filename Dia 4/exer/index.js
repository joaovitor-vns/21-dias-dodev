let condição1 = prompt("Você está com fome?")
let condição2 = prompt("Você tem dinheiro?")
let condição3 = prompt("O restaurante está aberto?")

if ((condição1 === "Não" || condição1 === "não") || (condição2 === "Não" || condição2 === "não")) {
    console.log("Hoje a janta será em casa")
} else if ((condição1 === "Sim" || condição1 === "sim") && (condição2 === "Sim" || condição2 === "sim") && (condição3 === "Não" || condição3 === "não")) {
    console.log("Peça um delivery")
} else if ((condição1 === "Sim" || condição1 === "sim") && (condição2 === "Sim" || condição2 === "sim") && (condição3 === "Sim" || condição3 === "sim")) {
    console.log("Hoje o jantar será no seu restaurante preferido")
}