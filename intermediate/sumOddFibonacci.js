function sumFibs(num) {
  var sequence = [1, 1],
    sumLastTwo = 0,
    total = 0,
    i = 1;

  while (sumLastTwo <= num) {
    sumLastTwo = sequence[i - 1] + sequence[i];
    if (sumLastTwo <= num) sequence.push(sumLastTwo);
    i++;
  }

  total = sequence.reduce(function(stacked, current) {
    return current % 2 !== 0 ?
      stacked + current :
      stacked;
  });

  return total;
}

sumFibs(75025);
