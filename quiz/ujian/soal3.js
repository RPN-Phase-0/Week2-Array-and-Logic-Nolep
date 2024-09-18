/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
    animals.sort()
    let groupAnimal = []
    let result = []

    for(let i = 0; i < animals.length; i++){
      let animal = animals[i]
      if(i == 0){
        groupAnimal.push(animal)
      }else if(groupAnimal[0][0] !== animal[0]){
        result.push(groupAnimal)
        groupAnimal = [animal]
      }else{
        groupAnimal.push(animal)
      }
    }
    result.push(groupAnimal)
    return result
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]