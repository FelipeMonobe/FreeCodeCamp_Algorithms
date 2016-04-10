function myReplace(str, before, after) {
  var pattern = /[A-Z]/;

  after = pattern.test(before[0]) ?
    after[0].toUpperCase() + after.slice(1) :
    after;

  str = str.replace(before, after);
  return str;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
