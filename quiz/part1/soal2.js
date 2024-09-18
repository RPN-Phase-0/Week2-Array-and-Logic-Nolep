let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {
    let first = input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro")
    console.log(input)
    let waktuLahir = input[3].split('/')
    let bulanLahir = Number(waktuLahir[1])
    switch(bulanLahir){
        case 1:
            console.log('Januari')
        break;
        case 2:
            console.log('Februari')
        break;
        case 3:
            console.log('Maret')
        break;
        case 4:
            console.log('April')
        break;
        case 5:
            console.log('Mei')
        break;
        case 6:
            console.log('Juni')
        break;
        case 7:
            console.log('Juli')
        break;
        case 8:
            console.log('Agustus')
        break;
        case 9:
            console.log('September')
            break;
        case 10:
            console.log('Oktober')
            break;
        case 11:
            console.log('November')
            break;
        case 12:
            console.log('Desember')
    }
    console.log([waktuLahir[2], waktuLahir[0], waktuLahir[1]])
    console.log(waktuLahir.join('-'))
    let empty = ''
    for(let i = 0; i < 15; i++){
        empty += input[1][i]
    }
    console.log(empty)
}

dataHandling(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */
