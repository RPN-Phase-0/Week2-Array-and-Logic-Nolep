function pasanganTerbesar(num) {
    let maxPair = 0;
    let strAngka = String(num);

    for (let i = 0; i < strAngka.length - 1; i++) {
        let pair = Number(strAngka[i] + strAngka[i+1]);
        if (pair > maxPair) {
            maxPair = pair;
        }
    }
    return maxPair
}

console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99