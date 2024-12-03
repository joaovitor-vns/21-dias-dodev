let nomes = [];
let senhas = [];

function solicitarOpcao() {
    let opcao = prompt("O que você deseja fazer? 1 - Cadastrar, 2 - Login, 3 - Excluir ou 4 - Encerrar");
    return opcao;
}

function cadastro() {
    nomes.push(prompt("Insira o nome para cadastro"));
    senhas.push(prompt("Insira a senha para cadastro"));
}

function login(nome, senha) {
    if (nomes.includes(nome) == true) {
        if (senhas.includes(senha) == true) {
            console.log("Login efetuado com sucesso!");
        } else {
            console.log("Senha incorreta");
        }
    } else {
        console.log("Nome ou senha incorreto");
    }
}


function exclusao(nome) {
    if (nomes.includes(nome) === true) {
        nomes.splice(nomes.indexOf(nome), 1);
        senhas.splice(senhas.indexOf(nome), 1);
    } else {
        console.log("Nome incorreto!");
    }
}

let continuar = true;

while (continuar) {
    let opcao = solicitarOpcao();

    switch (opcao) {
        case "1":
            cadastro();
            break;
        case "2":
            let nomeLogin = prompt("Insira o nome para login");
            let senhaLogin = prompt("Insira a senha para cadastro");
            login(nomeLogin, senhaLogin);
            break;
        case "3":
            let nomeExcluir = prompt("Insira o nome para exclusão");
            exclusao(nomeExcluir);
            break;
        case "4":
            continuar = false;
            break;
        default:
            console.log("Opção inválida, tente novamente");
            break;
    }
}