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

////tut-course-calculator-englishhl

let aps18JustEnglish40 = ["HCert (Music)"];

let aps20JustEnglish40 = ["HCert (Contact Centre Management)", "Dip (Fashion Design & Technology)", "Dip (Fine & Applied Arts)", "Dip (Jewellery Design & Manufacture)"];

let aps22JustEnglish40 = ["Dip (Commercial Photography)"];

let aps20JustEnglish50 = ["Dip (Performing Arts) (Dance)", "Dip (Performing Arts) (Jazz Music)", "Dip (Performing Arts) (Opera)", "Dip (Performing Arts) (Technical Theatre & Design)", "Dip (Performing Arts) (Theatre Arts & Performance)", "Dip (Language Practise) (*Home Language 50%)", "Dip (Law)", "Dip (Legal Support) (*Additional Language 40%)"];

let aps21JustEnglish50 = ["Dip (Industrial Design)"];

let aps22JustEnglish50 = ["Dip (Interior Design)", "Dip (Motion Picture Production)", "Dip (Adult & Community Education & Training) (Specialisation in Languages) (*Additional Language 50%)"];

let aps24JustEnglish50 = ["Dip (Intergrated Communication Design)", "Dip (Journalism)"];

let aps25JustEnglish50 = ["BArch", "BArch (Extended)"];

//tut-course calculator-english-maths

let aps18EnglishandMaths = ["HCert (Resource and Waste Management)"];

let aps20EnglishandMaths = ["Dip (Correctional & Rehabilitation Studies)", "Dip (Policing)", "Dip (Public Affairs) (Admin of State)", "Dip (Public Affairs) (Local Government)", "Dip (Traffic Safety & Municipal Police Management)", "Dip (Food Operations Management)", "Dip (Operations Management)", "Dip (Work Study)"];

let aps23EnglishandMaths = ["Dip (Hospitality Management)"];

let aps18English50Maths = ["HCert (Dental Assisting) (*Additional Language 40%)"];

let aps19English50Maths = ["Dip (Administrative Information Management)", "Dip (Contact Centre Management)", "Dip (Animal Sciences)", "Dip (Crop Production)", "Dip (Equine Sciences)"];

let aps20English50Maths = ["Dip (Intergrated Communication)", "Dip (Adventure Tourism Management)", "Dip (Eco-tourism Management)", "Dip (Event Management)"];

let aps22English50Maths = ["Dip (Accounting)", "Dip (Economics)", "Dip (Financial Management)", "Dip(Financial Planning)", "Dip (Internal Auditing)", "Dip (Public Finance)", "HCert (Accounting)", "Dip (Adult & Community Education & Training) (Specialisation in Consumer Sciences)", "Dip (Marketing)", "Dip (Retail Business Management)", "Dip (Sport Management)", "Dip (Supply Chain Management)", "Dip (Tourism Management)"];

let aps24English50Maths = ["Dip (Entrepreneurship)", "Dip (Human Resource Management)", "Dip (Nature Conservation)", "Dip (Wildlife Management)"];

let aps25English50Maths = ["Dip (Casino Resort Management)"];

let aps23Englishlower = ["Dip (Computer Science) (Extended)", "Dip (Computer Systems Engineering) (Extended)", "Dip (Informatics) (Extended)", "Dip (Multimedia Computing) (Extended)"];

let aps24WeAreEqual = ["BEd (Senior Phase & Further Education & Training Teaching) (Specialisation in Information Technology)"];

let aps25WeAreEqual = ["BEd (Foundation Phase Teaching)"];

let aps26MathsisBigger = ["Dip (Computer Science)", "Dip (Informatics)", "Dip (Multimedia Computing)"];

//tut-course-calculator-accounting

let aps22AccountingandMaths = ["Dip (Adult & Community Education & Training) (Specialisation in Economics & Management)"];

let aps24AccountingandMaths = ["Dip (Administrative Management) (Finance)", "Dip (Credit Management)"];

let aps23JustAccounting = ["Dip (Public Finance)"];

let aps24Accounting50 = ["BEd (Senior Phase and Further Education and Training Teaching) (Specialisation in Economic and Management Sciences)"];

//tut-course-calculator-agriculture

let aps24Agriculture = ["BEd (Senior Phase and Further Education and Training Teaching) (Specialisation in Agriculture)"];

//tut-course-calculator-business

let aps22BusinessandMaths = ["Dip (Adult & Community Education & Training) (Specialisation in Economics & Management) (*Additional Language 40%)"];

//tut-course-calculator-consumer

let aps24ConsumerSciences = ["BEd (Senior Phase and Further Education and Training Teaching) (Specialisation in Consumer Sciences)"];

//tut-course-calculator-english-mathlit

let aps18Mathslit50 = ["HCert (Dental Assisting) (*Additional Language 40%)"];

let aps19Mathslit40 = ["Dip (Administrative Information Management)", "Dip (Contact Centre Management)"];

let aps20Mathslit40 = ["Dip (Correctional & Rehabilitation Studies)", "Dip (Policing)", "Dip (Public Affairs) (Admin of State)", "Dip (Public Affairs) (Local Government)", "Dip (Traffic Safety & Municipal Police Management)", "Dip (Food Operations Management)"];

let aps23Mathslit40 = ["Dip (Hospitality Management)"];

let aps20Mathslit60 = ["Dip (Operations Management)", "Dip (Work Study)"];

let aps20EnglishandMathslit50 = ["Dip (Adventure Tourism Management)", "Dip (Eco-Tourism Management)", "Dip (Event Management)", "Dip (Animal Sciences)", "Dip (Crop Production)", "Dip (Equine Sciences)"];

let aps21EnglishandMathslit50 = ["Dip (Intergrated Communication)"];

let aps23EnglishandMathslit50 = ["HCert (Accounting)"];

let aps24EnglishandMathslit50 = ["Dip (Administrative Management) (General)"];

let aps25EnglishandMathslit50 = ["Dip (Casino Resort Management)", "Dip (Nature Conservation)", "Dip (Wildlife Management)"];

let aps21Mathslit70 = ["HCert (Resource & Waste Management)"];

let aps25Mathslit70 = ["Dip (Computer Science) (Extended)", "Dip (Informatics) (Extended)", "Dip (Multimedia Computing) (Extended)"];

let aps21Mathslit70andPhysics = ["HCert (Water Treatment)"];

let aps24MathslitisBigger = ["Dip (Accounting)", "Dip (Financial Management)", "Dip (Financial Planning)", "Dip (Internal Auditing)", "Dip (Public Finance)"];

let aps25MathslitisBigger = ["BEd (Foundation Phase Teaching)"];

let aps24MathslitisSmaller = ["Dip (Entrepreneurship)", "Dip (Human Resource Management)"];

let aps24Mathslit70English50 = ["Dip (Economics)"];

let aps28MathslitisGreaterThanEnglish = ["Dip (Computer Science)", "Dip (Informatics)", "Dip (Multimedia Computing)"];

//tut-course-calculator-englishhl-mathlit

let aps18Mathslit50hl = ["HCert (Dental Assisting) (*Additional Language 40%)"];

let aps19Mathslit40hl = ["Dip (Administrative Information Management)", "Dip (Contact Centre Management)"];

let aps20Mathslit40hl = ["Dip (Correctional & Rehabilitation Studies)", "Dip (Policing)", "Dip (Public Affairs) (Admin of State)", "Dip (Public Affairs) (Local Government)", "Dip (Traffic Safety & Municipal Police Management)", "Dip (Food Operations Management)"];

let aps23Mathslit40hl = ["Dip (Hospitality Management)"];

let aps20Mathslit60hl = ["Dip (Operations Management)", "Dip (Work Study)"];

let aps20EnglishandMathslit50hl = ["Dip (Adventure Tourism Management)", "Dip (Eco-Tourism Management)", "Dip (Event Management)", "Dip (Animal Sciences)", "Dip (Crop Production)", "Dip (Equine Sciences)"];

let aps21EnglishandMathslit50hl = ["Dip (Intergrated Communication)"];

let aps23EnglishandMathslit50hl = ["HCert (Accounting)"];

let aps24EnglishandMathslit50hl = ["Dip (Administrative Management) (General)"];

let aps25EnglishandMathslit50hl = ["Dip (Casino Resort Management)", "Dip (Nature Conservation)", "Dip (Wildlife Management)"];

let aps21Mathslit70hl = ["HCert (Resource & Waste Management)"];

let aps25Mathslit70hl = ["Dip (Computer Science) (Extended)", "Dip (Informatics) (Extended)", "Dip (Multimedia Computing) (Extended)"];

let aps21Mathslit70andPhysicshl = ["HCert (Water Treatment)"];

let aps24MathslitisBiggerhl = ["Dip (Accounting)", "Dip (Financial Management)", "Dip (Financial Planning)", "Dip (Internal Auditing)", "Dip (Public Finance)"];

let aps25MathslitisBiggerhl = ["BEd (Foundation Phase Teaching)"];

let aps24MathslitisSmallerhl = ["Dip (Entrepreneurship)", "Dip (Human Resource Management)"];

let aps24Mathslit70English50hl = ["Dip (Economics)"];


let aps28MathslitisGreaterThanEnglishhl = ["Dip (Computer Science)", "Dip (Informatics)", "Dip (Multimedia Computing)"];

//tut-course-calculator-englishhl-maths

let aps18EnglishandMathshl = ["HCert (Resource and Waste Management)"];

let aps20EnglishandMathshl = ["Dip (Correctional & Rehabilitation Studies)", "Dip (Policing)", "Dip (Public Affairs) (Admin of State)", "Dip (Public Affairs) (Local Government)", "Dip (Traffic Safety & Municipal Police Management)", "Dip (Food Operations Management)", "Dip (Operations Management)", "Dip (Work Study)"];

let aps23EnglishandMathshl = ["Dip (Hospitality Management)"];

let aps18English50Mathshl = ["HCert (Dental Assisting) (*Additional Language 40%)"];

let aps19English50Mathshl = ["Dip (Administrative Information Management)", "Dip (Contact Centre Management)", "Dip (Animal Sciences)", "Dip (Crop Production)", "Dip (Equine Sciences)"];

let aps20English50Mathshl = ["Dip (Intergrated Communication)", "Dip (Adventure Tourism Management)", "Dip (Eco-tourism Management)", "Dip (Event Management)"];

let aps22English50Mathshl = ["Dip (Accounting)", "Dip (Economics)", "Dip (Financial Management)", "Dip(Financial Planning)", "Dip (Internal Auditing)", "Dip (Public Finance)", "HCert (Accounting)", "Dip (Adult & Community Education & Training) (Specialisation in Consumer Sciences)", "Dip (Marketing)", "Dip (Retail Business Management)", "Dip (Sport Management)", "Dip (Supply Chain Management)", "Dip (Tourism Management)"];

let aps24English50Mathshl = ["Dip (Entrepreneurship)", "Dip (Human Resource Management)", "Dip (Nature Conservation)", "Dip (Wildlife Management)"];

let aps25English50Mathshl = ["Dip (Casino Resort Management)"];

let aps23Englishlowerhl = ["Dip (Computer Science) (Extended)", "Dip (Computer Systems Engineering) (Extended)", "Dip (Informatics) (Extended)", "Dip (Multimedia Computing) (Extended)"];

let aps24WeAreEqualhl = ["BEd (Senior Phase & Further Education & Training Teaching) (Specialisation in Information Technology)"];

let aps25WeAreEqualhl = ["BEd (Foundation Phase Teaching)"];

let aps26MathsisBiggerhl = ["Dip (Computer Science)", "Dip (Informatics)", "Dip (Multimedia Computing)"];

//tut-course-calculator-englishhl

let aps18JustEnglish40hl = ["HCert (Music)"];

let aps20JustEnglish40hl = ["HCert (Contact Centre Management)", "Dip (Fashion Design & Technology)", "Dip (Fine & Applied Arts)", "Dip (Jewellery Design & Manufacture)"];

let aps22JustEnglish40hl = ["Dip (Commercial Photography)"];

let aps20JustEnglish50hl = ["Dip (Performing Arts) (Dance)", "Dip (Performing Arts) (Jazz Music)", "Dip (Performing Arts) (Opera)", "Dip (Performing Arts) (Technical Theatre & Design)", "Dip (Performing Arts) (Theatre Arts & Performance)", "Dip (Language Practise) (*Home Language 50%)", "Dip (Law)", "Dip (Legal Support) (*Additional Language 40%)"];

let aps21JustEnglish50hl = ["Dip (Industrial Design)"];

let aps22JustEnglish50hl = ["Dip (Interior Design)", "Dip (Motion Picture Production)", "Dip (Adult & Community Education & Training) (Specialisation in Languages) (*Additional Language 50%)"];

let aps24JustEnglish50hl = ["Dip (Intergrated Communication Design)", "Dip (Journalism)"];

let aps25JustEnglish50hl = ["BArch", "BArch (Extended)"];

//tut-course-calculator-lifescience-maths

let aps20LsandMathslit = ["Dip (Dental Technology)"];

let aps23LsandMathslit = ["Dip (Somatic Therapy)"];

let aps19LsandMaths = ["Dip (Dental Technology)"];

let aps22LsandMaths = ["Dip (Somatic Therapy)"];

let aps24LsandMaths = ["BEd (Senior Phase and Further Education and Training Teaching) (Specialisation in Mathematics)", "BEd (Senior Phase and Further Education and Training Teaching) (Specialisation in Physical Education)", "BEd (Senior Phase and Further Education and Training Teaching) (Specialisation in Sciences)"];

let aps24LsisLow = ["Dip (Kinesiology and Coaching Science)"];

let aps25LsandMaths = ["BNursing"];

let aps25LsisStill40 = ["Dip (Horticulture)", "Dip (Landscape Technology)"];

let aps26MathslitwithEnglish50 = ["Dip (Horticulture)", "Dip (Landscape Technology)"];

//tut-course-calculator-lifescience-physics-englishhl

let aps21PhysicsandLs = ["Dip (Biotechnology)"];

let aps24PhysicsandLs50 = ["BEnvironmental Health", "Bachelor of Pharmacy", "Bachelor of Radiography in Diagnostics", "BHSci (Biokinetics)", "BHSci (Clinical Technology)", "BHSci (Medical Laboratory Science)", "BHSci (Medical Orthotics & Prosthetics)", "BHSci (Veterinary Technology)"];

let aps25PhysicsandLs50 = ["BEd (Intermediate Phase Teaching)"];

//tut-course-calculator-physics-english-maths

let aps18PhysicsandMaths = ["HCert (Water Treatment)"];

let aps20Maths50Physics = ["HCert (Construction Engineering : Material Test)", "HCert (Construction Engineering : Water & Waste)", "HCert (Electrical Engineering)", "HCert (Industrial Engineering)", "HCert (Mechanical Engineering)"];

let aps19Physicsstill40 = ["Dip (Dental Technology)"];

let aps22Physicsstill40 = ["Dip (Adult & Community Education & Training) (Agriculture) (*Additional Language 50%)", "Dip (Adult & Community Education & Training) (Specialisation in Civil Technology) (*Additional Language)", "Dip (Adult & Community Education & Training) (Specialisation in Electrical & Mechanical)"];

let aps20PhysicsandMathslit = ["Dip (Dental Technology)"];

let aps23PhysicsandMaths50 = ["Dip (Geomatics)"];

let aps21Allis50 = ["Dip (Analytical Chemistry)", "Dip (Environmental Sciences)", "Dip (Geology)", "Dip (Industrial Physics)", "Dip (Water science & Technology)"];

let aps24Allis50 = ["BEd (Senior Phase and Further Education and Training Teaching) (Specialisation in Mathematics)", "BEd (Senior Phase and Further Education and Training Teaching) (Specialisation in Sciences)", "BEd (Senior Phase and Further Education and Training Teaching) (Specialisation in Technology)"];

let aps26Allis50 = ["Dip (Electrical Engineering)"];

let aps23MathsBigger = ["Dip (Information Technology) (Extended)"];

let aps24PhysicsisBigger = ["BSc (Industrial Chemistry)"];

let aps25MathslitwithPhysics = ["Dip (Information Technology) (Extended)"];

let aps25PhysicsisStill40 = ["Dip (Horticulture)", "Dip (Landscape Technology)"];

let aps26PhysicsisStill40 = ["Dip (Building Science)"];

let aps26PhysicsisSmallest = ["Dip (Computer Systems Engineering)", "Dip (Information Technology)"];

let aps28Allis60ExceptEnglish = ["BEngTech (Chemical Engineering)", "BEngTech (Civil Engineering)", "BEngTech (Industrial Engineering)", "BEngTech (Materials Engineering) (Polymer Technology)", "BEngTech (Mechanical Engineering)", "BEngTech (Mechatronics Engineering)", "BEngTech (Metallurgical Engineering)"];

let aps30Allis60ExceptEnglish = ["BEngTech (Electrical Engineering)"];

let aps28Mathslit80 = ["Dip (Information Technology)"];

subjectBtn.addEventListener('click', () => {
  alert('Please click the checkboxes to add percentages of results.')
});
doneBtn.addEventListener('click', () => {
  heyWrapper.classList.add('hide');
  blackScreen.classList.remove('hide');
  subjectPercentages.classList.remove('hide');


//tut-course calculator-english-maths

if(englishfalInput.value >= 40 && mathsInput.value >= 40 && apsInput.value > 17){
  for(let i = 0; i < aps18EnglishandMaths.length; i++) {
    plainInput.innerHTML += `<li> ${aps18EnglishandMaths[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && mathsInput.value >= 40 && apsInput.value > 19){
  for(let i = 0; i < aps20EnglishandMaths.length; i++) {
    plainInput.innerHTML += `<li> ${aps20EnglishandMaths[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && mathsInput.value >= 40 && apsInput.value > 22){
  for(let i = 0; i < aps23EnglishandMaths.length; i++) {
    plainInput.innerHTML += `<li> ${aps23EnglishandMaths[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && mathsInput.value >= 50 && apsInput.value > 22){
  for(let i = 0; i < aps23Englishlower.length; i++) {
    plainInput.innerHTML += `<li> ${aps23Englishlower[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathsInput.value >= 40 && apsInput.value > 17){
  for(let i = 0; i < aps18English50Maths.length; i++) {
    plainInput.innerHTML += `<li> ${aps18English50Maths[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathsInput.value >= 40 && apsInput.value > 18){
  for(let i = 0; i < aps19English50Maths.length; i++) {
    plainInput.innerHTML += `<li> ${aps19English50Maths[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathsInput.value >= 40 && apsInput.value > 19){
  for(let i = 0; i < aps20English50Maths.length; i++) {
    plainInput.innerHTML += `<li> ${aps20English50Maths[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathsInput.value >= 40 && apsInput.value > 21){
  for(let i = 0; i < aps22English50Maths.length; i++) {
    plainInput.innerHTML += `<li> ${aps22English50Maths[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathsInput.value >= 40 && apsInput.value > 23){
  for(let i = 0; i < aps24English50Maths.length; i++) {
    plainInput.innerHTML += `<li> ${aps24English50Maths[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathsInput.value >= 40 && apsInput.value > 24){
  for(let i = 0; i < aps25English50Maths.length; i++) {
    plainInput.innerHTML += `<li> ${aps25English50Maths[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24WeAreEqual.length; i++) {
    plainInput.innerHTML += `<li> ${aps24WeAreEqual[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && itInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24WeAreEqual.length; i++) {
    plainInput.innerHTML += `<li> ${aps24WeAreEqual[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 24){
  for(let i = 0; i < aps25WeAreEqual.length; i++) {
    plainInput.innerHTML += `<li> ${aps25WeAreEqual[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 25){
  for(let i = 0; i < aps26MathsisBigger.length; i++) {
    plainInput.innerHTML += `<li> ${aps26MathsisBigger[i]} </li>`;
  };
}

//tut-course-calculator-accounting

if(englishfalInput.value >= 50 && mathsInput.value >= 40 && accountingInput.value >= 40 && apsInput.value > 21){
  for(let i = 0; i < aps22AccountingandMaths.length; i++) {
    plainInput.innerHTML += `<li> ${aps22AccountingandMaths[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathsInput.value >= 40 && accountingInput.value >= 40 && apsInput.value > 23){
  for(let i = 0; i < aps24AccountingandMaths.length; i++) {
    plainInput.innerHTML += `<li> ${aps24AccountingandMaths[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathslitInput.value >= 50 && accountingInput.value >= 40 && apsInput.value > 23){
  for(let i = 0; i < aps24AccountingandMaths.length; i++) {
    plainInput.innerHTML += `<li> ${aps24AccountingandMaths[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && accountingInput.value >= 50 && apsInput.value > 21){
  for(let i = 0; i < aps23JustAccounting.length; i++) {
    plainInput.innerHTML += `<li> ${aps23JustAccounting[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathsInput.value >= 50 && accountingInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24Accounting50.length; i++) {
    plainInput.innerHTML += `<li> ${aps24Accounting50[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathsInput.value >= 50 && businessInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24Accounting50.length; i++) {
    plainInput.innerHTML += `<li> ${aps24Accounting50[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathsInput.value >= 50 && economicsInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24Accounting50.length; i++) {
    plainInput.innerHTML += `<li> ${aps24Accounting50[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathslitInput.value >= 50 && accountingInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24Accounting50.length; i++) {
    plainInput.innerHTML += `<li> ${aps24Accounting50[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathslitInput.value >= 50 && businessInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24Accounting50.length; i++) {
    plainInput.innerHTML += `<li> ${aps24Accounting50[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathslitInput.value >= 50 && economicsInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24Accounting50.length; i++) {
    plainInput.innerHTML += `<li> ${aps24Accounting50[i]} </li>`;
  };
}

/englishhl/

if(englishhlInput.value >= 50 && mathsInput.value >= 40 && accountingInput.value >= 40 && apsInput.value > 21){
  for(let i = 0; i < aps22AccountingandMaths.length; i++) {
    plainInput.innerHTML += `<li> ${aps22AccountingandMaths[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathsInput.value >= 40 && accountingInput.value >= 40 && apsInput.value > 23){
  for(let i = 0; i < aps24AccountingandMaths.length; i++) {
    plainInput.innerHTML += `<li> ${aps24AccountingandMaths[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 50 && accountingInput.value >= 40 && apsInput.value > 23){
  for(let i = 0; i < aps24AccountingandMaths.length; i++) {
    plainInput.innerHTML += `<li> ${aps24AccountingandMaths[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && accountingInput.value >= 50 && apsInput.value > 21){
  for(let i = 0; i < aps23JustAccounting.length; i++) {
    plainInput.innerHTML += `<li> ${aps23JustAccounting[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathsInput.value >= 50 && accountingInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24Accounting50.length; i++) {
    plainInput.innerHTML += `<li> ${aps24Accounting50[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathsInput.value >= 50 && businessInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24Accounting50.length; i++) {
    plainInput.innerHTML += `<li> ${aps24Accounting50[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathsInput.value >= 50 && economicsInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24Accounting50.length; i++) {
    plainInput.innerHTML += `<li> ${aps24Accounting50[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 50 && accountingInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24Accounting50.length; i++) {
    plainInput.innerHTML += `<li> ${aps24Accounting50[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 50 && businessInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24Accounting50.length; i++) {
    plainInput.innerHTML += `<li> ${aps24Accounting50[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 50 && economicsInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24Accounting50.length; i++) {
    plainInput.innerHTML += `<li> ${aps24Accounting50[i]} </li>`;
  };
}

//tut-course-calculator-agriculture

if(englishfalInput.value >= 50 && mathsInput.value >= 50 && agricultureInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24Agriculture.length; i++) {
    plainInput.innerHTML += `<li> ${aps24Agriculture[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathslitInput.value >= 50 && agricultureInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24Agriculture.length; i++) {
    plainInput.innerHTML += `<li> ${aps24Agriculture[i]} </li>`;
  };
}

/englishhl/

if(englishhlInput.value >= 50 && mathsInput.value >= 50 && agricultureInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24Agriculture.length; i++) {
    plainInput.innerHTML += `<li> ${aps24Agriculture[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 50 && agricultureInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24Agriculture.length; i++) {
    plainInput.innerHTML += `<li> ${aps24Agriculture[i]} </li>`;
  };
}

//tut-course-calculator-business

if(englishfalInput.value >= 50 && mathsInput.value >= 40 && businessInput.value >= 40 && apsInput.value > 21){
  for(let i = 0; i < aps22AccountingandMaths.length; i++) {
    plainInput.innerHTML += `<li> ${aps22AccountingandMaths[i]} </li>`;
  };
}

/englishhl/

if(englishhlInput.value >= 50 && mathsInput.value >= 40 && businessInput.value >= 40 && apsInput.value > 21){
  for(let i = 0; i < aps22AccountingandMaths.length; i++) {
    plainInput.innerHTML += `<li> ${aps22AccountingandMaths[i]} </li>`;
  };
}

//tut-course-calculator-consumer

if(englishfalInput.value >= 50 && mathsInput.value >= 50 && consumerInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24ConsumerSciences.length; i++) {
    plainInput.innerHTML += `<li> ${aps24ConsumerSciences[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathslitInput.value >= 50 && consumerInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24ConsumerSciences.length; i++) {
    plainInput.innerHTML += `<li> ${aps24ConsumerSciences[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathsInput.value >= 50 && tourismInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24ConsumerSciences.length; i++) {
    plainInput.innerHTML += `<li> ${aps24ConsumerSciences[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathslitInput.value >= 50 && tourismInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24ConsumerSciences.length; i++) {
    plainInput.innerHTML += `<li> ${aps24ConsumerSciences[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathsInput.value >= 50 && hospitalityInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24ConsumerSciences.length; i++) {
    plainInput.innerHTML += `<li> ${aps24ConsumerSciences[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathslitInput.value >= 50 && hospitalityInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24ConsumerSciences.length; i++) {
    plainInput.innerHTML += `<li> ${aps24ConsumerSciences[i]} </li>`;
  };
}

/englishhl/

if(englishhlInput.value >= 50 && mathsInput.value >= 50 && consumerInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24ConsumerSciences.length; i++) {
    plainInput.innerHTML += `<li> ${aps24ConsumerSciences[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 50 && consumerInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24ConsumerSciences.length; i++) {
    plainInput.innerHTML += `<li> ${aps24ConsumerSciences[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathsInput.value >= 50 && tourismInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24ConsumerSciences.length; i++) {
    plainInput.innerHTML += `<li> ${aps24ConsumerSciences[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 50 && tourismInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24ConsumerSciences.length; i++) {
    plainInput.innerHTML += `<li> ${aps24ConsumerSciences[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathsInput.value >= 50 && hospitalityInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24ConsumerSciences.length; i++) {
    plainInput.innerHTML += `<li> ${aps24ConsumerSciences[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 50 && hospitalityInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24ConsumerSciences.length; i++) {
    plainInput.innerHTML += `<li> ${aps24ConsumerSciences[i]} </li>`;
  };
}

//tut-course-calculator-english-mathlit

if(englishfalInput.value >= 50 && mathslitInput.value >= 50 && apsInput.value > 17){
  for(let i = 0; i < aps18Mathslit50.length; i++) {
    plainInput.innerHTML += `<li> ${aps18Mathslit50[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathslitInput.value >= 50 && apsInput.value > 18){
  for(let i = 0; i < aps19Mathslit40.length; i++) {
    plainInput.innerHTML += `<li> ${aps19Mathslit40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && mathslitInput.value >= 40 && apsInput.value > 19){
  for(let i = 0; i < aps20Mathslit40.length; i++) {
    plainInput.innerHTML += `<li> ${aps20Mathslit40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && mathslitInput.value >= 40 && apsInput.value > 22){
  for(let i = 0; i < aps23Mathslit40.length; i++) {
    plainInput.innerHTML += `<li> ${aps23Mathslit40[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathslitInput.value >= 40 && apsInput.value > 24){
  for(let i = 0; i < aps24MathslitisSmaller.length; i++) {
    plainInput.innerHTML += `<li> ${aps24MathslitisSmaller[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && mathslitInput.value >= 60 && apsInput.value > 19){
  for(let i = 0; i < aps20Mathslit60.length; i++) {
    plainInput.innerHTML += `<li> ${aps20Mathslit60[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathslitInput.value >= 50 && apsInput.value > 19){
  for(let i = 0; i < aps20EnglishandMathslit50.length; i++) {
    plainInput.innerHTML += `<li> ${aps20EnglishandMathslit50[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathslitInput.value >= 50 && apsInput.value > 20){
  for(let i = 0; i < aps21EnglishandMathslit50.length; i++) {
    plainInput.innerHTML += `<li> ${aps21EnglishandMathslit50[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathslitInput.value >= 50 && apsInput.value > 22){
  for(let i = 0; i < aps23EnglishandMathslit50.length; i++) {
    plainInput.innerHTML += `<li> ${aps23EnglishandMathslit50[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathslitInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24EnglishandMathslit50.length; i++) {
    plainInput.innerHTML += `<li> ${aps24EnglishandMathslit50[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathslitInput.value >= 50 && apsInput.value > 24){
  for(let i = 0; i < aps24EnglishandMathslit50.length; i++) {
    plainInput.innerHTML += `<li> ${aps24EnglishandMathslit50[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && mathslitInput.value >= 70 && apsInput.value > 20){
  for(let i = 0; i < aps21Mathslit70.length; i++) {
    plainInput.innerHTML += `<li> ${aps21Mathslit70[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && mathslitInput.value >= 70 && apsInput.value > 24){
  for(let i = 0; i < aps25Mathslit70.length; i++) {
    plainInput.innerHTML += `<li> ${aps25Mathslit70[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && mathslitInput.value >= 70 && physicsInput.value >= 40 && apsInput.value > 20){
  for(let i = 0; i < aps21Mathslit70andPhysics.length; i++) {
    plainInput.innerHTML += `<li> ${aps21Mathslit70andPhysics[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathslitInput.value >= 60 && apsInput.value > 23){
  for(let i = 0; i < aps24MathslitisBigger.length; i++) {
    plainInput.innerHTML += `<li> ${aps24MathslitisBigger[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathslitInput.value >= 70 && apsInput.value > 23){
  for(let i = 0; i < aps24Mathslit70English50.length; i++) {
    plainInput.innerHTML += `<li> ${aps24Mathslit70English50[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathslitInput.value >= 80 && apsInput.value > 27){
  for(let i = 0; i < aps28MathslitisGreaterThanEnglish.length; i++) {
    plainInput.innerHTML += `<li> ${aps28MathslitisGreaterThanEnglish[i]} </li>`;
  };
}

//tut-course-calculator-english

if(englishfalInput.value >= 40 && apsInput.value > 17){
  for(let i = 0; i < aps18JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps18JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && apsInput.value > 19){
  for(let i = 0; i < aps20JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps20JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && apsInput.value > 21){
  for(let i = 0; i < aps22JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps22JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && apsInput.value > 19){
  for(let i = 0; i < aps20JustEnglish50.length; i++) {
    plainInput.innerHTML += `<li> ${aps20JustEnglish50[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && apsInput.value > 20){
  for(let i = 0; i < aps21JustEnglish50.length; i++) {
    plainInput.innerHTML += `<li> ${aps21JustEnglish50[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && apsInput.value > 21){
  for(let i = 0; i < aps22JustEnglish50.length; i++) {
    plainInput.innerHTML += `<li> ${aps22JustEnglish50[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24JustEnglish50.length; i++) {
    plainInput.innerHTML += `<li> ${aps24JustEnglish50[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && apsInput.value > 24){
  for(let i = 0; i < aps25JustEnglish50.length; i++) {
    plainInput.innerHTML += `<li> ${aps25JustEnglish50[i]} </li>`;
  };
}

//tut-course-calculator-englishhl-mathlit

if(englishhlInput.value >= 50 && mathslitInput.value >= 50 && apsInput.value > 17){
  for(let i = 0; i < aps18Mathslit50hl.length; i++) {
    plainInput.innerHTML += `<li> ${aps18Mathslit50hl[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 50 && apsInput.value > 18){
  for(let i = 0; i < aps19Mathslit40hl.length; i++) {
    plainInput.innerHTML += `<li> ${aps19Mathslit40hl[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && mathslitInput.value >= 40 && apsInput.value > 19){
  for(let i = 0; i < aps20Mathslit40hl.length; i++) {
    plainInput.innerHTML += `<li> ${aps20Mathslit40hl[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && mathslitInput.value >= 40 && apsInput.value > 22){
  for(let i = 0; i < aps23Mathslit40hl.length; i++) {
    plainInput.innerHTML += `<li> ${aps23Mathslit40hl[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 40 && apsInput.value > 24){
  for(let i = 0; i < aps24MathslitisSmallerhl.length; i++) {
    plainInput.innerHTML += `<li> ${aps24MathslitisSmallerhl[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && mathslitInput.value >= 60 && apsInput.value > 19){
  for(let i = 0; i < aps20Mathslit60hl.length; i++) {
    plainInput.innerHTML += `<li> ${aps20Mathslit60hl[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 50 && apsInput.value > 19){
  for(let i = 0; i < aps20EnglishandMathslit50hl.length; i++) {
    plainInput.innerHTML += `<li> ${aps20EnglishandMathslit50hl[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 50 && apsInput.value > 20){
  for(let i = 0; i < aps21EnglishandMathslit50hl.length; i++) {
    plainInput.innerHTML += `<li> ${aps21EnglishandMathslit50hl[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 50 && apsInput.value > 22){
  for(let i = 0; i < aps23EnglishandMathslit50hl.length; i++) {
    plainInput.innerHTML += `<li> ${aps23EnglishandMathslit50hl[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24EnglishandMathslit50hl.length; i++) {
    plainInput.innerHTML += `<li> ${aps24EnglishandMathslit50hl[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 50 && apsInput.value > 24){
  for(let i = 0; i < aps24EnglishandMathslit50hl.length; i++) {
    plainInput.innerHTML += `<li> ${aps24EnglishandMathslit50hl[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && mathslitInput.value >= 70 && apsInput.value > 20){
  for(let i = 0; i < aps21Mathslit70hl.length; i++) {
    plainInput.innerHTML += `<li> ${aps21Mathslit70hl[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && mathslitInput.value >= 70 && apsInput.value > 24){
  for(let i = 0; i < aps25Mathslit70hl.length; i++) {
    plainInput.innerHTML += `<li> ${aps25Mathslit70hl[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && mathslitInput.value >= 70 && physicsInput.value >= 40 && apsInput.value > 20){
  for(let i = 0; i < aps21Mathslit70andPhysicshl.length; i++) {
    plainInput.innerHTML += `<li> ${aps21Mathslit70andPhysicshl[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 60 && apsInput.value > 23){
  for(let i = 0; i < aps24MathslitisBiggerhl.length; i++) {
    plainInput.innerHTML += `<li> ${aps24MathslitisBiggerhl[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 70 && apsInput.value > 23){
  for(let i = 0; i < aps24Mathslit70English50hl.length; i++) {
    plainInput.innerHTML += `<li> ${aps24Mathslit70English50hl[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 80 && apsInput.value > 27){
  for(let i = 0; i < aps28MathslitisGreaterThanEnglishhl.length; i++) {
    plainInput.innerHTML += `<li> ${aps28MathslitisGreaterThanEnglishhl[i]} </li>`;
  };
}

//tut-course-calculator-englishhl-maths

if(englishhlInput.value >= 40 && mathsInput.value >= 40 && apsInput.value > 17){
  for(let i = 0; i < aps18EnglishandMathshl.length; i++) {
    plainInput.innerHTML += `<li> ${aps18EnglishandMathshl[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && mathsInput.value >= 40 && apsInput.value > 19){
  for(let i = 0; i < aps20EnglishandMathshl.length; i++) {
    plainInput.innerHTML += `<li> ${aps20EnglishandMathshl[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && mathsInput.value >= 40 && apsInput.value > 22){
  for(let i = 0; i < aps23EnglishandMathshl.length; i++) {
    plainInput.innerHTML += `<li> ${aps23EnglishandMathshl[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && mathsInput.value >= 50 && apsInput.value > 22){
  for(let i = 0; i < aps23Englishlowerhl.length; i++) {
    plainInput.innerHTML += `<li> ${aps23Englishlowerhl[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathsInput.value >= 40 && apsInput.value > 17){
  for(let i = 0; i < aps18English50Mathshl.length; i++) {
    plainInput.innerHTML += `<li> ${aps18English50Mathshl[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathsInput.value >= 40 && apsInput.value > 18){
  for(let i = 0; i < aps19English50Mathshl.length; i++) {
    plainInput.innerHTML += `<li> ${aps19English50Mathshl[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathsInput.value >= 40 && apsInput.value > 19){
  for(let i = 0; i < aps20English50Mathshl.length; i++) {
    plainInput.innerHTML += `<li> ${aps20English50Mathshl[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathsInput.value >= 40 && apsInput.value > 21){
  for(let i = 0; i < aps22English50Mathshl.length; i++) {
    plainInput.innerHTML += `<li> ${aps22English50Mathshl[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathsInput.value >= 40 && apsInput.value > 23){
  for(let i = 0; i < aps24English50Mathshl.length; i++) {
    plainInput.innerHTML += `<li> ${aps24English50Mathshl[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathsInput.value >= 40 && apsInput.value > 24){
  for(let i = 0; i < aps25English50Mathshl.length; i++) {
    plainInput.innerHTML += `<li> ${aps25English50Mathshl[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24WeAreEqualhl.length; i++) {
    plainInput.innerHTML += `<li> ${aps24WeAreEqualhl[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && itInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24WeAreEqualhl.length; i++) {
    plainInput.innerHTML += `<li> ${aps24WeAreEqualhl[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 24){
  for(let i = 0; i < aps25WeAreEqualhl.length; i++) {
    plainInput.innerHTML += `<li> ${aps25WeAreEqualhl[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 25){
  for(let i = 0; i < aps26MathsisBiggerhl.length; i++) {
    plainInput.innerHTML += `<li> ${aps26MathsisBiggerhl[i]} </li>`;
  };
}

//tut-course-calculator-englishhl

if(englishhlInput.value >= 40 && apsInput.value > 17){
  for(let i = 0; i < aps18JustEnglish40hl.length; i++) {
    plainInput.innerHTML += `<li> ${aps18JustEnglish40hl[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && apsInput.value > 19){
  for(let i = 0; i < aps20JustEnglish40hl.length; i++) {
    plainInput.innerHTML += `<li> ${aps20JustEnglish40hl[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && apsInput.value > 21){
  for(let i = 0; i < aps22JustEnglish40hl.length; i++) {
    plainInput.innerHTML += `<li> ${aps22JustEnglish40hl[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && apsInput.value > 19){
  for(let i = 0; i < aps20JustEnglish50hl.length; i++) {
    plainInput.innerHTML += `<li> ${aps20JustEnglish50hl[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && apsInput.value > 20){
  for(let i = 0; i < aps21JustEnglish50hl.length; i++) {
    plainInput.innerHTML += `<li> ${aps21JustEnglish50hl[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && apsInput.value > 21){
  for(let i = 0; i < aps22JustEnglish50hl.length; i++) {
    plainInput.innerHTML += `<li> ${aps22JustEnglish50hl[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24JustEnglish50hl.length; i++) {
    plainInput.innerHTML += `<li> ${aps24JustEnglish50hl[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && apsInput.value > 24){
  for(let i = 0; i < aps25JustEnglish50hl.length; i++) {
    plainInput.innerHTML += `<li> ${aps25JustEnglish50hl[i]} </li>`;
  };
}

//tut-course-calculator-lifescience-maths

if(englishfalInput.value >= 50 && lsInput.value >= 40  && mathslitInput.value >= 50 && apsInput.value > 19){
  for(let i = 0; i < aps20LsandMathslit.length; i++) {
    plainInput.innerHTML += `<li> ${aps20LsandMathslit[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && lsInput.value >= 40  && mathslitInput.value >= 50 && apsInput.value > 22){
  for(let i = 0; i < aps23LsandMathslit.length; i++) {
    plainInput.innerHTML += `<li> ${aps23LsandMathslit[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && lsInput.value >= 40  && mathslitInput.value >= 50 && apsInput.value > 25){
  for(let i = 0; i < aps26MathslitwithEnglish50.length; i++) {
    plainInput.innerHTML += `<li> ${aps26MathslitwithEnglish50[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && lsInput.value >= 40  && mathsInput.value >= 40 && apsInput.value > 23){
  for(let i = 0; i < aps24LsisLow.length; i++) {
    plainInput.innerHTML += `<li> ${aps24LsisLow[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && lsInput.value >= 40  && mathsInput.value >= 50 && apsInput.value > 18){
  for(let i = 0; i < aps19LsandMaths.length; i++) {
    plainInput.innerHTML += `<li> ${aps19LsandMaths[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && lsInput.value >= 50  && mathsInput.value >= 50 && apsInput.value > 21){
  for(let i = 0; i < aps22LsandMaths.length; i++) {
    plainInput.innerHTML += `<li> ${aps22LsandMaths[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && lsInput.value >= 50  && mathsInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24LsandMaths.length; i++) {
    plainInput.innerHTML += `<li> ${aps24LsandMaths[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && lsInput.value >= 50  && mathsInput.value >= 50 && apsInput.value > 24){
  for(let i = 0; i < aps25LsandMaths.length; i++) {
    plainInput.innerHTML += `<li> ${aps25LsandMaths[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && lsInput.value >= 40  && mathsInput.value >= 40 && apsInput.value > 24){
  for(let i = 0; i < aps25LsisStill40.length; i++) {
    plainInput.innerHTML += `<li> ${aps25LsisStill40[i]} </li>`;
  };
}

/englishhl/

if(englishhlInput.value >= 50 && lsInput.value >= 40  && mathslitInput.value >= 50 && apsInput.value > 19){
  for(let i = 0; i < aps20LsandMathslit.length; i++) {
    plainInput.innerHTML += `<li> ${aps20LsandMathslit[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && lsInput.value >= 40  && mathslitInput.value >= 50 && apsInput.value > 22){
  for(let i = 0; i < aps23LsandMathslit.length; i++) {
    plainInput.innerHTML += `<li> ${aps23LsandMathslit[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && lsInput.value >= 40  && mathslitInput.value >= 50 && apsInput.value > 25){
  for(let i = 0; i < aps26MathslitwithEnglish50.length; i++) {
    plainInput.innerHTML += `<li> ${aps26MathslitwithEnglish50[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && lsInput.value >= 40  && mathsInput.value >= 40 && apsInput.value > 23){
  for(let i = 0; i < aps24LsisLow.length; i++) {
    plainInput.innerHTML += `<li> ${aps24LsisLow[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && lsInput.value >= 40  && mathsInput.value >= 50 && apsInput.value > 18){
  for(let i = 0; i < aps19LsandMaths.length; i++) {
    plainInput.innerHTML += `<li> ${aps19LsandMaths[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && lsInput.value >= 50  && mathsInput.value >= 50 && apsInput.value > 21){
  for(let i = 0; i < aps22LsandMaths.length; i++) {
    plainInput.innerHTML += `<li> ${aps22LsandMaths[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && lsInput.value >= 50  && mathsInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24LsandMaths.length; i++) {
    plainInput.innerHTML += `<li> ${aps24LsandMaths[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && lsInput.value >= 50  && mathsInput.value >= 50 && apsInput.value > 24){
  for(let i = 0; i < aps25LsandMaths.length; i++) {
    plainInput.innerHTML += `<li> ${aps25LsandMaths[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && lsInput.value >= 40  && mathsInput.value >= 40 && apsInput.value > 24){
  for(let i = 0; i < aps25LsisStill40.length; i++) {
    plainInput.innerHTML += `<li> ${aps25LsisStill40[i]} </li>`;
  };
}

//tut-course-calculator-lifescience-physics-englishhl

if(englishfalInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 50 && lsInput.value >= 40 && apsInput.value > 20){
  for(let i = 0; i < aps21PhysicsandLs.length; i++) {
    plainInput.innerHTML += `<li> ${aps21PhysicsandLs[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 50 && lsInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24PhysicsandLs50.length; i++) {
    plainInput.innerHTML += `<li> ${aps24PhysicsandLs50[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 50 && lsInput.value >= 50 && apsInput.value > 24){
  for(let i = 0; i < aps25PhysicsandLs50.length; i++) {
    plainInput.innerHTML += `<li> ${aps25PhysicsandLs50[i]} </li>`;
  };
}

/englishhl/

if(englishhlInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 50 && lsInput.value >= 40 && apsInput.value > 20){
  for(let i = 0; i < aps21PhysicsandLs.length; i++) {
    plainInput.innerHTML += `<li> ${aps21PhysicsandLs[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 50 && lsInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24PhysicsandLs50.length; i++) {
    plainInput.innerHTML += `<li> ${aps24PhysicsandLs50[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 50 && lsInput.value >= 50 && apsInput.value > 24){
  for(let i = 0; i < aps25PhysicsandLs50.length; i++) {
    plainInput.innerHTML += `<li> ${aps25PhysicsandLs50[i]} </li>`;
  };
}

//tut-course-calculator-physics-english-maths

if(englishfalInput.value >= 40 && physicsInput.value >= 40  && mathsInput.value >= 40 && apsInput.value > 17){
  for(let i = 0; i < aps18PhysicsandMaths.length; i++) {
    plainInput.innerHTML += `<li> ${aps18PhysicsandMaths[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && physicsInput.value >= 40  && mathsInput.value >= 50 && apsInput.value > 22){
  for(let i = 0; i < aps23MathsBigger.length; i++) {
    plainInput.innerHTML += `<li> ${aps23MathsBigger[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && physicsInput.value >= 40  && mathsInput.value >= 40 && apsInput.value > 18){
  for(let i = 0; i < aps19Physicsstill40.length; i++) {
    plainInput.innerHTML += `<li> ${aps19Physicsstill40[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && physicsInput.value >= 40  && mathsInput.value >= 40 && apsInput.value > 21){
  for(let i = 0; i < aps22Physicsstill40.length; i++) {
    plainInput.innerHTML += `<li> ${aps22Physicsstill40[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && physicsInput.value >= 40  && mathsInput.value >= 50 && apsInput.value > 19){
  for(let i = 0; i < aps20Maths50Physics.length; i++) {
    plainInput.innerHTML += `<li> ${aps20Maths50Physics[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && physicsInput.value >= 40  && mathslitInput.value >= 50 && apsInput.value > 19){
  for(let i = 0; i < aps20PhysicsandMathslit.length; i++) {
    plainInput.innerHTML += `<li> ${aps20PhysicsandMathslit[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && physicsInput.value >= 40  && mathsInput.value >= 50 && apsInput.value > 22){
  for(let i = 0; i < aps23PhysicsandMaths50.length; i++) {
    plainInput.innerHTML += `<li> ${aps23PhysicsandMaths50[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 50 && apsInput.value > 19){
  for(let i = 0; i < aps21Allis50.length; i++) {
    plainInput.innerHTML += `<li> ${aps21Allis50[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24Allis50.length; i++) {
    plainInput.innerHTML += `<li> ${aps24Allis50[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 50 && apsInput.value > 25){
  for(let i = 0; i < aps26Allis50.length; i++) {
    plainInput.innerHTML += `<li> ${aps26Allis50[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && physicsInput.value >= 40  && mathslitInput.value >= 50 && apsInput.value > 25){
  for(let i = 0; i < aps26MathslitwithEnglish50.length; i++) {
    plainInput.innerHTML += `<li> ${aps26MathslitwithEnglish50[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && physicsInput.value >= 40  && mathslitInput.value >= 70 && apsInput.value > 24){
  for(let i = 0; i < aps25MathslitwithPhysics.length; i++) {
    plainInput.innerHTML += `<li> ${aps25MathslitwithPhysics[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && physicsInput.value >= 40  && mathsInput.value >= 40 && apsInput.value > 24){
  for(let i = 0; i < aps25PhysicsisStill40.length; i++) {
    plainInput.innerHTML += `<li> ${aps25PhysicsisStill40[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && physicsInput.value >= 40  && mathsInput.value >= 40 && apsInput.value > 25){
  for(let i = 0; i < aps26PhysicsisStill40.length; i++) {
    plainInput.innerHTML += `<li> ${aps26PhysicsisStill40[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && physicsInput.value >= 40  && mathsInput.value >= 60 && apsInput.value > 25){
  for(let i = 0; i < aps26PhysicsisSmallest.length; i++) {
    plainInput.innerHTML += `<li> ${aps26PhysicsisSmallest[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && physicsInput.value >= 60  && mathsInput.value >= 60 && apsInput.value > 27){
  for(let i = 0; i < aps28Allis60ExceptEnglish.length; i++) {
    plainInput.innerHTML += `<li> ${aps28Allis60ExceptEnglish[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && physicsInput.value >= 60  && mathsInput.value >= 60 && apsInput.value > 29){
  for(let i = 0; i < aps30Allis60ExceptEnglish.length; i++) {
    plainInput.innerHTML += `<li> ${aps30Allis60ExceptEnglish[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && physicsInput.value >= 40  && mathslitInput.value >= 80 && apsInput.value > 27){
  for(let i = 0; i < aps28Mathslit80.length; i++) {
    plainInput.innerHTML += `<li> ${aps28Mathslit80[i]} </li>`;
  };
}

/englishhl/
if(englishhlInput.value >= 40 && physicsInput.value >= 40  && mathsInput.value >= 40 && apsInput.value > 17){
  for(let i = 0; i < aps18PhysicsandMaths.length; i++) {
    plainInput.innerHTML += `<li> ${aps18PhysicsandMaths[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && physicsInput.value >= 40  && mathsInput.value >= 50 && apsInput.value > 22){
  for(let i = 0; i < aps23MathsBigger.length; i++) {
    plainInput.innerHTML += `<li> ${aps23MathsBigger[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && physicsInput.value >= 40  && mathsInput.value >= 40 && apsInput.value > 18){
  for(let i = 0; i < aps19Physicsstill40.length; i++) {
    plainInput.innerHTML += `<li> ${aps19Physicsstill40[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && physicsInput.value >= 40  && mathsInput.value >= 40 && apsInput.value > 21){
  for(let i = 0; i < aps22Physicsstill40.length; i++) {
    plainInput.innerHTML += `<li> ${aps22Physicsstill40[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && physicsInput.value >= 40  && mathsInput.value >= 50 && apsInput.value > 19){
  for(let i = 0; i < aps20Maths50Physics.length; i++) {
    plainInput.innerHTML += `<li> ${aps20Maths50Physics[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && physicsInput.value >= 40  && mathslitInput.value >= 50 && apsInput.value > 19){
  for(let i = 0; i < aps20PhysicsandMathslit.length; i++) {
    plainInput.innerHTML += `<li> ${aps20PhysicsandMathslit[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && physicsInput.value >= 40  && mathsInput.value >= 50 && apsInput.value > 22){
  for(let i = 0; i < aps23PhysicsandMaths50.length; i++) {
    plainInput.innerHTML += `<li> ${aps23PhysicsandMaths50[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 50 && apsInput.value > 19){
  for(let i = 0; i < aps21Allis50.length; i++) {
    plainInput.innerHTML += `<li> ${aps21Allis50[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24Allis50.length; i++) {
    plainInput.innerHTML += `<li> ${aps24Allis50[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 50 && apsInput.value > 25){
  for(let i = 0; i < aps26Allis50.length; i++) {
    plainInput.innerHTML += `<li> ${aps26Allis50[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && physicsInput.value >= 40  && mathslitInput.value >= 50 && apsInput.value > 25){
  for(let i = 0; i < aps26MathslitwithEnglish50.length; i++) {
    plainInput.innerHTML += `<li> ${aps26MathslitwithEnglish50[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && physicsInput.value >= 40  && mathslitInput.value >= 70 && apsInput.value > 24){
  for(let i = 0; i < aps25MathslitwithPhysics.length; i++) {
    plainInput.innerHTML += `<li> ${aps25MathslitwithPhysics[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && physicsInput.value >= 40  && mathsInput.value >= 40 && apsInput.value > 24){
  for(let i = 0; i < aps25PhysicsisStill40.length; i++) {
    plainInput.innerHTML += `<li> ${aps25PhysicsisStill40[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && physicsInput.value >= 40  && mathsInput.value >= 40 && apsInput.value > 25){
  for(let i = 0; i < aps26PhysicsisStill40.length; i++) {
    plainInput.innerHTML += `<li> ${aps26PhysicsisStill40[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && physicsInput.value >= 40  && mathsInput.value >= 60 && apsInput.value > 25){
  for(let i = 0; i < aps26PhysicsisSmallest.length; i++) {
    plainInput.innerHTML += `<li> ${aps26PhysicsisSmallest[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && physicsInput.value >= 60  && mathsInput.value >= 60 && apsInput.value > 27){
  for(let i = 0; i < aps28Allis60ExceptEnglish.length; i++) {
    plainInput.innerHTML += `<li> ${aps28Allis60ExceptEnglish[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && physicsInput.value >= 60  && mathsInput.value >= 60 && apsInput.value > 29){
  for(let i = 0; i < aps30Allis60ExceptEnglish.length; i++) {
    plainInput.innerHTML += `<li> ${aps30Allis60ExceptEnglish[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && physicsInput.value >= 40  && mathslitInput.value >= 80 && apsInput.value > 27){
  for(let i = 0; i < aps28Mathslit80.length; i++) {
    plainInput.innerHTML += `<li> ${aps28Mathslit80[i]} </li>`;
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