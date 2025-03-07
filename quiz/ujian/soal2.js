function mengelompokkanAngka(arr) {
        let genap = arr.filter(num => num % 2 === 0 && num % 3 !== 0);
        let ganjil = arr.filter(num => num % 2 !== 0 && num % 3 !== 0);
        let kelipatan = arr.filter(num => num % 3 === 0);
    
        return [genap, ganjil, kelipatan]
    }
    
    
    // TEST CASES
    console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
    console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
    console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
    console.log(mengelompokkanAngka([])); // [ [], [], [] ]