const courseCalculator = document.querySelector('#course-calculator');
      const freePrizes = document.querySelector('#free-prizes');
      const openUnies = document.querySelector('#open-unies');
      const calculatorWrapper = document.querySelector('#calculator-wrapper');
      const giftWrapper = document.querySelector('#gift-wrapper');
      const uniWrapper = document.querySelector('#uni-wrapper');
      const tipWrapper = document.querySelector('#tip-wrapper');
      const freeWrapper = document.querySelector('#free-wrapper');
      const bursaryWrapper = document.querySelector('#bursary-wrapper');
      const gameWrapper = document.querySelector('#game-wrapper');
      const internWrapper = document.querySelector('#intern-wrapper');
      const jobWrapper = document.querySelector('#job-wrapper');
      const privacyWrapper = document.querySelector('#privacy-wrapper');
      const contactWrapper = document.querySelector('#contact-wrapper');
      const aboutWrapper = document.querySelector('#about-wrapper');


      courseCalculator.addEventListener('click', () => {
        calculatorWrapper.classList.remove('hide');
      });
      freePrizes.addEventListener('click', () => {
        giftWrapper.classList.remove('hide');
      });
      openUnies.addEventListener('click', () => {
        calculatorWrapper.classList.remove('hide');
        giftWrapper.classList.remove('hide');
        uniWrapper.classList.remove('hide');
        tipWrapper.classList.remove('hide');
        freeWrapper.classList.remove('hide');
        bursaryWrapper.classList.remove('hide');
        gameWrapper.classList.remove('hide');
        internWrapper.classList.remove('hide');
        jobWrapper.classList.remove('hide');
        privacyWrapper.classList.remove('hide');
        contactWrapper.classList.remove('hide');
        aboutWrapper.classList.remove('hide');
      });

      window.onload = () => {
        calculatorWrapper.classList.add('hide');
        giftWrapper.classList.add('hide');
        uniWrapper.classList.add('hide');
        tipWrapper.classList.add('hide');
        freeWrapper.classList.add('hide');
        bursaryWrapper.classList.add('hide');
        gameWrapper.classList.add('hide');
        internWrapper.classList.add('hide');
        jobWrapper.classList.add('hide');
        privacyWrapper.classList.add('hide');
        contactWrapper.classList.add('hide');
        aboutWrapper.classList.add('hide');
      };
