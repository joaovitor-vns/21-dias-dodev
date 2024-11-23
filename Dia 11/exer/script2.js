let modeloCarros = [];
let anoCarros = [];
let valorCarros = [];
let contadorCarros = 0;
let parar = true;

// Loop para cadastro de carro
while (parar) {
    let cadastrarModelo = prompt("Insira o modelo do " + (contadorCarros + 1) + "º carro para cadastro")
    let cadastrarAno = parseInt(prompt("Insira o ano do " + (contadorCarros + 1) + "º carro para cadastro"))
    let cadastrarValor = Number(prompt("Insira o valor do " + (contadorCarros + 1) + "º carro para cadastro"))

    modeloCarros[contadorCarros] = cadastrarModelo
    anoCarros[contadorCarros] = cadastrarAno
    valorCarros[contadorCarros] = cadastrarValor

    contadorCarros++
    let continuar = prompt("Deseja cadastrar outro carro: (s/n)")
    if (continuar === "n") {
        parar = false
    }
}

// Exibir os carros cadastrados(modelo, ano e valor)
console.log("O modelo, ano e valor dos carros cadastrados")
for (let i = 0; i < contadorCarros; i++) {
    console.log(modeloCarros[i] + ", " + anoCarros[i] + " Valor: R$ " + valorCarros[i])
}

console.log("Conteúdo array sem a ordem de valor")
console.log(modeloCarros)
console.log(anoCarros)
console.log(valorCarros)

// Exibir o array por ordem crescente do valor do carro
for (let j = 0; j < contadorCarros; j++) {
    for (let k = 0; k < contadorCarros; k++) {
        if (valorCarros[k] > valorCarros[k + 1]) {

            let modeloMaiorValor = modeloCarros[k]
            modeloCarros[k] = modeloCarros[k + 1]
            modeloCarros[k + 1] = modeloMaiorValor

            let anoMaiorValor = anoCarros[k]
            anoCarros[k] = anoCarros[k + 1]
            anoCarros[k + 1] = anoMaiorValor

            let maiorValor = valorCarros[k]
            valorCarros[k] = valorCarros[k + 1]
            valorCarros[k + 1] = maiorValor
        }
    }
}

console.log("Conteúdo array com a ordem crescente de valor")
for (let i = 0; i < contadorCarros; i++) {
    console.log(modeloCarros[i] + ", " + anoCarros[i] + " Valor: R$ " + valorCarros[i])
}