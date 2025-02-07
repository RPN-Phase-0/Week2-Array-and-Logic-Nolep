let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    input[1] = "Roman Alamsyah Elsharawy";
    input[2] = "Provinsi Bandar Lampung";
    input.splice(4,1,"Pria", "SMA Internasional Metro");
    console.log(input);

    let date = input[3].split('/');
    let bulan = date[1]
    let month = '';
    switch (bulan) {
        case '05': month = 'Mei'; break;
    }
    console.log(month);

    console.log([date[2], date[0], date[1]]);

    console.log(date.join('-'));

    console.log(input[1].slice(0,15));
}

dataHandling2(input);