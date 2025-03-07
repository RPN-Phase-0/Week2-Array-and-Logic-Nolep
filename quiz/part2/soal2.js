function isPalindrome(num) {
    let str = num.toString();
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

function angkaPalindrome(angka) {
    angka++; 
    while (!isPalindrome(angka)) {
        angka++;
    }
    return angka;
}


console.log(angkaPalindrome(8)); 
console.log(angkaPalindrome(10)); 
console.log(angkaPalindrome(117)); 
console.log(angkaPalindrome(175)); 
console.log(angkaPalindrome(1000)); 
