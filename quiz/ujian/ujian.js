/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. 
Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. 
Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. 
Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
    // you can only write your code here!

    let indexX = -1; // Untuk menyimpan indeks terakhir 'x'
    let indexO = -1; // Untuk menyimpan indeks terakhir 'o'
    let jarakTerdekat = arr.length; // Inisialisasi jarak terdekat dengan panjang array

    // Loop untuk mencari posisi 'x' dan 'o'
    for (let i = 0; i < arr.length; i++) {
        // Jika elemen saat ini adalah 'x'
        if (arr[i] === 'x') {
            indexX = i; // Simpan posisi 'x'
            console.log("ini index x " + indexX)
            // Jika sudah menemukan 'o', hitung jarak
            if (indexO !== -1) {
                console.log("ini saya yakin gak di eksekusi" + indexO)
                let jarak = indexX - indexO; // Hitung jarak dari 'o' ke 'x'
                jarakTerdekat = Math.min(jarakTerdekat, Math.abs(jarak)); // Update jarak terdekat
            }
        }
        // Jika elemen saat ini adalah 'o'
        else if (arr[i] === 'o') {
            indexO = i; // Simpan posisi 'o'
            // Jika sudah menemukan 'x', hitung jarak
            if (indexX !== -1) {
                let jarak = indexO - indexX; // Hitung jarak dari 'x' ke 'o'
                jarakTerdekat = Math.min(jarakTerdekat, Math.abs(jarak)); // Update jarak terdekat
            }
        }
    }

    // Jika tidak ada 'x' atau 'o', kembalikan 0
    // Jika ada, kembalikan jarak terdekat
    return (indexX === -1 || indexO === -1) ? 0 : jarakTerdekat;

  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1
