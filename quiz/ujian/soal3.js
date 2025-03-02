/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
    // you can only write your code here!
    animals.sort(); 

  let hasil = [];
  
  for (let i = 0; i < animals.length; i++) {
    let hewan = animals[i];
    let hurufAwal = hewan[0];

    
    let kelompokDitemukan = false;
    for (let grup of hasil) {
      if (grup[0][0] === hurufAwal) { 
        grup.push(hewan);
        kelompokDitemukan = true;
        break;
      }
    }

    if (!kelompokDitemukan) {
      hasil.push([hewan]);
    }
  }

  return hasil;
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]