
// 2ª ENTREGA DO PROJETO:

// IMPLEMENTADO:
// - Separado as Classes em novos arquivos .JS
// - Aletração dos prompts por inputs de formulário
// - Cadastramento de carros utilizando LocalStorage 
// - Adição dos carros cadastrados na pagina principal atraves de manipulação de DOM 
// - Limpeza dos inputs apos finalizar casdastramento 
// - Cadastramento de novos usuários utilizando LocalStorage


// ENTREGA FINAL:

// IMPLEMENTADO:
// - login de usuario conferindo email no "banco de dados"(local storage)
// - Icone de perfil e nome do usuario depois de logado 
// - Correção de bug pagina inicial
// - Retirado "esqueceu senha dos botões"
// - Removido pagina de login enquanto logado.
// - adicionado novos carros na vitrine
// - adicionado funcção de data no rodapé


import { Carro } from './classes/Carro.js'
import { Usuario } from './classes/Usuario.js'


let carros = []; // Array para armazenar objetos de carros
let usuarios = [];// Array para armazenar objetos de usuarios


// Botão para adicionar carros
const botaoCadastrarCarro = document.querySelector('#botao-cadastrar-carro')

if (botaoCadastrarCarro != null) {
    botaoCadastrarCarro.onclick = adicionarCarro
}


// CARRROS:

// A FAZER:
// Adiconar um while e if para verificar se todos os campos foram preenchidos corretamente
// Criar uma função para remover carro vendido
// Adicionar a função de alterar imagem do carro localmente

// ESTOQUE INICIAL
// let carrosStorage = JSON.parse(localStorage.getItem("carros")) || []

// let mercedes = new Carro ('MERCEDES-BENZ', 'npm install sweetalert2CLA 45 AMG', "VERMELHO PATAGONIA", '539.000', 2023, 2000)
// carrosStorage.push(mercedes)

// let bmw = new Carro ('BMW', 'X4 XDRIVE 28I', "BRANCO PEROLA", '169.900', 2015, 3000)
// carrosStorage.push(bmw)

// let rangeRover = new Carro ('RANGE ROVER', 'EVOKE DYNAMIC', "VERMELHO", '253.500', 2018, 3000)
// carrosStorage.push(rangeRover)
// localStorage.setItem("carros", JSON.stringify(carrosStorage))



function adicionarCarro() {
    let marca = document.getElementById('input-marca').value.toUpperCase();
    let modelo = document.getElementById('input-modelo').value.toUpperCase();
    let cor = document.getElementById('input-cor').value.toUpperCase();
    let valor = parseFloat(document.getElementById('input-valor').value);
    let ano = parseFloat(document.getElementById('input-ano').value);
    let quilometragem = parseFloat(document.getElementById('input-km').value);
    let foto = document.getElementById('input-fotos').value // tentativa de captar a imagem - rever 

    // Criar um objeto carro a partir da classe
    let carro = new Carro(marca, modelo, cor, valor, ano, quilometragem, foto)

    // Adicionar o objeto ao array
    carros.push(carro);

    // Adicionar carro no localStorage
    let carrosStorage = JSON.parse(localStorage.getItem("carros")) || []
    carrosStorage.push(carro)
    localStorage.setItem("carros", JSON.stringify(carrosStorage))

    alert("Carro adicionado com sucesso!");

    // Limpas os inputs
    document.getElementById('input-marca').value = ""
    document.getElementById('input-modelo').value = ""
    document.getElementById('input-cor').value = ""
    document.getElementById('input-valor').value = ""
    document.getElementById('input-ano').value = ""
    document.getElementById('input-km').value = ""

}

function mostrarCarros() {
    let carros = JSON.parse(localStorage.getItem("carros")) || []
    let listaCarros = document.getElementById("vitrine")

    // Conferencia se está na página da vitrine
    // if (window.location.href != './index.html') return

    if (!listaCarros || !carros) return

    for (let i = 0; i < carros.length; i++) {
        let novoCarro = `<div class="carro" id="carro${i}">
                            <div class="dados-carro">
                                <h3 class="nome-carro">
                                    ${carros[i].marca} - ${carros[i].modelo}
                                </h3>
                                <P class="info-carro">
                                    ${carros[i].cor} - ${carros[i].ano}
                                </P>
                                <p class="preco-carro">
                                    <span class="cifrao">R$</span> ${carros[i].valor.toLocaleString('pt-BR')},<span class="zeros">00</span>
                                </p>
                            </div>
                         </div>`

        listaCarros.innerHTML += novoCarro

    }
}

// monstrar carros na vitrine
mostrarCarros()

// USUÁRIOS:

// A FAZER:
// CRIAR UM FILTRO DE COMPARAÇÃO SE JÁ EXISTE O EMAIL CADASTRADO NO BANCO DE DADOS

// Botão para adicionar usuarios
const botaoCadastrarUsuario = document.querySelector('#botao-cadastrar-usuario')

if (botaoCadastrarUsuario != null) {
    botaoCadastrarUsuario.onclick = adicionarUsuario
}

function adicionarUsuario() {
    let nome = document.getElementById('input-cadastro-nome').value.toUpperCase()
    let email = document.getElementById('input-cadastro-email').value
    let celular = document.getElementById('input-cadastro-celular').value
    let senha = document.getElementById('input-cadastro-senha').value

    //Criar um objeto usuario a partir da classe
    let usuario = new Usuario(nome, email, celular, senha)

    
    //Adicionar o objeto ao array
    usuarios.push(usuario)

    // Adicionar usuario no localStorage
    let usuariosStorage = JSON.parse(localStorage.getItem("usuarios")) || []    

    
    usuariosStorage.push(usuario)
    localStorage.setItem("usuarios", JSON.stringify(usuariosStorage))

    alert("Usuario adicionado com sucesso!")

    window.location.href = './login.html'
}


// LOGIN

let botaoAcessarConta = document.getElementById('submit')

if (botaoAcessarConta != null) {
    botaoAcessarConta.onclick = logar
}


function logar() {

    let email = document.getElementById('input-email')
    let senha = document.getElementById('input-senha')
    let usuariosStorage = JSON.parse(localStorage.getItem("usuarios")) || []

    for (let i in usuariosStorage) {
        if (email.value === usuariosStorage[i].email && senha.value === usuariosStorage[i].senha) {
            
            let nomeUsuario = JSON.parse(localStorage.getItem("nome_usuario")) || []
            nomeUsuario.push(usuariosStorage[i].nome)
            localStorage.setItem("nome_usuario", JSON.stringify(nomeUsuario))
           
            // localStorage.setItem('nome usuario logado', usuariosStorage[i].nome)

            console.log(usuariosStorage[i].nome)
            let token = Math.random().toString(16).substring(2)
            localStorage.setItem('token', token)


            location.href = './index.html'
            break
        } else {
            email.setAttribute('style', 'border-color: red')
            senha.setAttribute('style', 'border-color: red')
            alert('Conta não localizada, verifique seu email ou senha')

        }
    }

}

// CONFERIR SE ESTA LOGADO:

if (localStorage.getItem('token') != null) {
    
    // Liberar acesso features logados
    let adicionarCarroMenu = document.getElementById('adicionar-carro')
    adicionarCarroMenu.style.display = 'inline'
    let menuLateral = document.getElementById('menu-lateral')
    menuLateral.style.visibility = 'visible'
    let saudacao = document.getElementById('saudacao')
    let nomeUsuario = JSON.parse(localStorage.getItem('nome_usuario'))
    saudacao.innerHTML += `Bem vindo, ${nomeUsuario}`

    let menuLogin = document.getElementById('menu-login')
    menuLogin.style.display = 'none'

}


// DESLOGAR 

const botaoDeslogar = document.getElementById('btn-sair')

if (botaoDeslogar != null) {
    botaoDeslogar.onclick = deslogar
}

function deslogar() {
    localStorage.removeItem('token')
    localStorage.removeItem('nome_usuario')
    location.href = './login.html'

}



// PAGINA CONTATO 

// Botão para enviar mensagem da pagina de contato
const botaoFaleConosco = document.getElementById('botao-fale-conosco')

if (botaoFaleConosco != null) {
    botaoFaleConosco.onclick = () => alert('Mensagem enviada com sucesso!')
}


// Pegar data do ano atual

let dataAtual = new Date ()
let anoAtual = dataAtual.getFullYear()

document.getElementById('anoAtual').innerHTML = anoAtual

