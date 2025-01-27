function tentukanDeretGeometri(arr) {
    // you can only write your code here!
    let len = arr.length;
    let rasio = arr[len-1] / arr[len-2];
    for(let i = len-1; i > 0; i--){
        if(arr[i] / arr[i-1] != rasio) return false;
    }
    return true;
  }
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false