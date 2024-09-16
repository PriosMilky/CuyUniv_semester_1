// cara komen adalah ctrl+/

// untuk menampilkan pop up saat open pertama kali
alert("HOK LAH AJG");

// UNTUK DI EXPORT KE HTML
let biodata = document.getElementById("bioData");
console.log(biodata);


//const -> data yang tidak bisa di ubah
// nama var jika selain menggunakan _ akan error (jika ingin lebih dari 1 kata)
const namaSaya = "PriosMilky";
const nama_Saya = "Arlo";

//let -> data yang bisa di ubah
let usia = 22;

//untuk menampilkan di inspect element
console.log(namaSaya);
console.log(nama_Saya);
console.log(usia);

// `${}` untuk memanggil variabel `` tombol itu berada di sebelah kiri angka 1
// cara kedua seperti berikut ini hasil nya akan sama seperti sebelumnya
console.log(`nama saya adalah ${namaSaya} dan usia saya adalah ${usia} tahun`);
console.log(`nama saya adalah` ,nama_Saya, `dan usia saya adalah`, usia, `tahun`);

// console.log jika sudah memakai function maka
// tidak akan tampil karena sudah di bungkus dengan function jadi harus di panggil lagi

let usia_mu = 40;

function generateBio() {
    // statment if else

    if (usia_mu > 10 && usia_mu < 18) {

        console.log("anda sudah remaja");
        
    }else if(usia_mu > 18 && usia_mu < 30){

        console.log("anda sudah dewasa");

    }else if(usia_mu > 2 && usia_mu < 10 && usia_mu < 2){

        console.log("anda masih anak-anak");

    }else if(usia_mu > 30){

        console.log("SEPUH BANGSAT CIEEEE");

    }else{
      
        console.log("anda masih bayi");
        
    }
}

generateBio();


// versi 2

let usia_ku = 30;
let generasi;

function Bio() {
    // statment if else
    let generasi;

    if (usia_ku >= 10 && usia_ku <= 18) {

        generasi = "remaja";
        
    }else if(usia_ku >= 18 && usia_ku <= 30){

        generasi = "dewasa";

    }else if(usia_ku >= 2 && usia_ku <= 10){

        generasi = "anak";

    }else if(usia_ku >= 30){

        generasi = "SEPUH";

    }else{
      
        generasi = "bayi";
        
    }
    return biodata.innerHTML = generasi;
}

Bio();