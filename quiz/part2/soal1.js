function palindrome(kata) {
    let kataKebalik = kata.split("").reverse().join("");
    return kataKebalik === kata;
}

    console.log(palindrome('katak'));
    console.log(palindrome('blanket'));
    console.log(palindrome('civic')); 
    console.log(palindrome('kasur rusak')); 
    console.log(palindrome('mister')); 