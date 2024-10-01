const heyWrapper = document.querySelector('.hey');
const subjectBtn = document.querySelector('.subject-button');
const sepediCheck = document.querySelector('.sepedi-check');
const siswatiCheck = document.querySelector('.siswati-check');
const zuluCheck = document.querySelector('.zulu-check');
const sothoCheck = document.querySelector('.sotho-check');
const tsongaCheck = document.querySelector('.tsonga-check');
const tswanaCheck = document.querySelector('.tswana-check');
const xhosaCheck = document.querySelector('.xhosa-check');
const ndebeleCheck = document.querySelector('.ndebele-check');
const vendaCheck = document.querySelector('.venda-check');
const englishfalCheck = document.querySelector('.english-fal-check');
const englishhlCheck = document.querySelector('.english-hl-check');
const mathsCheck = document.querySelector('.maths-check');
const mathslitCheck = document.querySelector('.maths-lit-check');
const loCheck = document.querySelector('.lo-check');
const agricultureCheck = document.querySelector('.agriculture-check');
const lsCheck = document.querySelector('.ls-check');
const physicsCheck = document.querySelector('.physics-check');
const computerCheck = document.querySelector('.computer-check');
const itCheck = document.querySelector('.it-check');
const accountingCheck = document.querySelector('.accounting-check');
const businessCheck = document.querySelector('.business-check');
const consumerCheck = document.querySelector('.consumer-check');
const hospitalityCheck = document.querySelector('.hospitality-check');
const economicsCheck = document.querySelector('.economics-check');
const tourismCheck = document.querySelector('.tourism-check');
const historyCheck = document.querySelector('.history-check');
const religionCheck = document.querySelector('.religion-check');
const geographyCheck = document.querySelector('.geography-check');
const musicCheck = document.querySelector('.music-check');
const visualCheck = document.querySelector('.visual-check');
const dramaCheck = document.querySelector('.drama-check');
const civilCheck = document.querySelector('.civil-check');
const mechanicalCheck = document.querySelector('.mechanical-check');
const electricalCheck = document.querySelector('.electrical-check');
const engineeringCheck = document.querySelector('.engineering-check');
const afrikaansCheck = document.querySelector('.afrikaans-check');
const plainInput = document.querySelector('.plain-input');
const superiorWrapper = document.querySelector('.superior-wrapper');
const doneBtn = document.querySelector('.done-button');
const blackScreen = document.querySelector('.black');
const subjectPercentages = document.querySelector('.subject-percentages');
const calculateBtn = document.querySelector('.calculate-button');
const sepediInput = document.querySelector('.sepedi-input');
const siswatiInput = document.querySelector('.siswati-input');
const zuluInput = document.querySelector('.zulu-input');
const sothoInput = document.querySelector('.sotho-input');
const tsongaInput = document.querySelector('.tsonga-input');
const tswanaInput = document.querySelector('.tswana-input');
const xhosaInput = document.querySelector('.xhosa-input');
const ndebeleInput = document.querySelector('.ndebele-input');
const vendaInput = document.querySelector('.venda-input');
const englishfalInput = document.querySelector('.english-fal-input');
const englishhlInput = document.querySelector('.english-hl-input');
const mathsInput = document.querySelector('.maths-input');
const mathslitInput = document.querySelector('.maths-lit-input');
const agricultureInput = document.querySelector('.agriculture-input');
const lsInput = document.querySelector('.ls-input');
const physicsInput = document.querySelector('.physics-input');
const computerInput = document.querySelector('.computer-input');
const itInput = document.querySelector('.it-input');
const accountingInput = document.querySelector('.accounting-input');
const businessInput = document.querySelector('.business-input');
const consumerInput = document.querySelector('.consumer-input');
const hospitalityInput = document.querySelector('.hospitality-input');
const economicsInput = document.querySelector('.economics-input');
const tourismInput = document.querySelector('.tourism-input');
const historyInput = document.querySelector('.history-input');
const religionInput = document.querySelector('.religion-input');
const geographyInput = document.querySelector('.geography-input');
const musicInput = document.querySelector('.music-input');
const visualInput = document.querySelector('.visual-input');
const dramaInput = document.querySelector('.drama-input');
const civilInput = document.querySelector('.civil-input');
const mechanicalInput = document.querySelector('.mechanical-input');
const electricalInput = document.querySelector('.electrical-input');
const engineeringInput = document.querySelector('.engineer-input');
const loInput = document.querySelector('.lo-input');
const afrikaansInput = document.querySelector('.afrikaans-input');
const apsInput = document.querySelector('.aps-input');
const totalCourses = document.querySelector('.total-courses');

//spu-course-calculator-accounting

//spu-course-calculator-business

//spu-course-calculator-economics

let aps25Accounting = ["Diploma in Retail Business Management"];

let aps30Accounting = ["Bachelor of Commerce in Accounting"];

let aps30PhysicsandAccounting = ["Bachelor of Education - Senior Phase Teaching (Grade 7 - 9) and FET Phase (Grade 10 - 12)"];

//spu-course-calculator-agriculture

let aps25PhysicsandLs = ["Diploma in Agriculture"];

//spu-course-calculator-english-math

//spu-course-calculator-english-mathslit

let aps25EnglishMaths30 = ["Higher Certificate in Heritage Studies"];

let aps30EnglishMaths30 = ["Bachelor of Arts"];

let aps25EnglishMaths40 = ["Diploma in Information & Communication Technology in Applications Development"];

let aps30EnglishMaths40 = ["Bachelor of Education - Foundation Phase Teaching (Grade R - 3)", "Bachelor of Commerce in Economics"];

let aps30EnglishMaths60 = ["Bachelor of Science in Degree in Data Science"];

//spu-course-calculator-english

let aps25JustEnglish = ["Higher Certificate in Court Interpreting (*Additional Language 60%)"];

//spu-course-calculator-lifescience-maths

let aps30PhysicsorLs = ["Bachelor of Education - Intermediate Phase Teaching  (Grade 4 - 6)"];

//spu-course-calculator-physics-english-maths

let aps30PhysicsandLs = ["Bachelor of Science"];

subjectBtn.addEventListener('click', () => {
  alert('Please click the checkboxes to add percentages of results.')
});
doneBtn.addEventListener('click', () => {
  heyWrapper.classList.add('hide');
  blackScreen.classList.remove('hide');
  subjectPercentages.classList.remove('hide');


//spu-course-calculator-accounting

if(englishfalInput.value >= 60 && mathsInput.value >= 40 && accountingInput.value >= 50 &&  apsInput.value > 24){
  for(let i = 0; i < aps25Accounting.length; i++) {
    plainInput.innerHTML += `<li> ${aps25Accounting[i]} </li>`;
  };
}

if(englishfalInput.value >= 60 && mathsInput.value >= 40 && accountingInput.value >= 40 &&  apsInput.value > 29){
  for(let i = 0; i < aps30Accounting.length; i++) {
    plainInput.innerHTML += `<li> ${aps30Accounting[i]} </li>`;
  };
}

if(englishfalInput.value >= 60 && mathslitInput.value >= 60 && accountingInput.value >= 50 &&  apsInput.value > 24){
  for(let i = 0; i < aps25Accounting.length; i++) {
    plainInput.innerHTML += `<li> ${aps25Accounting[i]} </li>`;
  };
}

if(englishfalInput.value >= 60 && mathsInput.value >= 50 && physicsInput.value >= 50 && accountingInput.value >= 50 &&  apsInput.value > 24){
  for(let i = 0; i < aps30PhysicsandAccounting.length; i++) {
    plainInput.innerHTML += `<li> ${aps30PhysicsandAccounting[i]} </li>`;
  };
}

if(englishfalInput.value >= 60 && mathsInput.value >= 50 && lsInput.value >= 50 && accountingInput.value >= 50 &&  apsInput.value > 24){
  for(let i = 0; i < aps30PhysicsandAccounting.length; i++) {
    plainInput.innerHTML += `<li> ${aps30PhysicsandAccounting[i]} </li>`;
  };
}

/englishhl/

if(englishhlInput.value >= 60 && mathsInput.value >= 40 && accountingInput.value >= 50 &&  apsInput.value > 24){
  for(let i = 0; i < aps25Accounting.length; i++) {
    plainInput.innerHTML += `<li> ${aps25Accounting[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathsInput.value >= 40 && accountingInput.value >= 40 &&  apsInput.value > 29){
  for(let i = 0; i < aps30Accounting.length; i++) {
    plainInput.innerHTML += `<li> ${aps30Accounting[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 60 && accountingInput.value >= 50 &&  apsInput.value > 24){
  for(let i = 0; i < aps25Accounting.length; i++) {
    plainInput.innerHTML += `<li> ${aps25Accounting[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathsInput.value >= 50 && physicsInput.value >= 50 && accountingInput.value >= 50 &&  apsInput.value > 24){
  for(let i = 0; i < aps30PhysicsandAccounting.length; i++) {
    plainInput.innerHTML += `<li> ${aps30PhysicsandAccounting[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathsInput.value >= 50 && lsInput.value >= 50 && accountingInput.value >= 50 &&  apsInput.value > 24){
  for(let i = 0; i < aps30PhysicsandAccounting.length; i++) {
    plainInput.innerHTML += `<li> ${aps30PhysicsandAccounting[i]} </li>`;
  };
}

//spu-course-calculator-agriculture

if(englishfalInput.value >= 60 && physicsInput.value >= 40  && mathsInput.value >= 40 && agricultureInput.value >= 40 && apsInput.value > 24){
  for(let i = 0; i < aps25PhysicsandLs.length; i++) {
    plainInput.innerHTML += `<li> ${aps25PhysicsandLs[i]} </li>`;
  };
}

if(englishfalInput.value >= 60 && physicsInput.value >= 40  && mathslitInput.value >= 60 && agricultureInput.value >= 40 && apsInput.value > 24){
  for(let i = 0; i < aps25PhysicsandLs.length; i++) {
    plainInput.innerHTML += `<li> ${aps25PhysicsandLs[i]} </li>`;
  };
}

/englishhl/

if(englishhlInput.value >= 50 && physicsInput.value >= 40  && mathsInput.value >= 40 && agricultureInput.value >= 40 && apsInput.value > 24){
  for(let i = 0; i < aps25PhysicsandLs.length; i++) {
    plainInput.innerHTML += `<li> ${aps25PhysicsandLs[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && physicsInput.value >= 40  && mathslitInput.value >= 60 && agricultureInput.value >= 40 && apsInput.value > 24){
  for(let i = 0; i < aps25PhysicsandLs.length; i++) {
    plainInput.innerHTML += `<li> ${aps25PhysicsandLs[i]} </li>`;
  };
}

//spu-course-calculator-business

if(englishfalInput.value >= 60 && mathsInput.value >= 40 && businessInput.value >= 50 &&  apsInput.value > 24){
  for(let i = 0; i < aps25Accounting.length; i++) {
    plainInput.innerHTML += `<li> ${aps25Accounting[i]} </li>`;
  };
}

if(englishfalInput.value >= 60 && mathslitInput.value >= 60 && businessInput.value >= 50 &&  apsInput.value > 24){
  for(let i = 0; i < aps25Accounting.length; i++) {
    plainInput.innerHTML += `<li> ${aps25Accounting[i]} </li>`;
  };
}

/englishhl/

if(englishhlInput.value >= 50 && mathsInput.value >= 40 && businessInput.value >= 50 &&  apsInput.value > 24){
  for(let i = 0; i < aps25Accounting.length; i++) {
    plainInput.innerHTML += `<li> ${aps25Accounting[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 60 && businessInput.value >= 50 &&  apsInput.value > 24){
  for(let i = 0; i < aps25Accounting.length; i++) {
    plainInput.innerHTML += `<li> ${aps25Accounting[i]} </li>`;
  };
}

//spu-course-calculator-economics

if(englishfalInput.value >= 60 && mathsInput.value >= 40 && economicsInput.value >= 50 &&  apsInput.value > 24){
  for(let i = 0; i < aps25Accounting.length; i++) {
    plainInput.innerHTML += `<li> ${aps25Accounting[i]} </li>`;
  };
}

if(englishfalInput.value >= 60 && mathslitInput.value >= 60 && economicsInput.value >= 50 &&  apsInput.value > 24){
  for(let i = 0; i < aps25Accounting.length; i++) {
    plainInput.innerHTML += `<li> ${aps25Accounting[i]} </li>`;
  };
}

/englishhl/

if(englishhlInput.value >= 50 && mathsInput.value >= 40 && economicsInput.value >= 50 &&  apsInput.value > 24){
  for(let i = 0; i < aps25Accounting.length; i++) {
    plainInput.innerHTML += `<li> ${aps25Accounting[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 60 && economicsInput.value >= 50 &&  apsInput.value > 24){
  for(let i = 0; i < aps25Accounting.length; i++) {
    plainInput.innerHTML += `<li> ${aps25Accounting[i]} </li>`;
  };
}

//spu-course-calculator-english-math

if(englishfalInput.value >= 60 && mathsInput.value >= 30 &&  apsInput.value > 24){
  for(let i = 0; i < aps25EnglishMaths30.length; i++) {
    plainInput.innerHTML += `<li> ${aps25EnglishMaths30[i]} </li>`;
  };
}

if(englishfalInput.value >= 60 && mathsInput.value >= 30 &&  apsInput.value > 29){
  for(let i = 0; i < aps30EnglishMaths30.length; i++) {
    plainInput.innerHTML += `<li> ${aps30EnglishMaths30[i]} </li>`;
  };
}

if(englishfalInput.value >= 60 && mathsInput.value >= 40 &&  apsInput.value > 24){
  for(let i = 0; i < aps25EnglishMaths40.length; i++) {
    plainInput.innerHTML += `<li> ${aps25EnglishMaths40[i]} </li>`;
  };
}

if(englishfalInput.value >= 60 && mathsInput.value >= 40 &&  apsInput.value > 29){
  for(let i = 0; i < aps30EnglishMaths40.length; i++) {
    plainInput.innerHTML += `<li> ${aps30EnglishMaths40[i]} </li>`;
  };
}

if(englishfalInput.value >= 60 && mathsInput.value >= 60 &&  apsInput.value > 29){
  for(let i = 0; i < aps30EnglishMaths60.length; i++) {
    plainInput.innerHTML += `<li> ${aps30EnglishMaths60[i]} </li>`;
  };
}

if(englishfalInput.value >= 60 && mathsInput.value >= 50 &&  apsInput.value > 29){
  for(let i = 0; i < aps30Accounting.length; i++) {
    plainInput.innerHTML += `<li> ${aps30Accounting[i]} </li>`;
  };
}

/englishhl/

if(englishhlInput.value >= 50 && mathsInput.value >= 30 &&  apsInput.value > 24){
  for(let i = 0; i < aps25EnglishMaths30.length; i++) {
    plainInput.innerHTML += `<li> ${aps25EnglishMaths30[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathsInput.value >= 30 &&  apsInput.value > 29){
  for(let i = 0; i < aps30EnglishMaths30.length; i++) {
    plainInput.innerHTML += `<li> ${aps30EnglishMaths30[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathsInput.value >= 40 &&  apsInput.value > 24){
  for(let i = 0; i < aps25EnglishMaths40.length; i++) {
    plainInput.innerHTML += `<li> ${aps25EnglishMaths40[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathsInput.value >= 40 &&  apsInput.value > 29){
  for(let i = 0; i < aps30EnglishMaths40.length; i++) {
    plainInput.innerHTML += `<li> ${aps30EnglishMaths40[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathsInput.value >= 60 &&  apsInput.value > 29){
  for(let i = 0; i < aps30EnglishMaths60.length; i++) {
    plainInput.innerHTML += `<li> ${aps30EnglishMaths60[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathsInput.value >= 50 &&  apsInput.value > 29){
  for(let i = 0; i < aps30Accounting.length; i++) {
    plainInput.innerHTML += `<li> ${aps30Accounting[i]} </li>`;
  };
}

//spu-course-calculator-english-mathslit

if(englishfalInput.value >= 60 && mathslitInput.value >= 40 &&  apsInput.value > 24){
  for(let i = 0; i < aps25EnglishMaths30.length; i++) {
    plainInput.innerHTML += `<li> ${aps25EnglishMaths30[i]} </li>`;
  };
}

if(englishfalInput.value >= 60 && mathslitInput.value >= 40 &&  apsInput.value > 29){
  for(let i = 0; i < aps30EnglishMaths30.length; i++) {
    plainInput.innerHTML += `<li> ${aps30EnglishMaths30[i]} </li>`;
  };
}

if(englishfalInput.value >= 60 && mathslitInput.value >= 60 &&  apsInput.value > 24){
  for(let i = 0; i < aps25EnglishMaths40.length; i++) {
    plainInput.innerHTML += `<li> ${aps25EnglishMaths40[i]} </li>`;
  };
}

if(englishfalInput.value >= 60 && mathslitInput.value >= 50 &&  apsInput.value > 29){
  for(let i = 0; i < aps30EnglishMaths40.length; i++) {
    plainInput.innerHTML += `<li> ${aps30EnglishMaths40[i]} </li>`;
  };
}

/englishhl/

if(englishhlInput.value >= 50 && mathslitInput.value >= 40 &&  apsInput.value > 24){
  for(let i = 0; i < aps25EnglishMaths30.length; i++) {
    plainInput.innerHTML += `<li> ${aps25EnglishMaths30[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 40 &&  apsInput.value > 29){
  for(let i = 0; i < aps30EnglishMaths30.length; i++) {
    plainInput.innerHTML += `<li> ${aps30EnglishMaths30[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 60 &&  apsInput.value > 24){
  for(let i = 0; i < aps25EnglishMaths40.length; i++) {
    plainInput.innerHTML += `<li> ${aps25EnglishMaths40[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 50 &&  apsInput.value > 29){
  for(let i = 0; i < aps30EnglishMaths40.length; i++) {
    plainInput.innerHTML += `<li> ${aps30EnglishMaths40[i]} </li>`;
  };
}

//spu-course-calculator-english

if(englishfalInput.value >= 60 && apsInput.value > 24){
  for(let i = 0; i < aps25JustEnglish.length; i++) {
    plainInput.innerHTML += `<li> ${aps25JustEnglish[i]} </li>`;
  };
}

/englishhl/

if(englishhlInput.value >= 50 && apsInput.value > 24){
  for(let i = 0; i < aps25JustEnglish.length; i++) {
    plainInput.innerHTML += `<li> ${aps25JustEnglish[i]} </li>`;
  };
}

//spu-course-calculator-lifescience-maths

if(englishfalInput.value >= 60 && lsInput.value >= 50  && mathsInput.value >= 50 && apsInput.value > 29){
  for(let i = 0; i < aps30PhysicsorLs.length; i++) {
    plainInput.innerHTML += `<li> ${aps30PhysicsorLs[i]} </li>`;
  };
}

/englishhl/

if(englishhlInput.value >= 50 && lsInput.value >= 50  && mathsInput.value >= 50 && apsInput.value > 29){
  for(let i = 0; i < aps30PhysicsorLs.length; i++) {
    plainInput.innerHTML += `<li> ${aps30PhysicsorLs[i]} </li>`;
  };
}

//spu-course-calculator-physics-english-maths

if(englishfalInput.value >= 60 && physicsInput.value >= 40  && mathsInput.value >= 40 && lsInput.value >= 40 && apsInput.value > 24){
  for(let i = 0; i < aps25PhysicsandLs.length; i++) {
    plainInput.innerHTML += `<li> ${aps25PhysicsandLs[i]} </li>`;
  };
}

if(englishfalInput.value >= 60 && physicsInput.value >= 40  && mathslitInput.value >= 60 && lsInput.value >= 40 && apsInput.value > 24){
  for(let i = 0; i < aps25PhysicsandLs.length; i++) {
    plainInput.innerHTML += `<li> ${aps25PhysicsandLs[i]} </li>`;
  };
}

if(englishfalInput.value >= 60 && physicsInput.value >= 50  && mathsInput.value >= 50 && lsInput.value >= 50 && apsInput.value > 29){
  for(let i = 0; i < aps30PhysicsandLs.length; i++) {
    plainInput.innerHTML += `<li> ${aps30PhysicsandLs[i]} </li>`;
  };
}

if(englishfalInput.value >= 60 && physicsInput.value >= 50  && mathsInput.value >= 50 && apsInput.value > 29){
  for(let i = 0; i < aps30PhysicsorLs.length; i++) {
    plainInput.innerHTML += `<li> ${aps30PhysicsorLs[i]} </li>`;
  };
}

/englishhl/

if(englishhlInput.value >= 50 && physicsInput.value >= 40  && mathsInput.value >= 40 && lsInput.value >= 40 && apsInput.value > 24){
  for(let i = 0; i < aps25PhysicsandLs.length; i++) {
    plainInput.innerHTML += `<li> ${aps25PhysicsandLs[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && physicsInput.value >= 40  && mathslitInput.value >= 60 && lsInput.value >= 40 && apsInput.value > 24){
  for(let i = 0; i < aps25PhysicsandLs.length; i++) {
    plainInput.innerHTML += `<li> ${aps25PhysicsandLs[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 50 && lsInput.value >= 50 && apsInput.value > 29){
  for(let i = 0; i < aps30PhysicsandLs.length; i++) {
    plainInput.innerHTML += `<li> ${aps30PhysicsandLs[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 50 && apsInput.value > 29){
  for(let i = 0; i < aps30PhysicsorLs.length; i++) {
    plainInput.innerHTML += `<li> ${aps30PhysicsorLs[i]} </li>`;
  };
}

if(plainInput.textContent === ""){
      
  plainInput.innerHTML += `Unfortunately your results currently do not meet the minimum requirements for any courses from this university, please consider upgrading your results.`;
}

  });


  sepediCheck.addEventListener('click', () => {
    sepediInput.classList.remove('hide');
  });
  siswatiCheck.addEventListener('click', () => {
    siswatiInput.classList.remove('hide');
  });
  zuluCheck.addEventListener('click', () => {
    zuluInput.classList.remove('hide');
  });
  sothoCheck.addEventListener('click', () => {
    sothoInput.classList.remove('hide');
  });
  tsongaCheck.addEventListener('click', () => {
    tsongaInput.classList.remove('hide');
  });
  tswanaCheck.addEventListener('click', () => {
    tswanaInput.classList.remove('hide');
  });
  xhosaCheck.addEventListener('click', () => {
    xhosaInput.classList.remove('hide');
  });
  ndebeleCheck.addEventListener('click', () => {
    ndebeleInput.classList.remove('hide');
  });
  vendaCheck.addEventListener('click', () => {
    vendaInput.classList.remove('hide');
  });
  englishfalCheck.addEventListener('click', () => {
    englishfalInput.classList.remove('hide');
  });
  englishhlCheck.addEventListener('click', () => {
    englishhlInput.classList.remove('hide');
  });
  mathsCheck.addEventListener('click', () => {
    mathsInput.classList.remove('hide');
  });
  mathslitCheck.addEventListener('click', () => {
    mathslitInput.classList.remove('hide');
  });
  agricultureCheck.addEventListener('click', () => {
    agricultureInput.classList.remove('hide');
  });
  lsCheck.addEventListener('click', () => {
    lsInput.classList.remove('hide');
  });
  physicsCheck.addEventListener('click', () => {
    physicsInput.classList.remove('hide');
  });
  computerCheck.addEventListener('click', () => {
    computerInput.classList.remove('hide');
  });
  itCheck.addEventListener('click', () => {
    itInput.classList.remove('hide');
  });
  accountingCheck.addEventListener('click', () => {
    accountingInput.classList.remove('hide');
  });
  businessCheck.addEventListener('click', () => {
    businessInput.classList.remove('hide');
  });
  consumerCheck.addEventListener('click', () => {
    consumerInput.classList.remove('hide');
  });
  hospitalityCheck.addEventListener('click', () => {
    hospitalityInput.classList.remove('hide');
  });
  economicsCheck.addEventListener('click', () => {
    economicsInput.classList.remove('hide');
  });
  tourismCheck.addEventListener('click', () => {
    tourismInput.classList.remove('hide');
  });
  historyCheck.addEventListener('click', () => {
    historyInput.classList.remove('hide');
  });
  religionCheck.addEventListener('click', () => {
    religionInput.classList.remove('hide');
  });
  geographyCheck.addEventListener('click', () => {
    geographyInput.classList.remove('hide');
  });
  musicCheck.addEventListener('click', () => {
    musicInput.classList.remove('hide');
  });
  visualCheck.addEventListener('click', () => {
    visualInput.classList.remove('hide');
  });
  dramaCheck.addEventListener('click', () => {
    dramaInput.classList.remove('hide');
  });
  civilCheck.addEventListener('click', () => {
    civilInput.classList.remove('hide');
  });
  mechanicalCheck.addEventListener('click', () => {
    mechanicalInput.classList.remove('hide');
  });
  electricalCheck.addEventListener('click', () => {
    electricalInput.classList.remove('hide');
  });
  engineeringCheck.addEventListener('click', () => {
    engineeringInput.classList.remove('hide');
  });
  loCheck.addEventListener('click', () => {
    loInput.classList.remove('hide');
  });
  afrikaansCheck.addEventListener('click', () => {
    afrikaansInput.classList.remove('hide');
  });


window.onload = () => {
  blackScreen.classList.add('hide');
  subjectPercentages.classList.add('hide');
  sepediInput.classList.add('hide');
  siswatiInput.classList.add('hide');
  zuluInput.classList.add('hide');
  sothoInput.classList.add('hide');
  tsongaInput.classList.add('hide');
  tswanaInput.classList.add('hide');
  xhosaInput.classList.add('hide');
  ndebeleInput.classList.add('hide');
  vendaInput.classList.add('hide');
  englishfalInput.classList.add('hide');
  englishhlInput.classList.add('hide');
  mathsInput.classList.add('hide');
  mathslitInput.classList.add('hide');
  loInput.classList.add('hide');
  agricultureInput.classList.add('hide');
  lsInput.classList.add('hide');
  physicsInput.classList.add('hide');
  computerInput.classList.add('hide');
  itInput.classList.add('hide');
  accountingInput.classList.add('hide');
  businessInput.classList.add('hide');
  consumerInput.classList.add('hide');
  hospitalityInput.classList.add('hide');
  economicsInput.classList.add('hide');
  tourismInput.classList.add('hide');
  historyInput.classList.add('hide');
  religionInput.classList.add('hide');
  geographyInput.classList.add('hide');
  musicInput.classList.add('hide');
  visualInput.classList.add('hide');
  dramaInput.classList.add('hide');
  civilInput.classList.add('hide');
  mechanicalInput.classList.add('hide');
  electricalInput.classList.add('hide');
  engineeringInput.classList.add('hide');
  afrikaansInput.classList.add('hide');
}