function convertToRoman() {
  const obj = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  let num = $('#entered-num').val();
  let result = '';
  let i;

  if (num.charCodeAt(num.length - 1) >= 48 && num.charCodeAt(num.length - 1) <= 57 && num >= 1 && num <= 3999) {

    for (i in obj) {

      while (num >= obj[i]) {
        result += i;
        num -= obj[i];
      }
    }
    $('output').addClass('roman-numeral').removeClass('error').html(result);
  }
  else if (!num) {
    $('output').removeClass('roman-numeral error').empty();
  }
  else {
    $('output').addClass('error').removeClass('roman-numeral').html('<span class="fa fa-exclamation-triangle fa-lg fa-fw"></span> Please enter an integer that is greater than 0 and less than 4000.');
  }
}

$('#entered-num').on('input', () => {
  convertToRoman();
});
