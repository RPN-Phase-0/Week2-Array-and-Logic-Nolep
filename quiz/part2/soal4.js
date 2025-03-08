function pasanganTerbesar(num) {
    // you can only write your code here!
    let numMax = 0;
    let numberStr = num.toString();

    for (let i = 0; i < numberStr.length - 1; i++) {
        let numBanding = parseInt(numberStr[i] + numberStr[i + 1]);
        // console.log(numBanding);
        if (numBanding > numMax) {
            numMax = numBanding;
        } else {
            numMax = numMax;
        }
    }
    return numMax;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99