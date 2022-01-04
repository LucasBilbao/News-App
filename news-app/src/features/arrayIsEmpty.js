export function arrIsEmpty(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }
  if (arr.length == 0) {
    return true;
  }
  return false;
}
