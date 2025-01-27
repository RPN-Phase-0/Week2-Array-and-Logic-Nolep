/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
    // you can only write your code here!
    let len = arr.length;
    let letakO = [], letakX = [];
    for(let i = 0; i < len; i++){
        if(arr[i] == 'o') letakO.push(i);
        if(arr[i] == 'x') letakX.push(i);
    }
    let distance = Infinity;
    for(let i = 0; i < letakO.length; i++){
        for(let j = 0; j < letakX.length; j++){
            let tempDis = Math.abs(letakO[i] - letakX[j]); 
            if(tempDis < distance) distance = tempDis;
        }
    }
    if(distance != Infinity){
        return distance;
    }else{
        return 0;
    }
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1