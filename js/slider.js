export default class Slider {
  constructor(viewLayer, slideLayer, elements) {
    this.left = 0;
    this.viewLayer = viewLayer;
    this.slideLayer = slideLayer;
    this.slideLayer.style.left = '0px';
    this.amountOfElements = elements.length;
    const singleElement = elements[0];
    const styleOfElement = window.getComputedStyle(singleElement);
    this.marginLeft = parseFloat(styleOfElement.marginLeft);
    this.marginRight = parseFloat(styleOfElement.marginRight);
    this.singleElementWidth = singleElement.clientWidth + this.marginLeft + this.marginRight;
  }

  maximumElementsOnSreen() {
    return this.viewLayer.clientWidth / this.singleElementWidth;
  }

  updateSlideLayer() {
    //set to zero if only margin is notvisible (left is on minus)
    if (this.left > -this.marginRight) this.left = 0;
    this.slideLayer.style.left = this.left + 'px';
  }

  nextSlide() {
    const maxNextSteps = this.amountOfElements - this.maximumElementsOnSreen();
    //return if all are displayed
    if (maxNextSteps < 0.1) return;

    const nextStep = (-this.left / this.singleElementWidth) + 1;

    if (nextStep <= maxNextSteps) {
      //detected when we can move full
      this.left -= this.singleElementWidth;
    } else if (maxNextSteps - nextStep < 0.01 && maxNextSteps - nextStep > -0.99) {
      //detected when we need to move only part
      this.left = -maxNextSteps * this.singleElementWidth;
    } else {
      //detected when we need to reset
      this.left = 0;
    }

    this.updateSlideLayer();
  }

  prevSlide() {
    //return if all are displayed
    if (this.amountOfElements - this.maximumElementsOnSreen() < 0.1) return;

    const maxPrevSteps = 0;
    const prevStep = this.left / this.singleElementWidth;

    if (prevStep < maxPrevSteps) {
      this.left += this.singleElementWidth;
    } else if (prevStep > 0.01 && prevStep < 0.9) {
      this.left = 0;
    } else {
      this.left = -(this.amountOfElements - this.maximumElementsOnSreen()) * this.singleElementWidth;
    }

    this.updateSlideLayer();
  }
}