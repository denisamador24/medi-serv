const header_carCount = document.querySelector('.header__container .car__count');
const header__car = document.querySelector('.header__container .car');

const refreshCarCount = (total) => {
  header_carCount.innerHTML = total.toString();
  globalProductDetail_noRepeat = true;
}

header__car.addEventListener('click', () => {
  location.hash = 'carrito';
});
