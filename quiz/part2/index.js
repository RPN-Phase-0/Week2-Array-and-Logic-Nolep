//soal 1
function palindrome(kata) {
    let reversed = '';
    for (let i = kata.length - 1; i >= 0; i--) {
      reversed += kata[i];
    }
    return kata === reversed;
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false

//soal 2
function angkaPalindrome(num) {
    function isPalindrome(angka) {
      let str = angka.toString();
      let reversed = str.split('').reverse().join('');
      return str === reversed;
    }
  
    num++; // Mulai dari angka berikutnya
    while (!isPalindrome(num)) {
      num++;
    }
    return num;
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001

//soal 3
function hitungJumlahKata(kalimat) {
    return kalimat.split(' ').length;
  }
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5

//soal 4
function pasanganTerbesar(num) {
    let str = num.toString();
    let maxPair = 0;
  
    for (let i = 0; i < str.length - 1; i++) {
      let pair = parseInt(str[i] + str[i + 1]);
      if (pair > maxPair) {
        maxPair = pair;
      }
    }
  
    return maxPair;
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99
  