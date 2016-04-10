// noprotect
function sumPrimes(num) {
  var sequence = [],
  isPrime;

  for (var i = num; i > 1; i--) {
    isPrime = true;

    for (var j = i - 1; j > 1; j--) {
      if (i % j === 0) {
        isPrime = false;
      }
    }
    isPrime && sequence.push(i);
  }

  return sequence.reduce(function(total, current){
    return total + current;
  });
}

sumPrimes(977);
