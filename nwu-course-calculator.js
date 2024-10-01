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

let justAps18 = ["Diploma in Coaching Science"];
let justAps22 = ["Bachelor of Arts with Sociology & Geography", "Bachelor of Arts with Sociology & Labour Relations Management", "Bachelor of Arts (BA) in Behavioural Sciences"];
let justAps24 = ["Bachelor of Health Sciences with Sport Coaching & Human Movement Sciences", "Bachelor of Health Sciences with Recreation Science & Tourism Management", "Bachelor of Health Sciences with Sport & Recreation", "Bachelor of Social Sciences with Political Studies & International Relations"];
let justAps25 = ["Bachelor of Arts (BA) in Public Governance with Public Administration", "Bachelor of Arts (BA) in Public Governance with Politics & Public Administration", "Bachelor of Arts (BA) in Public Governance with Public Administration & Social Studies", "Bachelor of Arts (BA) in Public Governance with Public Administration & Geography", "Bachelor of Arts (BA) in Public Governance with Public Administration & Labour Relations Management", "Bachelor of Arts (BA) in Public Governance with Municipal Management & Leadership", "Bachelor of Social Sciences with Political Studies & International Relations"];
let justAps26 = ["Bachelor of Philosophy with Philosophy, Politics & Economics"];

//nwu-course-calculator-english-maths

let aps20maths = ["Extended Bachelor of Commerce in Statistics", "Extended Bachelor of Commerce in Business Operations with Logistics Management", "Extended Bachelor of Commerce in Business Operations with Transport Economics", "Extended Bachelor of Commerce in Economic Sciences with Economics & Econometrics", "Extended Bachelor of Commerce in Management Sciences with Business Management", "Extended Bachelor of Commerce in Management Sciences with Marketing Management",  "Extended Bachelor of Administration in Development & Management with Local Government Management"];

let aps24maths = ["Extended Bachelor of Commerce in Economic Sciences with Economics & International Trade"];

let aps21mathsmore = ["Bachelor of Administration in Development and Management with Local Government Management"];

let aps24mathsmore = ["Bachelor of Commerce in Accounting (General)", "Extended Bachelor of Commerce in Financial Accountancy (SAIPA)", "Bachelor of Commerce in Business Operations with Logistics Management", "Bachelor of Commerce in Management Sciences with Communication Management", "Bachelor of Commerce in Management Sciences with Marketing Management", "Bachelor of Commerce in Management Sciences with Sport & Business Management", "Bachelor of Commerce in Management Sciences with Safety Management", "Bachelor of Commerce in Business Operations with Transport Economics", "Bachelor of Commerce in Management Sciences with Marketing & Tourism Management", "Bachelor of Commerce in Management Sciences with Tourism Management", "Bachelor of Commerce in Management Sciences with Tourism & Recreational Skills", "Bachelor of Commerce in Management Sciences with Business Management"];

let aps26mathsmore = ["Bachelor of Commerce in Economic Sciences with Economics & Econometrics"];

let aps28mathsmore = ["Extended Bachelor of Commerce in Chartered Accountancy (CA)"];

let aps24mathshalf = ["Bachelor of Commerce in Operations Research", "Bachelor of Commerce in Statistics", "Bachelor of Commerce in Information Systems", "Bachelor of Consumer Sciences in Fashion Retail Management with Fashion Supply"];

let aps26mathshalf = ["Bachelor of Commerce in Economic Sciences with Agricultural Economics & Risk Management", "Bachelor of Commerce in Economic Sciences with Economics & International Trade", "Bachelor of Commerce in Economic Sciences with Economics & Informatics", "Bachelor of Commerce in Economic Sciences with Economics & Risk Management", "Bachelor of Arts with Industrial & Organisational Psychology & Labour Relations Management"];

let aps28mathshalf = ["Bachelor of Commerce in Financial Accountancy"];

let aps30mathsis60 = ["Bachelor of Commerce in Management Accountancy (CIMA)"];

let aps32mathsis60 = ["Bachelor of Commerce in Chartered Accountancy (CA) (*with Accounting)"];

let aps36mathsis60 = ["Bachelor of Commerce in Forensic Accountancy (*with Accounting)"];


//nwu-course-calculator-english-mathlit

let aps18 = ["Diploma in Music"];
let aps20Mathslitis50Fal = ["Extended Bachelor of Commerce in Statistics", "Extended Bachelor of Commerce in Business Operations with Logistics Management", "Extended Bachelor of Commerce in Business Operations with Transport Economics", "Extended Bachelor of Commerce in Economic Sciences with Economics & Econometrics", "Extended Bachelor of Commerce in Management Sciences with Business Management", "Bachelor of Commerce in Management Sciences with Marketing Management", "Bachelor of Commerce in Information Systems", "Extended Bachelor of Administration in Development & Management with Local Government Management"];

let aps21WeAre50s = ["Bachelor of Administration in Development & Management with Local Government Management"];

let aps24mathslit70English40 = ["Extended Bachelor of Commerce in Economic Sciences with Economics & International Trade"];

let aps24mathslit70 = ["Bachelor of Commerce in Management Sciences with Sport & Business Management", "Bachelor of Commerce in Management Sciences with Safety Management", "Bachelor of Commerce in Management Sciences with Marketing & Tourism Management", "Bachelor of Commerce in Management Sciences with Tourism & Recreational Skills"];

let aps24mathslit80 = ["Extended Bachelor of Commerce in Financial Accountancy (SAIPA)"];

//nwu-course-calculator-english

let aps18JustEnglishat50 = ["Diploma in Music"];
let aps21JustEnglishat50 = ["Bachelor of Arts (BA) in Music & Society"];
let aps22JustEnglishat50 = ["Bachelor of Arts with Tourism Management", "Bachelor of Arts with Sociology & Labour Relations Management", "Bachelor of Arts with Sociology & Geography", "Bachelor of Arts (BA) in Behavioural Sciences"];
let aps24JustEnglishat50 = ["BA in Ancient Languages", "BTh with Pastoral Counselling & Psychology", "Bachelor of Divinity", "BTh with Bible Languages & Bible Translation", "BTh in Christian Ministry", "Baccalaureus Musicae"];

let aps25JustEnglishat50 = ["Bachelor of Arts (BA) in Public Governance with Public Administration", "Bachelor of Arts (BA) in Public Governance with Politics & Public Administration", "Bachelor of Arts (BA) in Public Governance with Public Administration & Social Studies", "Bachelor of Arts (BA) in Public Governance with Public Administration & Geography", "Bachelor of Arts (BA) in Public Governance with Labour Relations Management", "Bachelor of Arts (BA) in Public Governance with Municipal Management & Leadership", "Bachelor of Arts (BA) in Public Governance with Policing Practise", "Bachelor of Social Sciences with Political Studies & International Relations"];
let aps26JustEnglishat50 = ["BA in Pastoral Psychology"];

let aps28JustEnglishat50 = ["Extended Bachelor of Laws (LLB) (*Home Language 50%)", "Bachelor of Social Work (*Home Language 50%)"];

let aps22JustEnglishat60 = ["Bachelor of Social Sciences with Development Studies (MC)", "Bachelor of Social Sciences with Geography (MC, PC, VC)", "Bachelor of Social Sciences with History (MC, PC, VC)", "Bachelor of Social Sciences with Population Studies (MC)", "Bachelor of Social Sciences with Psychology & Social Sciences (MC, PC, VC)", "Bachelor of Social Sciences with Social Anthropology (PC, VC)", "Bachelor of Social Sciences with Sociology (MC, PC, VC)"];

let aps24JustEnglishat60 = ["Bachelor of Arts Communication", "Bachelor of Art (BA) Humanities with English", "Bachelor of Arts (BA) Humanities with Social Sciences (PC, VC)", "Bachelor of Arts (BA) Humanities with Psychology (MC, PC, VC)", "Bachelor of Arts (BA) Humanities with History (MC, PC, VC)", "Bachelor of Arts (BA) Humanities with Geography (MC, PC, VC)", "Bachelor of Arts (BA) Humanities with French (MC, PC, VC)", "Bachelor of Arts (BA) Humanities with German (PC)", "Bachelor of Arts (BA) Humanities with History of Art (PC)", "Bachelor of Arts (BA) Humanities with Latin (PC)", "Bachelor of Arts (BA) Humanities with Politics (PC, VC)", "Bachelor of Arts (BA) Humanities with Social Anthropology (PC)", "Bachelor of Arts (BA) Humanities with Sociology (MC, PC, VC)", "Bachelor of Arts (BA) Humanities with Philosophy (MC, PC)", "Bachelor of Arts (BA) Humanities with History & Society (MC, VC)", "Bachelor of Arts (BA) Humanities with Psychology & Society (MC, PC, VC)", "Bachelor of Arts (BA) Humanities with Geography & Society (MC, VC)", "Bachelor of Arts (BA) Humanities with Politics & Society (VC)", "Bachelor of Arts (BA) in Graphic Design", "Bachelor of Arts (BA) in Graphic Design with Communication", "Bachelor of Arts (BA) in Language & Literary Studies English (ENLL)", "Bachelor of Arts (BA) in Language & Literary Studies Language Practise (LPRA)", "Bachelor of Arts (BA) in Language & Literary Studies Setswana Home Language (SETM)"];

let aps26JustEnglishat60 = ["Bachelor of Education (BEd) in Foundation Phase Grade R-3", "Bachelor of Education (BEd) in Intermediate Phase Grade 4-6 with Life Skills & Social Sciences"];

let aps28JustEnglishat60 = ["Bachelor of Arts in Law (BA in Law) with Psychology (*Home Language 60%)", "Bachelor of Arts in Law (BA in Law ) with Politics (*Home Language 60%)", "Bachelor of Arts in Law (BA in Law) with Industrial Psychology (*Home Language 60%)"];

let aps30JustEnglishat60 = ["Bachelor of Laws (LLB) (*Home Language 60%)", ];

//nwu-course-calculator-englishhl-mathslit

let aps20Mathslitbe50 = ["Extended Bachelor of Commerce in Statistics", "Extended Bachelor of Commerce in Business Operations with Logistics Management", "Extended Bachelor of Commerce in Business Operations with Transport Economics", "Extended Bachelor of Commerce in Economic Sciences with Economics & Econometrics", "Extended Bachelor of Commerce in Management Sciences with Business Management", "Bachelor of Commerce in Management Sciences with Marketing Management", "Bachelor of Commerce in Information Systems", "Extended Bachelor of Administration in Development & Management with Local Government Management"];

let aps21Allare50 = ["Bachelor of Administration in Development & Management with Local Government Management"];

let aps24mathslit70Englishhl40 = ["Extended Bachelor of Commerce in Economic Sciences with Economics & International Trade"];

let aps24mathslit70hl = ["Bachelor of Commerce in Management Sciences with Sport & Business Management", "Bachelor of Commerce in Management Sciences with Safety Management", "Extended Bachelor of Commerce in Economic Sciences with Economics & International Trade", "Bachelor of Commerce in Management Sciences with Marketing & Tourism Management", "Bachelor of Commerce in Management Sciences with Tourism & Recreational Skills"];

let aps24Mathslitis80 = ["Extended Bachelor of Commerce in Financial Accountancy (SAIPA)"];

//nwu-course-calculator-englishhl-maths

let aps20MathsandEnglishhl40 = ["Extended Bachelor of Commerce in Statistics", "Extended Bachelor of Commerce in Business Operations with Logistics Management", "Extended Bachelor of Commerce in Business Operations with Transport Economics", "Extended Bachelor of Commerce in Economic Sciences with Economics & Econometrics", "Extended Bachelor of Commerce in Management Sciences with Business Management", "Bachelor of Commerce in Management Sciences with Marketing Management", "Bachelor of Commerce in Information Systems", "Extended Bachelor of Administration in Development & Management with Local Government Management"];

let aps24MathsandEnglishhl40 = ["Extended Bachelor of Commerce in Economic Sciences with Economics & International Trade"];

let aps21Englishhlbe50 = ["Bachelor of Administration in Development and Management with Local Government Management"];

let aps24Englishhlbe50 = ["Bachelor of Commerce in Accounting (General)", "Extended Bachelor of Commerce in Financial Accountancy (SAIPA)", "Bachelor of Commerce in Business Operations with Logistics Management", "Bachelor of Commerce in Management Sciences with Communication Management", "Bachelor of Commerce in Management Sciences with Marketing Management", "Bachelor of Commerce in Management Sciences with Sport & Business Management", "Bachelor of Commerce in Management Sciences with Safety Management", "Bachelor of Commerce in Business Operations with Transport Economics", "Bachelor of Commerce in Management Sciences with Marketing & Tourism Management", "Bachelor of Commerce in Management Sciences with Tourism Management", "Bachelor of Commerce in Management Sciences with Tourism & Recreational Skills", "Bachelor of Commerce in Management Sciences with Business Management"];

let aps26Englishhlbe50 = ["Bachelor of Commerce in Economic Sciences with Economics & Econometrics"];

let aps28Englishhlbe50 = ["Extended Bachelor of Commerce in Chartered Accountancy (CA)"];

let aps24Allbe50 = ["Bachelor of Commerce in Operations Research", "Bachelor of Commerce in Statistics", "Bachelor of Commerce in Information Systems"];

let aps26Allbe50 = ["Bachelor of Commerce in Economic Sciences with Agricultural Economics & Risk Management", "Bachelor of Commerce in Economic Sciences with Economics & International Trade", "Bachelor of Commerce in Economic Sciences with Economics & Informatics", "Bachelor of Education (BEd) in Senior & Further Education & Training Grade 7-12 with Mechanical Technology", "Bachelor of Education (BEd) in Senior & Further Education & Training Grade 7-12 with Civil Technology", "Bachelor of Education (BEd) in Senior & Further Education & Training Grade 7-12 with Electrical Technology"];

let aps28Allbe50 = ["Bachelor of Commerce in Financial Accountancy (SAIPA)"];

let aps30Englishhlare60 = ["Bachelor of Commerce in Law"];

let aps30Mathsare60 = ["Bachelor of Commerce in Management Accountancy (CIMA)"];

let aps32Mathsare60 = ["Bachelor of Commerce in Chartered Accountancy (CA) (*with Accounting)"];

let Weare60 = ["Bachelor of Commerce in Forensic Accountancy (*with Accounting)"];

//nwu-course-calculator-englishhl

let aps18JustEnglishhlat50 = ["Diploma in Music"];
let aps21JustEnglishhlat50 = ["Bachelor of Arts (BA) in Music & Society"];
let aps22JustEnglishhlat50 = ["Bachelor of Social Sciences with Development Studies (MC)", "Bachelor of Social Sciences with Geography (MC, PC, VC)", "Bachelor of Social Sciences with History (MC, PC, VC)", "Bachelor of Social Sciences with Population Studies (MC)", "Bachelor of Social Sciences with Psychology & Social Sciences (MC, PC, VC)", "Bachelor of Social Sciences with Social Anthropology (PC, VC)", "Bachelor of Social Sciences with Sociology (MC, PC, VC)"];
let aps24JustEnglishhlat50 = ["BA in Ancient Languages", "BTh with Pastoral Counselling & Psychology", "Bachelor of Divinity", "BTh with Bible Languages & Bible Translation", "BTh in Christian Ministry", "Baccalaureus Musicae", "Bachelor of Social Sciences with Development Studies (MC)", "Bachelor of Social Sciences with Geography (MC, PC, VC)", "Bachelor of Social Sciences with History (MC, PC, VC)", "Bachelor of Social Sciences with Population Studies (MC)", "Bachelor of Social Sciences with Psychology & Social Sciences (MC, PC, VC)", "Bachelor of Social Sciences with Social Anthropology (PC, VC)", "Bachelor of Social Sciences with Sociology (MC, PC, VC)", "Bachelor of Art (BA) Humanities with English", "Bachelor of Arts (BA) in Language & Literary Studies English (ENLL)", "Bachelor of Arts (BA) in Language & Literary Studies Language Practise (LPRA)", "Bachelor of Arts (BA) in Language & Literary Studies Setswana Home Language (SETM)"];

let aps25JustEnglishhlat50 = ["Bachelor of Arts (BA) in Public Governance with Policing Practise"];

let aps26JustEnglishhlat50 = ["BA in Pastoral Psychology", "Bachelor of Education (BEd) in Foundation Phase Grade R-3", "Bachelor of Education (BEd) in Intermediate Phase Grade 4-6 with Mathematics, Science & Technology", "Bachelor of Eduction (BEd) in Intermediate Phase Grade 4-6 with Life Skills & Social Sciences", "Bachelor of Science in Indigenous Knowledge Systems (Indigenous Knowledge Systems)", "Bachelor of Health Sciences with Recreation Science & Psychology", "Bachelor of Social Sciences with Psychology"];

let aps28JustEnglishhlat50 = ["Extended Bachelor of Laws (LLB) (*First Additional Language 50%)", "Bachelor of Social Work (*First Additional Language 50%)"];

let aps24JustEnglishhlat60 = ["Bachelor of Arts Communication", "Bachelor of Art (BA) Humanities with English", "Bachelor of Arts (BA) Humanities with Social Sciences (PC, VC)", "Bachelor of Arts (BA) Humanities with Psychology (MC, PC, VC)", "Bachelor of Arts (BA) Humanities with History (MC, PC, VC)", "Bachelor of Arts (BA) Humanities with Geography (MC, PC, VC)", "Bachelor of Arts (BA) Humanities with French (MC, PC, VC)", "Bachelor of Arts (BA) Humanities with German (PC)", "Bachelor of Arts (BA) Humanities with History of Art (PC)", "Bachelor of Arts (BA) Humanities with Latin (PC)", "Bachelor of Arts (BA) Humanities with Politics (PC, VC)", "Bachelor of Arts (BA) Humanities with Social Anthropology (PC)", "Bachelor of Arts (BA) Humanities with Sociology (MC, PC, VC)", "Bachelor of Arts (BA) Humanities with Philosophy (MC, PC)", "Bachelor of Arts (BA) Humanities with History & Society (MC, VC)", "Bachelor of Arts (BA) Humanities with Psychology & Society (MC, PC, VC)", "Bachelor of Arts (BA) Humanities with Geography & Society (MC, VC)", "Bachelor of Arts (BA) Humanities with Politics & Society (VC)", "Bachelor of Arts (BA) in Graphic Design", "Bachelor of Arts (BA) in Graphic Design with Communication", "Bachelor of Arts (BA) in Language & Literary Studies English (ENLL)", "Bachelor of Arts (BA) in Language & Literary Studies Language Practise (LPRA)", "Bachelor of Arts (BA) in Language & Literary Studies Setswana Home Language (SETM)"];

let aps28JustEnglishhlat60 = ["Bachelor of Arts in Law with Psychology (*First Additional Language 60%)", "Bachelor of Arts in Law with Politics (*First Additional Language 60%)", "Bachelor of Arts in Law with Industrial Psychology (*First Additional Language 60%)"];

let aps30JustEnglishhlat60 = ["Bachelor of Laws (LLB) (*First Additional Language 60%)"];

//nwu-course-calculator-maths

let aps21m = ["Extended Bachelor of Administration in Human Resource Management", "Extended Bachelor of Administration in Industrial & Organisational"];

let aps23m = ["Bachelor of Administration in Human Resources Management", "Bachelor of Administration in Industrial & Organisational Psychology"];
let aps24m = ["Extended Bachelor of Science in Information Technology", "Extended Bachelor of Commerce in Economic Sciences with Economics & Risk Management"];

let aps24mmore = ["Bachelor of Consumer Sciences in Fashion Retail Management with Fashion Supply"];

let aps26mmore = ["Bachelor of Commerce in Economic Sciences with Economics & Risk Management", "Bachelor of Arts with Industrial & Organisational Psychology & Labour Relations Management"];

let aps28mmore = ["Extended Bachelor of Science in Financial Mathematics", "Extended Bachelor of Science in Business Analytics", "Extended Bachelor of Science in Quantative Risk Management", "Bachelor of Science in Urban & Regional Planning"];

let aps30mmore = ["Bachelor of Commerce in Human Resource Management with Labour Relations Management", "Bachelor of Commerce in Industrial & Organisational Psychology"];

let aps32mmore = ["Bachelor of Science in Financial Management", "Bachelor of Science in Business Analytics", "Bachelor of Science in Quantative Risk Management", "Bachelor of Science in Acturial Sciences"];

//nwu-course-calculator-mathslit

let aps21mlit = ["Extended Bachelor of Administration in Human Resource Management", "Extended Bachelor of Administration in Industrial & Organisational"];

let aps23mlit = ["Bachelor of Administration in Human Resources Management", "Bachelor of Administration in Industrial & Organisational Psychology"];

let aps26mlit60 = ["Bachelor of Arts with Industrial & Organisational Psychology & Labour Relations Management"];

//nwu-course-calculator-physics-english-maths

let aps22Physicsis40 = ["Diploma in Animal Health", "Diploma in Animal Science", "Diploma in Plant Science - Crop Production"];
let aps24Physicsis40 = ["Extended Bachelor of Science with Applied Mathematics & Chemistry", "Extended Bachelor of Science with Applied Mathematics & Electronics", "Extended Bachelor of Science with Biochemistry & Chemistry", "Extended Bachelor of Science with Chemistry & Computer Science", "Extended Bachelor of Science with Chemistry & Mathematics", "Extended Bachelor of Science with Chemistry & Physics", "Extended Bachelor of Science with Computer Science & Electronics", "Extended Bachelor of Science with Computer Science & Mathematics", "Extended Bachelor of Science with Electronics & Mathematics", "Extended Bachelor of Science with Electronics & Physics", "Extended Bachelor of Science with Physics & Applied Mathematics", "Extended Bachelor of Science with Physics & Computer Science", "Extended Bachelor of Science with Physics & Mathematics", "Extended Bachelor of Science  Biological Sciences with MicroBiology & Biochemistry", "Extended Bachelor of Science (Environmental Sciences with Botany & Biochemistry)", "Extended Bachelor of Science (Environmental Sciences with Botany & Chemistry)", "Extended Bachelor of Science (Environmental Sciences with Botany & MicroBiology)", "Extended Bachelor of Science (Environmental Sciences with Chemistry & Geography)", "Extended Bachelor of Science (Environmental Sciences with Geography & Botany)", "Extended Bachelor of Science (Environmental Sciences with Geography & Computer Science)", "Extended Bachelor of Science (Environmental Sciences with MicroBiology & Chemistry)", "Extended Bachelor of Science (Mathematical Sciences with Applied Mathematics & Mathematics)"];

let aps26Physicsis50 = ["Bachelor of Health Sciences with Physiology & Psychology (*Home Language 50%)"];

let aps32Physicsis50 = ["Bachelor of Health Sciences in Biokinetics"];

let aps30Mathsis50 = ["Bachelor of Commerce in Human Resource Management with Labour Relations Management", "Bachelor of Commerce in Industrial & Organisational Psychology with Labour Relations Management"];

let aps25Mathsis50Englishis60 = ["Bachelor of Nursing"];

let aps26Mathsis50Englishis60 = ["Bachelor of Science with BioChemistry & Chemistry"];

let aps24Allis50 = ["Bachelor of Consumer Studies", "Bachelor of Consumer Science in Food Product Management with Food Communication", "Bachelor of Consumer Sciences in Food Product Management with Food Supply", "Bachelor of Consumer Sciences in Fashion Retail Management with Fashion Communication"];

let aps26Allis50 = ["Bachelor of Science in Biological Sciences with MicroBiology & Biochemistry", "Bachelor of Science in Biological Sciences with MicroBiology & Botany", "Bachelor of Science in Biological Sciences with Botany & Biochemistry", "Bachelor of Science in Biological Sciences with Zoology & Biochemistry", "Bachelor of Science in Biological Sciences with Chemistry & Physiology", "Bachelor of Science in Biological Sciences with Zoology & Botany", "Bachelor of Science in Biological Sciences with Zoology & MicroBiology", "Bachelor of Science in Biological Sciences with Zoology & Physiology", "Bachelor of Science in Biological Sciences with MicroBiology & Physiology", "Bachelor of Science in Environmental Sciences with MicroBiology & Chemistry", "Bachelor of Science in Environmental Sciences with Botany & Chemistry", "Bachelor of Science in Environmental Sciences with Geography & Computer Science", "Bachelor of Science in Environmental Sciences with Geography & Botany", "Bachelor of Sciences in Environmental Sciences with Zoology & Chemistry", "Bachelor of Sciences in Environmental Sciences with Chemistry & Geology", "Bachelor of Sciences in Environmental Sciences with Geology & Geography", "Bachelor of Sciences in Environmental Sciences with Zoology & Geography", "Bachelor of Sciences in Environmental Sciences with Geology & Botany", "Bachelor of Sciences in Environmental Sciences with Zoology & Geology", "Bachelor of Sciences in Environmental Sciences with Geology & MicroBiology", "Bachelor of Sciences in Environmental Sciences with Tourism & Zoology", "Bachelor of Sciences in Environmental Sciences with Tourism & Geography", "Bachelor of Sciences in Environmental Sciences with Tourism & Botany", "Bachelor of Science in Agricultural Sciences with Agricultural Economics", "Bachelor of Science in Agricultural Sciences with Animal Science", "Bachelor of Science in Agricultural Sciences with Agronomy & Horticulture", "Bachelor of Science in Agricultural Sciences with Animal Health", "Bachelor of Science in Agricultural Sciences with Soil Sciences & Agronomy", "Bachelor of Science in Agricultural Sciences with Agricultural Economics & Agronomy"];

let aps26mathshalfphysicsEnglish = ["Bachelor of Science in Biological Science with Zoology & MicroBiology", "Bachelor of Science in Enviromental Sciences with Botany & Chemistry", "Bachelor of Science in Environmental Sciences with Zoology & Chemisty", "Bachelor of Science in Environmental Sciences with Chemistry & Geology", "Bachelor of Science in Environmental Sciences with Geology & Geography", "Bachelor of Science in Environmental Sciences with Zoology & Geography", "Bachelor of Science in Environmental Science with Geology & Botany", "Bachelor of Science in Environmental Sciences with Zoology & Geology", "Bachelor of Science in Environmental Sciences with Geology & MicroBiology", "Bachelor of Science in Environmental Sciences with Tourism & Zoology", "Bachelor of Science in Environmental Sciences with Tourism & Geography", "Bachelor of Science in Environmental Sciences with Tourism & Botany", "Bachelor of Sciences in Agricultural Sciences with Agricultural Economics", "Bachelor of Sciences in Agricultural Sciences with Animal Sciences", "Bachelor of Sciences in Agricultural Sciences with Agronomy & Horticulture", "Bachelor of Sciences in Agricultural Sciences with Animal Health", "Bachelor of Sciences in Agricultural Sciences with Soil Sciences & Agronomy", "Bachelor of Sciences in Agricultural Sciences with Agricultural Economics & Agronomy"];

let aps24maths60physics = ["Bachelor of Health Sciences with Physiology & BioChemistry"];

let aps26maths60physics = ["Bachelor of Science with Chemistry & Physics", "Bachelor of Science with Physics & Mathematics", "Bachelor of Science with Physics & Applied Mathematics", "Bachelor of Science with Physics & Computer Science", "Bachelor of Science with Computer Science & Mathematics",  "Bachelor of Science with Chemistry, Mathematics & Applied Mathematics", "Bachelor of Science with Geography & Applied Mathematics", "Bachelor of Science with Applied Mathematics & Chemistry", "Bachelor of Science with Chemistry & Mathematics", "Bachelor of Science with Applied Mathematics & Electronics", "Bachelor of Science with Electronics & Mathematics", "Bachelor of Science with Electronics & Physics", "Bachelor of Science with Chemistry & Computer Science", "Bachelor of Science with Computer Science & Electronics", "Bachelor of Science with Computer Science & Statistics", "Bachelor of Science in Mathematical Sciences with Statistics & Mathematics", "Bachelor of Science in Mathematical Science with Mathematics", "Bachelor of Science in Mathematical Science with Applied Mathematics & Mathematics"];

let aps27maths60physics60 = ["Bachelor of Health Sciences in Occupational Hygiene"];

let aps30maths60physics60 = ["Bachelor of Science in Dietetics"];

let aps32maths60physics60 = ["Bachelor of Pharmacy (Pharmacy)"];

let aps34maths70physics70 = ["Bachelor of Engineering (Chemical Engineering)", "Bachelor of Engineering (Electrical & Electronic Engineering)", "Bachelor of Engineering (Computer & Electronic Engineering)", "Bachelor of Engineering (Electromechanical Engineering)", "Bachelor of Engineering (Mechanical Engineering)", "Bachelor of Engineering (Industrial Engineering)", "Bachelor of Engineering (Mechatronic Engineering)"];

  subjectBtn.addEventListener('click', () => {
    alert('Please click the checkboxes to add percentages of results.')
  });
  doneBtn.addEventListener('click', () => {
    heyWrapper.classList.add('hide');
    blackScreen.classList.remove('hide');
    subjectPercentages.classList.remove('hide');

    if(apsInput.value > 17){

      for(let i = 0; i < justAps18.length; i++) {
        plainInput.innerHTML += `<li> ${justAps18[i]} </li>`;
      };
    } 
    if(apsInput.value > 21){
      
      for(let i = 0; i < justAps22.length; i++) {
        plainInput.innerHTML += `<li> ${justAps22[i]} </li>`;
      };
    } 
    if(apsInput.value > 23){
      
      for(let i = 0; i < justAps24.length; i++) {
        plainInput.innerHTML += `<li> ${justAps24[i]} </li>`;
      };
    } 
    if(apsInput.value > 24){
      
      for(let i = 0; i < justAps25.length; i++) {
        plainInput.innerHTML += `<li> ${justAps25[i]} </li>`;
      };
    } 
    if(apsInput.value > 25){
      
      for(let i = 0; i < justAps26.length; i++) {
        plainInput.innerHTML += `<li> ${justAps26[i]} </li>`;
      };
    }


    //nwu-course-calculator-english-maths
    if(englishfalInput.value >= 40 && mathsInput.value >= 40 && apsInput.value > 19){
      for(let i = 0; i < aps20maths.length; i++) {
        plainInput.innerHTML += `<li> ${aps20maths[i]} </li>`;
      };
    } 
    if(englishfalInput.value >= 40 && mathsInput.value >= 40 && apsInput.value >= 24){
      for(let i = 0; i < aps24maths.length; i++) {
        plainInput.innerHTML += `<li> ${aps24maths[i]} </li>`;
      };
    }
    if(englishfalInput.value >= 50 && mathsInput.value >= 40 && apsInput.value >= 21){
      for(let i = 0; i < aps21mathsmore.length; i++) {
        plainInput.innerHTML += `<li> ${aps21mathsmore[i]} </li>`;
      };
    } 
    if(englishfalInput.value >= 50 && mathsInput.value >= 40 && apsInput.value >= 24){
      for(let i = 0; i < aps24mathsmore.length; i++) {
        plainInput.innerHTML += `<li> ${aps24mathsmore[i]} </li>`;
      };
    } 
    if(englishfalInput.value >= 50 && mathsInput.value >= 40 && apsInput.value > 25){
      for(let i = 0; i < aps26mathsmore.length; i++) {
        plainInput.innerHTML += `<li> ${aps26mathsmore[i]} </li>`;
      };
    } 
    if(englishfalInput.value >= 50 && mathsInput.value >= 40 && apsInput.value >= 28){
      for(let i = 0; i < aps28mathsmore.length; i++) {
        plainInput.innerHTML += `<li> ${aps28mathsmore[i]} </li>`;
      };
    }
    if(englishfalInput.value >= 50 && mathsInput.value >= 50 && apsInput.value >= 24){
      for(let i = 0; i < aps24mathshalf.length; i++) {
        plainInput.innerHTML += `<li> ${aps24mathshalf[i]} </li>`;
      };
    } 
    if(englishfalInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 25){
      for(let i = 0; i < aps26mathshalf.length; i++) {
        plainInput.innerHTML += `<li> ${aps26mathshalf[i]} </li>`;
      };
    } 
    if(englishfalInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 27){
      for(let i = 0; i < aps28mathshalf.length; i++) {
        plainInput.innerHTML += `<li> ${aps28mathshalf[i]} </li>`;
      };
    }

    
    if(englishfalInput.value >= 50 && mathsInput.value >= 60 && apsInput.value > 29){
      for(let i = 0; i < aps30mathsis60.length; i++) {
        plainInput.innerHTML += `<li> ${aps30mathsis60[i]} </li>`;
      };
    } 
    if(englishfalInput.value >= 50 && mathsInput.value >= 60 && apsInput.value >= 32){
      for(let i = 0; i < aps32mathsis60.length; i++) {
        plainInput.innerHTML += `<li> ${aps32mathsis60[i]} </li>`;
      };
    }

    if(englishfalInput.value >= 60 && mathsInput.value >= 60 && apsInput.value >= 32){
      for(let i = 0; i < aps36mathsis60.length; i++) {
        plainInput.innerHTML += `<li> ${aps36mathsis60[i]} </li>`;
      };
    }

    //nwu-course-calculator-english-mathlit

    if(englishfalInput.value >= 40 && mathslitInput.value >= 50 && apsInput.value > 19){
      for(let i = 0; i < aps20Mathslitis50Fal.length; i++) {
        plainInput.innerHTML += `<li> ${aps20Mathslitis50Fal[i]} </li>`;
      };
    }
    if(englishfalInput.value >= 50 && mathslitInput.value >= 50 && apsInput.value >= 21) {
      for(let i = 0; i < aps21WeAre50s.length; i++) {
        plainInput.innerHTML += `<li> ${aps21WeAre50s[i]} </li>`;
      };
    }

    if(englishfalInput.value >= 50 && mathslitInput.value >= 70 && apsInput.value >= 24) {
      for(let i = 0; i < aps24mathslit70.length; i++) {
        plainInput.innerHTML += `<li> ${aps24mathslit70[i]} </li>`;
      };
    }

    if(englishfalInput.value >= 50 && mathslitInput.value >= 80 && apsInput.value >= 24) {
      for(let i = 0; i < aps24mathslit80.length; i++) {
        plainInput.innerHTML += `<li> ${aps24mathslit80[i]} </li>`;
      };
    }

    if(englishfalInput.value >= 40 && mathslitInput.value >= 80 && apsInput.value >= 24) {
      for(let i = 0; i < aps24mathslit70English40.length; i++) {
        plainInput.innerHTML += `<li> ${aps24mathslit70English40[i]} </li>`;
      };
    }

    //nwu-course-calculator-english

    if(englishfalInput.value >= 50 && apsInput.value > 17){
      
      for(let i = 0; i < aps18JustEnglishat50.length; i++) {
        plainInput.innerHTML += `<li> ${aps18JustEnglishat50[i]} </li>`;
      };
    } 
    if(englishfalInput.value >= 50 && apsInput.value >= 21){
        
        for(let i = 0; i < aps21JustEnglishat50.length; i++) {
    plainInput.innerHTML += `<li> ${aps21JustEnglishat50[i]} </li>`;
        };
      } 
      if(englishfalInput.value >= 50 && apsInput.value > 21){

    for(let i = 0; i < aps22JustEnglishat50.length; i++) {
      plainInput.innerHTML += `<li> ${aps22JustEnglishat50[i]} </li>`;
    };
      } 
      if(englishfalInput.value >= 50 && apsInput.value >= 24){

    for(let i = 0; i < aps24JustEnglishat50.length; i++) {
      plainInput.innerHTML += `<li> ${aps24JustEnglishat50[i]} </li>`;
    };
      } 
      if(englishfalInput.value >= 50 && apsInput.value >= 25){

    for(let i = 0; i < aps25JustEnglishat50.length; i++) {
      plainInput.innerHTML += `<li> ${aps25JustEnglishat50[i]} </li>`;
    };
      } 
      if(englishfalInput.value >= 50 && apsInput.value > 25){

    for(let i = 0; i < aps26JustEnglishat50.length; i++) {
      plainInput.innerHTML += `<li> ${aps26JustEnglishat50[i]} </li>`;
    };
      } 
      if(englishfalInput.value >= 50 && apsInput.value >= 28){

    for(let i = 0; i < aps28JustEnglishat50.length; i++) {
      plainInput.innerHTML += `<li> ${aps28JustEnglishat50[i]} </li>`;
    };
      }

      if(englishfalInput.value >= 60 && apsInput.value > 21){
        
        for(let i = 0; i < aps22JustEnglishat60.length; i++) {
    plainInput.innerHTML += `<li> ${aps22JustEnglishat60[i]} </li>`;
        };
      } 
      if(englishfalInput.value >= 60 && apsInput.value >= 24){
      
        for(let i = 0; i < aps24JustEnglishat60.length; i++) {
    plainInput.innerHTML += `<li> ${aps24JustEnglishat60[i]} </li>`;
        };
      } 
      if(englishfalInput.value >= 60 && apsInput.value > 25){
        
        for(let i = 0; i < aps26JustEnglishat60.length; i++) {
    plainInput.innerHTML += `<li> ${aps26JustEnglishat60[i]} </li>`;
        };
      } 
      if(englishfalInput.value >= 60 && apsInput.value > 27){
        
        for(let i = 0; i < aps28JustEnglishat60.length; i++) {
    plainInput.innerHTML += `<li> ${aps28JustEnglishat60[i]} </li>`;
        };
      } 
      if(englishfalInput.value >= 60 && apsInput.value >= 30){
        
        for(let i = 0; i < aps30JustEnglishat60.length; i++) {
    plainInput.innerHTML += `<li> ${aps30JustEnglishat60[i]} </li>`;
        };
      }

      //nwu-course-calculator-englishhl-mathslit

      if(englishhlInput.value >= 40 && mathslitInput.value >= 50 && apsInput.value > 19){
      for(let i = 0; i < aps20Mathslitbe50.length; i++) {
        plainInput.innerHTML += `<li> ${aps20Mathslitbe50[i]} </li>`;
      };
      }
    if(englishhlInput.value >= 50 && mathslitInput.value >= 50 && apsInput.value >= 21) {
        for(let i = 0; i < aps21Allare50.length; i++) {
    plainInput.innerHTML += `<li> ${aps21Allare50[i]} </li>`;
        };
    }

    if(englishhlInput.value >= 40 && mathslitInput.value >= 70 && apsInput.value >= 24) {
      for(let i = 0; i < aps24mathslit70Englishhl40.length; i++) {
        plainInput.innerHTML += `<li> ${aps24mathslit70Englishhl40[i]} </li>`;
      };
    }

    if(englishhlInput.value >= 50 && mathslitInput.value >= 70 && apsInput.value >= 24) {
      for(let i = 0; i < aps24mathslit70hl.length; i++) {
        plainInput.innerHTML += `<li> ${aps24mathslit70hl[i]} </li>`;
      };
    }

    if(englishhlInput.value >= 50 && mathslitInput.value >= 80 && apsInput.value >= 24) {
      for(let i = 0; i < aps24Mathslitis80.length; i++) {
        plainInput.innerHTML += `<li> ${aps24Mathslitis80[i]} </li>`;
      };
    }

    //nwu-course-calculator-englishhl-maths

    if(englishhlInput.value >= 40 && mathsInput.value >= 40 && apsInput.value > 19){
      for(let i = 0; i < aps20MathsandEnglishhl40.length; i++) {
        plainInput.innerHTML += `<li> ${aps20MathsandEnglishhl40[i]} </li>`;
      };
    } 
    if(englishhlInput.value >= 40 && mathsInput.value >= 40 && apsInput.value >= 24){
      for(let i = 0; i < aps24MathsandEnglishhl40.length; i++) {
        plainInput.innerHTML += `<li> ${aps24MathsandEnglishhl40[i]} </li>`;
      };
    }
    if(englishhlInput.value >= 50 && mathsInput.value >= 40 && apsInput.value >= 21){
      for(let i = 0; i < aps21Englishhlbe50.length; i++) {
        plainInput.innerHTML += `<li> ${aps21Englishhlbe50[i]} </li>`;
      };
    } 
    if(englishhlInput.value >= 50 && mathsInput.value >= 40 && apsInput.value >= 24){
      for(let i = 0; i < aps24Englishhlbe50.length; i++) {
        plainInput.innerHTML += `<li> ${aps24Englishhlbe50[i]} </li>`;
      };
    } 
    if(englishhlInput.value >= 50 && mathsInput.value >= 40 && apsInput.value > 25){
      for(let i = 0; i < aps26Englishhlbe50.length; i++) {
        plainInput.innerHTML += `<li> ${aps26Englishhlbe50[i]} </li>`;
      };
    } 
    if(englishhlInput.value >= 50 && mathsInput.value >= 40 && apsInput.value >= 28){
      for(let i = 0; i < aps28Englishhlbe50.length; i++) {
        plainInput.innerHTML += `<li> ${aps28Englishhlbe50[i]} </li>`;
      };
    }

    if(englishhlInput.value >= 50 && mathsInput.value >= 50 && apsInput.value >= 24){
      for(let i = 0; i < aps24Allbe50.length; i++) {
        plainInput.innerHTML += `<li> ${aps24Allbe50[i]} </li>`;
      };
    } 
    if(englishhlInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 25){
      for(let i = 0; i < aps26Allbe50.length; i++) {
        plainInput.innerHTML += `<li> ${aps26Allbe50[i]} </li>`;
      };
    } 
    if(englishhlInput.value >= 50 && mathsInput.value >= 50 && apsInput.value >= 28){
      for(let i = 0; i < aps28Allbe50.length; i++) {
        plainInput.innerHTML += `<li> ${aps28Allbe50[i]} </li>`;
      };
    }

    if(englishhlInput.value >= 60 && mathsInput.value >= 50 && apsInput.value >= 30){
      for(let i = 0; i < aps30Englishhlare60.length; i++) {
        plainInput.innerHTML += `<li> ${aps30Englishhlare60[i]} </li>`;
      };
    }

    if(englishhlInput.value >= 50 && mathsInput.value >= 60 && apsInput.value > 29){
      for(let i = 0; i < aps30Mathsare60.length; i++) {
        plainInput.innerHTML += `<li> ${aps30Mathsare60[i]} </li>`;
      };
    } 
    if(englishhlInput.value >= 50 && mathsInput.value >= 60 && apsInput.value >= 32){
      for(let i = 0; i < aps32Mathsare60.length; i++) {
        plainInput.innerHTML += `<li> ${aps32Mathsare60[i]} </li>`;
      };
    };

    if(englishhlInput.value >= 60 && mathsInput.value >= 60 && apsInput.value >= 36){
      for(let i = 0; i < aps36Weare60.length; i++) {
        plainInput.innerHTML += `<li> ${aps36Weare60[i]} </li>`;
      };
    }

    //nwu-course-calculator-englishhl

    if(englishhlInput.value >= 50 && apsInput.value > 17){
      for(let i = 0; i < aps18JustEnglishhlat50.length; i++) {
        plainInput.innerHTML += `<li> ${aps18JustEnglishhlat50[i]} </li>`;
      };
    } 
    if(englishhlInput.value >= 50 && apsInput.value >= 21){
        for(let i = 0; i < aps21JustEnglishhlat50.length; i++) {
    plainInput.innerHTML += `<li> ${aps21JustEnglishhlat50[i]} </li>`;
        };
      } 
      if(englishhlInput.value >= 50 && apsInput.value >= 22){
    for(let i = 0; i < aps22JustEnglishhlat50.length; i++) {
      plainInput.innerHTML += `<li> ${aps22JustEnglishhlat50[i]} </li>`;
    };
      } 
      if(englishhlInput.value >= 50 && apsInput.value >= 23){
    for(let i = 0; i < aps23JustEnglishhlat50.length; i++) {
      plainInput.innerHTML += `<li> ${aps23JustEnglishhlat50[i]} </li>`;
    };
      } 
      if(englishhlInput.value >= 50 && apsInput.value >= 24){
    for(let i = 0; i < aps24JustEnglishhlat50.length; i++) {
      plainInput.innerHTML += `<li> ${aps24JustEnglishhlat50[i]} </li>`;
    };
      } 
      if(englishhlInput.value >= 50 && apsInput.value >= 25){
    for(let i = 0; i < aps25JustEnglishhlat50.length; i++) {
      plainInput.innerHTML += `<li> ${aps25JustEnglishhlat50[i]} </li>`;
    };
      } 
      if(englishhlInput.value >= 50 && apsInput.value > 25){
    for(let i = 0; i < aps26JustEnglishhlat50.length; i++) {
      plainInput.innerHTML += `<li> ${aps26JustEnglishhlat50[i]} </li>`;
    };
      }  
      if(englishhlInput.value >= 50 && apsInput.value >= 28){
    for(let i = 0; i < aps28JustEnglishhlat50.length; i++) {
      plainInput.innerHTML += `<li> ${aps28JustEnglishhlat50[i]} </li>`;
    };
      }

      if(englishhlInput.value >= 60 && apsInput.value >= 24){
        for(let i = 0; i < aps24JustEnglishhlat60.length; i++) {
    plainInput.innerHTML += `<li> ${aps24JustEnglishhlat60[i]} </li>`;
        };
      } 
      if(englishhlInput.value >= 60 && apsInput.value > 27){
        for(let i = 0; i < aps28JustEnglishhlat60.length; i++) {
    plainInput.innerHTML += `<li> ${aps28JustEnglishhlat60[i]} </li>`;
        };
      } 
      if(englishhlInput.value >= 60 && apsInput.value >= 30){
        for(let i = 0; i < aps30JustEnglishhlat60.length; i++) {
    plainInput.innerHTML += `<li> ${aps30JustEnglishhlat60[i]} </li>`;
        };
      }

      //nwu-course-calculator-maths

      if(mathsInput.value >= 40 && apsInput.value >= 21){

      for(let i = 0; i < aps21m.length; i++) {
        plainInput.innerHTML += `<li> ${aps21m[i]} </li>`;
      };
    } 
    if(mathsInput.value >= 40 && apsInput.value >= 23){
      
      for(let i = 0; i < aps23m.length; i++) {
        plainInput.innerHTML += `<li> ${aps23m[i]} </li>`;
      };
    } 
    if(mathsInput.value >= 40 && apsInput.value >= 24){
      
      for(let i = 0; i < aps24m.length; i++) {
        plainInput.innerHTML += `<li> ${aps24m[i]} </li>`;
      };
    }

    if(mathsInput.value >= 50 && apsInput.value >= 24){
    
      for(let i = 0; i < aps24mmore.length; i++) {
        plainInput.innerHTML += `<li> ${aps24mmore[i]} </li>`;
      };
    } 
    if(mathsInput.value >= 50 && apsInput.value > 25){
      
      for(let i = 0; i < aps26mmore.length; i++) {
        plainInput.innerHTML += `<li> ${aps26mmore[i]} </li>`;
      };
    } 
    if(mathsInput.value >= 50 && apsInput.value > 27){
      
      for(let i = 0; i < aps28mmore.length; i++) {
        plainInput.innerHTML += `<li> ${aps28mmore[i]} </li>`;
      };
    } 
    if(mathsInput.value >= 50 && apsInput.value >= 30){
      
      for(let i = 0; i < aps30mmore.length; i++) {
        plainInput.innerHTML += `<li> ${aps30mmore[i]} </li>`;
      };
    }

    if(mathsInput.value >= 70 && apsInput.value >= 32){
      
      for(let i = 0; i < aps32mmore.length; i++) {
        plainInput.innerHTML += `<li> ${aps32mmore[i]} </li>`;
      };
    }
    if(mathslitInput.value >= 50 && apsInput.value >= 20){
      
      for(let i = 0; i < aps20m.length; i++) {
        plainInput.innerHTML += `<li> ${aps20m[i]} </li>`;
      };
    }

    //nwu-course-calculator-mathslit

    if(mathslitInput.value >= 50 && apsInput.value >= 21){
      for(let i = 0; i < aps21mlit.length; i++) {
        plainInput.innerHTML += `<li> ${aps21mlit[i]} </li>`;
      };
    } 
    if(mathslitInput.value >= 50 && apsInput.value > 22){
      for(let i = 0; i < aps23mlit.length; i++) {
        plainInput.innerHTML += `<li> ${aps23mlit[i]} </li>`;
      };
    }

    if(mathslitInput.value >= 60 && apsInput.value >= 26){
      for(let i = 0; i < aps26mlit60.length; i++) {
        plainInput.innerHTML += `<li> ${aps26mlit60[i]} </li>`;
      };
    }

    //nwu-course-calculator-physics-english-maths

    if(englishfalInput.value >= 50 && physicsInput.value >= 40 && mathsInput.value >= 40 && apsInput.value >= 22){
      for(let i = 0; i < aps22Physicsis40.length; i++) {
        plainInput.innerHTML += `<li> ${aps22Physicsis40[i]} </li>`;
      };
    }
    
    if(englishfalInput.value >= 50 && physicsInput.value >= 40 && mathsInput.value >= 40 && apsInput.value > 23){
      for(let i = 0; i < aps24Physicsis40.length; i++) {
        plainInput.innerHTML += `<li> ${aps24Physicsis40[i]} </li>`;
      };
    };

    if(englishfalInput.value >= 50 && physicsInput.value >= 40  && mathsInput.value >= 50 && apsInput.value >= 30){
      for(let i = 0; i < aps30Mathsis50.length; i++) {
        plainInput.innerHTML += `<li> ${aps30Mathsis50[i]} </li>`;
      };
    }
    if(englishfalInput.value >= 60 && physicsInput.value >= 40  && mathsInput.value >= 50 && apsInput.value >= 25){
      for(let i = 0; i < aps25Mathsis50Englishis60.length; i++) {
        plainInput.innerHTML += `<li> ${aps25Mathsis50Englishis60[i]} </li>`;
      };
    } 
    if(englishfalInput.value >= 60 && physicsInput.value >= 40  && mathsInput.value >= 50 && apsInput.value > 25){
      for(let i = 0; i < aps26Mathsis50Englishis60.length; i++) {
        plainInput.innerHTML += `<li> ${aps26Mathsis50Englishis60[i]} </li>`;
      };
    }
    if(englishfalInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 50 && apsInput.value >= 24){
      for(let i = 0; i < aps24Allis50.length; i++) {
        plainInput.innerHTML += `<li> ${aps24Allis50[i]} </li>`;
      };
    } 
    if(englishfalInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 50 && apsInput.value > 25){
      for(let i = 0; i < aps26Allis50.length; i++) {
        plainInput.innerHTML += `<li> ${aps26Allis50[i]} </li>`;
      };
    }
    if(englishfalInput.value >= 60 && physicsInput.value >= 50  && mathsInput.value >= 50 && apsInput.value > 25){
      for(let i = 0; i < aps26mathshalfphysicsEnglish.length; i++) {
        plainInput.innerHTML += `<li> ${aps26mathshalfphysicsEnglish[i]} </li>`;
      };
    }
    if(englishfalInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 60 && apsInput.value >= 24) {
      for(let i = 0; i < aps24maths60physics.length; i++) {
        plainInput.innerHTML += `<li> ${aps24maths60physics[i]} </li>`;
      };
    } 
    if(englishfalInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 60 && apsInput.value > 25) {
      for(let i = 0; i < aps26maths60physics.length; i++) {
        plainInput.innerHTML += `<li> ${aps26maths60physics[i]} </li>`;
      };
    }

    if(englishfalInput.value >= 60 && physicsInput.value >= 60  && mathsInput.value >= 60 && apsInput.value >= 27) {
      for(let i = 0; i < aps27maths60physics60.length; i++) {
        plainInput.innerHTML += `<li> ${aps27maths60physics60[i]} </li>`;
      };
    } 
    if(englishfalInput.value >= 60 && physicsInput.value >= 60  && mathsInput.value >= 60 && apsInput.value > 29) {
      for(let i = 0; i < aps30maths60physics60.length; i++) {
        plainInput.innerHTML += `<li> ${aps30maths60physics60[i]} </li>`;
      };
    } 
    if(englishfalInput.value >= 60 && physicsInput.value >= 60  && mathsInput.value >= 60 && apsInput.value > 32) {
      for(let i = 0; i < aps32maths60physics60.length; i++) {
        plainInput.innerHTML += `<li> ${aps32maths60physics60[i]} </li>`;
      };
    }

    if(englishfalInput.value >= 60 && physicsInput.value >= 70  && mathsInput.value >= 70 && apsInput.value > 33) {
      for(let i = 0; i < aps34maths70physics70.length; i++) {
        plainInput.innerHTML += `<li> ${aps34maths70physics70[i]} </li>`;
      };
    }

    if(physicsInput.value >= 50  && mathsInput.value >= 40 && apsInput.value >= 26) {
      for(let i = 0; i < aps26Physicsis50.length; i++) {
        plainInput.innerHTML += `<li> ${aps26Physicsis50[i]} </li>`;
      };
    } 
    if(physicsInput.value >= 50  && mathsInput.value >= 40 && apsInput.value >= 32) {
      for(let i = 0; i < aps32Physicsis50.length; i++) {
        plainInput.innerHTML += `<li> ${aps32Physicsis50[i]} </li>`;
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