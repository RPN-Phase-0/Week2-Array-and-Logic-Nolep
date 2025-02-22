/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter.
Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat.
Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2.
Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
  let posisi_o = [];
  let posisi_x = [];

  // Mencari semua posisi "o" dan "x"
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "o") {
      posisi_o.push(i);
    } else if (arr[i] === "x") {
      posisi_x.push(i);
    }
  }

  if (posisi_x.length === 0 || posisi_o.length === 0) {
    return 0; // Jika tidak ada "o" atau "x" dalam array
  }

  let jarakTerdekat = arr.length;

  // Menghitung jarak terdekat antara semua "o" dan "x"
  for (let i = 0; i < posisi_o.length; i++) {
    for (let j = 0; j < posisi_x.length; j++) {
      let jarak = Math.abs(posisi_o[i] - posisi_x[j]);
      if (jarak < jarakTerdekat) {
        jarakTerdekat = jarak;
      }
    }
  }

  return jarakTerdekat;
}
// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
console.log(targetTerdekat([" ", "o", " ", "x", "x", "o", " ", "x"])); // 1
