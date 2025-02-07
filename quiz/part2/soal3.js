function hitungJumlahKata(kalimat) {
    let pecahKalimat = kalimat.split(' ');
    let jumlah = 0;
    for (let i = 0; i < pecahKalimat.length; i++) {
        jumlah++;
    }
    return jumlah;
}
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5