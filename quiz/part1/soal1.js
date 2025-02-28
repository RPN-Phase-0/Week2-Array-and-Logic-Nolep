let input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

for(let i = 0; i < input.length; i++){
    console.log(`nomor : ${input[0][0]}`);
    console.log(`nama : ${input[1][1]}`);
    console.log(`ttl : ${input[2][2]}`);
    console.log(`hobi : ${input[3][3]}`);
}