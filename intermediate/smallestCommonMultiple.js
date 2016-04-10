// noprotect
function smallestCommons(arr) {
  var unmodPair = arr.sort(),
    end = false,
    range = [];

  for (var i = unmodPair[0]; i <= unmodPair[1]; i++) {
    range.push(i);
  }

  for (var i = 2; !end; i++) {
    for (var j = range[0]; j < range.length; j++) {
      if (i % range[j] === 0) {
        if (j === range.length - 1) {
          return i;
        }
      } else {
        break;
      }
    }
  }

  return undefined;
}

smallestCommons([1, 13]);
