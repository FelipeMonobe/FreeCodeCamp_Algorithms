function fearNotLetter(str) {
  var start = str[0].charCodeAt();

  for (var i = 1; i < str.length; i++) {
    if (str[i].charCodeAt() !== start + i) {
      return String.fromCharCode(start + i);
    }
  }

  return undefined;
}

fearNotLetter("abce");
