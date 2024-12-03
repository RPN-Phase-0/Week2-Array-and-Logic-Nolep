const input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {
    input.splice(1, 4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");
    const date = input[3].split("/");

    console.log(input);

    console.log(date[1] === "05" ? "Mei" : date);

    console.log(`["${date[2]}", "${date[0]}", "${date[1]}"]`);

    console.log(date.join("-"));

    console.log(input[1].slice(0,15));
}

dataHandling(input);

/**
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */
