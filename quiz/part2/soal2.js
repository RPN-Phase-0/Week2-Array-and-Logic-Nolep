function angkaPalindrome(num) {
    // you can only write your code here!
    function isPalindrome(number) {
        return number.toString() === number.toString().split('').reverse().join('');
    }
    num++
    while(!isPalindrome(num)) {
        num++
    }
    return num
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001