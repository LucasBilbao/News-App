export function getSortedUniqueArrayOf(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`${arr} should be an array`);
  }
  let sorted = arr.map(item => item.source.name);
  sorted = sorted.filter((item, index) => sorted.indexOf(item) === index);
  return sorted;
}
