/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
    // you can only write your code here!
    let hewanTerurut = animals.sort();
    let result = [];
    let temp=[];
  
    for (let i = 0; i < hewanTerurut.length; i++){  
      if(temp.length === 0){
        temp.push(hewanTerurut[i])
      }else if ( temp [0][0] === hewanTerurut[i][0]){
        temp.push(hewanTerurut[i]);
      }else{
        result.push(temp);
        temp = [hewanTerurut[i]];
      }
    }
    result.push(temp);
  return result;
    
  }

  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]