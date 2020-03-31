function convertToRoman() {
  const arr = [
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
  let result;
  let num = document.getElementById('entered-num').value;

  if (!isNaN(num) && num >= 1 && num <= 3999) {
    result = arr.reduce((acc, key) => {

      while (num >= key.value) {
        acc += key.symbol;
        num -= key.value;
      }
      return acc;
    }, '');
    document.querySelector('output').className = 'roman-numeral';
    document.querySelector('output').innerHTML = result;
  }
  else if (!num) {
    document.querySelector('output').className = '';
    document.querySelector('output').innerHTML = '';
  }
  else {
    document.querySelector('output').className = 'error';
    document.querySelector('output').innerHTML = '<span class="fa fa-exclamation-circle fa-lg fa-fw"></span> Please enter an integer that is greater than 0 and less than 4000.';
  }
}

document.getElementById('entered-num').addEventListener('keyup', () => {
  convertToRoman();
});

document.querySelector('.current-year').innerHTML = new Date().getFullYear();
