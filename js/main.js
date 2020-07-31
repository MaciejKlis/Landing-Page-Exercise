import Slider from './slider.js'

document.addEventListener("DOMContentLoaded", () => {

  //Slider 
  const viewLayer = document.querySelector('#viewLayer');
  const slideLayer = document.querySelector('#slideLayer');
  const elements = document.querySelectorAll('.personBox');

  const slider = new Slider(viewLayer, slideLayer, elements);

  const arrowBack = document.querySelector('#slideBack');
  const arrowForward = document.querySelector('#slideForward');

  arrowBack.addEventListener('click', () => { slider.prevSlide() });
  arrowForward.addEventListener('click', () => { slider.nextSlide() });

  //Switch tab 
  const tabElements = document.querySelectorAll('.tabMenu__button');
  tabElements.forEach(el => {
    el.addEventListener('click', (e) => {
      const domElement = e.target;

      //switch active class to clicked element
      document.querySelector('.tabMenu__button-active').classList.remove('tabMenu__button-active');
      domElement.classList.add('tabMenu__button-active');

      //switch active questiion block
      document.querySelector('.displayBlock').classList.remove('displayBlock');
      const idBlock = domElement.dataset.target;
      document.querySelector('#' + idBlock).classList.add('displayBlock');
    })
  })

  //Questions dropdown
  const questionElements = document.querySelectorAll('.singleQuestion');
  questionElements.forEach((questionBlock, index) => {
    let isActive = questionBlock.dataset.active;

    const questionHeader = questionBlock.querySelector('.singleQuestion__header');
    const questionIcon = questionBlock.querySelector('.singleQuestion__icon');
    const questionWrapper = questionBlock.querySelector('.singleQuestion__descWrapper');
    const questionDesc = questionBlock.querySelector('.singleQuestion__desc');

    questionHeader.addEventListener('click', () => {
      //get height of paragraph
      const stylesDescription = window.getComputedStyle(questionDesc);
      const heightOfDescription = parseFloat(stylesDescription.height) + parseFloat(stylesDescription.paddingTop) + parseFloat(stylesDescription.paddingBottom);

      if (isActive === "false") {
        questionIcon.classList.remove('singleQuestion__icon-plus');
        questionIcon.classList.add('singleQuestion__icon-minus');
        questionWrapper.style.height = heightOfDescription + 'px';
        isActive = "true";
      } else {
        questionIcon.classList.remove('singleQuestion__icon-minus');
        questionIcon.classList.add('singleQuestion__icon-plus');
        questionWrapper.style.height = '0px';
        isActive = "false";
      }
    })

  })
})