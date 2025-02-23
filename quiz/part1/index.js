// Soal 1
function dataHandling(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log("Nomor ID: ", arr[i][0]);
        console.log("Nama Lengkap: ", arr[i][1]);
        console.log("TTL: ", arr[i][2], arr[i][3]);
        console.log("Hobi: ", arr[i][4]);
        console.log("");
    }
}

let input1 = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];

dataHandling(input1);

// Soal 2
function dataHandling2(input) {
    // 1. Menggunakan splice untuk mengubah elemen array
    input.splice(1, 1, "Roman Alamsyah Elsharawy");
    input.splice(2, 1, "Provinsi Bandar Lampung");
    input.splice(4, 1, "Pria", "SMA Internasional Metro");

    console.log(input);

    // 2. Mengambil bulan dari tanggal lahir
    let tanggal = input[3].split("/");
    let bulan;
    switch (tanggal[1]) {
        case "01": bulan = "Januari"; break;
        case "02": bulan = "Februari"; break;
        case "03": bulan = "Maret"; break;
        case "04": bulan = "April"; break;
        case "05": bulan = "Mei"; break;
        case "06": bulan = "Juni"; break;
        case "07": bulan = "Juli"; break;
        case "08": bulan = "Agustus"; break;
        case "09": bulan = "September"; break;
        case "10": bulan = "Oktober"; break;
        case "11": bulan = "November"; break;
        case "12": bulan = "Desember"; break;
    }
    console.log(bulan);

    // 3. Menampilkan tanggal dalam format array terpisah
    console.log([tanggal[2], tanggal[0], tanggal[1]]);

    // 4. Menampilkan tanggal dalam format "DD-MM-YYYY"
    console.log(tanggal.join("-"));

    // 5. Menampilkan nama hanya 15 karakter pertama
    console.log(input[1].slice(0, 15));
}

let input2 = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input2);
