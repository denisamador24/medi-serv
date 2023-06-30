let globalProductDetail_noRepeat = true;

const carProducts = [];

const addCarProduct = (product) => {
    carProducts.push(product);
    refreshCarCount(totalProducts());
    refreshCarListproducts()
  
}

const removeCarProduct = (product) => {
  const productIndex = carProducts.findIndex((it) => it.name === product.name);
  
  if (productIndex != undefined) {
    if (productIndex == 0) {
      carProducts.shift();
    } else if (productIndex == totalProducts()) {
      carProducts.pop();
    } else {
      carProducts.splice(productIndex, productIndex);
    }
    
    refreshCarCount(totalProducts());
    refreshCarListproducts();
  }
}

const therIsSameProduct = (product) => {
  const sameProduct = carProducts.find((it) => {
    const name = product.name;
    const is = it.name === name
    return is;
  });
  
  if (sameProduct === undefined){
    return false;
  } else {
    return true;
  }

}

const totalProducts = () => {
  return carProducts.length;
}

const priceEnvioProduct = () => {
  if (carProductsSection_inputLosAnegesYEsquipulas.checked) {
    return 25;

  } else if (carProductsSection_inputMoyogalaYSanJose.checked) {
    return 50;

  } else if (carProductsSection_inputLaflor.checked) {
    return 120;

  } else {
    return 0;
  }
}

const totalPriceProducts = () => {
  const total = carProducts.reduce((total, product) => {
    const price = product.price;
    total += price;
    
    return total
  }, 0);

  return total;
}

const totalToPay = () => {
  const totalProduct = totalPriceProducts();
  const totalEnvio = priceEnvioProduct();
  const total = totalProduct + totalEnvio;

  return total;
}