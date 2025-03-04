// ## Soal 3
function hitungJumlahKata(kalimat) {
  let count = 0;
  let kata = kalimat.trim();
  for(let i = 0; i < kata.length; i++) {
    if(kata[i] === ' ') {
      count++;
    }
  }
  return count + 1;
}

// TEST CASES
console.log(hitungJumlahKata("I have a dream")); // 4
console.log(hitungJumlahKata("Never eat shredded wheat or cake")); // 6
console.log(hitungJumlahKata("A song to sing")); // 4
console.log(hitungJumlahKata("I")); // 1
console.log(hitungJumlahKata("I believe I can code")); // 5
