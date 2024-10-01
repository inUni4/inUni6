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

//cput-course-calculator-accounting

let aps38JustAccounting = ["Diploma in Accountancy"];

//cput-course-calculator-business

//cput-course-calculator-economics

//cput-course-calculator-geography

//cput-course-calculator-tourism

let aps30JustEconomics = ["Diploma in Urban and Regional Planning"];

//cput-course-calculator-english-math

let aps23EnglishMaths30 = ["Diploma in Sport & Leisure Management (Extended)"];

let aps24EnglishMaths30 = ["Diploma in Human Resource Management (Extended)", "Diploma in Management (Extended)", "Diploma in Marketing (Extended)", "Diploma in Business and Information Administration (Foundation)", "Diploma in Public Administration (Extended)", "Diploma in Tourism Management (Extended)", "Diploma in Events Management (Extended)"];

let aps25EnglishMaths30 = ["Bachelor of Business Informatics", "Diploma in Sport & Leisure Management"];

let aps26EnglishMaths30 = ["Diploma in Entrepreneurship", "Diploma in Human Resources Management", "Diploma in Printing Management", "Diploma in Marketing", "Diploma in Business and Information Administration", "Diploma in Retail Business Management", "Diploma in Hospitality & Hotel Management", "Diploma in Hospitality and Food & Beverage Management", "Diploma in Hospitality Management & Cookery", "Diploma in Real Estate", "Extended Curriculum Fashion", "Extended Curriculum Visual Communication Design", "Extended Curriculum Product Design", "Extended Curriculum Jewellery Design & Manufacture"];

let aps28EnglishMaths30 = ["Diploma in Management", "Diploma in Public Administration", "Diploma in Tourism Management", "Diploma in Events Management"];

let aps23EnglishMaths50 = ["Diploma in Construction (ECP)"];

let aps25EnglishMaths50 = ["Diploma in Construction"];

let aps26EnglishMaths50 = ["Diploma in Mathematical Sciences (ECP)"];

let aps28EnglishMaths50 = ["Diploma in Mathematical Sciences", "Diploma in Urban & Regional Planning (*Additional Language 50%)"];

let aps30EnglishMaths50 = ["Diploma in Architectural Technology", "Diploma in Interior Design"];

let aps28English60Maths40 = ["Diploma in Journalism (*Additional Language 50%)"];

let aps24EnglishMaths40 = ["Diploma in Banking", "Higher Certificate in ICT"];

let aps26EnglishMaths40 = ["Extended Curriculum Architectural Technology", "Extended Curriculum Interior Design", "Diploma in Clothing & Textile Technology"];

let aps28EnglishMaths40 = ["Diploma in Operations Management", "Diploma in Fashion", "Diploma in Visual Communication Design", "Diploma in product Design", "Diploma in Jewellery Design & Manufacture", "Diploma in Applications Development", "Diploma in Communication Networks", "Diploma in Multimedia Applications"];

let aps30EnglishMaths40 = ["Bachelor of Paralegal Studies"];

//cput-course-calculator-english-mathslit

let aps24Mathslit40 = ["Diploma in Public Administration (Extended)"];

let aps26Mathslit50 = ["Diploma in Banking", "Diploma in Human Resource Management (Extended)", "Diploma in Management (Extended)", "Diploma in Marketing (Extended)", "Diploma in Business & Information Administration (Foundation)", "Diploma in Tourism Management", "Diploma in Events Management (Extended)", "Diploma in Entrepreneurship", "Diploma in Printing Management", "Diploma in Retail Business Management", "Diploma in Real Estate", "Extended Curriculum Fashion", "Extended Curriculum Visual Communication Management", "Extended Curriculum Product Design", "Extended Curriculum Jewellery Design & Manufacture"];

let aps27Mathslit50 = ["Bachelor of Business Informatics", "Diploma in Sport & Leisure Management"];

let aps28Mathslit50 = ["Diploma in Human Resources Management", "Diploma in Marketing", "Diploma in Business & Information Administration", "Diploma in Hospitality & Hotel Management", "Diploma in Hospitality and Food & Beverage Management", "Diploma in Hospitality Management & Professional Cookery", "Diploma in Clothing & Textile Technology"];

let aps30Mathslit50 = ["Diploma in Management", "Diploma in Tourism Management", "Diploma in Events Management", "Bachelor of Paralegal Studies"];

let aps28Mathslit60 = ["Extended Curriculum Architectural Technology", "Extended Curriculum Interior Design", "Diploma in Fashion", "Diploma in Visual Communication Design", "Diploma in Product Design", "Diploma in Jewellery Design & Manufacture"];

let aps30Mathslit60 = ["Diploma in Applications Development", "Diploma in Communication Networks", "Diploma in Multimedia Applications"];

let aps30MathslitandEnglish60 = ["Diploma in Journalism (*Additional Language 50%)", "Diploma in Public Relations & Communication (*Additional Language 50%)"];

let aps32MathslitandEnglish70 = ["Diploma in Architectural Technology", "Diploma in Interior Design"];

//cput-course-calculator-english

let aps30JustEnglish50 = ["Diploma in Photography"];

let aps30JustEnglish60 = ["Diploma in Film Production"];

let aps32JustEnglish40 = ["Bachelor in Education: Foundation Phase Teaching", "Bachelor in Education: Intermediate Phase Teaching"];

let aps32EnglishwithPhysics = ["Bachelor in Education: Senior Phase Teaching & Further Education & Training (FET) Teaching"];

//cput-course-calculator-lifescience-maths

let aps24JustLs = ["Diploma in Somatology"];

let aps25JustLs40 = ["HC in Dental Assisting"];

let aps25JustLs50 = ["Diploma in Somatology"];

let aps28JustLs50 = ["Diploma in Nature Conservation (ECP)"];

let aps30JustLs50 = ["Diploma in Nature Conservation", "Diploma in Horticulture", "Diploma in Landscape Architecture"];

let aps30MathslitandLs = ["Diploma in Nature Conservation (ECP)", "Diploma in Horticulture (ECP)", "Diploma in Landscape Architecture"];

let aps32LsandMathslit = ["Diploma in Nature Conservation", "Diploma in Horticulture", "Diploma in Landscape Architecture"];

//cput-course-calculator-physics-english-maths

let aps23Physics50 = ["Diploma in Chemical Engineering (ECP)", "Diploma in Civil Engineering (ECP)", "Diploma in Engineering Technology in Electrical Engineering (ECP)", "Diploma in Engineering Technology in Computer Engineering (ECP)", "Diploma in Industrial Engineering (ECP)", "Diploma in Mechanical Engineering (ECP)"];

let aps26PhysicsisHigher = ["Diploma in Consumer Science: Food & Nutrition (ECP)"];

let aps28PhysicsisHigher = ["Diplomer in Consumer Science: Food & Nutrition"];

let aps26PhysicsandLs = ["Diploma in Environmental Management (ECP)"];

let aps28PhysicsandLs = ["Diploma in Environmental Management"];

let aps26Allis40 = ["HC in Emergency Medical Care"];

let aps28Allis40 = ["Diploma in Emergency Care"];

let aps27MathsisLow = ["BHSc Dental Technology (ECP)", "Bachelor of Nursing (ECP)"];

let aps28MathsisLow = ["Diploma in Agriculture (ECP)", "Diploma in Agricultural Management (ECP)"];

let aps30MathsisLow = ["Diploma in Agriculture", "Diploma in Agricultural Management"];

let aps28Physicsis50 = ["Diploma in Analytical Chemistry (ECP)", "Diploma in Marine Science (ECP)"];

let aps30Physicsis50 = ["Diploma in Analytical Chemistry", "Diploma in Marine Science", "Diploma in Chemical Engineering"];

let aps28Allare50 = ["Diploma in Biotechnology", "Bachelor of Marine Engineering (ECP)", "Bachelor of Nautical Engineering (ECP)"];

let aps30Allare50 = ["Diploma in Biotechnology", "Bachelor of Environmental Health (ECP)", "BHSc in Medical Laboratory Sciences (Extended)", "Bachelor of Emergency Medical Care (ECP)", "Bachelor of Nursing", "BSc in Diagnostic Radiography", "BSc in Diagnostic Ultrasound", "BSc in Radiation Therapy", "BSc in Nuclear Medicine Technology"];

let aps32Allare50 = ["Bachelor of Environmental Health", "BHSc in Opticianry"];

let aps33Allare50 = ["BHSc Dental Technology"];

let aps35Allare50 = ["Bachelor of Emergency Medical Care"];

let aps27MathslitandPhysics = ["Bachelor of Nursing"];

let aps30Physicsis60 = ["Diploma in Civil Engineering", "Diploma in Geomatics (Combining Surveying & Cartography)", "Diploma in Engineering Technology in Electrical Engineering", "Diploma in Engineering Technology in Computer Engineering", "Diploma in Industrial Engineering", "Diploma in Mechanical Engineering", "Diploma in Mechanical Engineering (Mechatronics)"];

let aps36Physicsis60 = ["Bachelor of Engineering Technology in Chemical Engineering", "Bachelor of Engineering Technology in Civil Engineering", "Bachelor of Geomatics", "Bachelor of Engineering Technology in Electrical Engineering", "Bachelor of Engineering Technology in Computer Engineering"];

let aps30Mathslitis60 = ["Diploma in Environmental Management"];

let aps30MathslitandPhysics = ["Bachelor of Nursing"];

let aps32MathslitandPhysics = ["Diploma in Agricultural Management"];

let aps32LsisLow = ["Bachelor of Food Science & Technology"];

let aps36EnglishisLow = ["Bachelor of Marine Engineering", "Bachelor of Nautical Science"];

let aps38PhysicsandLs = ["BHSc in Medical Laboratory Sciences"];

subjectBtn.addEventListener('click', () => {
  alert('Please click the checkboxes to add percentages of results.')
});
doneBtn.addEventListener('click', () => {
  heyWrapper.classList.add('hide');
  blackScreen.classList.remove('hide');
  subjectPercentages.classList.remove('hide');


//cput-course-calculator-accounting

if(englishfalInput.value >= 50 && mathsInput.value >= 40 && accountingInput.value >= 50 &&  apsInput.value > 37){
  for(let i = 0; i < aps38JustAccounting.length; i++) {
    plainInput.innerHTML += `<li> ${aps38JustAccounting[i]} </li>`;
  };
}

/englishhl/

if(englishhlInput.value >= 50 && mathsInput.value >= 40 && accountingInput.value >= 50 &&  apsInput.value > 37){
  for(let i = 0; i < aps38JustAccounting.length; i++) {
    plainInput.innerHTML += `<li> ${aps38JustAccounting[i]} </li>`;
  };
}

//cput-course-calculator-business

if(englishfalInput.value >= 60 && mathsInput.value >= 40 && businessInput.value >= 50 &&  apsInput.value > 29){
  for(let i = 0; i < aps30JustEconomics.length; i++) {
    plainInput.innerHTML += `<li> ${aps30JustEconomics[i]} </li>`;
  };
}

/englishhl/

if(englishhlInput.value >= 60 && mathsInput.value >= 40 && businessInput.value >= 50 &&  apsInput.value > 29){
  for(let i = 0; i < aps30JustEconomics.length; i++) {
    plainInput.innerHTML += `<li> ${aps30JustEconomics[i]} </li>`;
  };
}

//cput-course-calculator-economics

if(englishfalInput.value >= 60 && mathsInput.value >= 40 && economicsInput.value >= 50 &&  apsInput.value > 29){
  for(let i = 0; i < aps30JustEconomics.length; i++) {
    plainInput.innerHTML += `<li> ${aps30JustEconomics[i]} </li>`;
  };
}

/englishhl/

if(englishhlInput.value >= 60 && mathsInput.value >= 40 && economicsInput.value >= 50 &&  apsInput.value > 29){
  for(let i = 0; i < aps30JustEconomics.length; i++) {
    plainInput.innerHTML += `<li> ${aps30JustEconomics[i]} </li>`;
  };
}

//cput-course-calculator-english-math

if(englishfalInput.value >= 50 && mathsInput.value >= 30 && apsInput.value > 22){
  for(let i = 0; i < aps23EnglishMaths30.length; i++) {
    plainInput.innerHTML += `<li> ${aps23EnglishMaths30[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathsInput.value >= 30 && apsInput.value > 23){
  for(let i = 0; i < aps24EnglishMaths30.length; i++) {
    plainInput.innerHTML += `<li> ${aps24EnglishMaths30[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathsInput.value >= 30 && apsInput.value > 24){
  for(let i = 0; i < aps25EnglishMaths30.length; i++) {
    plainInput.innerHTML += `<li> ${aps25EnglishMaths30[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathsInput.value >= 30 && apsInput.value > 25){
  for(let i = 0; i < aps26EnglishMaths30.length; i++) {
    plainInput.innerHTML += `<li> ${aps26EnglishMaths30[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathsInput.value >= 30 && apsInput.value > 27){
  for(let i = 0; i < aps28EnglishMaths30.length; i++) {
    plainInput.innerHTML += `<li> ${aps28EnglishMaths30[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathsInput.value >= 40 && apsInput.value > 23){
  for(let i = 0; i < aps24EnglishMaths40.length; i++) {
    plainInput.innerHTML += `<li> ${aps24EnglishMaths40[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathsInput.value >= 40 && apsInput.value > 25){
  for(let i = 0; i < aps26EnglishMaths40.length; i++) {
    plainInput.innerHTML += `<li> ${aps26EnglishMaths40[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathsInput.value >= 40 && apsInput.value > 27){
  for(let i = 0; i < aps28EnglishMaths40.length; i++) {
    plainInput.innerHTML += `<li> ${aps28EnglishMaths40[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathsInput.value >= 40 && apsInput.value > 29){
  for(let i = 0; i < aps30EnglishMaths40.length; i++) {
    plainInput.innerHTML += `<li> ${aps30EnglishMaths40[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 22){
  for(let i = 0; i < aps23EnglishMaths50.length; i++) {
    plainInput.innerHTML += `<li> ${aps23EnglishMaths50[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 24){
  for(let i = 0; i < aps25EnglishMaths50.length; i++) {
    plainInput.innerHTML += `<li> ${aps25EnglishMaths50[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 25){
  for(let i = 0; i < aps26EnglishMaths50.length; i++) {
    plainInput.innerHTML += `<li> ${aps26EnglishMaths50[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 27){
  for(let i = 0; i < aps28EnglishMaths50.length; i++) {
    plainInput.innerHTML += `<li> ${aps28EnglishMaths50[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 29){
  for(let i = 0; i < aps30EnglishMaths50.length; i++) {
    plainInput.innerHTML += `<li> ${aps30EnglishMaths50[i]} </li>`;
  };
}

if(englishfalInput.value >= 60 && mathsInput.value >= 40 && apsInput.value > 27){
  for(let i = 0; i < aps28English60Maths40.length; i++) {
    plainInput.innerHTML += `<li> ${aps28English60Maths40[i]} </li>`;
  };
}

/englishhl/

if(englishhlInput.value >= 50 && mathsInput.value >= 30 && apsInput.value > 22){
  for(let i = 0; i < aps23EnglishMaths30.length; i++) {
    plainInput.innerHTML += `<li> ${aps23EnglishMaths30[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathsInput.value >= 30 && apsInput.value > 23){
  for(let i = 0; i < aps24EnglishMaths30.length; i++) {
    plainInput.innerHTML += `<li> ${aps24EnglishMaths30[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathsInput.value >= 30 && apsInput.value > 24){
  for(let i = 0; i < aps25EnglishMaths30.length; i++) {
    plainInput.innerHTML += `<li> ${aps25EnglishMaths30[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathsInput.value >= 30 && apsInput.value > 25){
  for(let i = 0; i < aps26EnglishMaths30.length; i++) {
    plainInput.innerHTML += `<li> ${aps26EnglishMaths30[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathsInput.value >= 30 && apsInput.value > 27){
  for(let i = 0; i < aps28EnglishMaths30.length; i++) {
    plainInput.innerHTML += `<li> ${aps28EnglishMaths30[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathsInput.value >= 40 && apsInput.value > 23){
  for(let i = 0; i < aps24EnglishMaths40.length; i++) {
    plainInput.innerHTML += `<li> ${aps24EnglishMaths40[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathsInput.value >= 40 && apsInput.value > 25){
  for(let i = 0; i < aps26EnglishMaths40.length; i++) {
    plainInput.innerHTML += `<li> ${aps26EnglishMaths40[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathsInput.value >= 40 && apsInput.value > 27){
  for(let i = 0; i < aps28EnglishMaths40.length; i++) {
    plainInput.innerHTML += `<li> ${aps28EnglishMaths40[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathsInput.value >= 40 && apsInput.value > 29){
  for(let i = 0; i < aps30EnglishMaths40.length; i++) {
    plainInput.innerHTML += `<li> ${aps30EnglishMaths40[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 22){
  for(let i = 0; i < aps23EnglishMaths50.length; i++) {
    plainInput.innerHTML += `<li> ${aps23EnglishMaths50[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 24){
  for(let i = 0; i < aps25EnglishMaths50.length; i++) {
    plainInput.innerHTML += `<li> ${aps25EnglishMaths50[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 25){
  for(let i = 0; i < aps26EnglishMaths50.length; i++) {
    plainInput.innerHTML += `<li> ${aps26EnglishMaths50[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 27){
  for(let i = 0; i < aps28EnglishMaths50.length; i++) {
    plainInput.innerHTML += `<li> ${aps28EnglishMaths50[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 29){
  for(let i = 0; i < aps30EnglishMaths50.length; i++) {
    plainInput.innerHTML += `<li> ${aps30EnglishMaths50[i]} </li>`;
  };
}

if(englishhlInput.value >= 60 && mathsInput.value >= 40 && apsInput.value > 27){
  for(let i = 0; i < aps28English60Maths40.length; i++) {
    plainInput.innerHTML += `<li> ${aps28English60Maths40[i]} </li>`;
  };
}

//cput-course-calculator-english-mathslit

if(englishfalInput.value >= 50 && mathslitInput.value >= 40 &&  apsInput.value > 23){
  for(let i = 0; i < aps24Mathslit40.length; i++) {
    plainInput.innerHTML += `<li> ${aps24Mathslit40[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathslitInput.value >= 50 &&  apsInput.value > 25){
  for(let i = 0; i < aps26Mathslit50.length; i++) {
    plainInput.innerHTML += `<li> ${aps26Mathslit50[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathslitInput.value >= 50 &&  apsInput.value > 26){
  for(let i = 0; i < aps27Mathslit50.length; i++) {
    plainInput.innerHTML += `<li> ${aps27Mathslit50[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathslitInput.value >= 50 &&  apsInput.value > 27){
  for(let i = 0; i < aps28Mathslit50.length; i++) {
    plainInput.innerHTML += `<li> ${aps28Mathslit50[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathslitInput.value >= 50 &&  apsInput.value > 29){
  for(let i = 0; i < aps30Mathslit50.length; i++) {
    plainInput.innerHTML += `<li> ${aps30Mathslit50[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathslitInput.value >= 60 &&  apsInput.value > 27){
  for(let i = 0; i < aps28Mathslit60.length; i++) {
    plainInput.innerHTML += `<li> ${aps28Mathslit60[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathslitInput.value >= 60 &&  apsInput.value > 29){
  for(let i = 0; i < aps30Mathslit60.length; i++) {
    plainInput.innerHTML += `<li> ${aps30Mathslit60[i]} </li>`;
  };
}

if(englishfalInput.value >= 60 && mathslitInput.value >= 50 &&  apsInput.value > 29){
  for(let i = 0; i < aps30MathslitandEnglish60.length; i++) {
    plainInput.innerHTML += `<li> ${aps30MathslitandEnglish60[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathslitInput.value >= 70 &&  apsInput.value > 29){
  for(let i = 0; i < aps32MathslitandEnglish70.length; i++) {
    plainInput.innerHTML += `<li> ${aps32MathslitandEnglish70[i]} </li>`;
  };
}

/englishhl/

if(englishhlInput.value >= 50 && mathslitInput.value >= 40 &&  apsInput.value > 23){
  for(let i = 0; i < aps24Mathslit40.length; i++) {
    plainInput.innerHTML += `<li> ${aps24Mathslit40[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 50 &&  apsInput.value > 25){
  for(let i = 0; i < aps26Mathslit50.length; i++) {
    plainInput.innerHTML += `<li> ${aps26Mathslit50[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 50 &&  apsInput.value > 26){
  for(let i = 0; i < aps27Mathslit50.length; i++) {
    plainInput.innerHTML += `<li> ${aps27Mathslit50[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 50 &&  apsInput.value > 27){
  for(let i = 0; i < aps28Mathslit50.length; i++) {
    plainInput.innerHTML += `<li> ${aps28Mathslit50[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 50 &&  apsInput.value > 29){
  for(let i = 0; i < aps30Mathslit50.length; i++) {
    plainInput.innerHTML += `<li> ${aps30Mathslit50[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 60 &&  apsInput.value > 27){
  for(let i = 0; i < aps28Mathslit60.length; i++) {
    plainInput.innerHTML += `<li> ${aps28Mathslit60[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 60 &&  apsInput.value > 29){
  for(let i = 0; i < aps30Mathslit60.length; i++) {
    plainInput.innerHTML += `<li> ${aps30Mathslit60[i]} </li>`;
  };
}

if(englishhlInput.value >= 60 && mathslitInput.value >= 50 &&  apsInput.value > 29){
  for(let i = 0; i < aps30MathslitandEnglish60.length; i++) {
    plainInput.innerHTML += `<li> ${aps30MathslitandEnglish60[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 70 &&  apsInput.value > 29){
  for(let i = 0; i < aps32MathslitandEnglish70.length; i++) {
    plainInput.innerHTML += `<li> ${aps32MathslitandEnglish70[i]} </li>`;
  };
}

//cput-course-calculator-english

if(englishfalInput.value >= 50 && apsInput.value > 29){
  for(let i = 0; i < aps30JustEnglish50.length; i++) {
    plainInput.innerHTML += `<li> ${aps30JustEnglish50[i]} </li>`;
  };
}

if(englishfalInput.value >= 60 && apsInput.value > 29){
  for(let i = 0; i < aps30JustEnglish60.length; i++) {
    plainInput.innerHTML += `<li> ${aps30JustEnglish60[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && sepediInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && siswatiInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && zuluInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && sothoInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && tsongaInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && tswanaInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && xhosaInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && ndebeleInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && vendaInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && afrikaansInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

/physics/
if(englishfalInput.value >= 40 && sepediInput.value >= 50 && physicsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && siswatiInput.value >= 50 && physicsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && zuluInput.value >= 50 && physicsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && sothoInput.value >= 50 && physicsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && tsongaInput.value >= 50 && physicsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && tswanaInput.value >= 50 && physicsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && xhosaInput.value >= 50 && physicsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && ndebeleInput.value >= 50 && physicsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && vendaInput.value >= 50 && physicsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && afrikaansInput.value >= 50 && physicsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

/maths/

if(englishfalInput.value >= 40 && sepediInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && siswatiInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && zuluInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && sothoInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && tsongaInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && tswanaInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && xhosaInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && ndebeleInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && vendaInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && afrikaansInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

/accounting/

if(englishfalInput.value >= 40 && sepediInput.value >= 50 && accountingInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && siswatiInput.value >= 50 && accountingInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && zuluInput.value >= 50 && accountingInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && sothoInput.value >= 50 && accountingInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && tsongaInput.value >= 50 && accountingInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && tswanaInput.value >= 50 && accountingInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && xhosaInput.value >= 50 && accountingInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && ndebeleInput.value >= 50 && accountingInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && vendaInput.value >= 50 && accountingInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && afrikaansInput.value >= 50 && accountingInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

/lifescience/

if(englishfalInput.value >= 40 && sepediInput.value >= 50 && lsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && siswatiInput.value >= 50 && lsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && zuluInput.value >= 50 && lsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && sothoInput.value >= 50 && lsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && tsongaInput.value >= 50 && lsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && tswanaInput.value >= 50 && lsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && xhosaInput.value >= 50 && lsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && ndebeleInput.value >= 50 && lsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && vendaInput.value >= 50 && lsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && afrikaansInput.value >= 50 && lsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

/mathematical literacy/

if(englishfalInput.value >= 40 && sepediInput.value >= 50 && mathslitInput.value >= 60 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && siswatiInput.value >= 50 && mathslitInput.value >= 60 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && zuluInput.value >= 50 && mathslitInput.value >= 60 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && sothoInput.value >= 50 && mathslitInput.value >= 60 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && tsongaInput.value >= 50 && mathslitInput.value >= 60 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && tswanaInput.value >= 50 && mathslitInput.value >= 60 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && xhosaInput.value >= 50 && mathslitInput.value >= 60 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && ndebeleInput.value >= 50 && mathslitInput.value >= 60 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && vendaInput.value >= 50 && mathslitInput.value >= 60 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && afrikaansInput.value >= 50 && mathslitInput.value >= 60 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

/englishhl/

if(englishhlInput.value >= 50 && apsInput.value > 29){
  for(let i = 0; i < aps30JustEnglish50.length; i++) {
    plainInput.innerHTML += `<li> ${aps30JustEnglish50[i]} </li>`;
  };
}

if(englishhlInput.value >= 60 && apsInput.value > 29){
  for(let i = 0; i < aps30JustEnglish60.length; i++) {
    plainInput.innerHTML += `<li> ${aps30JustEnglish60[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && sepediInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && siswatiInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && zuluInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && sothoInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && tsongaInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && tswanaInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && xhosaInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && ndebeleInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && vendaInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && afrikaansInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

/physics/
if(englishhlInput.value >= 40 && sepediInput.value >= 50 && physicsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && siswatiInput.value >= 50 && physicsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && zuluInput.value >= 50 && physicsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && sothoInput.value >= 50 && physicsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && tsongaInput.value >= 50 && physicsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && tswanaInput.value >= 50 && physicsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && xhosaInput.value >= 50 && physicsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && ndebeleInput.value >= 50 && physicsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && vendaInput.value >= 50 && physicsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && afrikaansInput.value >= 50 && physicsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

/maths/

if(englishhlInput.value >= 40 && sepediInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && siswatiInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && zuluInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && sothoInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && tsongaInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && tswanaInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && xhosaInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && ndebeleInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && vendaInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && afrikaansInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

/accounting/

if(englishhlInput.value >= 40 && sepediInput.value >= 50 && accountingInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && siswatiInput.value >= 50 && accountingInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && zuluInput.value >= 50 && accountingInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && sothoInput.value >= 50 && accountingInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && tsongaInput.value >= 50 && accountingInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && tswanaInput.value >= 50 && accountingInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && xhosaInput.value >= 50 && accountingInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && ndebeleInput.value >= 50 && accountingInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && vendaInput.value >= 50 && accountingInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && afrikaansInput.value >= 50 && accountingInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

/lifescience/

if(englishhlInput.value >= 40 && sepediInput.value >= 50 && lsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && siswatiInput.value >= 50 && lsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && zuluInput.value >= 50 && lsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && sothoInput.value >= 50 && lsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && tsongaInput.value >= 50 && lsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && tswanaInput.value >= 50 && lsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && xhosaInput.value >= 50 && lsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && ndebeleInput.value >= 50 && lsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && vendaInput.value >= 50 && lsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && afrikaansInput.value >= 50 && lsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

/mathematical literacy/

if(englishhlInput.value >= 40 && sepediInput.value >= 50 && mathslitInput.value >= 60 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && siswatiInput.value >= 50 && mathslitInput.value >= 60 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && zuluInput.value >= 50 && mathslitInput.value >= 60 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && sothoInput.value >= 50 && mathslitInput.value >= 60 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && tsongaInput.value >= 50 && mathslitInput.value >= 60 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && tswanaInput.value >= 50 && mathslitInput.value >= 60 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && xhosaInput.value >= 50 && mathslitInput.value >= 60 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && ndebeleInput.value >= 50 && mathslitInput.value >= 60 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && vendaInput.value >= 50 && mathslitInput.value >= 60 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && afrikaansInput.value >= 50 && mathslitInput.value >= 60 && apsInput.value > 31){
  for(let i = 0; i < aps32JustEnglish40.length; i++) {
    plainInput.innerHTML += `<li> ${aps32JustEnglish40[i]} </li>`;
  };
}

//cput-course-calculator-geography

if(englishfalInput.value >= 60 && mathsInput.value >= 40 && geographyInput.value >= 50 &&  apsInput.value > 29){
  for(let i = 0; i < aps30JustEconomics.length; i++) {
    plainInput.innerHTML += `<li> ${aps30JustEconomics[i]} </li>`;
  };
}

/englishhl/

if(englishhlInput.value >= 60 && mathsInput.value >= 40 && geographyInput.value >= 50 &&  apsInput.value > 29){
  for(let i = 0; i < aps30JustEconomics.length; i++) {
    plainInput.innerHTML += `<li> ${aps30JustEconomics[i]} </li>`;
  };
}

//cput-course-calculator-lifescience-maths

if(englishfalInput.value >= 50 && lsInput.value >= 50  && mathsInput.value >= 40 && apsInput.value > 23){
  for(let i = 0; i < aps24JustLs.length; i++) {
    plainInput.innerHTML += `<li> ${aps24JustLs[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && lsInput.value >= 40  && mathsInput.value >= 30 && apsInput.value > 24){
  for(let i = 0; i < aps25JustLs40.length; i++) {
    plainInput.innerHTML += `<li> ${aps25JustLs40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && lsInput.value >= 40  && mathslitInput.value >= 40 && apsInput.value > 24){
  for(let i = 0; i < aps25JustLs40.length; i++) {
    plainInput.innerHTML += `<li> ${aps25JustLs40[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && lsInput.value >= 50  && mathslitInput.value >= 50 && apsInput.value > 24){
  for(let i = 0; i < aps25JustLs50.length; i++) {
    plainInput.innerHTML += `<li> ${aps25JustLs50[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && lsInput.value >= 50  && mathsInput.value >= 40 && apsInput.value > 27){
  for(let i = 0; i < aps28JustLs50.length; i++) {
    plainInput.innerHTML += `<li> ${aps28JustLs50[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && lsInput.value >= 50  && mathsInput.value >= 40 && apsInput.value > 29){
  for(let i = 0; i < aps30JustLs50.length; i++) {
    plainInput.innerHTML += `<li> ${aps30JustLs50[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && lsInput.value >= 50  && mathslitInput.value >= 60 && apsInput.value > 29){
  for(let i = 0; i < aps30MathslitandLs.length; i++) {
    plainInput.innerHTML += `<li> ${aps30MathslitandLs[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && lsInput.value >= 50  && mathslitInput.value >= 60 && apsInput.value > 31){
  for(let i = 0; i < aps32LsandMathslit.length; i++) {
    plainInput.innerHTML += `<li> ${aps32LsandMathslit[i]} </li>`;
  };
}

/englishhl/

if(englishhlInput.value >= 50 && lsInput.value >= 50  && mathsInput.value >= 40 && apsInput.value > 23){
  for(let i = 0; i < aps24JustLs.length; i++) {
    plainInput.innerHTML += `<li> ${aps24JustLs[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && lsInput.value >= 40  && mathsInput.value >= 30 && apsInput.value > 24){
  for(let i = 0; i < aps25JustLs40.length; i++) {
    plainInput.innerHTML += `<li> ${aps25JustLs40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && lsInput.value >= 40  && mathslitInput.value >= 40 && apsInput.value > 24){
  for(let i = 0; i < aps25JustLs40.length; i++) {
    plainInput.innerHTML += `<li> ${aps25JustLs40[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && lsInput.value >= 50  && mathslitInput.value >= 50 && apsInput.value > 24){
  for(let i = 0; i < aps25JustLs50.length; i++) {
    plainInput.innerHTML += `<li> ${aps25JustLs50[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && lsInput.value >= 50  && mathsInput.value >= 40 && apsInput.value > 27){
  for(let i = 0; i < aps28JustLs50.length; i++) {
    plainInput.innerHTML += `<li> ${aps28JustLs50[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && lsInput.value >= 50  && mathsInput.value >= 40 && apsInput.value > 29){
  for(let i = 0; i < aps30JustLs50.length; i++) {
    plainInput.innerHTML += `<li> ${aps30JustLs50[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && lsInput.value >= 50  && mathslitInput.value >= 60 && apsInput.value > 29){
  for(let i = 0; i < aps30MathslitandLs.length; i++) {
    plainInput.innerHTML += `<li> ${aps30MathslitandLs[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && lsInput.value >= 50  && mathslitInput.value >= 60 && apsInput.value > 31){
  for(let i = 0; i < aps32LsandMathslit.length; i++) {
    plainInput.innerHTML += `<li> ${aps32LsandMathslit[i]} </li>`;
  };
}

//cput-course-calculator-physics-english-maths

if(englishfalInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 50 && apsInput.value > 22){
  for(let i = 0; i < aps23Physics50.length; i++) {
    plainInput.innerHTML += `<li> ${aps23Physics50[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 40 && apsInput.value > 25){
  for(let i = 0; i < aps26PhysicsisHigher.length; i++) {
    plainInput.innerHTML += `<li> ${aps26PhysicsisHigher[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 40 && apsInput.value > 27){
  for(let i = 0; i < aps28PhysicsisHigher.length; i++) {
    plainInput.innerHTML += `<li> ${aps28PhysicsisHigher[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && lsInput.value >= 50 && physicsInput.value >= 40  && mathsInput.value >= 40 && apsInput.value > 25){
  for(let i = 0; i < aps26PhysicsandLs.length; i++) {
    plainInput.innerHTML += `<li> ${aps26PhysicsandLs[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && lsInput.value >= 50 && physicsInput.value >= 40  && mathsInput.value >= 40 && apsInput.value > 27){
  for(let i = 0; i < aps28PhysicsandLs.length; i++) {
    plainInput.innerHTML += `<li> ${aps28PhysicsandLs[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && lsInput.value >= 40 && physicsInput.value >= 40  && mathsInput.value >= 40 && apsInput.value > 25){
  for(let i = 0; i < aps26Allis40.length; i++) {
    plainInput.innerHTML += `<li> ${aps26Allis40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && lsInput.value >= 40 && physicsInput.value >= 40  && mathsInput.value >= 40 && apsInput.value > 27){
  for(let i = 0; i < aps28Allis40.length; i++) {
    plainInput.innerHTML += `<li> ${aps28Allis40[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && lsInput.value >= 40 && physicsInput.value >= 40  && mathslitInput.value >= 70 && apsInput.value > 25){
  for(let i = 0; i < aps26Allis40.length; i++) {
    plainInput.innerHTML += `<li> ${aps26Allis40[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && lsInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 40 && apsInput.value > 26){
  for(let i = 0; i < aps27MathsisLow.length; i++) {
    plainInput.innerHTML += `<li> ${aps27MathsisLow[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && lsInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 40 && apsInput.value > 27){
  for(let i = 0; i < aps28MathsisLow.length; i++) {
    plainInput.innerHTML += `<li> ${aps28MathsisLow[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && lsInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 40 && apsInput.value > 29){
  for(let i = 0; i < aps30MathsisLow.length; i++) {
    plainInput.innerHTML += `<li> ${aps30MathsisLow[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 50 && apsInput.value > 27){
  for(let i = 0; i < aps28Physicsis50.length; i++) {
    plainInput.innerHTML += `<li> ${aps28Physicsis50[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 50 && apsInput.value > 29){
  for(let i = 0; i < aps30Physicsis50.length; i++) {
    plainInput.innerHTML += `<li> ${aps30Physicsis50[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && physicsInput.value >= 60  && mathsInput.value >= 50 && apsInput.value > 29){
  for(let i = 0; i < aps30Physicsis60.length; i++) {
    plainInput.innerHTML += `<li> ${aps30Physicsis60[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && physicsInput.value >= 50 && lsInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 27){
  for(let i = 0; i < aps28Allare50.length; i++) {
    plainInput.innerHTML += `<li> ${aps28Allare50[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && physicsInput.value >= 50 && lsInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 29){
  for(let i = 0; i < aps30Allare50.length; i++) {
    plainInput.innerHTML += `<li> ${aps30Allare50[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && physicsInput.value >= 50 && lsInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32Allare50.length; i++) {
    plainInput.innerHTML += `<li> ${aps32Allare50[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && physicsInput.value >= 50 && lsInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 32){
  for(let i = 0; i < aps33Allare50.length; i++) {
    plainInput.innerHTML += `<li> ${aps33Allare50[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && physicsInput.value >= 50 && lsInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 34){
  for(let i = 0; i < aps35Allare50.length; i++) {
    plainInput.innerHTML += `<li> ${aps35Allare50[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && physicsInput.value >= 50 && lsInput.value >= 50 && mathslitInput.value >= 50 && apsInput.value > 26){
  for(let i = 0; i < aps27MathslitandPhysics.length; i++) {
    plainInput.innerHTML += `<li> ${aps27MathslitandPhysics[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && physicsInput.value >= 40 && lsInput.value >= 50 && mathslitInput.value >= 60 && apsInput.value > 29){
  for(let i = 0; i < aps30Mathslitis60.length; i++) {
    plainInput.innerHTML += `<li> ${aps30Mathslitis60[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && physicsInput.value >= 50 && lsInput.value >= 50 && mathslitInput.value >= 60 && apsInput.value > 29){
  for(let i = 0; i < aps30MathslitandPhysics.length; i++) {
    plainInput.innerHTML += `<li> ${aps30MathslitandPhysics[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && physicsInput.value >= 50 && lsInput.value >= 50 && mathslitInput.value >= 60 && apsInput.value > 31){
  for(let i = 0; i < aps32MathslitandPhysics.length; i++) {
    plainInput.innerHTML += `<li> ${aps32MathslitandPhysics[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && physicsInput.value >= 50 && lsInput.value >= 40 && mathsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32LsisLow.length; i++) {
    plainInput.innerHTML += `<li> ${aps32LsisLow[i]} </li>`;
  };
}

if(englishfalInput.value >= 60 && physicsInput.value >= 60  && mathsInput.value >= 60 && apsInput.value > 35){
  for(let i = 0; i < aps36Physicsis60.length; i++) {
    plainInput.innerHTML += `<li> ${aps36Physicsis60[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && physicsInput.value >= 60  && mathsInput.value >= 60 && apsInput.value > 35){
  for(let i = 0; i < aps36EnglishisLow.length; i++) {
    plainInput.innerHTML += `<li> ${aps36EnglishisLow[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && physicsInput.value >= 50 && lsInput.value >= 60 && mathsInput.value >= 50 && apsInput.value > 37){
  for(let i = 0; i < aps38PhysicsandLs.length; i++) {
    plainInput.innerHTML += `<li> ${aps38PhysicsandLs[i]} </li>`;
  };
}

/englishhl/

if(englishhlInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 50 && apsInput.value > 22){
  for(let i = 0; i < aps23Physics50.length; i++) {
    plainInput.innerHTML += `<li> ${aps23Physics50[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 40 && apsInput.value > 25){
  for(let i = 0; i < aps26PhysicsisHigher.length; i++) {
    plainInput.innerHTML += `<li> ${aps26PhysicsisHigher[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 40 && apsInput.value > 27){
  for(let i = 0; i < aps28PhysicsisHigher.length; i++) {
    plainInput.innerHTML += `<li> ${aps28PhysicsisHigher[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && lsInput.value >= 50 && physicsInput.value >= 40  && mathsInput.value >= 40 && apsInput.value > 25){
  for(let i = 0; i < aps26PhysicsandLs.length; i++) {
    plainInput.innerHTML += `<li> ${aps26PhysicsandLs[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && lsInput.value >= 50 && physicsInput.value >= 40  && mathsInput.value >= 40 && apsInput.value > 27){
  for(let i = 0; i < aps28PhysicsandLs.length; i++) {
    plainInput.innerHTML += `<li> ${aps28PhysicsandLs[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && lsInput.value >= 40 && physicsInput.value >= 40  && mathsInput.value >= 40 && apsInput.value > 25){
  for(let i = 0; i < aps26Allis40.length; i++) {
    plainInput.innerHTML += `<li> ${aps26Allis40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && lsInput.value >= 40 && physicsInput.value >= 40  && mathsInput.value >= 40 && apsInput.value > 27){
  for(let i = 0; i < aps28Allis40.length; i++) {
    plainInput.innerHTML += `<li> ${aps28Allis40[i]} </li>`;
  };
}

if(englishhlInput.value >= 40 && lsInput.value >= 40 && physicsInput.value >= 40  && mathslitInput.value >= 70 && apsInput.value > 25){
  for(let i = 0; i < aps26Allis40.length; i++) {
    plainInput.innerHTML += `<li> ${aps26Allis40[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && lsInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 40 && apsInput.value > 26){
  for(let i = 0; i < aps27MathsisLow.length; i++) {
    plainInput.innerHTML += `<li> ${aps27MathsisLow[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && lsInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 40 && apsInput.value > 27){
  for(let i = 0; i < aps28MathsisLow.length; i++) {
    plainInput.innerHTML += `<li> ${aps28MathsisLow[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && lsInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 40 && apsInput.value > 29){
  for(let i = 0; i < aps30MathsisLow.length; i++) {
    plainInput.innerHTML += `<li> ${aps30MathsisLow[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 50 && apsInput.value > 27){
  for(let i = 0; i < aps28Physicsis50.length; i++) {
    plainInput.innerHTML += `<li> ${aps28Physicsis50[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 50 && apsInput.value > 29){
  for(let i = 0; i < aps30Physicsis50.length; i++) {
    plainInput.innerHTML += `<li> ${aps30Physicsis50[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && physicsInput.value >= 60  && mathsInput.value >= 50 && apsInput.value > 29){
  for(let i = 0; i < aps30Physicsis60.length; i++) {
    plainInput.innerHTML += `<li> ${aps30Physicsis60[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && physicsInput.value >= 50 && lsInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 27){
  for(let i = 0; i < aps28Allare50.length; i++) {
    plainInput.innerHTML += `<li> ${aps28Allare50[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && physicsInput.value >= 50 && lsInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 29){
  for(let i = 0; i < aps30Allare50.length; i++) {
    plainInput.innerHTML += `<li> ${aps30Allare50[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && physicsInput.value >= 50 && lsInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32Allare50.length; i++) {
    plainInput.innerHTML += `<li> ${aps32Allare50[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && physicsInput.value >= 50 && lsInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 32){
  for(let i = 0; i < aps33Allare50.length; i++) {
    plainInput.innerHTML += `<li> ${aps33Allare50[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && physicsInput.value >= 50 && lsInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 34){
  for(let i = 0; i < aps35Allare50.length; i++) {
    plainInput.innerHTML += `<li> ${aps35Allare50[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && physicsInput.value >= 50 && lsInput.value >= 50 && mathslitInput.value >= 50 && apsInput.value > 26){
  for(let i = 0; i < aps27MathslitandPhysics.length; i++) {
    plainInput.innerHTML += `<li> ${aps27MathslitandPhysics[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && physicsInput.value >= 40 && lsInput.value >= 50 && mathslitInput.value >= 60 && apsInput.value > 29){
  for(let i = 0; i < aps30Mathslitis60.length; i++) {
    plainInput.innerHTML += `<li> ${aps30Mathslitis60[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && physicsInput.value >= 50 && lsInput.value >= 50 && mathslitInput.value >= 60 && apsInput.value > 29){
  for(let i = 0; i < aps30MathslitandPhysics.length; i++) {
    plainInput.innerHTML += `<li> ${aps30MathslitandPhysics[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && physicsInput.value >= 50 && lsInput.value >= 50 && mathslitInput.value >= 60 && apsInput.value > 31){
  for(let i = 0; i < aps32MathslitandPhysics.length; i++) {
    plainInput.innerHTML += `<li> ${aps32MathslitandPhysics[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && physicsInput.value >= 50 && lsInput.value >= 40 && mathsInput.value >= 50 && apsInput.value > 31){
  for(let i = 0; i < aps32LsisLow.length; i++) {
    plainInput.innerHTML += `<li> ${aps32LsisLow[i]} </li>`;
  };
}

if(englishhlInput.value >= 60 && physicsInput.value >= 60  && mathsInput.value >= 60 && apsInput.value > 35){
  for(let i = 0; i < aps36Physicsis60.length; i++) {
    plainInput.innerHTML += `<li> ${aps36Physicsis60[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && physicsInput.value >= 60  && mathsInput.value >= 60 && apsInput.value > 35){
  for(let i = 0; i < aps36EnglishisLow.length; i++) {
    plainInput.innerHTML += `<li> ${aps36EnglishisLow[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && physicsInput.value >= 50 && lsInput.value >= 60 && mathsInput.value >= 50 && apsInput.value > 37){
  for(let i = 0; i < aps38PhysicsandLs.length; i++) {
    plainInput.innerHTML += `<li> ${aps38PhysicsandLs[i]} </li>`;
  };
}

//cput-course-calculator-tourism

if(englishfalInput.value >= 60 && mathsInput.value >= 40 && tourismInput.value >= 50 &&  apsInput.value > 29){
  for(let i = 0; i < aps30JustEconomics.length; i++) {
    plainInput.innerHTML += `<li> ${aps30JustEconomics[i]} </li>`;
  };
}

/englishhl/

if(englishhlInput.value >= 60 && mathsInput.value >= 40 && tourismInput.value >= 50 &&  apsInput.value > 29){
  for(let i = 0; i < aps30JustEconomics.length; i++) {
    plainInput.innerHTML += `<li> ${aps30JustEconomics[i]} </li>`;
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