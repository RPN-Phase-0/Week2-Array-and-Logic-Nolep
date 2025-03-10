function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    let jumlahKata = 0;
    let awalKata = false;

    for (let i = 0; i < kalimat.length; i++) {
        if (kalimat[i] !== ' ') {
            if (!awalKata) {
                jumlahKata++;
                awalKata = true;
            }
        } else {
            awalKata = false;
        }
    }
    return jumlahKata;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5