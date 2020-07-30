import Slider from './slider.js'

document.addEventListener("DOMContentLoaded", () => {
  const viewLayer = document.querySelector('#viewLayer');
  const slideLayer = document.querySelector('#slideLayer');
  const elements = document.querySelectorAll('.personBox');

  const slider = new Slider(viewLayer, slideLayer, elements);

  const arrowBack = document.querySelector('#slideBack');
  const arrowForward = document.querySelector('#slideForward');

  arrowBack.addEventListener('click', () => { slider.prevSlide() });
  arrowForward.addEventListener('click', () => { slider.nextSlide() });
})