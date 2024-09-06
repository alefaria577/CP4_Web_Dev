// Seleciona o elemento HTML com o ID "lista" onde os posts serão inseridos
const lista = document.getElementById('lista');

// Faz uma requisição para a API para buscar os posts
fetch('https://jsonplaceholder.typicode.com/posts')
    // Trata a resposta da requisição como uma Promise
    .then((resp) => {
        // Verifica se a requisição foi bem-sucedida (código de status 200)
        if (!resp.ok) {
            throw new Error('Falha ao buscar posts: ' + resp.statusText);
        }
        // Converte a resposta para o formato JSON
        return resp.json();
    })
    // Processa os dados JSON
    .then((data) => {
        // Itera sobre cada post nos dados
        data.forEach((post) => {
            // Extrai o título e o corpo do post atual
            let titulo = post.title;
            let corpo = post.body;

            // Cria um novo elemento de lista (li)
            const li = document.createElement('li');

            // Constrói o conteúdo HTML para o item da lista com o título e o corpo
            li.innerHTML = "<h4>" + titulo + "</h4>" +
                "<p>" + corpo + "</p>";

            // Adiciona o item de lista recém-criado à lista
            lista.append(li);
        });
    })
    // Captura qualquer erro durante o processo
    .catch((error) => {
        console.error('Erro ao buscar ou processar posts:', error);
    });

// ###################################################

// Seleciona o elemento HTML com o ID "lista" onde os produtos serão inseridos
const lista2 = document.getElementById('lista');

// Faz uma requisição para o arquivo JSON local "data.json"
fetch('/data.json')
    // Trata a resposta da requisição como uma Promise
    .then((res) => {
        // Converte a resposta para o formato JSON
        return res.json();
    })
    // Processa os dados JSON
    .then((data) => {
        // Itera sobre cada produto nos dados
        data.forEach((produto) => {
            // Cria um novo elemento de lista (li)
            const li = document.createElement('li');

            // Constrói o conteúdo HTML para o item da lista com o nome, preço e código do produto
            li.innerHTML =
                "<h4>" + produto.nome + "</h4>" +
                "<p>Preço: " + produto.preco + "</p>" +
                "<p>Código: " + produto.id + "</p>" +
                "<hr>";

            // Adiciona o item de lista recém-criado à lista
            lista.append(li);
        });
    })
    // Captura qualquer erro durante o processo
    .catch((error) => {
        console.error('Erro ao buscar ou processar produtos:', error);
    });

// ####################################################################

// Função assíncrona para buscar e exibir posts
const solicitarPosts = async () => {

    // Faz uma requisição para a API e aguarda a resposta
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
  
    // Verifica se a requisição foi bem-sucedida (status 200)
    if (!resp.ok) {
      throw new Error('Falha ao buscar posts: ' + resp.statusText);
    }
    // Converte a resposta da API para o formato JSON e aguarda a conversão
    const data = await resp.json();
  
    // Itera sobre cada post nos dados JSON recebidos
    data.forEach((post) => {
      // Cria um novo elemento de lista (li)
      const li = document.createElement('li');
      // Constrói o conteúdo HTML para o item da lista com um título "Usando await"
      // seguido do título e corpo do post
      li.innerHTML = "<h2> Usando await </h2>" +
                     "<h4>" + post.title + "</h4>" +
                     "<p>" + post.body + "</p>";
      // Adiciona o item de lista recém-criado à lista HTML
      lista.append(li);
    });
  };
  // Chama a função assíncrona para iniciar o processo
  solicitarPosts();