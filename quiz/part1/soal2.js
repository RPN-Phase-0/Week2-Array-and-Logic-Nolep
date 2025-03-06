let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {
    const data = input;

    //Update Data didalam array
    data[1] = "Roman Alamsyah Elsharawy";
    data[2] = "Provinsi Bandar Lampung";
    data.splice(4, 1, "Pria", "SMA Internasional Metro");

    //Daftar Nama Bulan
    const namaBulan = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember",
    ];

    // Ambil index tanggal dan format
    const tanggal = data[3];
    let [hari, bulan, tahun] = tanggal.split('/');
    bulan = namaBulan[parseInt(bulan) - 1];
    const ubahSusunanArray = [tahun, hari, bulan];
    const tanggalStrip = tanggal.split('/').join('-');

    // Limit nama
    const nama = data[1];
    const limitNama = nama.slice(0, 15);

    console.log(data);
    console.log(bulan);
    console.log(ubahSusunanArray);
    console.log(tanggalStrip);
    console.log(limitNama);
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