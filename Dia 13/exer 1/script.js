class Computador {
    Tipo
    Processador
    Video
    Armazenamento
    MemoriaRam
    SSD
    constructor(tipo, processador, video, armazenamento, memoriaRam, ssd) {
        this.Tipo = tipo
        this.Processador = processador
        this.Video = video
        this.Armazenamento = armazenamento
        this.MemoriaRam = memoriaRam
        this.SSD = ssd
    }

    apresentar() {
        console.log("Tipo: " + this.Tipo)
        console.log("Processador: " + this.Processador)
        console.log("Video: " + this.Video)
        console.log("Armazenamento: " + this.Armazenamento + "GB")
        console.log("Memoria Ram: " + this.MemoriaRam + "GB")
        console.log("SSD: " + this.SSD)
    }
}

console.log("===== Informações do computador =====")
let computadores = [];
let continuar = true;
let contadorComputador = 0;

do {
    let tipo = prompt("Insira o tipo do computador")
    let processador = prompt("Insira o processador do computador")
    let video = prompt("Insira a placa de video do computador")
    let armazenamento = parseInt(prompt("Insira o armazenamento do computador"))
    let memoriaRam = parseInt(prompt("Insira a memoria ram do computador"))
    let ssd = prompt("O computador possui SSD? (s/n)")
    let computador = new Computador(tipo, processador, video, armazenamento, memoriaRam, ssd)

    computadores[contadorComputador] = computador
    computadores[contadorComputador].apresentar()

    let desejaContinuar = prompt("Deseja inserir informações de outro computador? (s/n)")
    if (desejaContinuar === "n") {
        continuar = false
        continue;
    }

    contadorComputador++

} while (continuar)
