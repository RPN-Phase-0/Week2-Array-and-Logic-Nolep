function palindrome(kata) {
    // you can only write your code here!
    let nama = ""
    for(let i = kata.length - 1; i >= 0; i--) {
        nama += kata[i]
    }
    return nama === kata
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false