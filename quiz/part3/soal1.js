function cariMean(arr) {
    let total = arr.reduce((sum, num) => sum + num, 0);
    let x = total / arr.length;
    return Math.round(x);
}


    console.log(cariMean([1, 2, 3, 4, 5])); 
    console.log(cariMean([3, 5, 7, 5, 3])); 
    console.log(cariMean([6, 5, 4, 7, 3])); 
    console.log(cariMean([1, 3, 3])); 
    console.log(cariMean([7, 7, 7, 7, 7])); 
