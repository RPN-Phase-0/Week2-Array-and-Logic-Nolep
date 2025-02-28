//tentukan apakah ini deret aritmatika atau bukan
function tentukanDeretAritmatika(arr) {
  // ! jika < 2, tidak termasuk arimatika
  if (arr.length < 2) return false;

  // ! cari beda elemen
  let beda = arr[1] - arr[0];

  // ! looping arr nya
  for (let i = 1; i < arr.length - 1; i++) {
    // * cek beda antara semua elemen
    if (arr[i + 1] - arr[i] !== beda) {
      return false;
    }
  }
  return true;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
