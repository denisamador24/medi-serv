
window.addEventListener('hashchange', () => {
  navigation();
});

const navigation = () => {
  const hash = location.hash;
  hideAllSections();

  if (hash === '#detalles'){
    productDetailsSection.classList.remove('hide');

  } else if ( hash === '#carrito'){
    carProductsSection.classList.remove('hide');

  } else if (hash === '#farmacias'){
    pharmaciesSection.classList.remove('hide');

  } else {
    productSection.classList.remove('hide');
  }
}

const hideAllSections = () => {
  productSection.classList.add('hide');
  productDetailsSection.classList.add('hide');
  carProductsSection.classList.add('hide');
  pharmaciesSection.classList.add('hide');
}

location.hash = '';