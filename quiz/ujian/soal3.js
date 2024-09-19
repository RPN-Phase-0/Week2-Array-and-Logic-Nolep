/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
    // you can only write your code here!
    let hewanTerurut = animals.sort();
    let hasil = [];
    let hasil2=[];
  
    for (let i = 0; i < hewanTerurut.length; i++){  
      if(hasil2.length === 0){
        hasil2.push(hewanTerurut[i])
      }else if ( hasil2 [0][0] === hewanTerurut[i][0]){
        hasil2.push(hewanTerurut[i]);
      }else{
        hasil.push(hasil2);
        hasil2 = [hewanTerurut[i]];
      }
    }
    hasil.push(hasil2);
  return hasil;
    
  }

  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]