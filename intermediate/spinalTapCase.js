function spinalCase(str) {
  str = str
    .replace(/\s([A-Z])/g, '-$1')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/_/g, '-')
    .replace(/\s([a-z])/g, '-$1')
    .toLowerCase();

  return str;
}
