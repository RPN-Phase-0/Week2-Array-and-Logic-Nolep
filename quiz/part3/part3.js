// # Logic Challenge lagi | Part 3

// ## Soal 1
// ```js
function cariMean(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return Math.round(sum / arr.length);
}

// // TEST CASES
console.log("Soal 1");
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7

// //tips baca dokumentasi Math js untuk pembulatan
// ```
// ## Soal 2
// ```js
// /*
// Diberikan sebuah function perkalianUnik(arr) yang menerima satu parameter berupa array yang berisikan angka. Function akan me-return array baru yang mengandung angka yang setiap nilainya merupakan hasil kali angka lain yang bukan angka itu sendiri. Contoh, jika arr adalah [1, 2, 3, 4, 5], maka function akan mereturn [120, 60, 40, 30, 24], karena 120 adalah 2 * 3 * 4 * 5, 60 adalah 1 * 3 * 4 * 5, 40 adalah 1 * 2 * 4 * 5, dan seterusnya.
// */
function perkalianUnik(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let product = 1;
        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
                product *= arr[j];
            }
        }
        result.push(product);
    }
    return result;
}

// // TEST CASES
console.log("\nSoal 2");
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]
// ```

// ## Soal 3
// ```js
//tentukan apakah ini deret aritmatika atau bukan
function tentukanDeretAritmatika(arr) {
    let beda = arr[1] - arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] - arr[i] !== beda) {
            return false;
        }
    }
    return true;
}

// // TEST CASES
console.log("\nSoal 3");
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
// ```

// ## Soal 4
// ```js
function tentukanDeretGeometri(arr) {
    beda = arr[1] / arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i +1] / arr[i] !== beda) {
            return false;
        }
    }
    return true;
}

// // TEST CASES
console.log("\nSoal 4");
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
// ```