//soal 1
function targetTerdekat(arr) {
    let posisiO = [];
    let posisiX = [];
    let minDistance = Infinity;

    // Cari semua posisi 'o' dan 'x'
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'o') {
            posisiO.push(i);
        } else if (arr[i] === 'x') {
            posisiX.push(i);
        }
    }

    // Jika tidak ada 'x', return 0
    if (posisiX.length === 0) return 0;

    // Cari jarak minimum antara setiap 'o' dan setiap 'x'
    for (let o of posisiO) {
        for (let x of posisiX) {
            let distance = Math.abs(x - o);
            minDistance = Math.min(minDistance, distance);
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

//soal 2
function mengelompokkanAngka(arr) {
    let genap = [];
    let ganjil = [];
    let kelipatan3 = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0) {
            kelipatan3.push(arr[i]); // Masukkan ke kelipatan 3 jika habis dibagi 3
        } else if (arr[i] % 2 === 0) {
            genap.push(arr[i]); // Masukkan ke genap jika habis dibagi 2
        } else {
            ganjil.push(arr[i]); // Sisanya masuk ke ganjil
        }
    }

    return [genap, ganjil, kelipatan3];
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]

//soal 3
function groupAnimals(animals) {
    // 1. Urutkan array secara alfabetis
    animals.sort();

    let result = [];
    let group = [];

    // 2. Looping untuk mengelompokkan hewan berdasarkan huruf awal
    for (let i = 0; i < animals.length; i++) {
        if (i === 0 || animals[i][0] === animals[i - 1][0]) {
            group.push(animals[i]);
        } else {
            result.push(group); // Simpan kelompok sebelumnya ke dalam result
            group = [animals[i]]; // Mulai kelompok baru
        }
    }

    // 3. Jangan lupa push kelompok terakhir ke dalam result
    if (group.length > 0) {
        result.push(group);
    }

    return result;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
