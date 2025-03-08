let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {
    input.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    input.splice(4, 1, "Pria", "SMA International Metro");
    console.log(input);

    const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

    bulan = input[3].split("/");
    for (let i = 0; i < months.length; i++) {
        if (bulan[1] - 1 === i) {
            console.log(months[i]);
        }
    }

    bulanBaru = [bulan[2], bulan[0], bulan[1]];
    console.log(bulanBaru);

    bulan2 = bulan.join("-");
    console.log(bulan2);

    nama = input[1].toString();
    namaCase = nama.substring(0, 15);
    console.log(namaCase);

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