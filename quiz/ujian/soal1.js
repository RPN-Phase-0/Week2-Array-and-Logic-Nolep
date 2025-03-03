/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
    // you can only write your code here!
    if (!arr.includes('o') || !arr.includes('x')) {
        return 0;
    }

    let idxO = arr.map((char, i) => char === 'o' ? i : -1).filter((i) => i !== -1)
    let idxX = arr.map((char, i) => char === 'x' ? i : -1).filter((i) => i !== -1)
    
    let minDiff = Infinity;

    for (let i = 0; i < idxO.length; i++) {  
        for (let j = 0; j < idxX.length; j++) {  
            let diff = Math.abs(idxO[i] - idxX[j]);
            if (diff < minDiff) {
                minDiff = diff;
            }
        }
    }
    return minDiff;
    
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1