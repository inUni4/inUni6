const firstBtn = document.querySelector('#firstButton');
const secondBtn = document.querySelector('#secondButton');
const thirdBtn = document.querySelector('#thirdButton');
const forthBtn = document.querySelector('#forthButton');
const infoText = document.querySelector('.info');

firstBtn.addEventListener('click', () => {
  infoText.textContent = "This website was created to provide endless opportunities to the youth of South Africa.";
});
secondBtn.addEventListener('click', () => {
  infoText.textContent = "With the course calculator we are glad to say that you can check which courses you qualify for in multiple universities.";
});
thirdBtn.addEventListener('click', () => {
  infoText.textContent = "Our goal is to empower and improve the lives of the South African youth, by giving them access to multiple opportunities";
});
forthBtn.addEventListener('click', () => {
  infoText.textContent = "If you observe any errors within the website be sure to contact us as soon as possible.";
});
