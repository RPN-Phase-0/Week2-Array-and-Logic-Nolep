/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
    // you can only write your code here!
    animals.sort()
    let tampung = [];

    for( let i = 0; i < animals.length; i++){
        let ketemu = false;

        for(let j = 0; j < tampung.length;j++){
            if( tampung[j][0][0] === animals[i][0]){
                tampung[j].push(animals[i]);
                ketemu = true;
                break;
            }
        }
        if(!ketemu){
            tampung.push([animals[i]])
        }
    }
    return tampung;
}


// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]