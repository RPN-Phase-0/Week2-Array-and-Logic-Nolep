function targetTerdekat(arr) {
    let indexO = -1;
    let indexX = -1;
    let jarakTerdekat = Infinity;

    for (let i = 0; i < arr.length; i++){
        if (arr[i] === 'o'){
            indexO = i
        }else if (arr[i] === 'x'){
            indexX = i 
        }

        if (indexX> -1 && indexO > -1){
            let jarak = Math.abs(indexX - indexO)
            if (jarak < jarakTerdekat){
                jarakTerdekat = jarak
            }
        }
    }
    
    if (jarakTerdekat == Infinity){
        return 0;
    }
    return jarakTerdekat;
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1
