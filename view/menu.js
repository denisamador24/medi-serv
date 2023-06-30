
const mainPharmacy = document.querySelector('.menu #li-main-pharmacy');
const otherPharmacy = document.querySelector('.menu #li-other-pharmacy');
const infoMainPharmacy = document.querySelector('.aside-menu .menu__list ul li label img');
const mainPharmacyArticle = document.querySelector('.info-main-pharmacy');
const mainPharmacyArticleClose = document.querySelector('.info-main-pharmacy .close');

mainPharmacy.addEventListener('click', () => {
  location.hash = '';
});

otherPharmacy.addEventListener('click', () => {
  location.hash = 'farmacias';
});

infoMainPharmacy.addEventListener('click', () => {
  mainPharmacyArticle.classList.remove('hide');
});

mainPharmacyArticleClose.addEventListener('click', () => {
  mainPharmacyArticle.classList.add('hide');
})