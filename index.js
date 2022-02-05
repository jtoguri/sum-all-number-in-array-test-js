function sumItems(array) {
  if (Array.isArray(array[0])){
    return sumItems(array[0]) + sumItems(array.slice(1));
  }
  if (array.length === 0) {
    return 0;
  }
  if (array.length === 1) {
    return array[0];
  }
  return array[0] + sumItems(array.slice(1));
}

module.exports = sumItems;