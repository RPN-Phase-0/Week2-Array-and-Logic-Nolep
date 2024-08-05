let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
/*1*/   input[1] = "Roman Alamsyah Elsharawy"
        input[2] = "Provinsi Bandar Lampung"
        input[4] = "Pria"
        input.push("SMA Internasional Metro")
        console.log(input);
  
/*2*/ let tanggal = input[3].split("/");
let bulan = new Date (tanggal[2], tanggal[1]-1, tanggal[0])
let namaBulan = bulan.toLocaleString('id-ID', { month: 'long' });
console.log(namaBulan)

/*3*/   let tanggal2 = input[3].split("/");
        tanggal2.reverse();
        let bulanHari = tanggal2.slice(1,3);
        let gabung = [tanggal2[0],...bulanHari]
        console.log(gabung);

/*4*/ let tanggal3 = tanggal.join("-");
console.log(tanggal3)

/*5*/ let nama = input[1].slice(0,15);
console.log(nama);
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
 * 
 */