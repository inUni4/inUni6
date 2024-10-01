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

//ul-course calculator-english-maths
let aps22Maths30English = ["BCom Criminology & Psychology Stream (Psychometrist) (*Additional Language 50%) (Extended)", "BCom Criminology & Psychology Stream (Trauma Counsellor) (*Additional Language 50%) (Extended)", "BCom Criminology & Psychology Stream (Employee Assistance) (*Additional Language 50%) (Extended)", "BCom Criminology & Psychology Stream (Practitioner) (*Additional Language 50%) (Extended)", "BCom Criminology & Psychology Stream (Counsellor guidance) (*Additional Language 50%) (Extended)", "BCom Criminology & Psychology Stream (Criminologist) (*Additional Language 50%) (Extended)", "BCom Criminology & Psychology Stream (Police) (*Additional Language 50%) (Extended)", "BCom Criminology & Psychology Stream (Crime Scene Expert) (*Additional Language 50%) (Extended)", "BCom Criminology & Psychology Stream (Correctional Officer) (*Additional Language 50%) (Extended)", "BCom Criminology & Psychology Stream (Metro Police) (*Additional Language 50%) (Extended)", "BCom Criminology & Psychology Stream (Private Investigator) (*Additional Language 50%) (Extended)"];

let aps24Maths30English = ["BA Criminology & Psychology Stream (Psychometrist) (Extended) (*Additional Langauge 50%)", "BA Criminology & Psychology Stream (Trauma Counsellor) (Extended) (*Additional Langauge 50%)", "BA Criminology & Psychology Stream (Employee Assistance) (Extended) (*Additional Langauge 50%)", "BA Criminology & Psychology Stream (Practitioner) (Extended) (*Additional Langauge 50%)", "BA Criminology & Psychology Stream (Counsellor Guidance) (Extended) (*Additional Langauge 50%)", "BA Criminology & Psychology Stream (Criminologist) (Extended) (*Additional Langauge 50%)", "BA Criminology & Psychology Stream (Police) (Extended) (*Additional Langauge 50%)", "BA Criminology & Psychology Stream (Crime Scene Expert) (Extended) (*Additional Langauge 50%)", "BA Criminology & Psychology Stream (Correctional Officer) (Extended) (*Additional Langauge 50%)", "BA Criminology & Psychology Stream (Metro Police) (Extended) (*Additional Langauge 50%)", "BA Criminology & Psychology Stream (Private Investigator) (Extended) (*Additional Langauge 50%)"];

let aps22MathsEnglish = ["BCom (Human Resource Management) (Marketing Officers) (Extended)", "BCom (Human Resource Management) (Human Resource Practitioner) (Extended)", "BCom (Human Resource Management) (Purchasing Officers) (Extended)", "BCom (Human Resource Management) (Business Entrepreneurs) (Extended)", "BCom (Business Management) (Financial Officers) (Extended)", "BCom (Business Management) (Marketing Officers) (Extended)", "BCom (Business Management) (Human Resource Practitioner) (Extended)", "BCom (Business Management) (Purchasing Officers) (Extended)", "BCom (Business Management) (Business Entrepreneurs) (Extended)"];

let aps23MathsEnglish = ["BA - Criminology & Psychology Stream (Psychometrist) (*Additional Language 50%)", "BA - Criminology & Psychology Stream (Trauma Counsellor) (*Additional Language 50%)", "BA - Criminology & Psychology Stream (Employee Assistance Practitioner) (*Additional Language 50%)", "BA - Criminology & Psychology Stream (Counsellor Guidance) (*Additional Language 50%)", "BA - Criminology & Psychology Stream (Criminologist) (*Additional Language 50%)", "BA - Criminology & Psychology Stream (Police) (*Additional Language 50%)", "BA - Criminology & Psychology Stream (Crime Scene Expert) (*Additional Language 50%)", "BA - Criminology & Psychology Stream (Correctional Officer) (*Additional Language 50%)", "BA - Criminology & Psychology Stream (Metro Police) (*Additional Language 50%)", "BA - Criminology & Psychology Stream (Private Investigator) (*Additional Language 50%)", "BA - Cultural Studies Stream (Development Officer) (Additional Language 50%)", "BA - Cultural Studies Stream (Cultural Officer) (Additional Language 50%)", "BA - Cultural Studies Stream (Heritage Officer) (Additional Language 50%)", "BA - Cultural Studies Stream (Museum Curator) (Additional Language 50%)", "BA - Cultural Studies Stream (Records Officer) (Additional Language 50%)", "BA - Cultural Studies Stream (Knowledge Management Officer) (Additional Language 50%)", "BA - Cultural Studies Stream (Community Officer) (Additional Language 50%)", "BA - Sociology & Anthropology Stream (Labour Relations Specialist) (Additional Language 50%)", "BA - Sociology & Anthropology Stream (Social Policy Analyst) (Additional Language 50%)", "BA - Sociology & Anthropology Stream (Community Development Officer) (Additional Language 50%)", "BA - Sociology & Anthropology Stream (Outreach Coordinator) (Additional Language 50%)", "BA - Sociology & Anthropology Stream (Research Officer) (Additional Language 50%)", "BA - Sociology & Anthropology Stream (Population Analyst) (Additional Language 50%)", "Bachelor of Psychology (Psychometrist) (Additional Language 50%)", "Bachelor of Psychology (Counsellor Trauma) (Additional Language 50%)", "Bachelor of Psychology (Employee Assistance) (Additional Language 50%)", "Bachelor of Psychology (Practitioner) (Additional Language 50%)", "Bachelor of Psychology (Counsellor Guidance) (Additional Language 50%)", "Bachelor of Social Work (Social Worker) (Additional Language 50%)", "Bachelor of Social Work (Counsellor) (Additional Language 50%)", "Bachelor of Social Work (Employee Assistance Practitoner) (Additional Language 50%)"];

let aps24MathsEnglish = ["BEd (FP Teaching) Teaching Foundation Phase" , "BEd (FP Teaching) Curriculum Advisors", "BEd (FP Teaching) Principalship", "BEd (FP Teaching) Community Consultant"];

let aps25MathsEnglish = ["BA - Criminology & Psychology Stream (Psychometrist) (*Additional Language 50%)", "BA - Criminology & Psychology Stream (Trauma Counsellor) (*Additional Language 50%)", "BA - Criminology & Psychology Stream (Employee Assistance) (*Additional Language 50%)", "BA - Criminology & Psychology Stream (Practitioner) (*Additional Language 50%)", "BA - Criminology & Psychology Stream (Counsellor Guidance) (*Additional Language 50%)", "BA - Criminology & Psychology Stream (Criminologist) (*Additional Language 50%)", "BA - Criminology & Psychology Stream (Police) (*Additional Language 50%)", "BA - Criminology & Psychology Stream (Crime Scene Expert) (*Additional Language 50%)", "BA - Criminology & Psychology Stream (Correctional Officer) (*Additional Language 50%)", "BA - Criminology & Psychology Stream (Metro Police) (*Additional Language 50%)", "BA - Criminology & Psychology Stream (Private Investigator) (*Additional Language 50%)", "BA - Cultural Studies Stream (Development Officer) (*Additional Language 50%)", "BA - Cultural Studies Stream (Cultural Officer) (*Additional Language 50%)", "BA - Cultural Studies Stream (Heritage Officer) (*Additional Language 50%)", "BA - Cultural Studies Stream (Museum Curator) (*Additional Language 50%)", "BA - Cultural Studies Stream (Records Officer)  (*Additional Language 50%)", "BA - Cultural Studies Stream (Knowledge Management Officer) (*Additional Language 50%)", "BA - Cultural Studies Stream (Community Officer) (*Additional Language 50%)", "BA - Sociology & Anthropology Stream (Labour Relations Specialist) (*Additional Language 50%)", "BA - Sociology & Anthropology Stream (Social Policy Analyst) (*Additional Language 50%)", "BA - Sociology & Anthropology Stream (Community Development Officer) (*Additional Language 50%)", "BA - Sociology & Anthropology Stream (Outreach Coordinator) (*Additional Language 50%)", "BA - Sociology & Anthropology Stream (Research Officer) (*Additional Language 50%)", "BA - Sociology & Anthropology Stream (Population Analyst) (*Additional Language 50%)", "Bachelor of Psychology (Psychometrist) (*Additional Language 50%)", "Bachelor of Psychology (Counsellor Trauma) (*Additional Language 50%)", "Bachelor of Psychology (Employee Assistance) (*Additional Language 50%)", "Bachelor of Psychology (Practitioner) (*Additional Language 50%)", "Bachelor of Psychology (Counsellor Guidance) (*Additional Language 50%)", "Bachelor of Social Work (Social Worker) (*Additional Language 50%)", "Bachelor of Social Work (Counsellor) (*Additional Language 50%)", "Bachelor of Social Work (Employee Assistance Practitioner) (*Additional Language 50%)"];

let aps26MathsEnglish = ["BCom Human Resource Management (Marketing Officers)", "BCom Human Resource Management (Human Resource Practitioner)", "BCom Human Resource Management (Purchasing Officers)", "BCom Human Resource Management (Business Entrepreneurs)", "BCom Business Management (Financial Officers)", "BCom Business Management (Marketing Officers)", "BCom Business Management (Human Resource Practitioner)", "BCom Business Management (Purchasing Officers)", "BCom Business Management (Business Entrepreneurs)", "BCom Economics (Economists)", "BCom Economics (Consultants)", "BCom Economics (Business Entrepreneurs)", "Bachelor of Development in Planning and Management (Development & Environmental Managers)", "Bachelor of Development in Planning and Management (Facilitators)", "Bachelor of Development in Planning and Management (Planners)", "Bachelor of Development in Planning and Management (Managers with Specialised Skills in Development)", "Bachelor of Development in Planning and Management (Project Design)"];

let aps26WeAre50s = ["BCom Accountancy (Internal Auditors) (Extended)", "BCom Accountancy (Consultants) (Extended)", "BCom Accountancy (Business Entrepreneurs) (Extended)", "BCom Accountancy (Accountants) (Extended)"];

let aps28WeAre50s = ["BCom Accountancy (Internal Auditors)", "BCom Accountancy (Consultants)", "BCom Accountancy (Business Entrepreneurs)", "BCom Accountancy (Accountants)"];

let aps30WeAre50s = ["Bachelor of Accountancy (Management Accountants)", "Bachelor of Accountancy (Internal Auditors)", "Bachelor of Accountancy (Tax Consultants)", "Bachelor of Accountancy (Business Entrepreneurs)", "Bachelor of Accountancy (Accountants)"];

//ul-course-calculator-accounting
let aps24Accounting = ["BEd (SP & FET Teaching) Majoring in Economics & Management Studies (Accounting Teacher)", "BEd (SP & FET Teaching) Majoring in Economics & Management Studies (Business Economics Teacher)", "BEd (SP & FET Teaching) Majoring in Economics & Management Studies (Economics Teacher)", "BEd (SP & FET Teaching) Majoring in Economics & Management Studies (Research Assistant)", "BEd (SP & FET Teaching) Majoring in Economics & Management Studies (Laboratory Assistant)"];

//ul-course-calculator-agricuture-ls
let aps24Agriculture = ["Bachelor of Agricultural Management (Agricultural Extension Offers)", "Bachelor of Agricultural Management (Agricultural Officers)", "Bachelor of Agricultural Management (Farm Manager)", "Bachelor of Agricultural Management (Agriculture Technician)", "Bachelor of Agricultural Management (Research Assistant)"];

//ul-course-calculator-economics-maths-englishhl
let aps22EconomicsMathsEnglishhl = ["BCom Economics (Economists) (Extended)", "BCom Economics (Consultants) (Extended)", "BCom Economics (Business Entrepreneurs) (Extended)"];

//ul-course-calculator-economics-maths
let aps22EconomicsMaths = ["BCom Economics (Economists) (Extended)", "BCom Economics (Consultants) (Extended)", "BCom Economics (Business Entrepreneurs) (Extended)"];

//ul-course-calculator-english-mathlit
let aps22Mathslit30English = ["BCom Criminology & Psychology Stream (Psychometrist) (*Additional Language 50%) (Extended)", "BCom Criminology & Psychology Stream (Trauma Counsellor) (*Additional Language 50%) (Extended)", "BCom Criminology & Psychology Stream (Employee Assistance) (*Additional Language 50%) (Extended)", "BCom Criminology & Psychology Stream (Practitioner) (*Additional Language 50%) (Extended)", "BCom Criminology & Psychology Stream (Counsellor guidance) (*Additional Language 50%) (Extended)", "BCom Criminology & Psychology Stream (Criminologist) (*Additional Language 50%) (Extended)", "BCom Criminology & Psychology Stream (Police) (*Additional Language 50%) (Extended)", "BCom Criminology & Psychology Stream (Crime Scene Expert) (*Additional Language 50%) (Extended)", "BCom Criminology & Psychology Stream (Correctional Officer) (*Additional Language 50%) (Extended)", "BCom Criminology & Psychology Stream (Metro Police) (*Additional Language 50%) (Extended)", "BCom Criminology & Psychology Stream (Private Investigator) (*Additional Language 50%) (Extended)"];

let aps24Mathslit30English = ["BA Criminology & Psychology Stream (Psychometrist) (Extended) (*Additional Langauge 50%)", "BA Criminology & Psychology Stream (Trauma Counsellor) (Extended) (*Additional Langauge 50%)", "BA Criminology & Psychology Stream (Employee Assistance) (Extended) (*Additional Langauge 50%)", "BA Criminology & Psychology Stream (Practitioner) (Extended) (*Additional Langauge 50%)", "BA Criminology & Psychology Stream (Counsellor Guidance) (Extended) (*Additional Langauge 50%)", "BA Criminology & Psychology Stream (Criminologist) (Extended) (*Additional Langauge 50%)", "BA Criminology & Psychology Stream (Police) (Extended) (*Additional Langauge 50%)", "BA Criminology & Psychology Stream (Crime Scene Expert) (Extended) (*Additional Langauge 50%)", "BA Criminology & Psychology Stream (Correctional Officer) (Extended) (*Additional Langauge 50%)", "BA Criminology & Psychology Stream (Metro Police) (Extended) (*Additional Langauge 50%)", "BA Criminology & Psychology Stream (Private Investigator) (Extended) (*Additional Langauge 50%)"];

let aps25MathslitEnglish = ["BA - Criminology & Psychology Stream (Psychometrist) (*Additional Language 50%)", "BA - Criminology & Psychology Stream (Trauma Counsellor) (*Additional Language 50%)", "BA - Criminology & Psychology Stream (Employee Assistance) (*Additional Language 50%)", "BA - Criminology & Psychology Stream (Practitioner) (*Additional Language 50%)", "BA - Criminology & Psychology Stream (Counsellor Guidance) (*Additional Language 50%)", "BA - Criminology & Psychology Stream (Criminologist) (*Additional Language 50%)", "BA - Criminology & Psychology Stream (Police) (*Additional Language 50%)", "BA - Criminology & Psychology Stream (Crime Scene Expert) (*Additional Language 50%)", "BA - Criminology & Psychology Stream (Correctional Officer) (*Additional Language 50%)", "BA - Criminology & Psychology Stream (Metro Police) (*Additional Language 50%)", "BA - Criminology & Psychology Stream (Private Investigator) (*Additional Language 50%)", "BA - Cultural Studies Stream (Development Officer) (*Additional Language 50%)", "BA - Cultural Studies Stream (Cultural Officer) (*Additional Language 50%)", "BA - Cultural Studies Stream (Heritage Officer) (*Additional Language 50%)", "BA - Cultural Studies Stream (Museum Curator) (*Additional Language 50%)", "BA - Cultural Studies Stream (Records Officer)  (*Additional Language 50%)", "BA - Cultural Studies Stream (Knowledge Management Officer) (*Additional Language 50%)", "BA - Cultural Studies Stream (Community Officer) (*Additional Language 50%)", "BA - Sociology & Anthropology Stream (Labour Relations Specialist) (*Additional Language 50%)", "BA - Sociology & Anthropology Stream (Social Policy Analyst) (*Additional Language 50%)", "BA - Sociology & Anthropology Stream (Community Development Officer) (*Additional Language 50%)", "BA - Sociology & Anthropology Stream (Outreach Coordinator) (*Additional Language 50%)", "BA - Sociology & Anthropology Stream (Research Officer) (*Additional Language 50%)", "BA - Sociology & Anthropology Stream (Population Analyst) (*Additional Language 50%)", "Bachelor of Psychology (Psychometrist) (*Additional Language 50%)", "Bachelor of Psychology (Counsellor Trauma) (*Additional Language 50%)", "Bachelor of Psychology (Employee Assistance) (*Additional Language 50%)", "Bachelor of Psychology (Practitioner) (*Additional Language 50%)", "Bachelor of Psychology (Counsellor Guidance) (*Additional Language 50%)", "Bachelor of Social Work (Social Worker) (*Additional Language 50%)", "Bachelor of Social Work (Counsellor) (*Additional Language 50%)", "Bachelor of Social Work (Employee Assistance Practitioner) (*Additional Language 50%)"];

//ul-course-calculator-english
let aps23JustEnglishat50 = ["BA Media Studies (Radio Broadcasting) (Extended)", "BA Media Studies (Newspaper & Magazine Editor) (Extended)", "BA Media Studies (Journalist) (Extended)", "BA Media Studies (Radio & Film Producer) (Extended)", "BA Media Studies (Marketing Manager) (Extended)", "BA Media Studies (Radio & TV announcer) (Extended)", "BA Media Studies (Information Technologist) (Extended)", "BA Media Studies (Media Economist) (Extended)"];

let aps25JustEnglishat50 = ["BA - Political Studies Stream (Political Analysts)", "BA - Political Studies Stream (Politicians)", "BA - Languages Stream (Language Practitioner) (*Additional Language 60%)", "BA - Translation & Linguistics Stream (Language Practitioner) (*Additional Language 60%)", "BA - Translation & Linguistics Stream (Interpreter) (*Additional Language 60%)", "BA - Translation & Linguistics Stream (Translator) (*Additional Language 60%)", "BA - Performing Arts Stream (Performing Artist) (*Additional Language 60%)", "BA - Performing Arts Stream (Dramatist) (*Additional Language 60%)", "BA - Performing Arts Stream (Script Writer) (*Additional Language 60%)", "Bachelor of Information Studies (Indexer) (*Additional Language 60%)", "Bachelor of Information Studies (Abstracter) (*Additional Language 60%)", "Bachelor of Information Studies (Information Consultant) (*Additional Language 60%)", "Bachelor of Information Studies (Information Analyst) (*Additional Language 60%)", "Bachelor of Information Studies (Information Specialist) (*Additional Language 60%)", "Bachelor of Information Studies (Librarian) (*Additional Language 60%)", "BA - Contemporary English & Multilingual Studies (Bilingual Expert) (*Additional Language 60%)", "BA - Contemporary English & Multilingual Studies (Translator & Interpreter) (*Additional Language 60%)", "BA - Communication Studies (Public Relations Officer) (*Additonal Language 60%)", "BA - Communication Studies (Communications Practitioner) (*Additonal Language 60%)", "BA - Communication Studies (Marketing Manager) (*Additonal Language 60%)", "BA - Communication Studies (Sales Promoter) (*Additonal Language 60%)", "BA - Media Studies (Radio Broadcasting) (*Additonal Language 60%)", "BA - Media Studies (Newspaper & Magazine Editor) (*Additonal Language 60%)", "BA - Media Studies (Journalist) (*Additonal Language 60%)", "BA - Media Studies (Radio & TV Announcer) (*Additonal Language 60%)", "BA - Media Studies (Information Technologist) (*Additonal Language 60%)", "BA - Media Studies (Media Economist) (*Additonal Language 60%)"];

let aps26JustEnglishat50 = ["Bachelor of Administration (Local Government Practitioners)", "Bachelor of Administration (Public Relations Practitioners)", "Bachelor of Administration (Consultants)", "Bachelor of Administration in Local Government (Project Managers)", "Bachelor of Administration in Local Government (Local Government Officers)", "Bachelor of Administration in Local Government (Consultants)"];

let aps26JustEnglishat60 = ["Bachelor of Laws (Judge, Magistrate) (Extended)", "Bachelor of Laws (Advocate, Attorney) (Extended)", "Bachelor of Laws (Director of Public Prosecution) (Extended)", "Bachelor of Laws (Registrar, Master of High Court) (Extended)", "Bachelor of Laws (Legal Advisor) (Extended)", "Bachelor of Laws (Legal Administrative Officer) (Extended)", "Bachelor of Laws (Labour Consultant) (Extended)", "Bachelor of Laws (Commisioner) (Extended)"];

let aps30JustEnglishat60 = ["Bachelor of Laws (Judge, Magistrate)", "Bachelor of Laws (Advocate, Attorney)", "Bachelor of Laws (Director of Public Prosecution)", "Bachelor of Laws (Registrar, Master of High Court)", "Bachelor of Laws (Legal Advisor)", "Bachelor of Laws (Legal Administrative Officer)", "Bachelor of Laws (Labour Consultant)", "Bachelor of Laws (Commisioner)"];

//ul-course-calculator-englishhl-mathlit
let aps22Mathslit30Englishhl = ["BCom Criminology & Psychology Stream (Psychometrist) (*Additional Language 50%) (Extended)", "BCom Criminology & Psychology Stream (Trauma Counsellor) (*Additional Language 50%) (Extended)", "BCom Criminology & Psychology Stream (Employee Assistance) (*Additional Language 50%) (Extended)", "BCom Criminology & Psychology Stream (Practitioner) (*Additional Language 50%) (Extended)", "BCom Criminology & Psychology Stream (Counsellor guidance) (*Additional Language 50%) (Extended)", "BCom Criminology & Psychology Stream (Criminologist) (*Additional Language 50%) (Extended)", "BCom Criminology & Psychology Stream (Police) (*Additional Language 50%) (Extended)", "BCom Criminology & Psychology Stream (Crime Scene Expert) (*Additional Language 50%) (Extended)", "BCom Criminology & Psychology Stream (Correctional Officer) (*Additional Language 50%) (Extended)", "BCom Criminology & Psychology Stream (Metro Police) (*Additional Language 50%) (Extended)", "BCom Criminology & Psychology Stream (Private Investigator) (*Additional Language 50%) (Extended)"];

let aps24Mathslit30Englishhl = ["BA Criminology & Psychology Stream (Psychometrist) (Extended) (*Additional Langauge 50%)", "BA Criminology & Psychology Stream (Trauma Counsellor) (Extended) (*Additional Langauge 50%)", "BA Criminology & Psychology Stream (Employee Assistance) (Extended) (*Additional Langauge 50%)", "BA Criminology & Psychology Stream (Practitioner) (Extended) (*Additional Langauge 50%)", "BA Criminology & Psychology Stream (Counsellor Guidance) (Extended) (*Additional Langauge 50%)", "BA Criminology & Psychology Stream (Criminologist) (Extended) (*Additional Langauge 50%)", "BA Criminology & Psychology Stream (Police) (Extended) (*Additional Langauge 50%)", "BA Criminology & Psychology Stream (Crime Scene Expert) (Extended) (*Additional Langauge 50%)", "BA Criminology & Psychology Stream (Correctional Officer) (Extended) (*Additional Langauge 50%)", "BA Criminology & Psychology Stream (Metro Police) (Extended) (*Additional Langauge 50%)", "BA Criminology & Psychology Stream (Private Investigator) (Extended) (*Additional Langauge 50%)"];

//ul-course-calculator-englishhl-maths
let aps22Maths30Englishhl = ["BCom Criminology & Psychology Stream (Psychometrist) (*Additional Language 50%) (Extended)", "BCom Criminology & Psychology Stream (Trauma Counsellor) (*Additional Language 50%) (Extended)", "BCom Criminology & Psychology Stream (Employee Assistance) (*Additional Language 50%) (Extended)", "BCom Criminology & Psychology Stream (Practitioner) (*Additional Language 50%) (Extended)", "BCom Criminology & Psychology Stream (Counsellor guidance) (*Additional Language 50%) (Extended)", "BCom Criminology & Psychology Stream (Criminologist) (*Additional Language 50%) (Extended)", "BCom Criminology & Psychology Stream (Police) (*Additional Language 50%) (Extended)", "BCom Criminology & Psychology Stream (Crime Scene Expert) (*Additional Language 50%) (Extended)", "BCom Criminology & Psychology Stream (Correctional Officer) (*Additional Language 50%) (Extended)", "BCom Criminology & Psychology Stream (Metro Police) (*Additional Language 50%) (Extended)", "BCom Criminology & Psychology Stream (Private Investigator) (*Additional Language 50%) (Extended)"];

let aps24Maths30Englishhl = ["BA Criminology & Psychology Stream (Psychometrist) (Extended) (*Additional Langauge 50%)", "BA Criminology & Psychology Stream (Trauma Counsellor) (Extended) (*Additional Langauge 50%)", "BA Criminology & Psychology Stream (Employee Assistance) (Extended) (*Additional Langauge 50%)", "BA Criminology & Psychology Stream (Practitioner) (Extended) (*Additional Langauge 50%)", "BA Criminology & Psychology Stream (Counsellor Guidance) (Extended) (*Additional Langauge 50%)", "BA Criminology & Psychology Stream (Criminologist) (Extended) (*Additional Langauge 50%)", "BA Criminology & Psychology Stream (Police) (Extended) (*Additional Langauge 50%)", "BA Criminology & Psychology Stream (Crime Scene Expert) (Extended) (*Additional Langauge 50%)", "BA Criminology & Psychology Stream (Correctional Officer) (Extended) (*Additional Langauge 50%)", "BA Criminology & Psychology Stream (Metro Police) (Extended) (*Additional Langauge 50%)", "BA Criminology & Psychology Stream (Private Investigator) (Extended) (*Additional Langauge 50%)"];

let aps22MathsEnglishhl = ["BCom (Human Resource Management) (Marketing Officers) (Extended)", "BCom (Human Resource Management) (Human Resource Practitioner) (Extended)", "BCom (Human Resource Management) (Purchasing Officers) (Extended)", "BCom (Human Resource Management) (Business Entrepreneurs) (Extended)", "BCom (Business Management) (Financial Officers) (Extended)", "BCom (Business Management) (Marketing Officers) (Extended)", "BCom (Business Management) (Human Resource Practitioner) (Extended)", "BCom (Business Management) (Purchasing Officers) (Extended)", "BCom (Business Management) (Business Entrepreneurs) (Extended)"];

let aps23MathsEnglishhl = ["BA - Criminology & Psychology Stream (Psychometrist) (*Additional Language 50%)", "BA - Criminology & Psychology Stream (Trauma Counsellor) (*Additional Language 50%)", "BA - Criminology & Psychology Stream (Employee Assistance Practitioner) (*Additional Language 50%)", "BA - Criminology & Psychology Stream (Counsellor (Guidance)) (*Additional Language 50%)", "BA - Criminology & Psychology Stream (Criminologist) (*Additional Language 50%)", "BA - Criminology & Psychology Stream (Police) (*Additional Language 50%)", "BA - Criminology & Psychology Stream (Crime Scene Expert) (*Additional Language 50%)", "BA - Criminology & Psychology Stream (Correctional Officer) (*Additional Language 50%)", "BA - Criminology & Psychology Stream (Metro Police) (*Additional Language 50%)", "BA - Criminology & Psychology Stream (Private Investigator) (*Additional Language 50%)", "BA - Cultural Studies Stream (Development Officer) (Additional Language 50%)", "BA - Cultural Studies Stream (Cultural Officer) (Additional Language 50%)", "BA - Cultural Studies Stream (Heritage Officer) (Additional Language 50%)", "BA - Cultural Studies Stream (Museum Curator) (Additional Language 50%)", "BA - Cultural Studies Stream (Records Officer) (Additional Language 50%)", "BA - Cultural Studies Stream (Knowledge Management Officer) (Additional Language 50%)", "BA - Cultural Studies Stream (Community Officer) (Additional Language 50%)", "BA - Sociology & Anthropology Stream (Labour Relations Specialist) (Additional Language 50%)", "BA - Sociology & Anthropology Stream (Social Policy Analyst) (Additional Language 50%)", "BA - Sociology & Anthropology Stream (Community Development Officer) (Additional Language 50%)", "BA - Sociology & Anthropology Stream (Outreach Coordinator) (Additional Language 50%)", "BA - Sociology & Anthropology Stream (Research Officer) (Additional Language 50%)", "BA - Sociology & Anthropology Stream (Population Analyst) (Additional Language 50%)", "Bachelor of Psychology (Psychometrist) (Additional Language 50%)", "Bachelor of Psychology (Counsellor Trauma) (Additional Language 50%)", "Bachelor of Psychology (Employee Assistance) (Additional Language 50%)", "Bachelor of Psychology (Practitioner) (Additional Language 50%)", "Bachelor of Psychology (Counsellor Guidance) (Additional Language 50%)", "Bachelor of Social Work (Social Worker) (Additional Language 50%)", "Bachelor of Social Work (Counsellor) (Additional Language 50%)", "Bachelor of Social Work (Employee Assistance Practitoner) (Additional Language 50%)"];

let aps24MathsEnglishhl = ["BEd (FP Teaching) Teaching Foundation Phase" , "BEd (FP Teaching) Curriculum Advisors", "BEd (FP Teaching) Principalship", "BEd (FP Teaching) Community Consultant"];

let aps25MathsEnglishhl = ["BA - Criminology & Psychology Stream (Psychometrist) (*Additional Language 50%)", "BA - Criminology & Psychology Stream (Trauma Counsellor) (*Additional Language 50%)", "BA - Criminology & Psychology Stream (Employee Assistance) (*Additional Language 50%)", "BA - Criminology & Psychology Stream (Practitioner) (*Additional Language 50%)", "BA - Criminology & Psychology Stream (Counsellor Guidance) (*Additional Language 50%)", "BA - Criminology & Psychology Stream (Criminologist) (*Additional Language 50%)", "BA - Criminology & Psychology Stream (Police) (*Additional Language 50%)", "BA - Criminology & Psychology Stream (Crime Scene Expert) (*Additional Language 50%)", "BA - Criminology & Psychology Stream (Correctional Officer) (*Additional Language 50%)", "BA - Criminology & Psychology Stream (Metro Police) (*Additional Language 50%)", "BA - Criminology & Psychology Stream (Private Investigator) (*Additional Language 50%)", "BA - Cultural Studies Stream (Development Officer) (*Additional Language 50%)", "BA - Cultural Studies Stream (Cultural Officer) (*Additional Language 50%)", "BA - Cultural Studies Stream (Heritage Officer) (*Additional Language 50%)", "BA - Cultural Studies Stream (Museum Curator) (*Additional Language 50%)", "BA - Cultural Studies Stream (Records Officer)  (*Additional Language 50%)", "BA - Cultural Studies Stream (Knowledge Management Officer) (*Additional Language 50%)", "BA - Cultural Studies Stream (Community Officer) (*Additional Language 50%)", "BA - Sociology & Anthropology Stream (Labour Relations Specialist) (*Additional Language 50%)", "BA - Sociology & Anthropology Stream (Social Policy Analyst) (*Additional Language 50%)", "BA - Sociology & Anthropology Stream (Community Development Officer) (*Additional Language 50%)", "BA - Sociology & Anthropology Stream (Outreach Coordinator) (*Additional Language 50%)", "BA - Sociology & Anthropology Stream (Research Officer) (*Additional Language 50%)", "BA - Sociology & Anthropology Stream (Population Analyst) (*Additional Language 50%)", "Bachelor of Psychology (Psychometrist) (*Additional Language 50%)", "Bachelor of Psychology (Counsellor Trauma) (*Additional Language 50%)", "Bachelor of Psychology (Employee Assistance) (*Additional Language 50%)", "Bachelor of Psychology (Practitioner) (*Additional Language 50%)", "Bachelor of Psychology (Counsellor Guidance) (*Additional Language 50%)", "Bachelor of Social Work (Social Worker) (*Additional Language 50%)", "Bachelor of Social Work (Counsellor) (*Additional Language 50%)", "Bachelor of Social Work (Employee Assistance Practitioner) (*Additional Language 50%)"];

let aps26MathsEnglishhl = ["BCom Human Resource Management (Marketing Officers)", "BCom Human Resource Management (Human Resource Practitioner)", "BCom Human Resource Management (Purchasing Officers)", "BCom Human Resource Management (Business Entrepreneurs)", "BCom Business Management (Financial Officers)", "BCom Business Management (Marketing Officers)", "BCom Business Management (Human Resource Practitioner)", "BCom Business Management (Purchasing Officers)", "BCom Business Management (Business Entrepreneurs)", "BCom Economics (Economists)", "BCom Economics (Consultants)", "BCom Economics (Business Entrepreneurs)", "Bachelor of Development in Planning and Management (Development & Environmental Managers)", "Bachelor of Development in Planning and Management (Facilitators)", "Bachelor of Development in Planning and Management (Planners)", "Bachelor of Development in Planning and Management (Managers with Specialised Skills in Development)", "Bachelor of Development in Planning and Management (Project Design)"];

let aps26WeAre50hl = ["BCom Accountancy (Internal Auditors) (Extended)", "BCom Accountancy (Consultants) (Extended)", "BCom Accountancy (Business Entrepreneurs) (Extended)", "BCom Accountancy (Accountants) (Extended)"];

let aps28WeAre50hl = ["BCom Accountancy (Internal Auditors)", "BCom Accountancy (Consultants)", "BCom Accountancy (Business Entrepreneurs)", "BCom Accountancy (Accountants)"];

let aps30WeAre50hl = ["Bachelor of Accountancy (Management Accountants)", "Bachelor of Accountancy (Internal Auditors)", "Bachelor of Accountancy (Tax Consultants)", "Bachelor of Accountancy (Business Entrepreneurs)", "Bachelor of Accountancy (Accountants)"];

//ul-course-calculator-englishhl
let aps23JustEnglishhlat50 = ["BA Media Studies (Radio Broadcasting) (Extended)", "BA Media Studies (Newspaper & Magazine Editor) (Extended)", "BA Media Studies (Journalist) (Extended)", "BA Media Studies (Radio & Film Producer) (Extended)", "BA Media Studies (Marketing Manager) (Extended)", "BA Media Studies (Radio & TV announcer) (Extended)", "BA Media Studies (Information Technologist) (Extended)", "BA Media Studies (Media Economist) (Extended)"];

let aps25JustEnglishhlat50 = ["BA - Political Studies Stream (Political Analysts)", "BA - Political Studies Stream (Politicians)", "BA - Languages Stream (Language Practitioner) (*Additional Language 60%)", "BA - Translation & Linguistics Stream (Language Practitioner) (*Additional Language 60%)", "BA - Translation & Linguistics Stream (Interpreter) (*Additional Language 60%)", "BA - Translation & Linguistics Stream (Translator) (*Additional Language 60%)", "BA - Performing Arts Stream (Performing Artist) (*Additional Language 60%)", "BA - Performing Arts Stream (Dramatist) (*Additional Language 60%)", "BA - Performing Arts Stream (Script Writer) (*Additional Language 60%)", "Bachelor of Information Studies (Indexer) (*Additional Language 60%)", "Bachelor of Information Studies (Abstracter) (*Additional Language 60%)", "Bachelor of Information Studies (Information Consultant) (*Additional Language 60%)", "Bachelor of Information Studies (Information Analyst) (*Additional Language 60%)", "Bachelor of Information Studies (Information Specialist) (*Additional Language 60%)", "Bachelor of Information Studies (Librarian) (*Additional Language 60%)", "BA - Contemporary English & Multilingual Studies (Bilingual Expert) (*Additional Language 60%)", "BA - Contemporary English & Multilingual Studies (Translator & Interpreter) (*Additional Language 60%)", "BA - Communication Studies (Public Relations Officer) (*Additonal Language 60%)", "BA - Communication Studies (Communications Practitioner) (*Additonal Language 60%)", "BA - Communication Studies (Marketing Manager) (*Additonal Language 60%)", "BA - Communication Studies (Sales Promoter) (*Additonal Language 60%)", "BA - Media Studies (Radio Broadcasting) (*Additonal Language 60%)", "BA - Media Studies (Newspaper & Magazine Editor) (*Additonal Language 60%)", "BA - Media Studies (Journalist) (*Additonal Language 60%)", "BA - Media Studies (Radio & TV Announcer) (*Additonal Language 60%)", "BA - Media Studies (Information Technologist) (*Additonal Language 60%)", "BA - Media Studies (Media Economist) (*Additonal Language 60%)"];

let aps26JustEnglishhlat50 = ["Bachelor of Administration (Local Government Practitioners)", "Bachelor of Administration (Public Relations Practitioners)", "Bachelor of Administration (Consultants)", "Bachelor of Administration in Local Government (Project Managers)", "Bachelor of Administration in Local Government (Local Government Officers)", "Bachelor of Administration in Local Government (Consultants)"];

let aps26JustEnglishhlat60 = ["Bachelor of Laws (Judge, Magistrate) (Extended)", "Bachelor of Laws (Advocate, Attorney) (Extended)", "Bachelor of Laws (Director of Public Prosecution) (Extended)", "Bachelor of Laws (Registrar, Master of High Court) (Extended)", "Bachelor of Laws (Legal Advisor) (Extended)", "Bachelor of Laws (Legal Administrative Officer) (Extended)", "Bachelor of Laws (Labour Consultant) (Extended)", "Bachelor of Laws (Commisioner) (Extended)"];

let aps30JustEnglishhlat60 = ["Bachelor of Laws (Judge, Magistrate)", "Bachelor of Laws (Advocate, Attorney)", "Bachelor of Laws (Director of Public Prosecution)", "Bachelor of Laws (Registrar, Master of High Court)", "Bachelor of Laws (Legal Advisor)", "Bachelor of Laws (Legal Administrative Officer)", "Bachelor of Laws (Labour Consultant)", "Bachelor of Laws (Commisioner)"];

//ul-course-calculator-geography-ls
let aps24Geography = ["Bachelor of Science in Environmental & Resource Studies (Public & Private Sectors)", "Bachelor of Science in Environmental & Resource Studies (Environmental Officers)", "Bachelor of Science in Environmental & Resource Studies (Development Planners)", "Bachelor of Science in Environmental & Resource Studies (Cartographers)"];

//ul-course-calculator-historyorgeography
let aps24GeographyorHistory = ["BEd (SP & FET Teaching) Majoring in Languages & Social Studies (Social Science Teacher) (*Home Language 50%)", "BEd (SP & FET Teaching) Majoring in Languages & Social Studies (Language Teacher) (*Home Language 50%)", "BEd (SP & FET Teaching) Majoring in Languages & Social Studies (Research Assistant) (*Home Language 50%)", "BEd (SP & FET Teaching) Majoring in Languages & Social Studies (Laboratory Assistant) (*Home Language 50%)"];

//ul-course-calculator-life-orientation
let aps24LifeOrientation = ["BEd (SP & FET Teaching) Majoring in Languages & Life Orientation (Life Orientation Teacher)  (*Home Language 50%)", "BEd (SP & FET Teaching) Majoring in Languages & Life Orientation (Language Teacher)  (*Home Language 50%)", "BEd (SP & FET Teaching) Majoring in Languages & Life Orientation (Research Assistant)  (*Home Language 50%)", "BEd (SP & FET Teaching) Majoring in Languages & Life Orientation (Laboratory Assistant) (*Home Language 50%)"];

//ul-course-calculator-lifescience-maths
let aps24JustLifeScience50 = ["Bachelor of Science in Agriculture in Agricultural Economics (Public & Private Sectors)", "Bachelor of Science in Agriculture in Agricultural Economics (Agricultural Economist)", "Bachelor of Science in Agriculture in Agricultural Economics (Agri-Business Managers)", "Bachelor of Science in Agriculture in Agricultural Economics (Agricultural Policy Analysts)", "Bachelor of Science in Agriculture in Agricultural Economics (Farm Managers)", "Bachelor of Science in Agriculture in Agricultural Economics (Consultants)"];

let aps24JustorLs = ["BEd (SP & FET Teaching) Majoring in Mathematics, Science & Technology (Mathematics Teacher)", "BEd (SP & FET Teaching) Majoring in Mathematics, Science & Technology (Life Sciences Teacher)", "BEd (SP & FET Teaching) Majoring in Mathematics, Science & Technology (Technology Teacher)", "BEd (SP & FET Teaching) Majoring in Mathematics, Science & Technology (Physical Sciences Teacher)", "BEd (SP & FET Teaching) Majoring in Mathematics, Science & Technology (Research Assistant)", "BEd (SP & FET Teaching) Majoring in Mathematics, Science & Technology (Laboratory Assistant)"];

//ul-course-calculator-lifescience-physics-englishhl
let aps22LifeScienceis40 = ["Bachelor of Science (Life Sciences Stream) Biotechnology & Bio-informatics related Occupations (Extended)", "Bachelor of Science (Life Sciences Stream) Consultancy - any biological field (Extended)", "Bachelor of Science (Life Sciences Stream) Environmental Health & Occupational Hygiene (Extended)", "Bachelor of Science (Life Sciences Stream) Environmental Management (Nature Conservation , Environmental Impact Consultant) (Extended)", "Bachelor of Science (Life Sciences Stream) Industrial Biochemistry & Microbiology (Extended)", "Bachelor of Science (Life Sciences Stream) Entomology (Extended)", "Bachelor of Science (Physical Science Stream) Physicists (Extended)", "Bachelor of Science (Physical Science Stream) Chemical Industry (Extended)", "Bachelor of Science (Physical Science Stream) Analytical & Production Laboratories (Extended)", "Bachelor of Science (Physical Science Stream) Consultancy (Extended)", "Bachelor of Science (Physical Science Stream) Industrial Process Management (Extended)", "Bachelor of Science (Physical Science Stream) Metallurgists (Extended)"];

let aps24LifeScienceis50 = ["Bachelor of Science in Agriculture in Plant Production (Public & Private Sectors)", "Bachelor of Science in Agriculture in Plant Production (Agronomists)", "Bachelor of Science in Agriculture in Plant Production (Plant Breeders)", "Bachelor of Science in Agriculture in Plant Production (Form Managers)", "Bachelor of Science in Agriculture in Plant Production (Consultants)", "Bachelor of Science in Agriculture in Animal Production (Public & Private Sectors)", "Bachelor of Science in Agriculture in Animal Production (Marketing Officers in Processing, Distribution & Marketing of Livestock Products)", "Bachelor of Science in Agriculture in Animal Production (Livestock Scientists)", , "Bachelor of Science in Agriculture in Animal Production (Animal Breeders & Nutritionists)", "Bachelor of Science in Agriculture in Animal Production (Farm Managers)", "Bachelor of Science in Agriculture in Animal Production (Consultants)"];

let aps24LifeScienceisStill50 = ["Bachelor of Science in Water & Sanitation Sciences (Water & Sanitation Scientist)", "Bachelor of Science in Water & Sanitation Sciences (Community Water Supply Project Planner)", "Bachelor of Science in Water & Sanitation Sciences (Community Sanitation Project Manager)", "Bachelor of Science in Water & Sanitation Sciences (Water Catchment Manager)", "Bachelor of Science in Water & Sanitation Sciences (Water Resources Planner)", "Bachelor of Science in Water & Sanitation Sciences (Water Treatment Plant Manager)", "Bachelor of Science in Water & Sanitation Sciences (Waste Water Treatment Manager)"];

let aps26LifeScienceisStill50 = ["Bachelor of Science (Life Sciences Stream) - Biotechnology & Bioinformatics related occupations", "Bachelor of Science (Life Sciences Stream) - Consultancy (Any Biological Field)", "Bachelor of Science (Life Sciences Stream) - Environmental Health & Occupational Hygiene", "Bachelor of Science (Life Sciences Stream) - Environmental Management (Nature Conservation, Environmental Impact Consultant)", "Bachelor of Science (Life Sciences Stream) - Industrial Biochemistry & Microbiology", "Bachelor of Science (Life Sciences Stream) - Entomology", "Bachelor of Science (Physical Sciences Stream) - Physicists", "Bachelor of Science (Physical Sciences Stream) - Chemical Industry", "Bachelor of Science (Physical Sciences Stream) - Analytical & Production Laboratories", "Bachelor of Science (Physical Sciences Stream) - Consultancy", "Bachelor of Science (Physical Sciences Stream) - Industrial Process Management Metallurgists"];

let aps25LsIsStill50 = ["Bachelor of Science in Agriculture in Soil Science (Public & Private Sectors: )", "Bachelor of Science in Agriculture in Soil Science (Soil Scientists)", "Bachelor of Science in Agriculture in Soil Science (Laboratory Managers)", "Bachelor of Science in Agriculture in Soil Science (Soil Analysts)"];

let aps26LSandPhysicsare60 = ["Bachelor of Science in Medical Sciences (Medical Scientist)", "Bachelor of Science in Medical Sciences (Laboratory Researchers)", "Bachelor of Science in Dietetics (Dietician in Hospital)", "Bachelor of Science in Dietetics (Community Dietician)", "Bachelor of Science in Dietetics (Food Service Manager)", "Bachelor of Science in Dietetics (Consultants for food production companies)", "Bachelor of Science in Dietetics (Medical Representatives of Nutritional Companies)", "Bachelor of Science in Dietetics (Private Practise & Research Centres)", "Bachelor of Nursing (General, Psychiatric, Community Nurse, & Mid-Wife)", "Bachelor of Nursing (Occupational Health Nurse)", "Bachelor of Nursing (Old Age Homes / Home Based Care)", "Bachelor of Nursing (Private Practise / Hospitals)", "Bachelor of Nursing (Pharmaceutical Companies)", "Bachelor of Nursing (Insurance & Medical Aid Companies)"];

let aps27All60exceptEnglish = ["Bachelor of Medicine & Bachelor of Surgery (General Medical Practitioner)", "Bachelor of Medicine & Bachelor of Surgery (Medical Research Institutes)", "Bachelor of Optometry (Optometrist in Private and Public Sector)", "Bachelor of Pharmacy (Retail Medicine)", "Bachelor of Pharmacy (Medicine Control Centre)", "Bachelor of Pharmacy (Departments of Health)", "Bachelor of Pharmacy (Industrial Environment)", "Bachelor of Pharmacy (Private Practise)"];

//ul-course-calculator-maths
let aps21m = ["Extended Bachelor of Administration in Human Resource Management", "Extended Bachelor of Administration in Industrial & Organisational"];

let aps23m = ["Bachelor of Administration in Human Resources Management", "Bachelor of Administration in Industrial & Organisational Psychology"];
let aps24m = ["Extended Bachelor of Science in Information Technology", "Extended Bachelor of Commerce in Economic Sciences with Economics & Risk Management"];

let aps24mmore = ["Bachelor of Consumer Sciences in Fashion Retail Management with Fashion Supply"];

let aps26mmore = ["Bachelor of Commerce in Economic Sciences with Economics & Risk Management", "Bachelor of Arts with Industrial & Organisational Psychology & Labour Relations Management"];

let aps28mmore = ["Extended Bachelor of Science in Financial Mathematics", "Extended Bachelor of Science in Business Analytics", "Extended Bachelor of Science in Quantative Risk Management", "Bachelor of Science in Urban & Regional Planning"];

let aps30mmore = ["Bachelor of Commerce in Human Resource Management with Labour Relations Management", "Bachelor of Commerce in Industrial & Organisational Psychology"];

let aps32mmore = ["Bachelor of Science in Financial Management", "Bachelor of Science in Business Analytics", "Bachelor of Science in Quantative Risk Management", "Bachelor of Science in Acturial Sciences"];

//ul-course-calculator-mathslit
let aps21mlit = ["Extended Bachelor of Administration in Human Resource Management", "Extended Bachelor of Administration in Industrial & Organisational"];

let aps23mlit = ["Bachelor of Administration in Human Resources Management", "Bachelor of Administration in Industrial & Organisational Psychology"];

let aps26mlit60 = ["Bachelor of Arts with Industrial & Organisational Psychology & Labour Relations Management"];

//ul-course-calculator-physics-english-maths
let aps22Physicsis50 = ["Bachelor of Science (Mathematical Sciences Stream) System Analytics (Extended)", "Bachelor of Science (Mathematical Sciences Stream) Computer Consultants (Extended)", "Bachelor of Science (Mathematical Sciences Stream) Computer Programmers (Extended)", "Bachelor of Science (Mathematical Sciences Stream) Computer Modelling Consultants (Extended)", "Bachelor of Science (Mathematical Sciences Stream) Aerospace Engineers (Extended)", "Bachelor of Science (Mathematical Sciences Stream) Network Specialists Statistiticians (Extended)"];

let aps24Physicsis60 = ["Bachelor of Science (Mathematical Sciences Stream) Systems Analysts", "Bachelor of Science (Mathematical Sciences Stream) Computer Programmer", "Bachelor of Science (Mathematical Sciences Stream) Network Specialist", "Bachelor of Science (Mathematical Sciences Stream) Project Management", "Bachelor of Science (Mathematical Sciences Stream) Logistics", "Bachelor of Science (Mathematical Sciences Stream) Finacial Analyst", "Bachelor of Science (Mathematical Sciences Stream) Insurance Underwritters", "Bachelor of Science (Mathematical Sciences Stream) Mathematician"];

let aps26Physicsis60 = ["Bachelor of Science in Geology (Geologist)", "Bachelor of Science in Geology (Environmental Scientist)", "Bachelor of Science in Geology (Earth Scientist)", "Bachelor of Science in Geology (Hydrologist)", "Bachelor of Science in Geology (Mining)", "Bachelor of Science in Geology (Regional Planning & Development)", "Bachelor of Science in Geology (Mineralogist)", "Bachelor of Science in Geology (Palaeontologist)", "Bachelor of Science in Geology (Geophysicist)", "Bachelor of Science in Geology (Geochemist)"];

let aps24PhysicsorLs = ["BEd (SP & FET Teaching) Majoring in Mathematics, Science & Technology (Mathematics Teacher)", "BEd (SP & FET Teaching) Majoring in Mathematics, Science & Technology (Life Sciences Teacher)", "BEd (SP & FET Teaching) Majoring in Mathematics, Science & Technology (Technology Teacher)", "BEd (SP & FET Teaching) Majoring in Mathematics, Science & Technology (Physical Sciences Teacher)", "BEd (SP & FET Teaching) Majoring in Mathematics, Science & Technology (Research Assistant)", "BEd (SP & FET Teaching) Majoring in Mathematics, Science & Technology (Laboratory Assistant)"];

subjectBtn.addEventListener('click', () => {
  alert('Please click the checkboxes to add percentages of results.')
});
doneBtn.addEventListener('click', () => {
  heyWrapper.classList.add('hide');
  blackScreen.classList.remove('hide');
  subjectPercentages.classList.remove('hide');

//ul-course calculator-english-maths
if(englishfalInput.value >= 50 && mathsInput.value >= 30 && apsInput.value > 21){
  for(let i = 0; i < aps22Maths30English.length; i++) {
    plainInput.innerHTML += `<li> ${aps22Maths30English[i]} </li>`;
  };
} 
if(englishfalInput.value >= 50 && mathsInput.value >= 30 && apsInput.value > 23){
    for(let i = 0; i < aps24Maths30English.length; i++) {
      plainInput.innerHTML += `<li> ${aps24Maths30English[i]} </li>`;
    };
  }
if(englishfalInput.value >= 50 && mathsInput.value >= 40 && apsInput.value > 21){
  for(let i = 0; i < aps22MathsEnglish.length; i++) {
    plainInput.innerHTML += `<li> ${aps22MathsEnglish[i]} </li>`;
  };
} 
if(englishfalInput.value >= 50 && mathsInput.value >= 40 && apsInput.value > 22){
  for(let i = 0; i < aps23MathsEnglish.length; i++) {
    plainInput.innerHTML += `<li> ${aps23MathsEnglish[i]} </li>`;
  };
} 
if(englishfalInput.value >= 50 && mathsInput.value >= 40 && apsInput.value > 23){
  for(let i = 0; i < aps24MathsEnglish.length; i++) {
    plainInput.innerHTML += `<li> ${aps24MathsEnglish[i]} </li>`;
  };
} 
if(englishfalInput.value >= 50 && mathsInput.value >= 40 && apsInput.value > 24){
  for(let i = 0; i < aps25MathsEnglish.length; i++) {
    plainInput.innerHTML += `<li> ${aps25MathsEnglish[i]} </li>`;
  };
} 
if(englishfalInput.value >= 50 && mathsInput.value >= 40 && apsInput.value > 25){
  for(let i = 0; i < aps26MathsEnglish.length; i++) {
    plainInput.innerHTML += `<li> ${aps26MathsEnglish[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 25){
  for(let i = 0; i < aps26WeAre50s.length; i++) {
    plainInput.innerHTML += `<li> ${aps26WeAre50s[i]} </li>`;
  };
} 
if(englishfalInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 27){
  for(let i = 0; i < aps28WeAre50s.length; i++) {
    plainInput.innerHTML += `<li> ${aps28WeAre50s[i]} </li>`;
  };
} 
if(englishfalInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 29){
  for(let i = 0; i < aps30WeAre50s.length; i++) {
    plainInput.innerHTML += `<li> ${aps30WeAre50s[i]} </li>`;
  };
}

//ul-course-calculator-accounting
if(englishfalInput.value >= 40 && accountingInput.value >= 50 && economicsInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24Accounting.length; i++) {
    plainInput.innerHTML += `<li> ${aps24Accounting[i]} </li>`;
  };
}
if(englishfalInput.value >= 40 && accountingInput.value >= 50 && businessInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24Accounting.length; i++) {
    plainInput.innerHTML += `<li> ${aps24Accounting[i]} </li>`;
  };
}

//ul-course-calculator-agricuture-ls
if(englishfalInput.value >= 50 && mathsInput.value >= 40 && lsInput.value >= 50 && agricultureInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24Agriculture.length; i++) {
    plainInput.innerHTML += `<li> ${aps24Agriculture[i]} </li>`;
  };
}

//ul-course-calculator-economics-maths-englishhl
if(englishhlInput.value >= 50 && mathsInput.value >= 40 && economicsInput.value >= 50 && apsInput.value > 21){
  for(let i = 0; i < aps22EconomicsMaths.length; i++) {
    plainInput.innerHTML += `<li> ${aps22EconomicsMaths[i]} </li>`;
  };
}

//ul-course-calculator-economics-maths
if(englishfalInput.value >= 50 && mathsInput.value >= 40 && economicsInput.value >= 50 && apsInput.value > 21){
  for(let i = 0; i < aps22EconomicsMaths.length; i++) {
    plainInput.innerHTML += `<li> ${aps22EconomicsMaths[i]} </li>`;
  };
}

//ul-course-calculator-english-mathlit
if(englishfalInput.value >= 50 && mathslitInput.value >= 60 && apsInput.value > 21){
  for(let i = 0; i < aps22Mathslit30English.length; i++) {
    plainInput.innerHTML += `<li> ${aps22Mathslit30English[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathslitInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24Mathslit30English.length; i++) {
    plainInput.innerHTML += `<li> ${aps24Mathslit30English[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && mathslitInput.value >= 60 && apsInput.value > 24){
  for(let i = 0; i < aps25MathslitEnglish.length; i++) {
    plainInput.innerHTML += `<li> ${aps25MathslitEnglish[i]} </li>`;
  };
}

//ul-course-calculator-english
if(englishfalInput.value >= 50 && apsInput.value > 22){
  for(let i = 0; i < aps23JustEnglishat50.length; i++) {
    plainInput.innerHTML += `<li> ${aps23JustEnglishat50[i]} </li>`;
  };
} 
if(englishfalInput.value >= 50 && apsInput.value > 24){
  for(let i = 0; i < aps25JustEnglishat50.length; i++) {
    plainInput.innerHTML += `<li> ${aps25JustEnglishat50[i]} </li>`;
  };
} 
if(englishfalInput.value >= 50 && apsInput.value > 25){
  for(let i = 0; i < aps26JustEnglishat50.length; i++) {
    plainInput.innerHTML += `<li> ${aps26JustEnglishat50[i]} </li>`;
  };
}

if(englishfalInput.value >= 60 && apsInput.value > 25){
  for(let i = 0; i < aps26JustEnglishat60.length; i++) {
    plainInput.innerHTML += `<li> ${aps26JustEnglishat60[i]} </li>`;
  };
} 
if(englishfalInput.value >= 60 && apsInput.value > 29){
  for(let i = 0; i < aps30JustEnglishat60.length; i++) {
    plainInput.innerHTML += `<li> ${aps30JustEnglishat60[i]} </li>`;
  };
}

//ul-course-calculator-englishhl-mathlit
if(englishhlInput.value >= 50 && mathslitInput.value >= 60 && apsInput.value > 21){
  for(let i = 0; i < aps22Mathslit30Englishhl.length; i++) {
    plainInput.innerHTML += `<li> ${aps22Mathslit30English[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathslitInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24Mathslit30Englishhl.length; i++) {
    plainInput.innerHTML += `<li> ${aps24Mathslit30English[i]} </li>`;
  };
}

//ul-course-calculator-englishhl-maths
if(englishhlInput.value >= 50 && mathsInput.value >= 30 && apsInput.value > 21){
  for(let i = 0; i < aps22Maths30Englishhl.length; i++) {
    plainInput.innerHTML += `<li> ${aps22Maths30Englishhl[i]} </li>`;
  };
} 
if(englishhlInput.value >= 50 && mathsInput.value >= 30 && apsInput.value > 23){
    for(let i = 0; i < aps24Maths30Englishhl.length; i++) {
      plainInput.innerHTML += `<li> ${aps24Maths30Englishhl[i]} </li>`;
    };
  }
if(englishhlInput.value >= 50 && mathsInput.value >= 40 && apsInput.value > 21){
  for(let i = 0; i < aps22MathsEnglishhl.length; i++) {
    plainInput.innerHTML += `<li> ${aps22MathsEnglishhl[i]} </li>`;
  };
} 
if(englishhlInput.value >= 50 && mathsInput.value >= 40 && apsInput.value > 22){
  for(let i = 0; i < aps23MathsEnglishhl.length; i++) {
    plainInput.innerHTML += `<li> ${aps23MathsEnglishhl[i]} </li>`;
  };
} 
if(englishhlInput.value >= 50 && mathsInput.value >= 40 && apsInput.value > 23){
  for(let i = 0; i < aps24MathsEnglishhl.length; i++) {
    plainInput.innerHTML += `<li> ${aps24MathsEnglishhl[i]} </li>`;
  };
} 
if(englishhlInput.value >= 50 && mathsInput.value >= 40 && apsInput.value > 24){
  for(let i = 0; i < aps25MathsEnglishhl.length; i++) {
    plainInput.innerHTML += `<li> ${aps25MathsEnglishhl[i]} </li>`;
  };
}  
if(englishhlInput.value >= 50 && mathsInput.value >= 40 && apsInput.value > 25){
  for(let i = 0; i < aps26MathsEnglishhl.length; i++) {
    plainInput.innerHTML += `<li> ${aps26MathsEnglishhl[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 25){
  for(let i = 0; i < aps26WeAre50hl.length; i++) {
    plainInput.innerHTML += `<li> ${aps26WeAre50hl[i]} </li>`;
  };
} 
if(englishhlInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 27){
    for(let i = 0; i < aps28WeAre50hl.length; i++) {
      plainInput.innerHTML += `<li> ${aps28WeAre50hl[i]} </li>`;
    };
  } 
  if(englishhlInput.value >= 50 && mathsInput.value >= 50 && apsInput.value > 29){
      for(let i = 0; i < aps30WeAre50hl.length; i++) {
        plainInput.innerHTML += `<li> ${aps30WeAre50hl[i]} </li>`;
      };
    }

//ul-course-calculator-englishhl
if(englishhlInput.value >= 50 && apsInput.value > 22){
  for(let i = 0; i < aps23JustEnglishhlat50.length; i++) {
    plainInput.innerHTML += `<li> ${aps23JustEnglishhlat50[i]} </li>`;
  };
} 
if(englishhlInput.value >= 50 && apsInput.value > 24){
  for(let i = 0; i < aps25JustEnglishhlat50.length; i++) {
    plainInput.innerHTML += `<li> ${aps25JustEnglishhlat50[i]} </li>`;
  };
} 
if(englishhlInput.value >= 50 && apsInput.value > 25){
  for(let i = 0; i < aps26JustEnglishhlat50.length; i++) {
    plainInput.innerHTML += `<li> ${aps26JustEnglishhlat50[i]} </li>`;
  };
}

if(englishhlInput.value >= 50 && apsInput.value > 25){
  for(let i = 0; i < aps26JustEnglishhlat60.length; i++) {
    plainInput.innerHTML += `<li> ${aps26JustEnglishhlat60[i]} </li>`;
  };
} 
if(englishhlInput.value >= 50 && apsInput.value > 29){
  for(let i = 0; i < aps30JustEnglishhlat60.length; i++) {
    plainInput.innerHTML += `<li> ${aps30JustEnglishhlat60[i]} </li>`;
  };
}

//ul-course-calculator-geography-ls
if(englishfalInput.value >= 50 && mathsInput.value >= 50 && lsInput.value >= 50 && geographyInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24Geography.length; i++) {
    plainInput.innerHTML += `<li> ${aps24Geography[i]} </li>`;
  };
}

//ul-course-calculator-historyorgeography
if(englishfalInput.value >= 40 && mathsInput.value >= 50 && geographyInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24GeographyorHistory.length; i++) {
    plainInput.innerHTML += `<li> ${aps24GeographyorHistory[i]} </li>`;
  };
}
if(englishfalInput.value >= 40 && mathsInput.value >= 50 && historyInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24GeographyorHistory.length; i++) {
    plainInput.innerHTML += `<li> ${aps24GeographyorHistory[i]} </li>`;
  };
}

//ul-course-calculator-life-orientation
if(englishfalInput.value >= 50 && loInput.value >= 60 && apsInput.value > 23){
  for(let i = 0; i < aps24LifeOrientation.length; i++) {
    plainInput.innerHTML += `<li> ${aps24LifeOrientation[i]} </li>`;
  };
}

//ul-course-calculator-lifescience-maths
if(englishfalInput.value >= 50 && mathsInput.value >= 50 && lsInput.value >= 50 && apsInput.value > 21){
  for(let i = 0; i < aps24JustLifeScience50.length; i++) {
    plainInput.innerHTML += `<li> ${aps24JustLifeScience50[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && mathsInput.value >= 50 && lsInput.value >= 50 && apsInput.value > 21){
  for(let i = 0; i < aps24JustLifeScience50.length; i++) {
    plainInput.innerHTML += `<li> ${aps24JustLifeScience50[i]} </li>`;
  };
}

//ul-course-calculator-lifescience-physics-englishhl
if(englishfalInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 50 && lsInput.value >= 40 && apsInput.value > 21){
  for(let i = 0; i < aps22LifeScienceis40.length; i++) {
    plainInput.innerHTML += `<li> ${aps22LifeScienceis40[i]} </li>`;
  };
}
if(englishfalInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 50 && lsInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24LifeScienceis50.length; i++) {
    plainInput.innerHTML += `<li> ${aps24LifeScienceis50[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && physicsInput.value >= 60  && mathsInput.value >= 60 && lsInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24LifeScienceisStill50.length; i++) {
    plainInput.innerHTML += `<li> ${aps24LifeScienceis50[i]} </li>`;
  };
} 
if(englishfalInput.value >= 50 && physicsInput.value >= 60  && mathsInput.value >= 60 && lsInput.value >= 50 && apsInput.value > 25){
  for(let i = 0; i < aps26LifeScienceisStill50.length; i++) {
    plainInput.innerHTML += `<li> ${aps26LifeScienceis50[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && physicsInput.value >= 60  && mathsInput.value >= 50 && lsInput.value >= 50 && apsInput.value > 24){
  for(let i = 0; i < aps25LsIsStill50.length; i++) {
    plainInput.innerHTML += `<li> ${aps25LsIsStill50[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && physicsInput.value >= 60  && mathsInput.value >= 50 && lsInput.value >= 60 && apsInput.value > 25){
  for(let i = 0; i < aps26LSandPhysicsare60.length; i++) {
    plainInput.innerHTML += `<li> ${aps26LSandPhysicsare60[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && physicsInput.value >= 60  && mathsInput.value >= 50 && lsInput.value >= 60 && apsInput.value > 26){
  for(let i = 0; i < aps27All60exceptEnglish.length; i++) {
    plainInput.innerHTML += `<li> ${aps27All60exceptEnglish[i]} </li>`;
  };
}

//ul-course-calculator-maths
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

//ul-course-calculator-mathslit
if(mathslitInput.value >= 40 && apsInput.value >= 21){
  for(let i = 0; i < aps21mlit.length; i++) {
    plainInput.innerHTML += `<li> ${aps21mlit[i]} </li>`;
  };
} 
if(mathslitInput.value >= 40 && apsInput.value > 22){
  for(let i = 0; i < aps23mlit.length; i++) {
    plainInput.innerHTML += `<li> ${aps23mlit[i]} </li>`;
  };
}

if(mathslitInput.value >= 60 && apsInput.value >= 26){
  for(let i = 0; i < aps26mlit60.length; i++) {
    plainInput.innerHTML += `<li> ${aps26mlit60[i]} </li>`;
  };
}

//ul-course-calculator-physics-english-maths
if(englishfalInput.value >= 50 && physicsInput.value >= 50  && mathsInput.value >= 50 && apsInput.value > 22){
  for(let i = 0; i < aps22Physicsis50.length; i++) {
    plainInput.innerHTML += `<li> ${aps22Physicsis50[i]} </li>`;
  };
}

if(englishfalInput.value >= 50 && physicsInput.value >= 60  && mathsInput.value >= 60 && apsInput.value > 23){
  for(let i = 0; i < aps24Physicsis60.length; i++) {
    plainInput.innerHTML += `<li> ${aps24Physicsis60[i]} </li>`;
  };
} 
if(englishfalInput.value >= 50 && physicsInput.value >= 60  && mathsInput.value >= 60 && apsInput.value > 25){
  for(let i = 0; i < aps26Physicsis60.length; i++) {
    plainInput.innerHTML += `<li> ${aps26Physicsis60[i]} </li>`;
  };
}

if(englishfalInput.value >= 40 && physicsInput.value >= 50  && mathsInput.value >= 50 && apsInput.value > 23){
  for(let i = 0; i < aps24PhysicsorLs.length; i++) {
    plainInput.innerHTML += `<li> ${aps24PhysicsorLs[i]} </li>`;
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