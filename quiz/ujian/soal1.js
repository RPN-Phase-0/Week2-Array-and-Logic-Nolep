/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. 
Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, 
jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. 
Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
    // you can only write your code here!
    let minDist = Infinity;
    let o = -1;
    let x = -1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "x") {
            x = i;
            // Hitung jarak jika sudah menemukan 'o'
            if (o !== -1) {
                minDist = Math.min(minDist, Math.abs(o - x));
            }
        }
        if (arr[i] === "o") {
            o = i;
            // Hitung jarak jika sudah menemukan 'x'
            if (x !== -1) {
                minDist = Math.min(minDist, Math.abs(o - x));
            }
        }
    }

    return minDist === Infinity ? 0 : minDist;
}
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1