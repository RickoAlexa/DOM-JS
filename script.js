
// ini merupakan function ubahTeks yang berfungsi untuk mengubah tulisan 

function ubahTeks() {
    // inisialisasi variable paragraf 
    // variable paragraf ini berisi document.getElementById dimana dia mengambil id html yang berasal dari DOM untuk di buatkan fungsi
    var paragraf = document.getElementById("1");


    // ini adalah properti textContent  dimanaa teks akan berubah menjadi teks yang telah diatur 
    // disini terdapat if else sedderhana dimana akan mengubah teks menjadi teks satu atau teks 2
    // mengapa menggunakan ===? bukan ==? : karena === membandingkan type data dan data yang ada sedangkan == hanya membandingkan datanya 
    //merupakan praktik yang baik jika kita menggunakan === untuk mencari persamaan seperti kasus dibawah (kata internet)
    if(paragraf.textContent === "Teks satu") {
        paragraf.textContent = "Teks dua" ;
    } else {
        paragraf.textContent = "Teks satu" ;
    }
}


//  jadi sebenarnya kesimpulannya DOM adalah document objek model 
//  yang dapat kita liat jika kita menginspect suatu website 
//  disini kita mengubah model teks html yang brupa paragrafh 
//  dengan id 1 menjadi teks yang berbeda dari sebelumnya
//  menggunakan fungsi ubahText yang dibuat .
