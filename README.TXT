Proyek UAS Calvin Institute of Technology mata kuliah IBDA2012 - Pemrograman Berbasis Web .

**Sebelumnya, pastikan bahwa user memiliki/menggunakan browser untuk menjalankan program ini.**

Halaman "Imren Grill" merupakan aplikasi berbasiskan web untuk melayani perhitungan total pembelian pelangan dengan cepat. Di saat yang sama setiap pembelian dilakukan,  laporan keuangan akan mencatat setiap penjualan barang dalam 1 hari. Selain itu, akan muncul reminder untuk menyimpan uang ke bank dengan kelipatan 1 juta apabila uang yang dipegang dari hasil penjualan telah menyentuh angka 1 juta atau lebih.

Penjelasan Halaman web "Imren Grill":
1. Bagian sebelah kiri merupakan bagian pemesanan dan perhitungan totalnya.
2. Bagian sebelah kanan merupakan bagian laporan keuangan 1 hari itu.
3. Pada bagian sebelah kiri atas terdapat alamat dari Imren Grill, 
4. Tabel kasir mencatat setiap daftar pesanan dan mentotal semua daftar pesanan tersebut saat tombol enter ditekan.
5. Terdapat kolom input pesanan (nama makanan, harga satuan, jumlah) yang harus diisi untuk melakukan pemesanan jika ada yang tidak terisi maka halaman akan mengembalikan alert agar user mengisi input pesanan yang diminta.
6. Disebelah bagian input pesanan terdapat jam/live clock yang menunjukkan waktu saat ini.
7. Tombol "enter" digunakan untuk memasukkan pesanan dari input pesanan ke dalam tabel kasir.
8. Tombol "check out" berfungsi untuk menyelesaikan suatu pesanan, sehingga data akan terkirim ke bagian laporan keuangan.
9. Pada bagian sebelah kanan atas terdapat judul berupa laporan keuangan beserta tanggal yang menunjukkan hari ini.
10. Tabel dibawahnya berisi Total pemasukan, Transfer bank, dan CASH.
    - Total pemasukan: total keseluruhan uang yang didapatkan dalam hari tersebut.
    - Transfer bank: total keseluruhan uang yang ditransfer dalam hari tersebut(kelipatan 1 juta).
    - CASH: uang penjualan yang dipegang/ belum ditransfer ke bank karena masih lebih kecil dari 1 juta,
            setiap kali lebih besar dari 1 juta maka akan muncul alert untuk transfer.
11. Tabel daftar pembelian harian merupakan tabel yang menampilkan/mencatat aktivitas uang harian(waktu pembelian, daftar pesanan, total), yang berarti tabel ini berisi semua total pesanan hari itu, serta menampilkan alert untuk transfer uang kelipatan 1 juta ke bank jika alert sudah ditekan maka uang kelipatan 1 juta akan ditransfer ke bank dan alert akan menjadi catatan bahwa kita mentransfer uang.

Alur menjalankan:
1. Isi kolom input dengan makanan, harga satuannya, dan jumlah yang dipesan.
2. Tekan "enter" untuk memasukkannya ke tabel kasir.
3. lakukan terus langkah 1 & 2 sampai semua pesanan tercatat.
4. Jika pesanan sudah selesai, tekan "check out" untuk menyelesaikan pesanan, sehingga data akan dikirim ke laporan keuangan.
5. laporan keuangan akan terupdate berupa uang pada bagian cash akan masuk dan tabel daftar pembelian harian akan terisi pesanan yang baru saja dipesan (waktu dipesan, daftar pesanannya, dan totalnya)
6. Jika uang pada bagian cash lebih kecil dari 1 juta, maka bagian total pemasukan akan ditambah dengan total pembelian yang baru dilakukan dan aktivitas pembelian bisa dilanjutkan kembali seperti dari langkah 1-5.
7. Jika uang pada bagian cash lebih besar dari 1 juta, maka pada tabel daftar pembelian harian akan muncul alert berwarna merah kedap-kedip yang menginstruksikan kita untuk setor uang dengan kelipatan 1 juta ke bank dengan menekan alertnya, selama alert kedap-kedip maka input untuk pemesanan, tombol "enter, dan tombol "check out" akan menjadi disabled, sehingga proses pemesanan berikutnya tidak bisa dilakukan sebelum alert ditekan.
8. Ketika alert ditekan, maka alert akan berubah menjadi label bahwa kita sudah setor uang ke bank kelipatan 1 juta, bagian total Pemasukan akan terupdate menjadi jumlah total semua pesanan terbaru, bagian transfer akan terupdate menjadi ditambah dengan jumlah uang yang baru saja ditransfer ke bank, bagian cash akan terupdate menjadi dikurangi uang dengan kelipatan 1 juta tadi sampai bernilai kurang dari 1 juta. Selain itu pada bagian kolom input pesanan, tombol "enter", dan tombol "check out" akan menyala kembali dan pesanan berikutnya bisa dilakukan kembali seperti langkah 1-5.