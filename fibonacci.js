let arr = [];

// iterative fibonacci assignment solution
function fibs(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  arr = [0, 1];
  for (i = 2; i < n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr;
}

// assignment testing
console.log("This was printed iteratively");
console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]