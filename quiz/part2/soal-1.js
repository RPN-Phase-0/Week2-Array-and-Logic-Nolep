/*
Diberikan sebuah function palindrome(kata) yang menerima satu parameter.
Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan.
Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.
*/
// let tes = "katak";
// console.log(tes[0] + " " + tes[4])

function palindrome(kata) {
    // you can only write your code here!
    let isPalindrome;

    for (let i = 0; i < kata.length; i++) {
        let berotakSenku = i + 1;
        for (let j = kata.length - berotakSenku; j >= i; j--) {
            if (kata[i] === kata[j]) {
                console.log("loop " + i)
                console.log("i: " + kata[i] + " " + "j: " + kata[j])
                isPalindrome = true;
                console.log(isPalindrome);
                break;
            } else {
                console.log("loop " + i)
                console.log("i: " + kata[i] + " " + "j: " + kata[j])
                isPalindrome = false;
                return isPalindrome
            }
        }
    }
    return isPalindrome;
}
  
// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
console.log(palindrome('berotaksenku'));
console.log(palindrome('berotaksenkuukneskatoreb'));


  
