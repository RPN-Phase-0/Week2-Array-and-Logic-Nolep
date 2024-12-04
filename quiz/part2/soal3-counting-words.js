function hitungJumlahKata(kalimat) {
    let counter = 1;

    for (const char of kalimat) {
        if (char === " ") {
            counter++;
        }
    }

    return counter;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5
