function targetTerdekat(arr) {
    let indexO = [];
    let indexX = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'o') {
            indexO.push(i);
        } else if (arr[i] === 'x') {
            indexX.push(i)
        }
    }
    
    if (indexX.length === 0) {
        return 0;
    }

    let jarakMin = Infinity;
    for (let i = 0; i < indexO.length; i++) {
        for (let j = 0; j < indexX.length; j++) {
            let jarak = Math.abs(indexO[i] - indexX[j]);
            if (jarak < jarakMin) {
                jarakMin = jarak
            }
        }
    }
    return jarakMin;
}

console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1