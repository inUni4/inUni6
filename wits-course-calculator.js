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

alert('ONLY 60% AND ABOVE OF YOUR LIFE ORIENTATION PERCENTAGES ARE CONSIDERED IN YOUR APS SCORE');
alert('If you did not understand that then please go to our "APS Score tips" column to understand how to calculate your APS score');

//wits-course calculator-english-maths

//wits-course-calculator-englishhl-maths

let aps34EnglishMaths = ["Architectural Studies"];

let aps34English60Maths = ["Speech - Language Pathology", "Audiology"];

let aps37English60Maths = ["Bachelor of Education (BEd) : Foundation Phase Teaching", "Bachelor of Education (BEd) : Intermediate Phase Teaching"];

let aps36English60Maths60 = ["Urban & Regional Planning", "Construction Studies", "Construction Studies (In the field of Property Studies)"];

let aps38English60Maths60 = ["Bachelor of Commerce : General", "Bachelor of Commerce : Accounting", "Bachelor of Commerce : Information Systems", "Bachelor of Commerce : Politics, Philosophy & Economics"];

let aps42English60Maths60 = ["Bachelor of Science (General) (BSc)", "BSc in the field of Geographical & Archaeological Studies", "BSc in the field of Geospatial Sciences", "BSc in the field of Environmental Studies"];

let aps43English60Maths60 = ["Bachelor of Commerce with Law", "Biological Sciences"];

let aps43English60Maths40 = ["BA (Law)"];

let aps42English60Maths70 = ["Economic Science"];

let aps44English60Maths70 = ["Accounting Science", "Computer Science", "Computational and Applied Mathematics"];

let aps46English70Maths50 = ["LLB (Two-year Stream)", "LLB (Three-year Stream)", "LLB (Four-year Stream)"];

//wits-course-calculator-english-mathlit

//wits-course-calculator-englishhl-mathlit

let aps37English60Mathslit60 = ["Bachelor of Education (BEd) : Foundation Phase Teaching", "Bachelor of Education (BEd) : Intermediate Phase Teaching"];

let aps43English60Mathslit50 = ["BA (Law)"];

let aps46English70Mathslit70 = ["LLB (Two-year stream)", "LLB (Three-year stream)", "LLB (Four-year stream)"];

let noApsJustEnglishandMathslit = ["Clinical Medical Practise", "Oral Health Science"];

//wits-course-calculator-english

//wits-course-calculator-englishhl

let aps34JustEnglish = ["BA in Digital Arts", "BA in Theatre & Performance", "BA in Film and Television", "BA in Fine Arts", "BA in Bachelor of Music", "Social Work"];

let aps36JustEnglish = ["Bachelor of Arts (BA)"];

let aps37JustEnglish = ["Bachelor of Education (BEd) : Senior Phase & Further Education & Training Teaching"];

//wits-course-calculator-lifescience-maths

let noApsJustNbt = ["Bachelor of Health Sciences (BHSci) - Biomedical", "Bachelor of Health Sciences (BHSci) - Biokinetics", "Bachelor of Health Sciences (BHSci) - Health Systems Sciences", "Bachelor of Medicine & Bachelor of Surgery", "Pharmacy", "Physiotherapy"];

let noApsJustNbt50 = ["Clinical Medical Practise", "Oral Health Sciences", "Nursing", "Occupational Therapy"];

//wits-course-calculator-lifescience-physics-englishhl

let noApsJustLsandPhysics = ["Dental Science"];

//wits-course-calculator-physics-english-maths

let aps42Allare60 = ["Bachelor of Science in Engineering (BScEng) in Aeronautical Engineering", "Bachelor of Science in Engineering (BScEng) in Chemical Engineering", "Bachelor of Science in Engineering (BScEng) in Civil Engineering", "Bachelor of Science in Engineering (BScEng) in Electrical Engineering", "Bachelor of Science in Engineering (BScEng) in Industrial Engineering", "Bachelor of Science in Engineering (BScEng) in Mechanical Engineering", "Bachelor of Science in Engineering (BScEng) in Metallurgy & Materials Engineering", "Bachelor of Science in Engineering (BScEng) in Mining Engineering", "Bachelor of Engineering Science in Biomedical Engineering", "Bachelor of Engineering Science in Digital Arts"];

let aps42MathsisBigger = ["Geological Sciences", "Physical Sciences"];

let aps42Allare80 = ["Actuarial Science", "Mathematical Science"];

let aps43Allis70ExceptEnglish = ["Astronomy & Astrophysics", "Chemistry with Chemical Engineering"];

let aps43MathsisBigger = ["Materials Science"];

subjectBtn.addEventListener('click', () => {
  alert('Please click the checkboxes to add percentages of results.')
});
doneBtn.addEventListener('click', () => {
  heyWrapper.classList.add('hide');
  blackScreen.classList.remove('hide');
  subjectPercentages.classList.remove('hide');


//wits-course calculator-english-maths

if(englishfalInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 33){
  for(let i = 0; i < aps34EnglishMaths.length; i++) {
    plainInput.innerHTML += `<li> ${aps34EnglishMaths[i]} </li>`;
  };
}

if(englishfalInput.value >= 60 && mathsInput.value >= 50 && apsInput.value > 33){
  for(let i = 0; i < aps34English60Maths.length; i++) {
    plainInput.innerHTML += `<li> ${aps34English60Maths[i]} </li>`;
  };
}

if(englishfalInput.value >= 60 && mathsInput.value >= 50 && apsInput.value > 36){
  for(let i = 0; i < aps37English60Maths.length; i++) {
    plainInput.innerHTML += `<li> ${aps37English60Maths[i]} </li>`;
  };
}

if(englishfalInput.value >= 60 && mathsInput.value >= 60 && apsInput.value > 35){
  for(let i = 0; i < aps36English60Maths60.length; i++) {
    plainInput.innerHTML += `<li> ${aps36English60Maths60[i]} </li>`;
  };
}

if(englishfalInput.value >= 60 && mathsInput.value >= 60 && apsInput.value > 37){
  for(let i = 0; i < aps38English60Maths60.length; i++) {
    plainInput.innerHTML += `<li> ${aps38English60Maths60[i]} </li>`;
  };
}

if(englishfalInput.value >= 60 && mathsInput.value >= 60 && apsInput.value > 41){
  for(let i = 0; i < aps42English60Maths60.length; i++) {
    plainInput.innerHTML += `<li> ${aps42English60Maths60[i]} </li>`;
  };
}

if(englishfalInput.value >= 60 && mathsInput.value >= 60 && apsInput.value > 42){
  for(let i = 0; i < aps43English60Maths60.length; i++) {
    plainInput.innerHTML += `<li> ${aps43English60Maths60[i]} </li>`;
  };
}

if(englishfalInput.value >= 60 && mathsInput.value >= 60 && apsInput.value > 42){
  for(let i = 0; i < aps43English60Maths40.length; i++) {
    plainInput.innerHTML += `<li> ${aps43English60Maths40[i]} </li>`;
  };
}

if(englishfalInput.value >= 60 && mathsInput.value >= 70 && apsInput.value > 41){
  for(let i = 0; i < aps42English60Maths70.length; i++) {
    plainInput.innerHTML += `<li> ${aps42English60Maths70[i]} </li>`;
  };
}

if(englishfalInput.value >= 60 && mathsInput.value >= 70 && apsInput.value > 43){
  for(let i = 0; i < aps44English60Maths70.length; i++) {
    plainInput.innerHTML += `<li> ${aps44English60Maths70[i]} </li>`;
  };
}

if(englishfalInput.value >= 60 && mathsInput.value >= 70 && apsInput.value > 45){
  for(let i = 0; i < aps46English70Maths50.length; i++) {
    plainInput.innerHTML += `<li> ${aps46English70Maths50[i]} </li>`;
  };
}

//wits-course-calculator-english-mathlit

if(englishfalInput.value >= 60 && mathslitInput.value >= 60 && apsInput.value > 36){
  for(let i = 0; i < aps37English60Mathslit60.length; i++) {
    plainInput.innerHTML += `<li> ${aps37English60Mathslit60[i]} </li>`;
  };
}

if(englishfalInput.value >= 60 && mathslitInput.value >= 50 && apsInput.value > 42){
  for(let i = 0; i < aps43English60Mathslit50.length; i++) {
    plainInput.innerHTML += `<li> ${aps43English60Mathslit50[i]} </li>`;
  };
}

if(englishfalInput.value >= 70 && mathslitInput.value >= 70 && apsInput.value > 45){
  for(let i = 0; i < aps46English70Mathslit70.length; i++) {
    plainInput.innerHTML += `<li> ${aps46English70Mathslit70[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathslitInput.value >= 80 && physicsInput.value >= 50){
  for(let i = 0; i < noApsJustEnglishandMathslit.length; i++) {
    plainInput.innerHTML += `<li> ${noApsJustEnglishandMathslit[i]} </li>`;
  };
}

//wits-course-calculator-english

if(englishfalInput.value >= 60 && apsInput.value > 33){
  for(let i = 0; i < aps34JustEnglish.length; i++) {
    plainInput.innerHTML += `<li> ${aps34JustEnglish[i]} </li>`;
  };
}

if(englishfalInput.value >= 60 && apsInput.value > 35){
  for(let i = 0; i < aps36JustEnglish.length; i++) {
    plainInput.innerHTML += `<li> ${aps36JustEnglish[i]} </li>`;
  };
}

if(englishfalInput.value >= 60 && apsInput.value > 36){
  for(let i = 0; i < aps37JustEnglish.length; i++) {
    plainInput.innerHTML += `<li> ${aps37JustEnglish[i]} </li>`;
  };
}

//wits-course-calculator-englishhl-mathlit

if(englishhlInput.value >= 60 && mathslitInput.value >= 60 && apsInput.value > 36){
  for(let i = 0; i < aps37English60Mathslit60.length; i++) {
    plainInput.innerHTML += `<li> ${aps37English60Mathslit60[i]} </li>`;
  };
}

if(englishhlInput.value >= 60 && mathslitInput.value >= 50 && apsInput.value > 42){
  for(let i = 0; i < aps43English60Mathslit50.length; i++) {
    plainInput.innerHTML += `<li> ${aps43English60Mathslit50[i]} </li>`;
  };
}

if(englishhlInput.value >= 70 && mathslitInput.value >= 70 && apsInput.value > 45){
  for(let i = 0; i < aps46English70Mathslit70.length; i++) {
    plainInput.innerHTML += `<li> ${aps46English70Mathslit70[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 80 && physicsInput.value >= 50){
  for(let i = 0; i < noApsJustEnglishandMathslit.length; i++) {
    plainInput.innerHTML += `<li> ${noApsJustEnglishandMathslit[i]} </li>`;
  };
}

//wits-course-calculator-englishhl-maths

if(englishhlInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 33){
  for(let i = 0; i < aps34EnglishMaths.length; i++) {
    plainInput.innerHTML += `<li> ${aps34EnglishMaths[i]} </li>`;
  };
}

if(englishhlInput.value >= 60 && mathsInput.value >= 50 && apsInput.value > 33){
  for(let i = 0; i < aps34English60Maths.length; i++) {
    plainInput.innerHTML += `<li> ${aps34English60Maths[i]} </li>`;
  };
}

if(englishhlInput.value >= 60 && mathsInput.value >= 50 && apsInput.value > 36){
  for(let i = 0; i < aps37English60Maths.length; i++) {
    plainInput.innerHTML += `<li> ${aps37English60Maths[i]} </li>`;
  };
}

if(englishhlInput.value >= 60 && mathsInput.value >= 60 && apsInput.value > 35){
  for(let i = 0; i < aps36English60Maths60.length; i++) {
    plainInput.innerHTML += `<li> ${aps36English60Maths60[i]} </li>`;
  };
}

if(englishhlInput.value >= 60 && mathsInput.value >= 60 && apsInput.value > 37){
  for(let i = 0; i < aps38English60Maths60.length; i++) {
    plainInput.innerHTML += `<li> ${aps38English60Maths60[i]} </li>`;
  };
}

if(englishhlInput.value >= 60 && mathsInput.value >= 60 && apsInput.value > 41){
  for(let i = 0; i < aps42English60Maths60.length; i++) {
    plainInput.innerHTML += `<li> ${aps42English60Maths60[i]} </li>`;
  };
}

if(englishhlInput.value >= 60 && mathsInput.value >= 60 && apsInput.value > 42){
  for(let i = 0; i < aps43English60Maths60.length; i++) {
    plainInput.innerHTML += `<li> ${aps43English60Maths60[i]} </li>`;
  };
}

if(englishhlInput.value >= 60 && mathsInput.value >= 60 && apsInput.value > 42){
  for(let i = 0; i < aps43English60Maths40.length; i++) {
    plainInput.innerHTML += `<li> ${aps43English60Maths40[i]} </li>`;
  };
}

if(englishhlInput.value >= 60 && mathsInput.value >= 70 && apsInput.value > 41){
  for(let i = 0; i < aps42English60Maths70.length; i++) {
    plainInput.innerHTML += `<li> ${aps42English60Maths70[i]} </li>`;
  };
}

if(englishhlInput.value >= 60 && mathsInput.value >= 70 && apsInput.value > 43){
  for(let i = 0; i < aps44English60Maths70.length; i++) {
    plainInput.innerHTML += `<li> ${aps44English60Maths70[i]} </li>`;
  };
}

if(englishhlInput.value >= 60 && mathsInput.value >= 70 && apsInput.value > 45){
  for(let i = 0; i < aps46English70Maths50.length; i++) {
    plainInput.innerHTML += `<li> ${aps46English70Maths50[i]} </li>`;
  };
}

//wits-course-calculator-englishhl

if(englishhlInput.value >= 60 && apsInput.value > 33){
  for(let i = 0; i < aps34JustEnglish.length; i++) {
    plainInput.innerHTML += `<li> ${aps34JustEnglish[i]} </li>`;
  };
}

if(englishhlInput.value >= 60 && apsInput.value > 35){
  for(let i = 0; i < aps36JustEnglish.length; i++) {
    plainInput.innerHTML += `<li> ${aps36JustEnglish[i]} </li>`;
  };
}

if(englishhlInput.value >= 60 && apsInput.value > 36){
  for(let i = 0; i < aps37JustEnglish.length; i++) {
    plainInput.innerHTML += `<li> ${aps37JustEnglish[i]} </li>`;
  };
}

//wits-course-calculator-lifescience-maths

if(englishfalInput.value >= 50 && lsInput.value >= 50  && mathsInput.value >= 50){
  for(let i = 0; i < noApsJustNbt.length; i++) {
    plainInput.innerHTML += `<li> ${noApsJustNbt[i]} </li>`;
  };
}

if(englishfalInput.value >= 60 && lsInput.value >= 60  && mathsInput.value >= 60){
  for(let i = 0; i < noApsJustNbt50.length; i++) {
    plainInput.innerHTML += `<li> ${noApsJustNbt[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathslitInput.value >= 80 && physicsInput.value >= 50){
  for(let i = 0; i < noApsJustEnglishandMathslit.length; i++) {
    plainInput.innerHTML += `<li> ${noApsJustEnglishandMathslit[i]} </li>`;
  };
}

/englishhl/

if(englishhlInput.value >= 50 && lsInput.value >= 50  && mathsInput.value >= 50){
  for(let i = 0; i < noApsJustNbt.length; i++) {
    plainInput.innerHTML += `<li> ${noApsJustNbt[i]} </li>`;
  };
}

if(englishhlInput.value >= 60 && lsInput.value >= 60  && mathsInput.value >= 60){
  for(let i = 0; i < noApsJustNbt50.length; i++) {
    plainInput.innerHTML += `<li> ${noApsJustNbt[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 80 && physicsInput.value >= 50){
  for(let i = 0; i < noApsJustEnglishandMathslit.length; i++) {
    plainInput.innerHTML += `<li> ${noApsJustEnglishandMathslit[i]} </li>`;
  };
}

//wits-course-calculator-lifescience-physics-englishhl

if(englishfalInput.value >= 60 && physicsInput.value >= 60  && mathsInput.value >= 60 && lsInput.value >= 60){
  for(let i = 0; i < noApsJustLsandPhysics.length; i++) {
    plainInput.innerHTML += `<li> ${noApsJustLsandPhysics[i]} </li>`;
  };
}

/englishhl/

if(englishhlInput.value >= 60 && physicsInput.value >= 60  && mathsInput.value >= 60 && lsInput.value >= 60){
  for(let i = 0; i < noApsJustLsandPhysics.length; i++) {
    plainInput.innerHTML += `<li> ${noApsJustLsandPhysics[i]} </li>`;
  };
}

//wits-course-calculator-physics-english-maths

if(englishfalInput.value >= 60 && physicsInput.value >= 60  && mathsInput.value >= 60 && apsInput.value > 41){
  for(let i = 0; i < aps42Allare60.length; i++) {
    plainInput.innerHTML += `<li> ${aps42Allare60[i]} </li>`;
  };
}

if(englishfalInput.value >= 60 && physicsInput.value >= 60  && mathsInput.value >= 70 && apsInput.value > 41){
  for(let i = 0; i < aps42MathsisBigger.length; i++) {
    plainInput.innerHTML += `<li> ${aps42MathsisBigger[i]} </li>`;
  };
}

if(englishfalInput.value >= 60 && physicsInput.value >= 60  && mathsInput.value >= 70 && apsInput.value > 42){
  for(let i = 0; i < aps43MathsisBigger.length; i++) {
    plainInput.innerHTML += `<li> ${aps43MathsisBigger[i]} </li>`;
  };
}

if(englishfalInput.value >= 80 && physicsInput.value >= 80  && mathsInput.value >= 80 && apsInput.value > 41){
  for(let i = 0; i < aps42Allare70.length; i++) {
    plainInput.innerHTML += `<li> ${aps42Allare70[i]} </li>`;
  };
}

if(englishfalInput.value >= 60 && physicsInput.value >= 70  && mathsInput.value >= 70 && apsInput.value > 42){
  for(let i = 0; i < aps43Allis70ExceptEnglish.length; i++) {
    plainInput.innerHTML += `<li> ${aps43Allis70ExceptEnglish[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 50){
  for(let i = 0; i < noApsJustNbt50.length; i++) {
    plainInput.innerHTML += `<li> ${noApsJustNbt50[i]} </li>`;
  };
}

if(englishfalInput.value >= 60 && physicsInput.value >= 60  && mathsInput.value >= 60){
  for(let i = 0; i < noApsJustNbt.length; i++) {
    plainInput.innerHTML += `<li> ${noApsJustNbt[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathslitInput.value >= 80 && physicsInput.value >= 50){
  for(let i = 0; i < noApsJustEnglishandMathslit.length; i++) {
    plainInput.innerHTML += `<li> ${noApsJustEnglishandMathslit[i]} </li>`;
  };
}

/englishhl/

if(englishhlInput.value >= 60 && physicsInput.value >= 60  && mathsInput.value >= 60 && apsInput.value > 41){
  for(let i = 0; i < aps42Allare60.length; i++) {
    plainInput.innerHTML += `<li> ${aps42Allare60[i]} </li>`;
  };
}

if(englishhlInput.value >= 60 && physicsInput.value >= 60  && mathsInput.value >= 70 && apsInput.value > 41){
  for(let i = 0; i < aps42MathsisBigger.length; i++) {
    plainInput.innerHTML += `<li> ${aps42MathsisBigger[i]} </li>`;
  };
}

if(englishhlInput.value >= 60 && physicsInput.value >= 60  && mathsInput.value >= 70 && apsInput.value > 42){
  for(let i = 0; i < aps43MathsisBigger.length; i++) {
    plainInput.innerHTML += `<li> ${aps43MathsisBigger[i]} </li>`;
  };
}

if(englishhlInput.value >= 80 && physicsInput.value >= 80  && mathsInput.value >= 80 && apsInput.value > 41){
  for(let i = 0; i < aps42Allare70.length; i++) {
    plainInput.innerHTML += `<li> ${aps42Allare70[i]} </li>`;
  };
}

if(englishhlInput.value >= 60 && physicsInput.value >= 70  && mathsInput.value >= 70 && apsInput.value > 42){
  for(let i = 0; i < aps43Allis70ExceptEnglish.length; i++) {
    plainInput.innerHTML += `<li> ${aps43Allis70ExceptEnglish[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 50){
  for(let i = 0; i < noApsJustNbt50.length; i++) {
    plainInput.innerHTML += `<li> ${noApsJustNbt50[i]} </li>`;
  };
}

if(englishhlInput.value >= 60 && physicsInput.value >= 60  && mathsInput.value >= 60){
  for(let i = 0; i < noApsJustNbt.length; i++) {
    plainInput.innerHTML += `<li> ${noApsJustNbt[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 80 && physicsInput.value >= 50){
  for(let i = 0; i < noApsJustEnglishandMathslit.length; i++) {
    plainInput.innerHTML += `<li> ${noApsJustEnglishandMathslit[i]} </li>`;
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