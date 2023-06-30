
const products = []; 

const addProduct = (product) => {

  if (! product.freeSale == null)
    product.freeSale = true;
  
  products.push(product);
}

const getProducts = () => {
  return products;
}

const imgSrc = (name) => {
  return `./assets/img/${name}.png`;
}
