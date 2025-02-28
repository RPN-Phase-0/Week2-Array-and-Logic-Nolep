function hitungJumlahKata(kalimat) {
    let arr = kalimat.split(' ');
    return arr.length;
}

    console.log(hitungJumlahKata('I have a dream')); 
    console.log(hitungJumlahKata('Never eat shredded wheat or cake')); 
    console.log(hitungJumlahKata('A song to sing')); 
    console.log(hitungJumlahKata('I')); 
    console.log(hitungJumlahKata('I believe I can code')); 