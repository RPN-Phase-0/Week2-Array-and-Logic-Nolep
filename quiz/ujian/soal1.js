// ## Soal 1
// ```js
// /*
// Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.function targetTerdekat(arr) {
function targetTerdekat(arr) {
  let posO = [];
  let posX = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'o') {
      posO.push(i);
    } else if (arr[i] === 'x') {
      posX.push(i);
    }
  }

  if (posX.length === 0) {
    return 0;
  }

  let minDistance = Infinity;
  for (let i = 0; i < posO.length; i++) {
    for (let j = 0; j < posX.length; j++) {
      let distance = Math.abs(posO[i] - posX[j]);
      if (distance < minDistance) {
        minDistance = distance;
      }
    }
  }
  return minDistance;
}
// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1
// ```