function angkaPalindrome(num) {
    while (true) {
        num++;
        strNum = String(num);
        let balik = strNum.split('').reverse().join('');

        if (strNum === balik) {
            return num;
        }
    }
}

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001