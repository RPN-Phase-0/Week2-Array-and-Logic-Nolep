let input = ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"];

function getMonth(bulan){
    let data = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", 
                "September", "Oktober", "November", "Desember"];
    
    return data[bulan - 1];
}

function dataHandling(input) {
    console.log(input);
    let tanggal = input[3].split("/");
    console.log(getMonth(tanggal[1]));
    console.log(tanggal.reverse());
    console.log(tanggal[2] + "-" + tanggal[1] + "-" + tanggal[0]);
    console.log(input[1].slice(0, 15));
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