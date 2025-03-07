function groupAnimals(animals) {
    animals.sort();

    let group = [];
    for (let i = 0; i < animals.length; i++){
        let kata = false;

        for (let j = 0; j < group.length; j++){
            if (group[j][0][0] === animals[i][0]) {
                group[j].push(animals[i]);
                kata = true;
                break;
            }
        }

        if (!kata){
            group.push([animals[i]])
        }
    }

    return group;

}
    
    
    // TEST CASES
    console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
    // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
    console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
    // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]