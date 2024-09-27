let arr = [2, 1, 8, 10, 2]
let result = [];
    
    for(let i = 0; i < arr.length; i++) {
        let multiply = 1;
        for(let j = 0; j < arr.length; j++) {
            if(i !== j) {
                multiply *= arr[j];
            }
        }
        result.push(multiply);
    }
    console.log(result)
