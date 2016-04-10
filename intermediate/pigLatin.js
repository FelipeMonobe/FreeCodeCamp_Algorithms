function translate(str) {
  var vowelPattern = /[aeiou]/;

  if (vowelPattern.test(str[0])) {
    str += 'way';
  } else {
    if (vowelPattern.test(str[1])) {
      str = str.slice(1) + str[0] + 'ay';
    } else {
      str = str.slice(2) + str[0] + str[1] + 'ay';
    }
  }

  return str;
}

translate("glove");
