document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    loadCart();
    updateCart();
});

const adminUsername = "admin";
const adminPassword = "senha123";

document.getElementById('registerForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    alert('Usuário registrado com sucesso!');
});

document.getElementById('loginForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (email === storedEmail && password === storedPassword) {
        alert('Login bem-sucedido!');
        window.location.href = "loja.html";
    } else {
        alert('Email ou senha incorretos.');
    }
});

function showSpinner() {
    document.getElementById('spinner').style.display = 'block';
}

function hideSpinner() {
    document.getElementById('spinner').style.display = 'none';
}

const cart = JSON.parse(localStorage.getItem('cart')) || [];
let products = [];  // Declaração global de produtos

function updateCart() {
    const cartContainer = document.getElementById('cart-container');
    if (!cartContainer) return;
    cartContainer.innerHTML = '';

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.textContent = `${item.name} - R$ ${item.price}`;
        cartContainer.appendChild(cartItem);
    });

    localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(productId) {
    const product = getProductById(productId);
    cart.push(product);
    updateCart();
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const productId = e.target.dataset.productId;
        addToCart(productId);
    });
});

document.getElementById('filterForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const category = document.getElementById('filterCategory').value;
    const maxPrice = document.getElementById('filterPrice').value;

    const filteredProducts = products.filter(product => {
        return (category === 'all' || product.category === category) &&
            (!maxPrice || product.price <= maxPrice);
    });

    displayProducts(filteredProducts);
});

async function loadProducts() {
    try {
        const response = await fetch('./assets/produtos.json');
        products = await response.json();  // Carregar produtos na variável global
        displayProducts(products);
    } catch (error) {
        console.error('Erro ao carregar os produtos:', error);
    }
}

function displayProducts(products) {
    const container = document.querySelector('.container-cards');
    container.innerHTML = '';

    products.forEach(product => {
        const productCard = `
            <div class="box-card">
                <figure class="box-img">
                    <img src="${product.image}" alt="${product.name}">
                </figure>
                <div class="box-info">
                    <h3>${product.name}</h3>
                    <div class="price">
                        <span id="priceThrough">R$${(product.price * 2).toFixed(2)}</span>
                        <strong>R$${product.price.toFixed(2)}</strong>
                    </div>
                    <p>${product.description}</p>
                    <button class="add-to-cart" data-product-id="${product.id}">Adicionar ao Carrinho</button>
                </div>
            </div>
        `;
        container.innerHTML += productCard;
    });
}

function checkout() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) resolve('Pedido realizado com sucesso!');
            else reject('Falha ao realizar o pedido.');
        }, 2000);
    });
}

document.getElementById('checkoutButton')?.addEventListener('click', async () => {
    try {
        const message = await checkout();
        alert(message);
    } catch (error) {
        alert(error);
    }
});
