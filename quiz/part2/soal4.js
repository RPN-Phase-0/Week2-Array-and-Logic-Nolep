function pasanganTerbesar(num) {
    // you can only write your code here!
    let numString = num.toString();
    let max = Number(numString[0] + numString[1]);
    for(let i = 1; i < numString.length - 1; i++){
       let combined = Number(numString[i] + numString[i + 1])
         if(combined > max){
              max = combined;
        }
  }
  return max; 
}
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99