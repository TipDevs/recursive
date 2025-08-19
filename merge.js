function merge(leftSorted, rightSorted) {
  const sortedArray = [];
  let i = 0, j = 0;
   while (i < leftSorted.length && j < rightSorted.length) {
    if (leftSorted[i] < rightSorted[j]) {
      sortedArray.push(leftSorted[i]);
      i++;
    } else {
      sortedArray.push(rightSorted[j]);
      j++;
    }
  }
  return sortedArray.concat(leftSorted.slice(i), rightSorted.slice(j));
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));