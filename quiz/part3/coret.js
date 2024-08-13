function mencariMean ( arr ){
    let mean = arr.reduce(function(val, acc){
    return val + acc;
    }, 0)

    let bagi = mean / arr.length;
    return Math.round(bagi);
}
console.log(mencariMean([1,2,3,4,5]));