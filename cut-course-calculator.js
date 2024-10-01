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

//cut-course calculator-english-maths

let aps27maths40 = ["Computer Networking", "Information Technology"];

let aps27Accounting = ["Accounting", "Internal Auditing"];

let aps27maths50 = ["Teacher Education : Technology", "Teacher Education : Computer Science (*Accounting 70%)", "Teacher Education : Economic & Management Sciences (*Accounting 70%)"];

let aps27Hospitality = ["Hospitality Management"];

//cut-course-calculator-english-mathlit

let aps27Mathslit = ["Computer Networking", "Information Technology"];

let aps27Mathslit50 = ["Teacher Education Technology"];

let aps27Mathslit50agr = ["Agricultural Management (*Languages 50%)"];

let aps27MathslitAccounting = ["Teacher Education : Computer Science", "Teacher Education : Economic & Management Sciences"];

let aps27Mathslit60Accounting = ["Accounting", "Internal Auditing"];

//cut-course-calculator-english

let aps27EnglishandLo = ["Design and Studio Art", "Teacher Education : Languages (*Languages 50%)", "Human Resource Management", "Marketing", "Office Management & Technology", "Public Management"];

let aps27NoLo = ["Community Development Work"];

let aps28NoLo = ["Tourism Management"];

let aps27English60andLo = ["Language Practise & Media Studies (*Languages 60%)"];

//cut-course-calculator-englishhl-mathlit

let aps27Mathslithl = ["Computer Networking", "Information Technology"];

let aps27Mathslit50hl = ["Teacher Education Technology"];

let aps27Mathslit50agrhl = ["Agricultural Management (*Languages 50%)"];

let aps27MathslitAccountinghl = ["Teacher Education : Computer Science", "Teacher Education : Economic & Management Sciences"];

let aps27Mathslit60Accountinghl = ["Accounting", "Internal Auditing"];

//cut-course-calculator-englishhl-maths

let aps27maths40hl = ["Computer Networking", "Information Technology"];

let aps27Accountinghl = ["Accounting", "Internal Auditing"];

let aps27maths50hl = ["Teacher Education : Technology", "Teacher Education : Computer Science (*Accounting 70%)", "Teacher Education : Economic & Management Sciences (*Accounting 70%)"];

let aps27Hospitalityhl = ["Hospitality Management"];

//cut-course-calculator-englishhl

let aps27EnglishandLohl = ["Design and Studio Art", "Teacher Education : Languages (*Languages 50%)", "Human Resource Management", "Marketing", "Office Management & Technology", "Public Management"];

let aps27NoLohl = ["Community Development Work"];

let aps28NoLohl = ["Tourism Management"];

let aps27English60andLohl = ["Language Practise & Media Studies (*Languages 60%)"];

//cut-course-calculator-lifescience-maths

let aps27JustLs = ["Dental Assisting"];

//cut-course-calculator-lifescience-physics-englishhl

let aps27LsandPhysics = ["Engineering : Construction (*Languages 50%)", "Agricultural Management (*Languages 50%)"];

let aps27NoMaths = ["Somatology"];

let aps28LsandPhysics = ["Biomedical Technology"];

let aps30LsandPhysics = ["Clinical Technology", "Radiography in Diagnostics"];

let aps32LsandPhysics = ["Engineering : Construction Management (*Languages 50%)", "Engineering : Quantity Surveying (*Languages 50%)"];

let aps28LsandPhysicswithoutLo = ["Hydrology & Water Resources Management"];

let aps30LsandPhysicswithoutLo = ["Environmental Health"];

//cut-course-calculator-physics-english-maths

let aps27Physics50 = ["Engineering : Civil (Extended)", "Engineering : Mechanical (Extended)", "Engineering : Renewable Energy Technologies" , "Teacher Education : Natural Sciences"];

let aps27PhysicswithoutLo = ["Teacher Education : Mathematics"];

let aps28Physics50 = ["Engineering : Civil", "Engineering : Electrical"];

let aps32JustPhysics = ["Engineering : Mechanical"];

subjectBtn.addEventListener('click', () => {
  alert('Please click the checkboxes to add percentages of results.')
});
doneBtn.addEventListener('click', () => {
  heyWrapper.classList.add('hide');
  blackScreen.classList.remove('hide');
  subjectPercentages.classList.remove('hide');


//cut-course calculator-english-maths

if(englishfalInput.value >= 50 && mathsInput.value >= 40 && loInput.value >= 50 && apsInput.value > 25){
  for(let i = 0; i < aps27maths40.length; i++) {
    plainInput.innerHTML += `<li> ${aps27maths40[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 25){
  for(let i = 0; i < aps27maths50.length; i++) {
    plainInput.innerHTML += `<li> ${aps27maths50[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathsInput.value >= 40 && accountingInput.value >= 60 && loInput.value >= 50 && apsInput.value > 25){
  for(let i = 0; i < aps27Accounting.length; i++) {
    plainInput.innerHTML += `<li> ${aps27Accounting[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathsInput.value >= 40 && consumerInput.value >= 50 && hospitalityInput.value >= 50 && loInput.value >= 50 && apsInput.value > 25){
  for(let i = 0; i < aps27Hospitality.length; i++) {
    plainInput.innerHTML += `<li> ${aps27Hospitality[i]} </li>`;
  };
}

//cut-course-calculator-english-mathlit

if(englishfalInput.value >= 50 && mathslitInput.value >= 70 && loInput.value >= 50 && apsInput.value > 25){
  for(let i = 0; i < aps27Mathslit.length; i++) {
    plainInput.innerHTML += `<li> ${aps27Mathslit[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathslitInput.value >= 50 && agricultureInput.value >= 50 && loInput.value >= 50 && apsInput.value > 25){
  for(let i = 0; i < aps27Mathslit50agr.length; i++) {
    plainInput.innerHTML += `<li> ${aps27Mathslit50agr[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathslitInput.value >= 50 && accountingInput.value >= 70 && loInput.value >= 50 && apsInput.value > 25){
  for(let i = 0; i < aps27MathslitAccounting.length; i++) {
    plainInput.innerHTML += `<li> ${aps27MathslitAccounting[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathslitInput.value >= 50 && loInput.value >= 50 && apsInput.value > 25){
  for(let i = 0; i < aps27Mathslit50.length; i++) {
    plainInput.innerHTML += `<li> ${aps27Mathslit50[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathslitInput.value >= 60 && accountingInput.value >= 60 && loInput.value >= 50 && apsInput.value > 25){
  for(let i = 0; i < aps27Mathslit60Accounting.length; i++) {
    plainInput.innerHTML += `<li> ${aps27Mathslit60Accounting[i]} </li>`;
  };
}

//cut-course-calculator-english

if(englishfalInput.value >= 50 && loInput.value >= 50 && apsInput.value > 25){
  for(let i = 0; i < aps27EnglishandLo.length; i++) {
    plainInput.innerHTML += `<li> ${aps27EnglishandLo[i]} </li>`;
  };
}

if(englishfalInput.value >= 60 && loInput.value >= 50 && apsInput.value > 25){
  for(let i = 0; i < aps27English60andLo.length; i++) {
    plainInput.innerHTML += `<li> ${aps27English60andLo[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && apsInput.value > 25){
  for(let i = 0; i < aps27NoLo.length; i++) {
    plainInput.innerHTML += `<li> ${aps27NoLo[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && apsInput.value > 26){
  for(let i = 0; i < aps28NoLo.length; i++) {
    plainInput.innerHTML += `<li> ${aps28NoLo[i]} </li>`;
  };
}

//cut-course-calculator-englishhl-mathlit

if(englishhlInput.value >= 50 && mathslitInput.value >= 70 && loInput.value >= 50 && apsInput.value > 25){
  for(let i = 0; i < aps27Mathslithl.length; i++) {
    plainInput.innerHTML += `<li> ${aps27Mathslithl[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 50 && agricultureInput.value >= 50 && loInput.value >= 50 && apsInput.value > 25){
  for(let i = 0; i < aps27Mathslit50agrhl.length; i++) {
    plainInput.innerHTML += `<li> ${aps27Mathslit50agrhl[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 50 && accountingInput.value >= 70 && loInput.value >= 50 && apsInput.value > 25){
  for(let i = 0; i < aps27MathslitAccountinghl.length; i++) {
    plainInput.innerHTML += `<li> ${aps27MathslitAccountinghl[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 50 && loInput.value >= 50 && apsInput.value > 25){
  for(let i = 0; i < aps27Mathslit50hl.length; i++) {
    plainInput.innerHTML += `<li> ${aps27Mathslit50hl[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 60 && accountingInput.value >= 60 && loInput.value >= 50 && apsInput.value > 25){
  for(let i = 0; i < aps27Mathslit60Accountinghl.length; i++) {
    plainInput.innerHTML += `<li> ${aps27Mathslit60Accountinghl[i]} </li>`;
  };
}

//cut-course-calculator-englishhl-maths

if(englishhlInput.value >= 50 && mathsInput.value >= 40 && loInput.value >= 50 && apsInput.value > 25){
  for(let i = 0; i < aps27maths40hl.length; i++) {
    plainInput.innerHTML += `<li> ${aps27maths40hl[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 25){
  for(let i = 0; i < aps27maths50hl.length; i++) {
    plainInput.innerHTML += `<li> ${aps27maths50hl[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathsInput.value >= 40 && accountingInput.value >= 60 && loInput.value >= 50 && apsInput.value > 25){
  for(let i = 0; i < aps27Accountinghl.length; i++) {
    plainInput.innerHTML += `<li> ${aps27Accountinghl[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathsInput.value >= 40 && consumerInput.value >= 50 && hospitalityInput.value >= 50 && loInput.value >= 50 && apsInput.value > 25){
  for(let i = 0; i < aps27Hospitalityhl.length; i++) {
    plainInput.innerHTML += `<li> ${aps27Hospitalityhl[i]} </li>`;
  };
}

//cut-course-calculator-englishhl

if(englishhlInput.value >= 50 && loInput.value >= 50 && apsInput.value > 25){
  for(let i = 0; i < aps27EnglishandLohl.length; i++) {
    plainInput.innerHTML += `<li> ${aps27EnglishandLohl[i]} </li>`;
  };
}

if(englishhlInput.value >= 60 && loInput.value >= 50 && apsInput.value > 25){
  for(let i = 0; i < aps27English60andLohl.length; i++) {
    plainInput.innerHTML += `<li> ${aps27English60andLohl[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && apsInput.value > 25){
  for(let i = 0; i < aps27NoLohl.length; i++) {
    plainInput.innerHTML += `<li> ${aps27NoLohl[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && apsInput.value > 26){
  for(let i = 0; i < aps28NoLohl.length; i++) {
    plainInput.innerHTML += `<li> ${aps28NoLohl[i]} </li>`;
  };
}

//cut-course-calculator-lifescience-maths

if(englishfalInput.value >= 50 && lsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 25){
  for(let i = 0; i < aps27JustLs.length; i++) {
    plainInput.innerHTML += `<li> ${aps27JustLs[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && lsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 26){
  for(let i = 0; i < aps27JustLs.length; i++) {
    plainInput.innerHTML += `<li> ${aps27JustLs[i]} </li>`;
  };
}

//cut-course-calculator-lifescience-physics-englishhl

if(englishfalInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 50 && lsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 25){
  for(let i = 0; i < aps27LsandPhysics.length; i++) {
    plainInput.innerHTML += `<li> ${aps27LsandPhysics[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && physicsInput.value >= 50 && lsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 25){
  for(let i = 0; i < aps27NoMaths.length; i++) {
    plainInput.innerHTML += `<li> ${aps27NoMaths[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 50 && lsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 26){
  for(let i = 0; i < aps28LsandPhysics.length; i++) {
    plainInput.innerHTML += `<li> ${aps28LsandPhysics[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 50 && lsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 28){
  for(let i = 0; i < aps30LsandPhysics.length; i++) {
    plainInput.innerHTML += `<li> ${aps30LsandPhysics[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 50 && lsInput.value >= 50 && apsInput.value > 26){
  for(let i = 0; i < aps28LsandPhysicswithoutLo.length; i++) {
    plainInput.innerHTML += `<li> ${aps28LsandPhysicswithoutLo[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 50 && lsInput.value >= 50 && apsInput.value > 28){
  for(let i = 0; i < aps30LsandPhysicswithoutLo.length; i++) {
    plainInput.innerHTML += `<li> ${aps30LsandPhysicswithoutLo[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 50 && lsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 30){
  for(let i = 0; i < aps32LsandPhysics.length; i++) {
    plainInput.innerHTML += `<li> ${aps32LsandPhysics[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 50 && lsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 25){
  for(let i = 0; i < aps27LsandPhysics.length; i++) {
    plainInput.innerHTML += `<li> ${aps27LsandPhysics[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && physicsInput.value >= 50 && lsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 25){
  for(let i = 0; i < aps27NoMaths.length; i++) {
    plainInput.innerHTML += `<li> ${aps27NoMaths[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 50 && lsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 26){
  for(let i = 0; i < aps28LsandPhysics.length; i++) {
    plainInput.innerHTML += `<li> ${aps28LsandPhysics[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 50 && lsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 28){
  for(let i = 0; i < aps30LsandPhysics.length; i++) {
    plainInput.innerHTML += `<li> ${aps30LsandPhysics[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 50 && lsInput.value >= 50 && apsInput.value > 26){
  for(let i = 0; i < aps28LsandPhysicswithoutLo.length; i++) {
    plainInput.innerHTML += `<li> ${aps28LsandPhysicswithoutLo[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 50 && lsInput.value >= 50 && apsInput.value > 28){
  for(let i = 0; i < aps30LsandPhysicswithoutLo.length; i++) {
    plainInput.innerHTML += `<li> ${aps30LsandPhysicswithoutLo[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 50 && lsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 30){
  for(let i = 0; i < aps32LsandPhysics.length; i++) {
    plainInput.innerHTML += `<li> ${aps32LsandPhysics[i]} </li>`;
  };
}

//cut-course-calculator-physics-english-maths

if(englishfalInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 25){
  for(let i = 0; i < aps27Physics50.length; i++) {
    plainInput.innerHTML += `<li> ${aps27Physics50[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 25){
  for(let i = 0; i < aps27PhysicswithoutLo.length; i++) {
    plainInput.innerHTML += `<li> ${aps27PhysicswithoutLo[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 26){
  for(let i = 0; i < aps28Physics50.length; i++) {
    plainInput.innerHTML += `<li> ${aps28Physics50[i]} </li>`;
  };
}

if(physicsInput.value >= 50  && mathsInput.value >= 60 && loInput.value >= 50 && apsInput.value > 30){
  for(let i = 0; i < aps32JustPhysics.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustPhysics[i]} </li>`;
  };
}



if(englishhlInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 25){
  for(let i = 0; i < aps27Physics50.length; i++) {
    plainInput.innerHTML += `<li> ${aps27Physics50[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 25){
  for(let i = 0; i < aps27PhysicswithoutLo.length; i++) {
    plainInput.innerHTML += `<li> ${aps27PhysicswithoutLo[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 26){
  for(let i = 0; i < aps28Physics50.length; i++) {
    plainInput.innerHTML += `<li> ${aps28Physics50[i]} </li>`;
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