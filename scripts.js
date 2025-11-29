document.addEventListener('DOMContentLoaded', () => {
  const btnLinks = document.getElementById('btn-links');
  const btnShop = document.getElementById('btn-shop');
  const linksSection = document.getElementById('links-section');
  const shopSection = document.getElementById('shop-section');

  function showLinks() {
    linksSection.classList.remove('hidden');
    shopSection.classList.add('hidden');
    btnLinks.classList.add('active');
    btnShop.classList.remove('active');
  }

  function showShop() {
    linksSection.classList.add('hidden');
    shopSection.classList.remove('hidden');
    btnLinks.classList.remove('active');
    btnShop.classList.add('active');
  }

  btnLinks.addEventListener('click', showLinks);
  btnShop.addEventListener('click', showShop);
});
