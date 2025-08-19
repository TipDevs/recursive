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

// recursive fibonacci assignment solution
function fibsRec(n) {
  let arr = [];
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];
  arr = fibsRec(n - 1);
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return arr;
}
// assignment testing
console.log("This was printed recursively");
console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]