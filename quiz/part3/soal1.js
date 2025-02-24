function cariMean(arr) {
  sum = arr.length;
  total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  mean = total / sum;
  return Math.round(mean);
}

console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7
