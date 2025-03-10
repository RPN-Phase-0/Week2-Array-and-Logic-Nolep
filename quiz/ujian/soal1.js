/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
    let indexO = -1;
    let indexX = 0;
    let minDistance = Infinity; // Set nilai awal yang sangat besar

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'o') {
            indexO = i; // Simpan indeks 'o'
        }

        if (arr[i] === 'x' && indexO !== -1) {
            // Hitung jarak dan update jarak terdekat jika lebih kecil
            indexX = i
            minDistance = Math.min(minDistance, Math.abs(indexX - indexO));
        }
    }

    for (let i = arr.length; i > 0; i--) {

        if (arr[i] === 'x' && indexO !== -1) {
            // Hitung jarak dan update jarak terdekat jika lebih kecil
            indexX = i
            minDistance = Math.min(minDistance, Math.abs(indexX - indexO));
        }
    }

    return minDistance === Infinity ? 0 : minDistance;
}


// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', '', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1 