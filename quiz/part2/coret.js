function palindrome(kata) {
    // you can only write your code here!
  let cekKata = kata.split().reverse().join();

  return cekKata === kata;
  }
  
  // TEST CASES
  console.log(palindrome('katak'));

  console.log('')

  for (let i = 0; i < 5; i++){
    console.log(i)
  }

  console.log('')

  const person = { name: 'Fulan', origin: 'Bandung', birthYear: 2024 };
  console.log(person)

  for (let property in person){
    console.log(`${property}: ${person[property]}`);
  }
console.log('')

  const names = ['Bebek', 'Ayam', 'Telor', 'Tempe'];
  console.log(names)
 
for (const item of names) {
  console.log(item);
}

console.log('')

const arr = [1,2,3,4,5,6,7,8,9];

arr.forEach(angka => console.log(angka));

for( const value of arr){
  console.log(value);
}