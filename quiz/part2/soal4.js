function pasanganTerbesar(num) {
  // you can only write your code here!
    const numStr = num.toString();

    if ( numStr.length < 2 ) {
        return 'Tidak tersedia pasangan'
    }
    let maxPasangan = 1

    for ( let i = 0; i < numStr.length - 1; i++ ) {
        const pasangan = parseInt(numStr[i] + numStr[i + 1])

        if ( pasangan > maxPasangan ){
            maxPasangan = pasangan
        }
    }
    return maxPasangan;

}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99