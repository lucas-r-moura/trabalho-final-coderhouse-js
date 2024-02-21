
// 2ª ENTREGA DO PROJETO:

// IMPLEMENTADO:
// - Trocado os prompts por inputs de formulário
// - Cadastramento de carros utilizando LocalStorage 
// - Adição dos carros cadastrados na pagina principal atraves de manipulação de DOM 
// - Limpeza dos inputs apos finalizar casdastramento 
// - Cadastramento de novos usuários utilizando LocalStorage


import {Carro} from './classes/Carro.js'
import {Usuario} from './classes/Usuario.js'

let carros = []; // Array para armazenar objetos de carros
let usuarios = [];// Array para armazenar objetos de usuarios

// Botão para adicionar carros
const botaoCadastrarCarro = document.querySelector('#botao-cadastrar-carro')

if (botaoCadastrarCarro != null ) {
    botaoCadastrarCarro.onclick = adicionarCarro
}


// CARRROS:

// A FAZER:
// Adiconar um while e if para verificar se todos os campos foram preenchidos corretamente
// Criar uma função para remover carro vendido
// Adicionar a função de alterar imagem do carro localmente

function adicionarCarro() {
    let marca = document.getElementById('input-marca').value.toUpperCase();
    let modelo = document.getElementById('input-modelo').value.toUpperCase();
    let cor = document.getElementById('input-cor').value.toUpperCase();
    let valor = parseFloat(document.getElementById('input-valor').value);
    let ano = parseFloat(document.getElementById('input-ano').value);
    let quilometragem = parseFloat(document.getElementById('input-km').value);
    let foto = document.getElementById('input-fotos').value // tentativa de captar a imagem - rever 

    // Criar um objeto carro a partir da classe
    let carro = new Carro (marca, modelo, cor, valor, ano, quilometragem, foto)

    // Adicionar o objeto ao array
    carros.push(carro);

    // Adicionar carro no localStorage
    let carrosStorage = JSON.parse(localStorage.getItem("carros")) 	|| []
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
    let carros = JSON.parse(localStorage.getItem("carros"))
    let listaCarros = document.getElementById("vitrine")
    
    // Conferencia se está na página da vitrine
    if(!listaCarros) return

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
// COLOCAR A PAGINA "ADICIONAR CARRO" APENAS PARA USUARIO LOGADO
// ADCIONAR ICONE DE PERFIL E PAGINA CONTA DO USUARIO 
// CRIAR UM FILTRO DE COMPARAÇÃO SE JÁ EXISTE O EMAIL CADASTRADO NO BANCO DE DADOS

// Botão para adicionar usuarios
const botaoCadastrarUsuario = document.querySelector('#botao-cadastrar-usuario')

if (botaoCadastrarUsuario != null ) {
    botaoCadastrarUsuario.onclick = adicionarUsuario
 }

function adicionarUsuario(){
    let nome = document.getElementById('input-cadastro-nome').value.toUpperCase()
    let email = document.getElementById('input-cadastro-email').value
    let celular = document.getElementById('input-cadastro-celular').value
    let senha = document.getElementById('input-cadastro-senha').value

    //Criar um objeto usuario a partir da classe
    let usuario = new Usuario (nome, email, celular, senha)

    
    //Adicionar o objeto ao array
    usuarios.push(usuario)

    // Adicionar usuario no localStorage
    let usuariosStorage = JSON.parse(localStorage.getItem("usuarios")) 	|| []
    usuariosStorage.push(usuario)
    localStorage.setItem("usuarios", JSON.stringify(usuariosStorage))


    alert("Usuario adicionado com sucesso")
}


// PESQUISAR CARRO

// A FAZER:
// ADICIONAR FUNÇÃO DE PESQUISAR CARRO 
// EXIBIR PAGINA APENAS COM OS CARROS DISPONIVEIS NA PESQUISA