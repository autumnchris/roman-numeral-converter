function convertToRoman() {

  var result = '';
  var num = $('#entered-num').val();
  var obj = {
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

  if (num >= 1 && num <= 3999) {
    for (var i in obj) {
      while (num >= obj[i]) {
        result += i;
        num -= obj[i];
      }
    }
    $('output').addClass('roman-numeral').removeClass('alert alert-warning').html(result);
  }
  else if (num === '') {
    $('output').removeClass('roman-numeral alert alert-warning').html('');
  }
  else {
    $('output').addClass('alert alert-warning').removeClass('roman-numeral').html('<span class="fa fa-warning fa-lg fa-fw"></span> Please enter a whole number that is greater than 0 and less than 4000.');
  }
}

$('#entered-num').on('input', function() {
  convertToRoman();
});
