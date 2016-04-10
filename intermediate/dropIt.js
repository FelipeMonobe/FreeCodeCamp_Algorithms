function drop(arr, func) {
  var dropIndex, result;

  for (var i = 0; i < arr.length; i++) {
    result = func(arr[i]);

    if (result) {
      dropIndex = arr.indexOf(arr[i]);
      break;
    }
  }

  return result ? arr.slice(dropIndex) : [];
}

drop([1, 2, 3, 4], function(n) {
  return n >= 3;
});
