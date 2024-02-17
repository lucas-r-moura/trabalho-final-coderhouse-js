// Alterações solicitadas pelo professor:

// criar um novo repo com projeto novo com index.htmll e index.js
// criar uma pasta chamada classes - Carro.js e Usuario.js
// usar parseFLoat nos valores 


import {Carro} from './classes/Carro.js'
import {Usuario} from './classes/Usuario.js'

let carros = []; // Array para armazenar objetos de carros
let usuarios = [];// Array para armazenar objetos de usuarios

// Botão para adicionar carros
const botaoCadastrarCarro = document.querySelector('#botao-cadastrar-carro')

if (botaoCadastrarCarro != null ) {
    botaoCadastrarCarro.onclick = adicionarCarro
 }


function adicionarCarro() {
    let marca = document.getElementById('input-marca').value;
    let modelo = document.getElementById('input-modelo').value;
    let cor = document.getElementById('input-cor').value;
    let valor = parseFloat(document.getElementById('input-valor').value);
    let ano = parseFloat(document.getElementById('input-ano').value);
    let quilometragem = parseFloat(document.getElementById('input-km').value);

    // Criar um objeto carro a partir da classe
    let carro = new Carro (marca, modelo, cor, valor, ano, quilometragem)

    // Adicionar o objeto ao array
    carros.push(carro);

    alert("Carro adicionado com sucesso!");

    console.log(carros)

    // Limpas os inputs
    document.getElementById('input-marca').value = ""
    document.getElementById('input-modelo').value = ""
    document.getElementById('input-cor').value = ""
    document.getElementById('input-valor').value = ""
    document.getElementById('input-ano').value = ""
    document.getElementById('input-km').value = ""
}



// function adicionarCarroVitrine () {
//     let novoCarro = carros[carros.length - 1]
//     const vitrineCarros = document.querySelector('#vitrine')
//     let carroCard = document.querySelector('.carro')
//     vitrineCarros.innerHTML += carroCard
    
// }

// const nomeCarroCard = document.querySelector('.nome-carro').innerText
// console.log(nomeCarroCard)

// const vitrineCarros = document.querySelector('#vitrine')
// let carroCard = document.querySelector('#card-carro').innerHTML
// let novoCarroCard = vitrineCarros.innerHTML += carroCard
// console.log(novoCarroCard)



function mostrarCarros() {
    alert("Lista de carros:");

    //Percorrer o array e mostrar as informações de cada usuario
    carros.forEach((carro, index) => {
        alert(`Carro ${index + 1}:\nMarca: ${carro.marca}\nModelo: ${carro.modelo}\nValor: ${carro.valor}\nAno: ${carro.ano}\n--------------`);
    });
}


function adicionarUsuario(){
    let nome = prompt("Digite o nome:");
    let email = prompt("Digite o email")
    let celular = parseInt(prompt("Digite o celular"))

    //Criar um objeto usuario a partir da classe
    let usuario = new Usuario (nome, email, celular)

    //Adicionar o objeto ao array
    usuarios.push(usuario)

    alert("Usuario adicionado com sucesso")
}

function mostrarUsuarios(){
    alert("Lista de usuarios");

    //Percorrer o array e mostrar as informações de cada usuario
    usuarios.forEach((usuario, index) => {
        alert(`Usuario ${index + 1}:\nNome: ${usuario.nome}\nEmail: ${usuario.email}\nCelular: ${usuario.celular}\n------------`)
    });
}

