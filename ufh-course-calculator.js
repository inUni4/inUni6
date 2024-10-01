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

//ufh-course-calculator-accounting

let aps27Accounting = ["Bachelor of Education Senior FET Phase (Commerce Specialisation)"];

let aps28Accounting = ["Bachelor of Education Senior & FET Phase (Commerce Specialisation)"];

//ufh-course-calculator-agriculture

let aps27Agriculture = ["Bachelor of Agriculture (Extended)", "Bachelor of Agriculture in Agricultural Extension (Extended)"];

let aps28JustAgriculture = ["Bachelor of Agriculture", "Bachelor of Agriculture in Agricultural Extension"];

let aps28LsandAgriculture = ["Bachelor of Education Senior & FET Phase (Agriculture Specialisation)", "Bachelor of Science in Agriculture (Agricultural Economics)"];

let aps28AgricultureorGeography = ["Bachelor of Science in Agriculture (Agricultural Economics)"];

let aps29AgricultureandMathslit = ["Bachelor of Agriculture", "Bachelor of Agriculture (Agricultural Extension)"];

//ufh-course-calculator-english-maths

let aps26JustMaths = ["Bachelor of Laws (Extended)", "Bachelor of Administration in Public Administration"];

let aps27JustMaths = ["Bachelor of Commerce (Extended)", "Bachelor of Commerce in Information Systems (Extended)"];

let aps28JustMaths = ["Bachelor of Commerce in Law", "Bachelor of Commerce", "Bachelor of Commerce in Information Systems"];

let aps28MathsandXhosa = ["Bachelor of Education in Foundation Phase Teaching", "Bachelor of Education in Intermediate Phase Teaching"];

let aps30JustMaths = ["Bachelor of Laws"];

let aps30EnglishandMaths = ["Bachelor of Commerce in Accounting (Extended)"];

let aps32JustMaths = ["Bachelor of Commerce in Accounting"];

//ufh-course-calculator-english

let aps22JustEnglish = ["Diploma in Fine Art"];

let aps26JustEnglish = ["Bachelor of Arts (Extended) --Additional Language 50%--", "Bachelor of Social Science (Extended)"];

let aps27JustEnglish = ["Bachelor of Arts --Additional Language 50%--", "Bachelor of Fine Art --Additional Language 50%--", "Bachelor of Lib & Info Science --Additional Language 50%--", "Bachelor of Music --Additional Language 50%--", "Bachelor of Social Science --Additional Language 50%--", "Bachelor of Social Science in Communication --Additional Language 50%--", "Bachelor of Social Science in Human Settlement --Additional Language 50%--", "Bachelor of Social Work --Additional Language 50%--", "Bachelor of Theology --Additional Language 50%--"];

//ufh-course-calculator-geography

let aps28GeographyandHistory = ["Bachelor of Education Senior & FET Phase (Social Science Specialisation)"];

//ufh-course-calculator-lifescience

let aps27PhysicsandLs = ["Bachelor of Science (Extended)", "Bachelor of Science in Agriculture (Soil Science) (Extended)", "Bachelor of Science in Agriculture (Horticulture) (Extended)", "Bachelor of Science in Agriculture (Crops) (Extended)", "Bachelor of Science in Agriculture (Animal Production) (Extended)", "Bachelor of Science in Agriculture (Pasture Science) (Extended)"];

let aps27LsandGeography = ["Bachelor of Science in Agriculture (Agricultural Economics) (Extended)"];

let aps28PhysicsandLs = ["Bachelor of Science", "Bachelor of Science in Agriculture (Soil Science)", "Bachelor of Science in Agriculture (Horticulture)", "Bachelor of Science in Agriculture (Crops)", "Bachelor of Science in Agriculture (Animal Production)", "Bachelor of Science in Agriculture (Pasture Science)", "Bachelor of Science in Speech Language Pathology", "Bachelor of Nursing"];

let aps28LsandPhysics = ["Bachelor of Science", "Bachelor of Science in Agriculture (Soil Science)", "Bachelor of Science in Agriculture (Horticulture)", "Bachelor of Science in Agriculture (Crops)", "Bachelor of Science in Agriculture (Animal Production)", "Bachelor of Science in Agriculture (Pasture Science)"];

let aps28LsandMaths = ["Bachelor of Health Sciences in Human Movement Science"];

let aps28LsandGeography = ["Bachelor of Education Senior & FET Phase (Science Specialisation)"];

let aps29MathslitandLs = ["Bachelor of Health Sciences in Human Movement Science"];

let aps29MathslitandPhysics = ["Bachelor of Science in Speech Language Pathology", "Bachelor of Nursing"];

//ufh-course-calculator-mathslit

let aps28JustMathslit = ["Bachelor of Laws (Extended)", "Bachelor of Administration in Public Administration"];

let aps28MathslitandAgriculture = ["Bachelor of Agriculture (Extended)", "Bachelor of Agriculture in Agricultural Extension (Extended)"];

let aps29MathslitandAgriculture = ["Bachelor of Education Senior & FET Phase (Agriculture Specialisation)"];

let aps29MathslitandXhosa = ["Bachelor of Education in Foundation Phase Teaching", "Bachelor of Education in Intermediate Phase Teaching"];

let aps29JustMathslit = ["Bachelor of Commerce in Law"];

subjectBtn.addEventListener('click', () => {
  alert('Please click the checkboxes to add percentages of results.')
});
doneBtn.addEventListener('click', () => {
  heyWrapper.classList.add('hide');
  blackScreen.classList.remove('hide');
  subjectPercentages.classList.remove('hide');


//ufh-course-calculator-accounting

if(englishfalInput.value >= 50 && mathsInput.value >= 40 && accountingInput.value >= 50 &&economicsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 26) {
  for(let i = 0; i < aps27Accounting.length; i++) {
    plainInput.innerHTML += `<li>${aps27Accounting[i]}</li>`;
  }
}

if(englishfalInput.value >= 50 && mathsInput.value >= 40 && accountingInput.value >= 50 &&businessInput.value >= 50 && loInput.value >= 50 && apsInput.value > 26) {
  for(let i = 0; i < aps27Accounting.length; i++) {
    plainInput.innerHTML += `<li>${aps27Accounting[i]}</li>`;
  }
}

if(englishfalInput.value >= 50 && mathsInput.value >= 40 && businessInput.value >= 50 &&economicsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 26) {
  for(let i = 0; i < aps27Accounting.length; i++) {
    plainInput.innerHTML += `<li>${aps27Accounting[i]}</li>`;
  }
}

if(englishfalInput.value >= 50 && mathslitInput.value >= 50 && accountingInput.value >= 50 &&economicsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 27) {
  for(let i = 0; i < aps28Accounting.length; i++) {
    plainInput.innerHTML += `<li>${aps28Accounting[i]}</li>`;
  }
}

if(englishfalInput.value >= 50 && mathslitInput.value >= 50 && accountingInput.value >= 50 &&businessInput.value >= 50 && loInput.value >= 50 && apsInput.value > 27) {
  for(let i = 0; i < aps28Accounting.length; i++) {
    plainInput.innerHTML += `<li>${aps28Accounting[i]}</li>`;
  }
}

if(englishfalInput.value >= 50 && mathslitInput.value >= 50 && economicsInput.value >= 50 &&businessInput.value >= 50 && loInput.value >= 50 && apsInput.value > 27) {
  for(let i = 0; i < aps28Accounting.length; i++) {
    plainInput.innerHTML += `<li>${aps28Accounting[i]}</li>`;
  }
}

//ufh-course-calculator-agriculture

if(englishfalInput.value >= 50 && mathsInput.value >= 40 && agricultureInput.value >= 50 && loInput.value >= 50 && apsInput.value > 26) {
  for(let i = 0; i < aps27Agriculture.length; i++) {
    plainInput.innerHTML += `<li>${aps27Agriculture[i]}</li>`;
  }
}

if(englishfalInput.value >= 50 && mathsInput.value >= 50 && agricultureInput.value >= 50 && loInput.value >= 50 && apsInput.value > 27) {
  for(let i = 0; i < aps28JustAgriculture.length; i++) {
    plainInput.innerHTML += `<li>${aps28JustAgriculture[i]}</li>`;
  }
}

if(englishfalInput.value >= 50 && mathsInput.value >= 50 && agricultureInput.value >= 50 && lsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 27) {
  for(let i = 0; i < aps28LsandAgriculture.length; i++) {
    plainInput.innerHTML += `<li>${aps28LsandAgriculture[i]}</li>`;
  }
}

if(englishfalInput.value >= 50 && mathsInput.value >= 50 && geographyInput.value >= 50 && lsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 27) {
  for(let i = 0; i < aps28AgricultureorGeography.length; i++) {
    plainInput.innerHTML += `<li>${aps28AgricultureorGeography[i]}</li>`;
  }
}

if(englishfalInput.value >= 50 && mathsInput.value >= 50 && itInput.value >= 50 && lsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 27) {
  for(let i = 0; i < aps28AgricultureorGeography.length; i++) {
    plainInput.innerHTML += `<li>${aps28AgricultureorGeography[i]}</li>`;
  }
}

if(englishfalInput.value >= 50 && mathslitInput.value >= 60 && agricultureInput.value >= 50 &&loInput.value >= 50 && apsInput.value > 28) {
  for(let i = 0; i < aps29AgricultureandMathslit.length; i++) {
    plainInput.innerHTML += `<li>${aps29AgricultureandMathslit[i]}</li>`;
  }
}

//ufh-course-calculator-english-maths

if(englishfalInput.value >= 50 && mathsInput.value >= 30 && loInput.value >= 50 && apsInput.value > 25) {
  for(let i = 0; i < aps26JustMaths.length; i++) {
    plainInput.innerHTML += `<li>${aps26JustMaths[i]}</li>`;
  }
}

if(englishfalInput.value >= 50 && mathsInput.value >= 40 && loInput.value >= 50 && apsInput.value > 26) {
  for(let i = 0; i < aps27JustMaths.length; i++) {
    plainInput.innerHTML += `<li>${aps27JustMaths[i]}</li>`;
  }
}

if(englishfalInput.value >= 50 && mathsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 27) {
  for(let i = 0; i < aps28JustMaths.length; i++) {
    plainInput.innerHTML += `<li>${aps28JustMaths[i]}</li>`;
  }
}

if(englishfalInput.value >= 50 && mathsInput.value >= 50 && xhosaInput.value >= 50 && loInput.value >= 50 && apsInput.value > 27) {
  for(let i = 0; i < aps28MathsandXhosa.length; i++) {
    plainInput.innerHTML += `<li>${aps28MathsandXhosa[i]}</li>`;
  }
}

if(englishfalInput.value >= 50 && mathsInput.value >= 50 && afrikaansInput.value >= 50 && loInput.value >= 50 && apsInput.value > 27) {
  for(let i = 0; i < aps28MathsandXhosa.length; i++) {
    plainInput.innerHTML += `<li>${aps28MathsandXhosa[i]}</li>`;
  }
}

if(englishfalInput.value >= 50 && mathsInput.value >= 40 && loInput.value >= 50 && apsInput.value > 29) {
  for(let i = 0; i < aps30JustMaths.length; i++) {
    plainInput.innerHTML += `<li>${aps30JustMaths[i]}</li>`;
  }
}

if(englishfalInput.value >= 50 && mathslitInput.value >= 50 && loInput.value >= 50 && apsInput.value > 29) {
  for(let i = 0; i < aps30JustMaths.length; i++) {
    plainInput.innerHTML += `<li>${aps30JustMaths[i]}</li>`;
  }
}

if(englishfalInput.value >= 50 && mathsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 29) {
  for(let i = 0; i < aps30EnglishandMaths.length; i++) {
    plainInput.innerHTML += `<li>${aps30EnglishandMaths[i]}</li>`;
  }
}

if(englishfalInput.value >= 60 && mathsInput.value >= 60 && loInput.value >= 50 && apsInput.value > 29) {
  for(let i = 0; i < aps32JustMaths.length; i++) {
    plainInput.innerHTML += `<li>${aps32JustMaths[i]}</li>`;
  }
}

//ufh-course-calculator-english

if(englishfalInput.value >= 50 && loInput.value >= 50 && apsInput.value > 21) {
  for(let i = 0; i < aps22JustEnglish.length; i++) {
    plainInput.innerHTML += `<li>${aps22JustEnglish[i]}</li>`;
  }
}

if(englishfalInput.value >= 50 && loInput.value >= 50 && apsInput.value > 25) {
  for(let i = 0; i < aps26JustEnglish.length; i++) {
    plainInput.innerHTML += `<li>${aps26JustEnglish[i]}</li>`;
  }
}

if(englishfalInput.value >= 50 && loInput.value >= 50 && apsInput.value > 26) {
  for(let i = 0; i < aps27JustEnglish.length; i++) {
    plainInput.innerHTML += `<li>${aps27JustEnglish[i]}</li>`;
  }
}

//ufh-course-calculator-geography

if(englishfalInput.value >= 50 && xhosaInput.value >= 50 && historyInput.value >= 50 && loInput.value >= 50 && apsInput.value > 27) {
  for(let i = 0; i < aps28GeographyandHistory.length; i++) {
    plainInput.innerHTML += `<li>${aps28GeographyandHistory[i]}</li>`;
  }
}

if(englishfalInput.value >= 50 && xhosaInput.value >= 50 && geographyInput.value >= 50 && loInput.value >= 50 && apsInput.value > 27) {
  for(let i = 0; i < aps28GeographyandHistory.length; i++) {
    plainInput.innerHTML += `<li>${aps28GeographyandHistory[i]}</li>`;
  }
}

if(englishfalInput.value >= 50 && afrikaansInput.value >= 50 && historyInput.value >= 50 && loInput.value >= 50 && apsInput.value > 27) {
  for(let i = 0; i < aps28GeographyandHistory.length; i++) {
    plainInput.innerHTML += `<li>${aps28GeographyandHistory[i]}</li>`;
  }
}

if(englishfalInput.value >= 50 && afrikaansInput.value >= 50 && geographyInput.value >= 50 && loInput.value >= 50 && apsInput.value > 27) {
  for(let i = 0; i < aps28GeographyandHistory.length; i++) {
    plainInput.innerHTML += `<li>${aps28GeographyandHistory[i]}</li>`;
  }
}

//ufh-course-calculator-lifescience

if(englishfalInput.value >= 50 && mathsInput.value >= 40 && physicsInput.value >= 50 && lsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 26) {
  for(let i = 0; i < aps27PhysicsandLs.length; i++) {
    plainInput.innerHTML += `<li>${aps27PhysicsandLs[i]}</li>`;
  }
}

if(englishfalInput.value >= 50 && mathsInput.value >= 40 && physicsInput.value >= 50 && itInput.value >= 50 && loInput.value >= 50 && apsInput.value > 26) {
  for(let i = 0; i < aps27PhysicsandLs.length; i++) {
    plainInput.innerHTML += `<li>${aps27PhysicsandLs[i]}</li>`;
  }
}

if(englishfalInput.value >= 50 && mathsInput.value >= 40 && physicsInput.value >= 50 && geographyInput.value >= 50 && loInput.value >= 50 && apsInput.value > 26) {
  for(let i = 0; i < aps27PhysicsandLs.length; i++) {
    plainInput.innerHTML += `<li>${aps27PhysicsandLs[i]}</li>`;
  }
}

if(englishfalInput.value >= 50 && mathsInput.value >= 40 && physicsInput.value >= 50 && agricultureInput.value >= 50 && loInput.value >= 50 && apsInput.value > 26) {
  for(let i = 0; i < aps27PhysicsandLs.length; i++) {
    plainInput.innerHTML += `<li>${aps27PhysicsandLs[i]}</li>`;
  }
}

if(englishfalInput.value >= 50 && mathsInput.value >= 50 && physicsInput.value >= 40 && lsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 26) {
  for(let i = 0; i < aps27PhysicsandLs.length; i++) {
    plainInput.innerHTML += `<li>${aps27PhysicsandLs[i]}</li>`;
  }
}

if(englishfalInput.value >= 50 && mathsInput.value >= 50 && physicsInput.value >= 40 && itInput.value >= 50 && loInput.value >= 50 && apsInput.value > 26) {
  for(let i = 0; i < aps27PhysicsandLs.length; i++) {
    plainInput.innerHTML += `<li>${aps27PhysicsandLs[i]}</li>`;
  }
}

if(englishfalInput.value >= 50 && mathsInput.value >= 50 && physicsInput.value >= 40 && geographyInput.value >= 50 && loInput.value >= 50 && apsInput.value > 26) {
  for(let i = 0; i < aps27PhysicsandLs.length; i++) {
    plainInput.innerHTML += `<li>${aps27PhysicsandLs[i]}</li>`;
  }
}

if(englishfalInput.value >= 50 && mathsInput.value >= 50 && physicsInput.value >= 40 && agricultureInput.value >= 50 && loInput.value >= 50 && apsInput.value > 26) {
  for(let i = 0; i < aps27PhysicsandLs.length; i++) {
    plainInput.innerHTML += `<li>${aps27PhysicsandLs[i]}</li>`;
  }
}

if(englishfalInput.value >= 50 && mathsInput.value >= 50 && geographyInput.value >= 50 && lsInput.value >= 40 && loInput.value >= 50 && apsInput.value > 26) {
  for(let i = 0; i < aps27LsandGeography.length; i++) {
    plainInput.innerHTML += `<li>${aps27LsandGeography[i]}</li>`;
  }
}

if(englishfalInput.value >= 50 && mathsInput.value >= 50 && agricultureInput.value >= 50 && lsInput.value >= 40 && loInput.value >= 50 && apsInput.value > 26) {
  for(let i = 0; i < aps27LsandGeography.length; i++) {
    plainInput.innerHTML += `<li>${aps27LsandGeography[i]}</li>`;
  }
}

if(englishfalInput.value >= 50 && mathsInput.value >= 50 && itInput.value >= 50 && lsInput.value >= 40 && loInput.value >= 50 && apsInput.value > 26) {
  for(let i = 0; i < aps27LsandGeography.length; i++) {
    plainInput.innerHTML += `<li>${aps27LsandGeography[i]}</li>`;
  }
}

if(englishfalInput.value >= 50 && mathsInput.value >= 50 && physicsInput.value >= 50 && lsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 27) {
  for(let i = 0; i < aps28PhysicsandLs.length; i++) {
    plainInput.innerHTML += `<li>${aps28PhysicsandLs[i]}</li>`;
  }
}

if(englishfalInput.value >= 50 && mathsInput.value >= 50 && physicsInput.value >= 50 && geographyInput.value >= 50 && loInput.value >= 50 && apsInput.value > 27) {
  for(let i = 0; i < aps28LsandPhysics.length; i++) {
    plainInput.innerHTML += `<li>${aps28LsandPhysics[i]}</li>`;
  }
}

if(englishfalInput.value >= 50 && mathsInput.value >= 50 && physicsInput.value >= 50 && agricultureInput.value >= 50 && loInput.value >= 50 && apsInput.value > 27) {
  for(let i = 0; i < aps28LsandPhysics.length; i++) {
    plainInput.innerHTML += `<li>${aps28LsandPhysics[i]}</li>`;
  }
}

if(englishfalInput.value >= 50 && mathsInput.value >= 50 && physicsInput.value >= 50 && itInput.value >= 50 && loInput.value >= 50 && apsInput.value > 27) {
  for(let i = 0; i < aps28LsandPhysics.length; i++) {
    plainInput.innerHTML += `<li>${aps28LsandPhysics[i]}</li>`;
  }
}

if(englishfalInput.value >= 50 && mathsInput.value >= 50 && lsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 27) {
  for(let i = 0; i < aps28LsandMaths.length; i++) {
    plainInput.innerHTML += `<li>${aps28LsandMaths[i]}</li>`;
  }
}

if(englishfalInput.value >= 50 && mathsInput.value >= 50 && physicsInput.value >= 50 && geographyInput.value >= 50 && lsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 27) {
  for(let i = 0; i < aps28LsandGeography.length; i++) {
    plainInput.innerHTML += `<li>${aps28LsandGeography[i]}</li>`;
  }
}

if(englishfalInput.value >= 50 && mathsInput.value >= 50 && physicsInput.value >= 50 && computerInput.value >= 50 && lsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 27) {
  for(let i = 0; i < aps28LsandGeography.length; i++) {
    plainInput.innerHTML += `<li>${aps28LsandGeography[i]}</li>`;
  }
}

if(englishfalInput.value >= 50 && mathslitInput.value >= 60 && lsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 28) {
  for(let i = 0; i < aps29MathslitandLs.length; i++) {
    plainInput.innerHTML += `<li>${aps29MathslitandLs[i]}</li>`;
  }
}

if(englishfalInput.value >= 50 && mathslitInput.value >= 60 && physicsInput.value >= 50 && lsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 28) {
  for(let i = 0; i < aps29MathslitandPhysics.length; i++) {
    plainInput.innerHTML += `<li>${aps29MathslitandPhysics[i]}</li>`;
  }
}

//ufh-course-calculator-mathslit

if(englishfalInput.value >= 50 && mathslitInput.value >= 50 && loInput.value >= 50 && apsInput.value > 27) {
  for(let i = 0; i < aps28JustMathslit.length; i++) {
    plainInput.innerHTML += `<li>${aps28JustMathslit[i]}</li>`;
  }
}

if(englishfalInput.value >= 50 && mathslitInput.value >= 50 && agricultureInput.value >= 50 && loInput.value >= 50 && apsInput.value > 27) {
  for(let i = 0; i < aps28MathslitandAgriculture.length; i++) {
    plainInput.innerHTML += `<li>${aps28MathslitandAgriculture[i]}</li>`;
  }
}

if(englishfalInput.value >= 50 && mathslitInput.value >= 60 && lsInput.value >= 50 && agricultureInput.value >= 50 && loInput.value >= 50 && apsInput.value > 28) {
  for(let i = 0; i < aps29MathslitandAgriculture.length; i++) {
    plainInput.innerHTML += `<li>${aps29MathslitandAgriculture[i]}</li>`;
  }
}

if(englishfalInput.value >= 50 && mathslitInput.value >= 60 && xhosaInput.value >= 50 && loInput.value >= 50 && apsInput.value > 28) {
  for(let i = 0; i < aps29MathslitandXhosa.length; i++) {
    plainInput.innerHTML += `<li>${aps29MathslitandXhosa[i]}</li>`;
  }
}

if(englishfalInput.value >= 50 && mathslitInput.value >= 60 && loInput.value >= 50 && apsInput.value > 28) {
  for(let i = 0; i < aps29JustMathslit.length; i++) {
    plainInput.innerHTML += `<li>${aps29JustMathslit[i]}</li>`;
  }
}

/englishhl/

//ufh-course-calculator-accounting

if(englishhlInput.value >= 50 && mathsInput.value >= 40 && accountingInput.value >= 50 &&economicsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 26) {
  for(let i = 0; i < aps27Accounting.length; i++) {
    plainInput.innerHTML += `<li>${aps27Accounting[i]}</li>`;
  }
}

if(englishhlInput.value >= 50 && mathsInput.value >= 40 && accountingInput.value >= 50 &&businessInput.value >= 50 && loInput.value >= 50 && apsInput.value > 26) {
  for(let i = 0; i < aps27Accounting.length; i++) {
    plainInput.innerHTML += `<li>${aps27Accounting[i]}</li>`;
  }
}

if(englishhlInput.value >= 50 && mathsInput.value >= 40 && businessInput.value >= 50 &&economicsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 26) {
  for(let i = 0; i < aps27Accounting.length; i++) {
    plainInput.innerHTML += `<li>${aps27Accounting[i]}</li>`;
  }
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 50 && accountingInput.value >= 50 &&economicsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 27) {
  for(let i = 0; i < aps28Accounting.length; i++) {
    plainInput.innerHTML += `<li>${aps28Accounting[i]}</li>`;
  }
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 50 && accountingInput.value >= 50 &&businessInput.value >= 50 && loInput.value >= 50 && apsInput.value > 27) {
  for(let i = 0; i < aps28Accounting.length; i++) {
    plainInput.innerHTML += `<li>${aps28Accounting[i]}</li>`;
  }
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 50 && economicsInput.value >= 50 &&businessInput.value >= 50 && loInput.value >= 50 && apsInput.value > 27) {
  for(let i = 0; i < aps28Accounting.length; i++) {
    plainInput.innerHTML += `<li>${aps28Accounting[i]}</li>`;
  }
}

//ufh-course-calculator-agriculture

if(englishhlInput.value >= 50 && mathsInput.value >= 40 && agricultureInput.value >= 50 && loInput.value >= 50 && apsInput.value > 26) {
  for(let i = 0; i < aps27Agriculture.length; i++) {
    plainInput.innerHTML += `<li>${aps27Agriculture[i]}</li>`;
  }
}

if(englishhlInput.value >= 50 && mathsInput.value >= 50 && agricultureInput.value >= 50 && loInput.value >= 50 && apsInput.value > 27) {
  for(let i = 0; i < aps28JustAgriculture.length; i++) {
    plainInput.innerHTML += `<li>${aps28JustAgriculture[i]}</li>`;
  }
}

if(englishhlInput.value >= 50 && mathsInput.value >= 50 && agricultureInput.value >= 50 && lsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 27) {
  for(let i = 0; i < aps28LsandAgriculture.length; i++) {
    plainInput.innerHTML += `<li>${aps28LsandAgriculture[i]}</li>`;
  }
}

if(englishhlInput.value >= 50 && mathsInput.value >= 50 && geographyInput.value >= 50 && lsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 27) {
  for(let i = 0; i < aps28AgricultureorGeography.length; i++) {
    plainInput.innerHTML += `<li>${aps28AgricultureorGeography[i]}</li>`;
  }
}

if(englishhlInput.value >= 50 && mathsInput.value >= 50 && itInput.value >= 50 && lsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 27) {
  for(let i = 0; i < aps28AgricultureorGeography.length; i++) {
    plainInput.innerHTML += `<li>${aps28AgricultureorGeography[i]}</li>`;
  }
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 60 && agricultureInput.value >= 50 &&loInput.value >= 50 && apsInput.value > 28) {
  for(let i = 0; i < aps29AgricultureandMathslit.length; i++) {
    plainInput.innerHTML += `<li>${aps29AgricultureandMathslit[i]}</li>`;
  }
}

//ufh-course-calculator-english-maths

if(englishhlInput.value >= 50 && mathsInput.value >= 30 && loInput.value >= 50 && apsInput.value > 25) {
  for(let i = 0; i < aps26JustMaths.length; i++) {
    plainInput.innerHTML += `<li>${aps26JustMaths[i]}</li>`;
  }
}

if(englishhlInput.value >= 50 && mathsInput.value >= 40 && loInput.value >= 50 && apsInput.value > 26) {
  for(let i = 0; i < aps27JustMaths.length; i++) {
    plainInput.innerHTML += `<li>${aps27JustMaths[i]}</li>`;
  }
}

if(englishhlInput.value >= 50 && mathsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 27) {
  for(let i = 0; i < aps28JustMaths.length; i++) {
    plainInput.innerHTML += `<li>${aps28JustMaths[i]}</li>`;
  }
}

if(englishhlInput.value >= 50 && mathsInput.value >= 50 && xhosaInput.value >= 50 && loInput.value >= 50 && apsInput.value > 27) {
  for(let i = 0; i < aps28MathsandXhosa.length; i++) {
    plainInput.innerHTML += `<li>${aps28MathsandXhosa[i]}</li>`;
  }
}

if(englishhlInput.value >= 50 && mathsInput.value >= 50 && afrikaansInput.value >= 50 && loInput.value >= 50 && apsInput.value > 27) {
  for(let i = 0; i < aps28MathsandXhosa.length; i++) {
    plainInput.innerHTML += `<li>${aps28MathsandXhosa[i]}</li>`;
  }
}

if(englishhlInput.value >= 50 && mathsInput.value >= 40 && loInput.value >= 50 && apsInput.value > 29) {
  for(let i = 0; i < aps30JustMaths.length; i++) {
    plainInput.innerHTML += `<li>${aps30JustMaths[i]}</li>`;
  }
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 50 && loInput.value >= 50 && apsInput.value > 29) {
  for(let i = 0; i < aps30JustMaths.length; i++) {
    plainInput.innerHTML += `<li>${aps30JustMaths[i]}</li>`;
  }
}

if(englishhlInput.value >= 50 && mathsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 29) {
  for(let i = 0; i < aps30EnglishandMaths.length; i++) {
    plainInput.innerHTML += `<li>${aps30EnglishandMaths[i]}</li>`;
  }
}

if(englishhlInput.value >= 60 && mathsInput.value >= 60 && loInput.value >= 50 && apsInput.value > 29) {
  for(let i = 0; i < aps32JustMaths.length; i++) {
    plainInput.innerHTML += `<li>${aps32JustMaths[i]}</li>`;
  }
}

//ufh-course-calculator-english

if(englishhlInput.value >= 50 && loInput.value >= 50 && apsInput.value > 21) {
  for(let i = 0; i < aps22JustEnglish.length; i++) {
    plainInput.innerHTML += `<li>${aps22JustEnglish[i]}</li>`;
  }
}

if(englishhlInput.value >= 50 && loInput.value >= 50 && apsInput.value > 25) {
  for(let i = 0; i < aps26JustEnglish.length; i++) {
    plainInput.innerHTML += `<li>${aps26JustEnglish[i]}</li>`;
  }
}

if(englishhlInput.value >= 50 && loInput.value >= 50 && apsInput.value > 26) {
  for(let i = 0; i < aps27JustEnglish.length; i++) {
    plainInput.innerHTML += `<li>${aps27JustEnglish[i]}</li>`;
  }
}

//ufh-course-calculator-geography

if(englishhlInput.value >= 50 && xhosaInput.value >= 50 && historyInput.value >= 50 && loInput.value >= 50 && apsInput.value > 27) {
  for(let i = 0; i < aps28GeographyandHistory.length; i++) {
    plainInput.innerHTML += `<li>${aps28GeographyandHistory[i]}</li>`;
  }
}

if(englishhlInput.value >= 50 && xhosaInput.value >= 50 && geographyInput.value >= 50 && loInput.value >= 50 && apsInput.value > 27) {
  for(let i = 0; i < aps28GeographyandHistory.length; i++) {
    plainInput.innerHTML += `<li>${aps28GeographyandHistory[i]}</li>`;
  }
}

if(englishhlInput.value >= 50 && afrikaansInput.value >= 50 && historyInput.value >= 50 && loInput.value >= 50 && apsInput.value > 27) {
  for(let i = 0; i < aps28GeographyandHistory.length; i++) {
    plainInput.innerHTML += `<li>${aps28GeographyandHistory[i]}</li>`;
  }
}

if(englishhlInput.value >= 50 && afrikaansInput.value >= 50 && geographyInput.value >= 50 && loInput.value >= 50 && apsInput.value > 27) {
  for(let i = 0; i < aps28GeographyandHistory.length; i++) {
    plainInput.innerHTML += `<li>${aps28GeographyandHistory[i]}</li>`;
  }
}

//ufh-course-calculator-lifescience

if(englishhlInput.value >= 50 && mathsInput.value >= 40 && physicsInput.value >= 50 && lsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 26) {
  for(let i = 0; i < aps27PhysicsandLs.length; i++) {
    plainInput.innerHTML += `<li>${aps27PhysicsandLs[i]}</li>`;
  }
}

if(englishhlInput.value >= 50 && mathsInput.value >= 40 && physicsInput.value >= 50 && itInput.value >= 50 && loInput.value >= 50 && apsInput.value > 26) {
  for(let i = 0; i < aps27PhysicsandLs.length; i++) {
    plainInput.innerHTML += `<li>${aps27PhysicsandLs[i]}</li>`;
  }
}

if(englishhlInput.value >= 50 && mathsInput.value >= 40 && physicsInput.value >= 50 && geographyInput.value >= 50 && loInput.value >= 50 && apsInput.value > 26) {
  for(let i = 0; i < aps27PhysicsandLs.length; i++) {
    plainInput.innerHTML += `<li>${aps27PhysicsandLs[i]}</li>`;
  }
}

if(englishhlInput.value >= 50 && mathsInput.value >= 40 && physicsInput.value >= 50 && agricultureInput.value >= 50 && loInput.value >= 50 && apsInput.value > 26) {
  for(let i = 0; i < aps27PhysicsandLs.length; i++) {
    plainInput.innerHTML += `<li>${aps27PhysicsandLs[i]}</li>`;
  }
}

if(englishhlInput.value >= 50 && mathsInput.value >= 50 && physicsInput.value >= 40 && lsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 26) {
  for(let i = 0; i < aps27PhysicsandLs.length; i++) {
    plainInput.innerHTML += `<li>${aps27PhysicsandLs[i]}</li>`;
  }
}

if(englishhlInput.value >= 50 && mathsInput.value >= 50 && physicsInput.value >= 40 && itInput.value >= 50 && loInput.value >= 50 && apsInput.value > 26) {
  for(let i = 0; i < aps27PhysicsandLs.length; i++) {
    plainInput.innerHTML += `<li>${aps27PhysicsandLs[i]}</li>`;
  }
}

if(englishhlInput.value >= 50 && mathsInput.value >= 50 && physicsInput.value >= 40 && geographyInput.value >= 50 && loInput.value >= 50 && apsInput.value > 26) {
  for(let i = 0; i < aps27PhysicsandLs.length; i++) {
    plainInput.innerHTML += `<li>${aps27PhysicsandLs[i]}</li>`;
  }
}

if(englishhlInput.value >= 50 && mathsInput.value >= 50 && physicsInput.value >= 40 && agricultureInput.value >= 50 && loInput.value >= 50 && apsInput.value > 26) {
  for(let i = 0; i < aps27PhysicsandLs.length; i++) {
    plainInput.innerHTML += `<li>${aps27PhysicsandLs[i]}</li>`;
  }
}

if(englishhlInput.value >= 50 && mathsInput.value >= 50 && geographyInput.value >= 50 && lsInput.value >= 40 && loInput.value >= 50 && apsInput.value > 26) {
  for(let i = 0; i < aps27LsandGeography.length; i++) {
    plainInput.innerHTML += `<li>${aps27LsandGeography[i]}</li>`;
  }
}

if(englishhlInput.value >= 50 && mathsInput.value >= 50 && agricultureInput.value >= 50 && lsInput.value >= 40 && loInput.value >= 50 && apsInput.value > 26) {
  for(let i = 0; i < aps27LsandGeography.length; i++) {
    plainInput.innerHTML += `<li>${aps27LsandGeography[i]}</li>`;
  }
}

if(englishhlInput.value >= 50 && mathsInput.value >= 50 && itInput.value >= 50 && lsInput.value >= 40 && loInput.value >= 50 && apsInput.value > 26) {
  for(let i = 0; i < aps27LsandGeography.length; i++) {
    plainInput.innerHTML += `<li>${aps27LsandGeography[i]}</li>`;
  }
}

if(englishhlInput.value >= 50 && mathsInput.value >= 50 && physicsInput.value >= 50 && lsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 27) {
  for(let i = 0; i < aps28PhysicsandLs.length; i++) {
    plainInput.innerHTML += `<li>${aps28PhysicsandLs[i]}</li>`;
  }
}

if(englishhlInput.value >= 50 && mathsInput.value >= 50 && physicsInput.value >= 50 && geographyInput.value >= 50 && loInput.value >= 50 && apsInput.value > 27) {
  for(let i = 0; i < aps28LsandPhysics.length; i++) {
    plainInput.innerHTML += `<li>${aps28LsandPhysics[i]}</li>`;
  }
}

if(englishhlInput.value >= 50 && mathsInput.value >= 50 && physicsInput.value >= 50 && agricultureInput.value >= 50 && loInput.value >= 50 && apsInput.value > 27) {
  for(let i = 0; i < aps28LsandPhysics.length; i++) {
    plainInput.innerHTML += `<li>${aps28LsandPhysics[i]}</li>`;
  }
}

if(englishhlInput.value >= 50 && mathsInput.value >= 50 && physicsInput.value >= 50 && itInput.value >= 50 && loInput.value >= 50 && apsInput.value > 27) {
  for(let i = 0; i < aps28LsandPhysics.length; i++) {
    plainInput.innerHTML += `<li>${aps28LsandPhysics[i]}</li>`;
  }
}

if(englishhlInput.value >= 50 && mathsInput.value >= 50 && lsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 27) {
  for(let i = 0; i < aps28LsandMaths.length; i++) {
    plainInput.innerHTML += `<li>${aps28LsandMaths[i]}</li>`;
  }
}

if(englishhlInput.value >= 50 && mathsInput.value >= 50 && physicsInput.value >= 50 && geographyInput.value >= 50 && lsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 27) {
  for(let i = 0; i < aps28LsandGeography.length; i++) {
    plainInput.innerHTML += `<li>${aps28LsandGeography[i]}</li>`;
  }
}

if(englishhlInput.value >= 50 && mathsInput.value >= 50 && physicsInput.value >= 50 && computerInput.value >= 50 && lsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 27) {
  for(let i = 0; i < aps28LsandGeography.length; i++) {
    plainInput.innerHTML += `<li>${aps28LsandGeography[i]}</li>`;
  }
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 60 && lsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 28) {
  for(let i = 0; i < aps29MathslitandLs.length; i++) {
    plainInput.innerHTML += `<li>${aps29MathslitandLs[i]}</li>`;
  }
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 60 && physicsInput.value >= 50 && lsInput.value >= 50 && loInput.value >= 50 && apsInput.value > 28) {
  for(let i = 0; i < aps29MathslitandPhysics.length; i++) {
    plainInput.innerHTML += `<li>${aps29MathslitandPhysics[i]}</li>`;
  }
}

//ufh-course-calculator-mathslit

if(englishhlInput.value >= 50 && mathslitInput.value >= 50 && loInput.value >= 50 && apsInput.value > 27) {
  for(let i = 0; i < aps28JustMathslit.length; i++) {
    plainInput.innerHTML += `<li>${aps28JustMathslit[i]}</li>`;
  }
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 50 && agricultureInput.value >= 50 && loInput.value >= 50 && apsInput.value > 27) {
  for(let i = 0; i < aps28MathslitandAgriculture.length; i++) {
    plainInput.innerHTML += `<li>${aps28MathslitandAgriculture[i]}</li>`;
  }
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 60 && lsInput.value >= 50 && agricultureInput.value >= 50 && loInput.value >= 50 && apsInput.value > 28) {
  for(let i = 0; i < aps29MathslitandAgriculture.length; i++) {
    plainInput.innerHTML += `<li>${aps29MathslitandAgriculture[i]}</li>`;
  }
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 60 && xhosaInput.value >= 50 && loInput.value >= 50 && apsInput.value > 28) {
  for(let i = 0; i < aps29MathslitandXhosa.length; i++) {
    plainInput.innerHTML += `<li>${aps29MathslitandXhosa[i]}</li>`;
  }
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 60 && loInput.value >= 50 && apsInput.value > 28) {
  for(let i = 0; i < aps29JustMathslit.length; i++) {
    plainInput.innerHTML += `<li>${aps29JustMathslit[i]}</li>`;
  }
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