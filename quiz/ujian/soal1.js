function targetTerdekat(arr) {
    let posisiO = [];
    let posisiX = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'o') {
            posisiO.push(i);
            // console.log(i)
        } else if (arr[i] === 'x') {
            posisiX.push(i);
            // console.log(i)
        }
    }

    if (posisiX.length === 0) {
        return 0;
    }

    let jarak = Infinity
    for (let i = 0; i < posisiO.length; i++) {
        for (let j = 0; j < posisiX.length; j++) {
            let pengurangan = Math.abs(posisiO[i] - posisiX[j]);
            if (jarak > pengurangan) {
                jarak = pengurangan;
            }
        }
    }
    return jarak
}
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1