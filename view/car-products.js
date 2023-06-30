const carProductsSection = document.querySelector('.car-section');
const carProductsSection_price1 = document.querySelector('.car-section .card__price');
const carProductsSection_buttonBuy = document.querySelector('.car-section .card__button');
const carProductsSection_buttonBuy2 = document.querySelector('.car-section .total button');
const carProductsSection_totalProducts = document.querySelector('.car-section .products__total-articles');
const carProductsSection_listProducts = document.querySelector('.car-section .products ul');
const carProductsSection_price2 = document.querySelector('.car-section .total__price');
const carProductsSection__total = document.querySelector('.car-section .total__price-total');

const carProductsSection_priceEnvio = document.querySelector('.envio-container .total__envio');
const carProductsSection_inputLaflor = document.querySelector('#envio-flor');
const carProductsSection_inputLosAnegesYEsquipulas = document.querySelector('#envio-angeles');
const carProductsSection_inputMoyogalaYSanJose = document.querySelector('#envio-moyogalpa');

carProductsSection_inputLaflor.addEventListener('input', () => refreshCarPrice());
carProductsSection_inputLosAnegesYEsquipulas.addEventListener('input', () => refreshCarPrice());
carProductsSection_inputMoyogalaYSanJose.addEventListener('input', () => refreshCarPrice());


const refreshCarPrice = () => {
  carProductsSection_price1.innerHTML = totalPriceProducts().toString();
  carProductsSection_price2.innerHTML = totalPriceProducts().toString();
  carProductsSection_totalProducts.innerText = totalProducts().toString();
  carProductsSection_priceEnvio.innerHTML = priceEnvioProduct().toString();
  carProductsSection__total.innerText = totalToPay().toString();
}

const refreshCarListproducts = () => {
  refreshCarPrice();

  carProductsSection_listProducts.innerHTML = ''
  carProducts.forEach((product) => {

    // Crear Elementos
    const productItemLi = document.createElement('li');
    const productItemContent = document.createElement('div');

    const productImageContent = document.createElement('div');
    const productImage = document.createElement('img');
    const productName = document.createElement('p');
    const productRemoveProduct = document.createElement('div');
    const productRemoveProductImage = document.createElement('img');
    const productPrice = document.createElement('p');

    // Agregar datos
    productImage.src = product.image;
    productName.innerText = product.name;
    productRemoveProductImage.src = './assets/icon/close.png';
    productPrice.innerText = product.price;

    // Agregar clases
    productImageContent.classList.add('products__img');
    productName.classList.add('products__name');
    productRemoveProduct.classList.add('products__close');
    productPrice.classList.add('products__price');

    // Eventos 
    productRemoveProduct.addEventListener('click', () => {
      removeCarProduct(product);
    });

    // Empaquetar elementos
    productImageContent.appendChild(productImage);
    productRemoveProduct.appendChild(productRemoveProductImage);

    productItemContent.appendChild(productImageContent);
    productItemContent.appendChild(productName);
    productItemContent.appendChild(productRemoveProduct);
    productItemContent.appendChild(productPrice);

    productItemLi.appendChild(productItemContent);

    carProductsSection_listProducts.appendChild(productItemLi);
  });

  setProductsDOM();
}

const sendMessageListProducts = () => {
  const listProducts = carProducts.map((it, index) => {
    return `  *_${index + 1}. ${it.name}_*`;
  }).join(`%0A`);

  location.href = `https://api.whatsapp.com/send?phone=84880646&text=Hola.
     %0AQuisiera comprar los siguientes productos: %0A %0A${listProducts}
     %0A %0A
     Con dirección de: `;
}

carProductsSection_buttonBuy.addEventListener('click', () => {
  if (totalProducts() > 0  && priceEnvioProduct() > 0)
    sendMessageListProducts();
})

carProductsSection_buttonBuy2.addEventListener('click', () => {
  if (totalProducts() > 0 && priceEnvioProduct() > 0)
    sendMessageListProducts();
});