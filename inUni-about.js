const firstBtn = document.querySelector('#firstButton');
const secondBtn = document.querySelector('#secondButton');
const thirdBtn = document.querySelector('#thirdButton');
const forthBtn = document.querySelector('#forthButton');
const infoText = document.querySelector('.info');

firstBtn.addEventListener('click', () => {
  infoText.textContent = "This website was created to help students around the world juggle life, school and home chores without the stress of university applications.";
});
secondBtn.addEventListener('click', () => {
  infoText.textContent = "With the course calculator we are gla to say thar we reduce the amount of time spent on university applications by 90%, whereas you do not even have to do much but matriculate with the most excellent results and make your parents proud with no distraction.";
});
thirdBtn.addEventListener('click', () => {
  infoText.textContent = "There's also a chance for the user to win 1GB of data for free once they register.";
});
forthBtn.addEventListener('click', () => {
  infoText.textContent = "If you observe any errors within the website be sure to contact us as soon as possible..";
});