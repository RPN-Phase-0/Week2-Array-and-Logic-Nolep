/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
    // you can only write your code here!
    var result = [];
    for (var i = 0; i < animals.length; i++) {
        var found = false;
        for (var j = 0; j < result.length; j++) {
            if (result[j][0][0] == animals[i][0]) {
                result[j].push(animals[i]);
                found = true;
                break;
            }
        }
        if (!found) {
            result.push([animals[i]]);
        }
    }
    return result;
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]