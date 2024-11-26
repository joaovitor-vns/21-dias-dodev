class Carro {
    Nome
    Potencia
    VelocidadeMaxima
    Aceleracao
    constructor(nome, potencia, velocidadeMaxima, aceleracao) {
        this.Nome = nome
        this.Potencia = potencia
        this.VelocidadeMaxima = velocidadeMaxima
        this.Aceleracao = aceleracao
    }

    CalcularTempoMedio(distancia) {
        let resultado = distancia / (this.VelocidadeMaxima / this.Aceleracao)
        return resultado
    }
}

let nome = prompt("Insira a equipe do carro")
let potencia = parseInt(prompt("Insira a potencia do carro"))
let velocidadeMaxima = Number(prompt("Insira a velocidade máxima do carro"))
let aceleracao = Number(prompt("Insira a aceleração do carro"))

let carro = new Carro(nome, potencia, velocidadeMaxima, aceleracao)

let distancia = Number(prompt("Insira a distância a ser percorrida"))
carro.CalcularTempoMedio(distancia)