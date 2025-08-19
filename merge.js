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
