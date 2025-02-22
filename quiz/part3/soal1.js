function cariMean(arr) {
    var sum = 0
    var n = arr.length

    for (var i = 0; i < n; i++) {
        sum += arr[i]
    }

    var mean = Math.round(sum / n)
    
    return mean
}

// TEST CASES
console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7
