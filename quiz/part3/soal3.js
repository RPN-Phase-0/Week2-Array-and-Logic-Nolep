//tentukan apakah ini deret aritmatika atau bukan
function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    let diff = arr[1] - arr[0];
    let result = true;

    for(let i = 2; i < arr.length - 1; i++) {
        if(arr[i + 1] - arr[i] !== diff) {
            result = false;
        }
    } 
    return result;
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false