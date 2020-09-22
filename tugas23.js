function isBigEnough(value) {
  return value >= 15;
}

var filtered = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66].filter(isBigEnough);
console.log(filtered.filter(isBigEnough))