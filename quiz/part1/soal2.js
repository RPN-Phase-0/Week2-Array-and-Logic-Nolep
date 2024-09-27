// Soal 2 
// pada soal yg kedua, kalian harus belajar method `split` secara mandiri, pada soal dibawah ini, 
// method ***.split()*** cukup powerfull loh
// ```js
 let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

 function dataHandling(input) {

    input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    input.splice(4, 1, "Pria", "SMA Internasional Metro");
    console.log(input);

    let tanggal = input[3].split("/");
    if (tanggal[1] == "05") {
        console.log("Mei");
    };

    console.log(tanggal.sort((a, b) => b - a));

    let stringTanggal = input[3].split("/").join("-");
    console.log(stringTanggal);

    let name = input[1];
    console.log(name.slice(0, 15));
 }
dataHandling(input);

// /**
//  * keluaran yang diharapkan (pada console)
//  *
//  * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
//  * Mei
//  * ["1989", "21", "05"]
//  * 21-05-1989
//  * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
//  */
// ```