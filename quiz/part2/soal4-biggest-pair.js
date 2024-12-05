function pasanganTerbesar(num) {
    const strNum = String(num);
    
    let biggestPair = strNum[0] + strNum[1];
    let currentPair = "";

    for (let i = 1; i < strNum.length - 1; i++) {
        currentPair = strNum[i] + strNum[i + 1];

        if (currentPair > biggestPair) {
            biggestPair = currentPair;
        }
    }

    return biggestPair;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
