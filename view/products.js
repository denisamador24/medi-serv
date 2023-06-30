const productSection = document.querySelector('.products');
const productSection_container = document.querySelector('.products__container');
let globalDetailProduct;

const setProductsDOM = () => {

  productSection_container.innerHTML = '';
  
  getProducts().forEach((product) => {
    const productContent = document.createElement('article');
    productContent.classList.add('card');
    const content = document.createElement('div');
    const addCar = document.createElement('button');
    addCar.classList.add('card__add-product');
    addCar.classList.add('primary-button');

    const image = document.createElement('img');
    image.classList.add('card__image');
    const name = document.createElement('p');
    name.classList.add('card__name');
    const price = document.createElement('p');
    price.classList.add('card__price');
    addCar.innerText = 'Añadir al carrito';
    content.addEventListener('click', () => {
      setInformationDOM(product);
      globalDetailProduct = product;
      globalProductDetail_noRepeat = true;
      location.hash = 'detalles';
    });
    addCar.addEventListener('click', () => {
      if (! therIsSameProduct(product)) {
        addCarProduct(product);
        addCar.classList.add('selected-button');
        addCar.innerHTML = 'Añadido';
      } else {
        removeCarProduct(product);
        addCar.classList.remove('selected-button');
        addCar.innerHTML = 'Añadir al carrito';
      }
    });

    if (! therIsSameProduct(product)) {
      addCar.classList.remove('selected-button');
      addCar.innerHTML = 'Añadir al carrito';
    } else {
      addCar.classList.add('selected-button');
      addCar.innerHTML = 'Añadido';
    }

    image.src = product.image;
    image.setAttribute('alt', 'imagen del producto');
    name.innerText = product.name;
    price.innerText = product.price.toString();

    content.appendChild(image);
    content.appendChild(name);
    content.appendChild(price);
    productContent.appendChild(content);
    productContent.appendChild(addCar);
    productSection_container.appendChild(productContent)
  });

}