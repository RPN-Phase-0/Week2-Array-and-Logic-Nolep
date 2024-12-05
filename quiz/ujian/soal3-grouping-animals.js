function groupAnimals(animals) {
    animals.sort();

    const group = [];

    for (let i = 0; i < animals.length; i++) {
        let firstLetter = animals[i][0];
        let foundGroup = false;

        for (let j = 0; j < group.length; j++) {
            if (group[j][0][0] === firstLetter) {
                group[j].push(animals[i]);
                foundGroup = true;
                break;
            }
        }

        if (!foundGroup) {
            group.push([animals[i]]);
        }
    }

    return group;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
