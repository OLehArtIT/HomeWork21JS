const categoriesDiv = document.getElementById('categories');
const productsDiv = document.getElementById('products');
const productDetailsDiv = document.getElementById('product-details');

const categories = ['Электроника', 'Игры', 'Программы'];
const productsData = {
  'Электроника': ['Смартфон', 'Ноутбук'],
  'Игры': ['Metro 2033', 'TheLegendOfZelda'],
  'Программы': ['VsCode', 'Figma']
};

function createElement(tag, className) {
  const element = document.createElement(tag);
  if (className) {
    element.classList.add(className);
  }
  return element;
}

function showCategories() {
  categoriesDiv.innerHTML = '';
  const categoriesList = createElement('ul', 'category-list');
  categories.forEach(category => {
    const categoryItem = createElement('li');
    const categoryLink = createElement('a');
    categoryLink.textContent = category;
    categoryLink.href = '#';
    categoryLink.addEventListener('click', () => showProducts(category));
    categoryItem.appendChild(categoryLink);
    categoriesList.appendChild(categoryItem);
  });
  categoriesDiv.appendChild(categoriesList);
  productsDiv.innerHTML = '';
  productDetailsDiv.innerHTML = '';
}

function showProducts(category) {
  productsDiv.innerHTML = '';
  const productsList = createElement('ul', 'product-list');
  productsData[category].forEach(product => {
    const productItem = createElement('li');
    const productLink = createElement('a');
    productLink.textContent = product;
    productLink.href = '#';
    productLink.addEventListener('click', () => showProductDetails(product));
    productItem.appendChild(productLink);
    productsList.appendChild(productItem);
  });
  productsDiv.appendChild(productsList);
  productDetailsDiv.innerHTML = '';
}

function showProductDetails(product) {
  productDetailsDiv.innerHTML = `
    <h2>${product}</h2>
    <p>Описание</p>
    <button id="buy-button">Купить</button>
  `;
  const buyButton = document.getElementById('buy-button');
  buyButton.addEventListener('click', () => buyProduct(product));
}

function buyProduct(product) {
  const messageText = document.getElementById('message-text');
  messageText.textContent = `Товар "${product}" куплен!`;
  const modal = document.getElementById('message-window');
  modal.style.display = 'flex';
  setTimeout(() => {
    modal.style.display = 'none';
    showCategories();
  }, 2000);
  productDetailsDiv.innerHTML = '';
}

showCategories();