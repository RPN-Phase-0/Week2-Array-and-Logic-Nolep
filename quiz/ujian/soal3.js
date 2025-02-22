/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  let result = [];
  let temp = [];
  let sorted = animals.sort();
  let firstLetter = sorted[0][0];

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i][0] === firstLetter) {
      temp.push(sorted[i]);
    } else {
      result.push(temp);
      temp = [];
      temp.push(sorted[i]);
      firstLetter = sorted[i][0];
    }
  }
  result.push(temp);

  return result;
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(
  groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
);
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
