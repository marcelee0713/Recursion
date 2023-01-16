function mergeSort(arr) {
  if (arr.length === 0) return "Please give an array with values";
  if (arr.length === 1) return arr;
  let halfLength = Math.ceil(arr.length / 2);
  let leftArr = arr.slice(0, halfLength);
  let rightArr = arr.slice(halfLength, arr.length);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(left, right) {
  var result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());
  return result;
}

console.log(mergeSort([5, 1, 7, 2]));
