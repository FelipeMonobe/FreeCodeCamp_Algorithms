function pair(str) {
  var container = [];

  for (var i = 0; i < str.length; i++) {
    var elem = str[i],
      pair = [elem];

    if (elem === 'A') {
      pair.push('T');
    } else if (elem === 'T') {
      pair.push('A');
    } else if (elem === 'C') {
      pair.push('G');
    } else {
      pair.push('C');
    }

    container.push(pair);
  }

  return container;
}

pair("ATCGA");
