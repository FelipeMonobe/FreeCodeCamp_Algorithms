function unite() {
  var args = Array.prototype.slice.call(arguments);

  return args.reduce(function(total, currentValue) {
    currentValue = currentValue.filter(function(num) {
      return total.indexOf(num) < 0;
    });
    return total.concat(currentValue);
  });
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
