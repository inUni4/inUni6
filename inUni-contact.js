const firstBtn = document.querySelector('#firstButton');
const secondBtn = document.querySelector('#secondButton');
const infoText = document.querySelector('.info');

firstBtn.addEventListener('click', () => {
  infoText.textContent = `For any enquiries about the website be sure to WhatsApp us at "+27711028429".`;
});
secondBtn.addEventListener('click', () => {
  infoText.textContent = `Or you can email us at inuni231@gmail.com`;
});