// Variáveis para armazenar os dados dos produtos e o elemento HTML onde serão exibidos
let produtos = []; // Array vazio para armazenar os dados dos produtos
let endpoint = 'https://raw.githubusercontent.com/guilhermeonrails/api-frontend/main/produtos.json'; // URL da API onde estão os dados dos produtos
let elementoParaInserirProdutos = document.getElementById('produtos__lista'); // Seleciona o elemento HTML com o ID "produtos__lista" para inserir os produtos

// Chama a função assíncrona para buscar os produtos da API
buscarProdutosDaAPI();

// Função assíncrona para buscar os produtos da API
async function buscarProdutosDaAPI() {
    try {
        // Faz uma requisição para a API e aguarda a resposta
        let res = await fetch(endpoint);

        // Verifica se a requisição foi bem-sucedida (status 200)
        if (!res.ok) {
            throw new Error('Falha ao buscar produtos: ' + res.statusText);
        }

        // Converte a resposta da API para formato JSON e armazena os dados no array "produtos"
        produtos = await res.json();

        // Exibe os produtos na página
        exibirProdutos(produtos);
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
    }
}

// Função para exibir os produtos na página
function exibirProdutos(produtos) {
    // Itera sobre cada produto no array e cria um elemento HTML para cada um
    produtos.forEach(produto => {
        // Cria uma nova lista (li) para cada produto e adiciona as informações
        elementoParaInserirProdutos.innerHTML += `
      <li class="produtos__item">
        <div class="produtos__content">
          <img src="${produto.img}">
          <div class="produtos__informacoes">
            <h3>${produto.nome}</h3>
            <p>${produto.descricao}</p>
            <h4>R$ ${produto.valorComDesconto}<s>R$ ${produto.valorSemDesconto}</s></h4>
            <p>Frete GRÁTIS</p>
          </div>
        </div>
      </li>
    `;
    });
}