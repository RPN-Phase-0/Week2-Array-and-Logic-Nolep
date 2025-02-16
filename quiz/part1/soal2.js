let input = [
  "0001",
  "Roman Alamsyah ",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca",
];

function dataHandling(input) {
  input.splice(1, 1, "Roman Alamsyah Elsharawy");
  input.splice(2, 1, "Provinsi Bandar Lampung");

  let tanggalLahir = input[3].split("/");
  let bulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  let namaBulan = bulan[parseInt(tanggalLahir[1]) - 1];

  // 3. Membuat format tanggal lahir
  let tanggalLahirFormat = tanggalLahir.join("-");

  // 4. Memotong nama
  let namaPotong = input[1].slice(0, 15);

  console.log(input);
  console.log(namaBulan);
  console.log(tanggalLahir);
  console.log(tanggalLahirFormat);
  console.log(namaPotong);
}

dataHandling(input);
