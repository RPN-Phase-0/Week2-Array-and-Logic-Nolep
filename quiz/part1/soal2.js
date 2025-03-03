let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

const monthConverter = (month) => {
    switch (month) {
        case '01':
            return 'Januari';
        case '02':
            return 'Februari';
        case '03':
            return 'Maret';
        case '04':
            return 'April';
        case '05':
            return 'Mei';
        case '06':
            return 'Juni';
        case '07':
            return 'Juli';
        case '08':
            return 'Agustus';
        case '09':
            return 'September';
        case '10':
            return 'Oktober';
        case '11':
            return 'November';
        case '12':
            return 'Desember';
    }
}
function dataHandling2(input) {
    // adding Elsharawy to the name (input[1])
    input[1] += "Elsharawy";

    // formatting the BOD
    let formattedBOD = input[3].split("/").join("-");

    // rearrage the BOD
    let bodArr = input[3].split("/");
    bodArr.splice(0, 0, bodArr.pop());

    // convert the month
    let month = monthConverter(bodArr[2]);

    // get 15 characters of the name
    let name = input[1].slice(0,15);
    
    // output
    console.log(input);
    console.log(month);
    console.log(bodArr);
    console.log(formattedBOD);
    console.log(name);
}

dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */