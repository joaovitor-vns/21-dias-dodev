let nomes = [];
let senhas = [];
let continuar = true;
let contadorCadastro = 0;
let contadorLogin = 0;
let contadorExcluir = 0


do {
    let opcao = Number(prompt("O que você deseja fazer: 1 - Cadastrar, 2 - Login, 3 - Excluir ou 4 - Encerrar"))

    switch (opcao) {
        case 1:
            let nomeCadastro = prompt("Insira seu nome")
            let senhaCadastro = prompt("Insira uma senha")

            nomes[contadorCadastro] = nomeCadastro
            senhas[contadorCadastro] = senhaCadastro

            contadorCadastro++
            break;
        case 2:
            let nomeLogin = prompt("Insira o nome")
            let senhaLogin = prompt("Insira sua senha")

            if (nomeLogin === nomes[contadorLogin]) {
                if (senhaLogin === senhas[contadorLogin]) {
                    console.log("Login Efetuado com sucesso")
                } else {
                    console.log("Senha incorreta")
                }
            } else {
                console.log("Nome incorreto")
            }
            contadorLogin++
            break;
        case 3:
            console.log("Nomes dos Cadastros feitos antes de exclui")
            console.log(nomes)
            let nomeExcluir = prompt("Insira o nome do cadastro a ser excluido")

            if (nomeExcluir == nomes[contadorExcluir]) {
                nomes.splice(contadorExcluir, 1) // Exclui um elemento do array e já reoganiza o array
                senhas.splice(contadorExcluir, 1)
            }
            contadorExcluir++
            break;
        case 4:
            continuar = false
            break;
        default:
            console.log("Opção inválida, escolha novamente")
            break;
    }
} while (continuar)

console.log("Programa encerrado com sucesso")
