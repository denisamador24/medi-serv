const productDetailsSection = document.querySelector('.product-details');
const proddctName = document.querySelector('.product-details .card__name');
const proddctImage = document.querySelector('.product-details .card__image');
const proddctPrice = document.querySelector('.product-details .card__price');
const productDescription = document.querySelector('.product-details .card__description');
const productFloatPrice = document.querySelector('.product-details .float__price');
const proddctFloatAddCar = document.querySelector('.product-details .float__add-car');


const setInformationDOM = (product) => {

  proddctName.innerHTML = product.name;
  proddctImage.setAttribute('src', product.image);
  proddctPrice.innerHTML = product.price;
  productDescription.innerHTML = `<strong>${product.name}</strong>,  ${product.description}`;
  productFloatPrice.innerHTML = product.price.toString();

  if (!therIsSameProduct(product)) {
    proddctFloatAddCar.classList.remove('selected-button');
    proddctFloatAddCar.innerHTML = 'Añadir al carrito';
  } else {
    proddctFloatAddCar.classList.add('selected-button');
    proddctFloatAddCar.innerHTML = 'Añadido';
  }

  proddctFloatAddCar.addEventListener('click', () => {
    if (globalProductDetail_noRepeat) {
      
      if (!therIsSameProduct(globalDetailProduct)) {
        addCarProduct(globalDetailProduct)
        proddctFloatAddCar.classList.add('selected-button');
        proddctFloatAddCar.innerHTML = 'Añadido';
      } else {
        removeCarProduct(globalDetailProduct)
        proddctFloatAddCar.classList.remove('selected-button');
        proddctFloatAddCar.innerHTML = 'Añadir al carrito';
      }
      setProductsDOM(); 
      globalProductDetail_noRepeat = !globalProductDetail_noRepeat;
    }
  });

}
