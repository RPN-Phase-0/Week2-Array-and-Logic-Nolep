/*
Diberikan sebuah function palindrome(kata) yang menerima satu parameter. Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.
*/

function palindrome(kata) {
    // you can only write your code here!
    // varibale penampungan untuk mengisi parameternya benar apa enggak
    let penampungan = "" 
    // buat cara untuk membalikan isi dari parameter dan di simpan di variable penampungan
    for (i = kata.length -1; i >= 0; i--) {
        penampungan = penampungan + kata[i] 
    }
    // buat cara untuk mengecek isi dari parameter yang ori dan yang ada di penampungan
    if (kata == penampungan) {
        return true
    } else {
        return false
    } 

  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false
