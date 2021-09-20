const Converter = (() => {

  function renderRomanNumeral(numValue) {
    const romanNumeral = document.createElement('div');
    romanNumeral.classList.add('roman-numeral');
    romanNumeral.innerHTML = numValue;

    document.querySelector('.result').appendChild(romanNumeral);
  }

  function removeRomanNumeral() {
    const romanNumeral = document.querySelector('.roman-numeral');
    romanNumeral ? document.querySelector('.result').removeChild(romanNumeral) : null;
  }

  function renderErrorMessage() {
    const errorMessage = document.createElement('p');
    errorMessage.classList.add('message', 'error-message');
    errorMessage.innerHTML = '<span class="fa fa-exclamation-circle fa-lg fa-fw"></span> Please enter an number that is greater than 0 and less than 4000.';

    document.querySelector('.result').appendChild(errorMessage);
  }

  function removeErrorMessage() {
    const errorMessage = document.querySelector('.error-message');
    errorMessage ? document.querySelector('.result').removeChild(errorMessage) : null;
  }

  function convertToRoman(numValue) {
    const conversionChart = [
      {
        symbol: 'M',
        value: 1000
      },
      {
        symbol: 'CM',
        value: 900
      },
      {
        symbol: 'D',
        value: 500
      },
      {
        symbol: 'CD',
        value: 400
      },
      {
        symbol: 'C',
        value: 100
      },
      {
        symbol: 'XC',
        value: 90
      },
      {
        symbol: 'L',
        value: 50
      },
      {
        symbol: 'XL',
        value: 40
      },
      {
        symbol: 'X',
        value: 10
      },
      {
        symbol: 'IX',
        value: 9
      },
      {
        symbol: 'V',
        value: 5
      },
      {
        symbol: 'IV',
        value: 4
      },
      {
        symbol: 'I',
        value: 1
      }
    ];
    let result = conversionChart.reduce((acc, key) => {

      while (numValue >= key.value) {
        acc += key.symbol;
        numValue -= key.value;
      }
      return acc;
    }, '');
    return result;
  }

  function displayResult(numValue) {
    removeRomanNumeral();
    removeErrorMessage();

    if (numValue) {

      if (!isNaN(numValue) && numValue >= 1 && numValue < 4000) {
        if (Math.floor(numValue) !== numValue) numValue = Math.floor(numValue);
        renderRomanNumeral(convertToRoman(numValue))
      }
      else {
        renderErrorMessage();
      }
    }
  }

  return {
    displayResult
  };
})();

export { Converter };
