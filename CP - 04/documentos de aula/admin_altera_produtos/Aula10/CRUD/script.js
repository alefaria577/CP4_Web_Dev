// Seleciona os elementos do DOM que serão manipulados
const btnCriar = document.querySelector("#btnCriar");
const listaFilmes = document.querySelector('#listaFilmes');
const inputUsuario = document.querySelector('#inputUsuario');
const inputAno = document.querySelector('#inputAno');
const inputDiretor = document.querySelector('#inputDiretor');

// Array para armazenar os dados dos filmes
const filmes = [
    {
        nome: "Vingadores: Ultimato",
        ano: 2019,
        diretor: "Anthony Russo, Joe Russo"
    },
    // ... outros filmes
];

// Chama a função para atualizar a lista na tela
renderizarNaTela();

// Adiciona um ouvinte de evento ao botão "btnCriar"
// Quando o botão é clicado, a função "criarFilme" é chamada
btnCriar.addEventListener('click', function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário (recarregar a página)
    criarFilme();
});

// Cria um novo objeto "filme" com os dados do formulário
// e adiciona esse objeto no início do array "filmes"
function criarFilme() {
    const novoFilme = {
        nome: inputUsuario.value, // Obtém o valor do campo de nome
        ano: inputAno.value, // Obtém o valor do campo de ano
        diretor: inputDiretor.value // Obtém o valor do campo de diretor
    };
    filmes.unshift(novoFilme); // Adiciona o novo filme no início do array

    // Chama a função para atualizar a lista na tela
    renderizarNaTela();
}

// Renderiza a lista de filmes na tela, criando elementos li para cada filme
function renderizarNaTela() {
    listaFilmes.innerHTML = ""; // Limpa a lista antes de adicionar os novos filmes

    // forEach: Um método que executa uma função para cada elemento de um array
    // Percorre o array de filmes e cria um elemento li para cada um
    filmes.forEach(filme => {
        const novoFilme = document.createElement('li');
        // Cria o conteúdo HTML para cada filme
        novoFilme.innerHTML = `
            <h1>${filme.nome}</h1>
            <p>${filme.ano}</p>
            <h3>${filme.diretor}</h3>
            <button onclick="editarFilme(${filmes.indexOf(filme)})">Editar</button>
            <button onclick="apagarFilme(${filmes.indexOf(filme)})">Apagar</button>
        `;
        listaFilmes.appendChild(novoFilme); // Adiciona o elemento li à lista
    });
}

// Edita o nome de um filme específico
function editarFilme(idFilme) {
    // Obtém o novo nome do usuário e atualiza o filme no array
    const novoNome = prompt('Digite o novo nome:', filmes[idFilme].nome);
    filmes[idFilme].nome = novoNome;

    // Atualiza a lista na tela
    renderizarNaTela();
}

// Apaga um filme específico
function apagarFilme(idFilme) {
    // Remove um elemento do array a partir do índice especificado
    filmes.splice(idFilme, 1); // splice(índice, quantidade)

    // Atualiza a lista na tela
    renderizarNaTela();
}