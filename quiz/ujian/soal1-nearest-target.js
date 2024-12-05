function targetTerdekat(arr) {
    let xIndex = -1;
    let oIndex = -1;
    let nearest = Number.MAX_VALUE;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'o') {
            oIndex = i;
        }
        
        if (arr[i] === 'x') {
            xIndex = i;
        }

        if ((oIndex > -1 && xIndex > -1) && Math.abs(oIndex - xIndex) < nearest) {
            nearest = Math.abs(oIndex - xIndex);
        }
    }

    if (oIndex < 0 || xIndex < 0) {
        return 0;
    }

    return nearest;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1
