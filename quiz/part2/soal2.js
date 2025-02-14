function angkaPalindrome(num) {
    while (true) {
        num++;
        numStr = String(num);
        let result = '';

        for (let i = numStr.length - 1; i >= 0; i--) {
            result += numStr[i]
        }
        if (result === numStr) {
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