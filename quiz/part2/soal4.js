function pasanganTerbesar(num) {

// you can only write your code here!

let strCouple = String(num);
let bigCouple = 0;

for (let i = 0; i < strCouple.length; i++){
    let couple = parseInt(strCouple[i] + strCouple[i+1]);

    if ( couple > bigCouple){
        bigCouple = couple;
    }

}

return bigCouple;

}
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99