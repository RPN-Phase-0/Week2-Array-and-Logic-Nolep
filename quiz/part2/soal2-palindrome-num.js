function reverse(num) {
    let reversed = 0;

    while (num !== 0) {
        reversed = (reversed * 10) + (num % 10);
        num = Math.floor(num / 10);
    }
    
    return reversed;
}

function angkaPalindrome(num) {
    while (true) {
        num++;

        if (num === reverse(num)) {
            return num;
        }
    }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
