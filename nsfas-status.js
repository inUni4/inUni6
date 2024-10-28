const contentWrapper = document.querySelector(".content-wrapper");
const submitWrapper = document.querySelector(".submit-wrapper");
const filterWrapper = document.querySelector(".filter-wrapper");
const validWrapper = document.querySelector(".valid-wrapper");
const evalWrapper = document.querySelector(".eval-wrapper");
const fundWrapper = document.querySelector(".fund-wrapper");
const resultWrapper = document.querySelector(".result-wrapper");
const waitWrapper = document.querySelector(".wait-wrapper");
const signWrapper = document.querySelector(".sign-wrapper");
const payWrapper = document.querySelector(".pay-wrapper");
const meaningWrapper = document.querySelector(".meaning-wrapper");

meaningWrapper.classList.add("hide");
let statusMeaning = ["Your application has been successfully entered into the NSFAS system.", "The system is assessing whether you are a returning student and checking your prior qualifications.", "NSFAS is verifying your information with external parties, such as SASSA and the Department of Home Affairs.", "NSFAS is reviewing all submitted documents to ensure they are complete and authentic.", "Your household income is being evaluated to determine if you meet the financial criteria for funding.", "NSFAS is checking your academic results or your admission status with the educational institution.", "The system is waiting for registration data from your institution to process your bursary agreement.", "You have met all requirements and need to sign the bursary agreement for the funds to be disbursed.", "Your funding has been approved, and the allowances are being sent either to your NSFAS wallet or directly to your institution."];

submitWrapper.addEventListener("click", () => {
  if(!submitWrapper.classList.contains("clicked-wrapper")) {
    meaningWrapper.classList.remove("hide");
    submitWrapper.classList.add("clicked-wrapper");
    meaningWrapper.innerHTML = `<p class="meaning-text">${statusMeaning[0]}</p>`;
  } else  {
    meaningWrapper.classList.add("hide");
    submitWrapper.classList.remove("clicked-wrapper");
  };
});
filterWrapper.addEventListener("click", () => {
  if(!filterWrapper.classList.contains("clicked-wrapper")) {
    meaningWrapper.classList.remove("hide");
    filterWrapper.classList.add("clicked-wrapper");
    meaningWrapper.innerHTML = `<p class="meaning-text">${statusMeaning[1]}</p>`;
  } else  {
    meaningWrapper.classList.add("hide");
    filterWrapper.classList.remove("clicked-wrapper");
  };
});
validWrapper.addEventListener("click", () => {
  if(!validWrapper.classList.contains("clicked-wrapper")) {
    meaningWrapper.classList.remove("hide");
    validWrapper.classList.add("clicked-wrapper");
    meaningWrapper.innerHTML = `<p class="meaning-text">${statusMeaning[2]}</p>`;
  } else  {
    meaningWrapper.classList.add("hide");
    validWrapper.classList.remove("clicked-wrapper");
  };
});
evalWrapper.addEventListener("click", () => {
  if(!evalWrapper.classList.contains("clicked-wrapper")) {
    meaningWrapper.classList.remove("hide");
    evalWrapper.classList.add("clicked-wrapper");
    meaningWrapper.innerHTML = `<p class="meaning-text">${statusMeaning[3]}</p>`;
  } else  {
    meaningWrapper.classList.add("hide");
    evalWrapper.classList.remove("clicked-wrapper");
  };
});
fundWrapper.addEventListener("click", () => {
  if(!fundWrapper.classList.contains("clicked-wrapper")) {
    meaningWrapper.classList.remove("hide");
    fundWrapper.classList.add("clicked-wrapper");
    meaningWrapper.innerHTML = `<p class="meaning-text">${statusMeaning[4]}</p>`;
  } else  {
    meaningWrapper.classList.add("hide");
    fundWrapper.classList.remove("clicked-wrapper");
  };
});
resultWrapper.addEventListener("click", () => {
  if(!resultWrapper.classList.contains("clicked-wrapper")) {
    meaningWrapper.classList.remove("hide");
    resultWrapper.classList.add("clicked-wrapper");
    meaningWrapper.innerHTML = `<p class="meaning-text">${statusMeaning[5]}</p>`;
  } else  {
    meaningWrapper.classList.add("hide");
    resultWrapper.classList.remove("clicked-wrapper");
  };
});
waitWrapper.addEventListener("click", () => {
  if(!waitWrapper.classList.contains("clicked-wrapper")) {
    meaningWrapper.classList.remove("hide");
    waitWrapper.classList.add("clicked-wrapper");
    meaningWrapper.innerHTML = `<p class="meaning-text">${statusMeaning[6]}</p>`;
  } else  {
    meaningWrapper.classList.add("hide");
    waitWrapper.classList.remove("clicked-wrapper");
  };
});
signWrapper.addEventListener("click", () => {
  if(!signWrapper.classList.contains("clicked-wrapper")) {
    meaningWrapper.classList.remove("hide");
    signWrapper.classList.add("clicked-wrapper");
    meaningWrapper.innerHTML = `<p class="meaning-text">${statusMeaning[7]}</p>`;
  } else  {
    meaningWrapper.classList.add("hide");
    signWrapper.classList.remove("clicked-wrapper");
  };
});
payWrapper.addEventListener("click", () => {
  if(!payWrapper.classList.contains("clicked-wrapper")) {
    meaningWrapper.classList.remove("hide");
    payWrapper.classList.add("clicked-wrapper");
    meaningWrapper.innerHTML = `<p class="meaning-text">${statusMeaning[8]}</p>`;
  } else {
    meaningWrapper.classList.add("hide");
    payWrapper.classList.remove("clicked-wrapper");
  };
});