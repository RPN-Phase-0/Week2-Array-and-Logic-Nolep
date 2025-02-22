function pasanganTerbesar(num) {
  let numStr = num.toString();
  let max = Number(numStr[0] + numStr[1]);
  for (let i = 1; i < numStr.length - 1; i++) {
    let pasangan = Number(numStr[i] + numStr[i + 1]);
    if (pasangan > max) {
      max = pasangan;
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
