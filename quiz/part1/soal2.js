let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    input[1] = "Roman Alamsyah Elsharawy";
    input[2] = "Provinsi Bandar Lampung";
    input.splice(4,1,"Pria", "SMA Internasional Metro")
    console.log(input);

    let tanggal = input[3].split('/');
    let bulan = tanggal[1];
    let month = '';
    
    switch (bulan) {
        case '01': month = 'Januari'; break;
        case '02': month = 'Februari'; break;
        case '03': month = 'Maret'; break;
        case '04': month = 'April'; break;
        case '05': month = 'Mei'; break;
        default: console.log(`Bulan invalid`);
    }
    console.log(month);

    let sortDate = [tanggal[2], tanggal[0], tanggal[1]]
    console.log(sortDate);

    let joinStrip = tanggal.join('-');
    console.log(joinStrip);

    let batasNama = input[1].slice(0,15);
    console.log(batasNama);
}

dataHandling2(input);