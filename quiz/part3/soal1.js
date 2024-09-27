function cariMean(arr) {
    // you can only write your code here!
    let jumlahData = 0 ;
    let result = '';
    for(let i = 0; i < arr.length; i++) {
        jumlahData += arr[i];
    }
    result = jumlahData / arr.length;
    return Math.round(result);
  }
  
  // TEST CASES
  console.log(cariMean([1, 2, 3, 4, 5])); // 3
  console.log(cariMean([3, 5, 7, 5, 3])); // 5
  console.log(cariMean([6, 5, 4, 7, 3])); // 5
  console.log(cariMean([1, 3, 3])); // 2
  console.log(cariMean([7, 7, 7, 7, 7])); // 7
  
  //tips baca dokumentasi Math js untuk pembulatan