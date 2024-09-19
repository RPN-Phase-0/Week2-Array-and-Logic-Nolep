// // // // // let data=['rudy','pani','ngal'];
// // // // // data.push('paningal');
// // // // // delete data[2];
// // // // // data[2] = 'tambahin lg';
// // // // // data.push(['ini','arrya','keuda']);
// // // // // data[4].push(['arrya','lagi satu']);
// // // // // console.log(data);

// // // // // objek

// // // // let orang = {
// // // //     "nama" : "rudy",
// // // //     "umur" : 11,
// // // //     "pekerjaan" : "programer",
// // // // }

// // // // orang["status"] = "belum menikah";
// // // // orang["ttl"] = "11 oktober 2002";
// // // // delete orang["ttl"];
// // // // console.log(orang);

// // // let fruit = ['banana','apple','mango','strawberry','avocado'];
// // // let fl = fruit.length;

// // // let text ='';
// // // for (let i = 0; i < fl; i++){
// // // text += fruit[i] + " ";    
// // // }
// // // console.log(text);

// // const foo = Array.from('rudy');
// // console.log(foo);

// // // anda bisa menggunakan array from dengna cara ini

// // let users = new Array('Rudy','Jihan','Rafli','Difa');
// // const customers = Array.from(users);

// // console.log(customers);

// // // lebih simple 

// // let users1 = ['rudy','jihan','difa','joko'];
// // console.log(users1);

// // // Mengakses data array
// // console.log(users1[2]);
// // // ketika mengakses data array, otomatis array akan menjadi string

// // // dalam array kita bisa memanipulasi array dengan cara

// // let angkaArray = [1,2,4,5,5,6];
// // angkaArray[4] = 6;
// // angkaArray[5] = 7;
// // // syntax di atas bertujuan untuk memanipulasi array dengan cara diubah nilai array dengan syntax tsb
// // console.log(angkaArray);

// // // selain dengan metode itu, kita juga bisa menggunakan metode push, yaitu memasukan nilai array
// // angkaArray.push(8);
// // // angka 8 otmatis terpush pada element terakhir array
// // console.log(angkaArray);

// // //untuk mengakses element array yang ingin ditentukan bisa dengan
// // console.log(angkaArray[angkaArray.length-1]);


// // let fruit = ['banana','apple','mango','strawberry','avocado'];
// // // untuk menghapus array ada beberapa metode yaitu dengan delete, splice,shift dan pop

// // // delete
// // // delete fruit[1];
// // // console.log(fruit);
// // // jika menggunakan delete maka akan ada array kosong yang masih tersisa didalam array

// // //splice
// // // fruit.splice(2,3);
// // // // maksud dari 2,3 adalah 2 adalah angka index yang ingin dilakukan penghapusan, 3 adalah banyaknya index yang ingin dihapus
// // // console.log(fruit);


// // // shift
// // fruit.shift();
// // console.log(fruit);
// // // Metode shift digunakan untuk menghapus array terdepan dari sebuah array, atau bisa dibilang menghapus array index pertama

// // fruit.pop();
// // console.log(fruit);
// // // Metode pop digunakan untuk menghapus array terbelakang dari sebuah array, atau bisa dibilang menghapus array index terakhir


// // // Array Destructuring
// // // cara menggunakan destructuring dengan cara buat sebuah array, kemudian buat sebuah variable baru
// // // dengan berisikan nama yang ingin digunkan sertakan dengan pengambilan array

// const nama = ['rudy','paningal'];
// const [namaD, namaB] = nama;
// console.log(namaD);

// // method reverse
// //Reverse adalah method yang digunakan untuk membalikkan nilai array. Metode reverse() mengembalikan array dengan element yang dibalik.
// nama.reverse();
// console.log(nama);

// // Method Sort
// // Sort adalah method mengurutkan array dari angka terdepan, misal cbad akan diurutkan menjadi abcd

// nama.push('abi');
// nama.sort();
// console.log(nama);

// Function
// function convertCelsiusToFahrenheit(temperature) {
//     const temperatureInFahrenheit = (9 / 5) * temperature + 32;
//     console.log('Hasil konversi:', temperatureInFahrenheit);
//   }
//   const temperatureInCelsius = 80;
//   // Akan menjalankan isi function
//   convertCelsiusToFahrenheit(temperatureInCelsius);
//   // Output => Hasil konversi: 194
//   const temperatureInCelsius2 = 90;
//   convertCelsiusToFahrenheit(temperatureInCelsius2);
  
// LOOPING HELL
// for terbagi menjadi 3 yaitu, for loop, for in, for of
// Variabel awal adalah nilai variabel sebelum looping dilakukan. Test kondisi adalah evaluasi dari looping, jika bernilai false, looping akan berhenti. Increment adalah nilai variabel yang bertambah setiap looping dilakukan. 
// for (variabel awal; test kondisi; increment) {
  // do something }

/*
Diberikan sebuah function mengelompokkanAngka(arr) yang menerima satu parameter berupa array yang berisi angka-angka. Function akan me-return array multidimensi dimana array tersebut berisikan 3 kategori/kelompok:

kelompok pertama (baris pertama) merupakan angka-angka genap
kelompok ke-2 (baris ke-2) merupakan angka-angka ganjil
kelompok ke-3 (baris ke-3) merupakan angka-angka kelipatan 3
Contoh jika arr inputan adalah [45, 20, 21, 2, 7] maka output: [ [ 20, 2 ], [ 7 ], [ 45, 21 ] ]
*/



/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/

function groupAnimals(animals) {
  // you can only write your code here!
  let hewanTerurut = animals.sort();
  let hasil = [];
  let hasil2=[];

  for (let i = 0; i < hewanTerurut.length; i++){  
    if(hasil2.length === 0){
      hasil2.push(hewanTerurut[i])
    }else if ( hasil2 [0][0] === hewanTerurut[i][0]){
      hasil2.push(hewanTerurut[i]);
    }else{
      hasil.push(hasil2);
      hasil2 = [hewanTerurut[i]];
    }
  }
  hasil.push(hasil2);
return hasil;
  
}


// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]