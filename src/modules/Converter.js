import ErrorMessage from './ErrorMessage';
import conversionChart from '../data/conversion-chart';

class Converter {
  constructor() {
    this.errorMessage = new ErrorMessage();
  }

  convertToRoman(numValue) {
    let result = conversionChart.reduce((acc, key) => {

      while (numValue >= key.value) {
        acc += key.symbol;
        numValue -= key.value;
      }
      return acc;
    }, '');
    return result;
  }

  displayResult(numValue) {
    this.removeRomanNumeral('main');
    this.errorMessage.removeErrorMessage('main');

    if (numValue) {

      if (!isNaN(numValue) && numValue >= 1 && numValue < 4000) {
        if (Math.floor(numValue) !== numValue) numValue = Math.floor(numValue);
        this.renderRomanNumeral(this.convertToRoman(numValue), 'main');
      }
      else {
        this.errorMessage.renderErrorMessage('Please enter a number that is greater than 0 and less than 4000.', 'main');
      }
    }
  }

  // DOM methods
  renderConverterForm(location) {
    const converterForm = document.createElement('form');
    converterForm.setAttribute('novalidate', 'true');
    converterForm.classList.add('converter-form');
    converterForm.innerHTML = `
      <div class="form-group">
        <input type="text" aria-label="input a positive integer" name="numValue" class="num-value" inputmode="numeric" id="num-value" autocomplete="off" autocapitalize="off" autofocus />
      </div>
    `;
    document.querySelector(location).appendChild(converterForm);
  }

  renderRomanNumeral(numValue, location) {
    const romanNumeral = document.createElement('div');
    romanNumeral.classList.add('result');
    romanNumeral.innerHTML = `<div class="roman-numeral">${numValue}</div>`;
    document.querySelector(location).appendChild(romanNumeral);
  }

  removeRomanNumeral(location) {
    const romanNumeral = document.querySelector(`${location} .result`);
    romanNumeral ? document.querySelector(location).removeChild(romanNumeral) : null;
  }
}

export default Converter;