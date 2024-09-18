function pasanganTerbesar(num) {
    let numToString = String(num)
    let empty = []
    for(let i = 0; i < numToString.length - 1; i++){
      empty.push(numToString[i] + numToString[i+1])
    }
    let emptySorting = empty.sort()
    let result = emptySorting[emptySorting.length-1]
    return result
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99