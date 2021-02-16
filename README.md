# Program Booking Futsal

Selamat datang di github kami, perkenalkan kami dari kelompok 5 yang beranggotakan :
* Fahmi Muhammad Khairy     19104023
* Dito Bakhtiar Rifa’i      19104054
* Rizki Delaga Prasetya     19104074

## PENDAHULUAN

> Futsal adalah sebuah olahraga mirip seperti sepak bola, tetapi ukuran lapangannya lebih kecil dari pada sepak bola. Banyak kalangan yang menyukai olahraga futsal ini mulai dari anak-anak, remaja, sampai orang tua.
> 
> Terkadang ada beberapa pemilik futsal yang masih menggunakan buku sebagai list daftar pembooking untuk usaha futsalnya. Padahal metode pencatatan menggunakan buku bisa mengakibatkan resiko buku seperti hilang, basah, robek, atau data bisa dipalsukan.
> 
> Oleh karena itu, program yang kami buat ini bisa menggantikan model pembookingan yang tadinya manual menggunakan buku menjadi model pembookingan segara digital menggunakan peralatan elektronik.
> 
> Program yang kami desain merupakan program yang bisa digunakan di banyak tempat futsal (tidak terbatas di satu tempat futsal) karena pemilik tempat futsal bisa mengatur konfogurasi aplikasi booking futsal sesuai dengan bisnis atau usaha futsalnya.
> 
> Aplikasi ini hanya cocok ditempatkan di lokasi futsalannya saja. Karena untuk bisa menggunakan menu pembookingan, admin harus terlebih dahulu mengkonfigurasi bookingan futsalnya.


## ISI

### Class Diagram

![Class Diagram](https://github.com/RizkiDelaga/TugasBesarPBO-Kelompok5-SE03A/blob/main/Class%20Diagram%20-%20Program%20Booking%20Futsal/Class%20Diagram.png?raw=true)

Konsep OOP yang digunakan di program kami yaitu :
1. Object (Yang difungsikan sebagai class pada program ini)
2. Object Inheritance menggunakan Object.create()
3. Constructor dalam class
4. Array of Object

Program ini terbagi jadi 2 tipe user, yaitu :

![Menu Pilih Tipe User](https://raw.githubusercontent.com/RizkiDelaga/TugasBesarPBO-Kelompok5-SE03A/main/img/Menu%20Pilih%20Tipe%20User.png)

1. Admin
    * Menu Login admin
        * Login  
          Login untuk masuk ke menu konfigurasi futsal

            ![Login](https://raw.githubusercontent.com/RizkiDelaga/TugasBesarPBO-Kelompok5-SE03A/main/img/Admin/Menu%20Login%20Admin/Login/Login%20Admin.png)
            
        * Lupa Password  
          Lupa password apabila admin lupa passwordnya dengan memasukan tanggal lahir.

            ![Lupa Password](https://raw.githubusercontent.com/RizkiDelaga/TugasBesarPBO-Kelompok5-SE03A/main/img/Admin/Menu%20Login%20Admin/Lupa%20Password/Lupa%20Password.png)

    * Menu Konfigurasi Futsal  

        ![Menu Konfigurasi Futsal](https://github.com/RizkiDelaga/TugasBesarPBO-Kelompok5-SE03A/blob/main/img/Admin/Menu%20Konfigurasi%20Futsal/Menu%20Konfigurasi%20Futsal.png?raw=true)

        * Ubah Profil Futsal  
          Menu untuk mengatur konfigurasi futsal seperti profil futsal dan lapangan futsal yang dimiliki pemilik futsal.

            ![Ubah Profil Futsal](https://github.com/RizkiDelaga/TugasBesarPBO-Kelompok5-SE03A/blob/main/img/Admin/Menu%20Konfigurasi%20Futsal/Ubah%20Profil%20Futsal/Ubah%20Profil%20Futsal.png?raw=true)

        * Ubah Harga  
          Setelah mengatur konfigurasi futsal, admin baru bisa mengisikan harga disetiap lapangan yang dimilikinya.

            ![Ubah Harga](https://github.com/RizkiDelaga/TugasBesarPBO-Kelompok5-SE03A/blob/main/img/Admin/Menu%20Konfigurasi%20Futsal/Ubah%20Harga/Ubah%20Harga.png?raw=true)

        * Lihat Konfigurasi Futsal  
          Menu untuk melihat konfigurasi futsal yang sudah tersimpan.

            ![Lihat Konfigurasi Futsal](https://github.com/RizkiDelaga/TugasBesarPBO-Kelompok5-SE03A/blob/main/img/Admin/Menu%20Konfigurasi%20Futsal/Lihat%20Konfigurasi%20Futsal/Lihat%20Konfigurasi%20Futsal.png?raw=true)

        * Konfigurasi Password Login  
          Menu untuk mengatur konfigurasi password. Seperti udah password dan ubah tanggal lahir sebagai opsi apabila si pengguna lupa password dikemudian hari.
            * Ubah Password

                ![Ubah Password](https://github.com/RizkiDelaga/TugasBesarPBO-Kelompok5-SE03A/blob/main/img/Admin/Menu%20Konfigurasi%20Futsal/Konfigurasi%20Password%20Login/Ubah%20Password/Ubah%20Password.png?raw=true)

            * Ubah Tanggal Lahir

                ![Ubah Tanggal Lahir](https://github.com/RizkiDelaga/TugasBesarPBO-Kelompok5-SE03A/blob/main/img/Admin/Menu%20Konfigurasi%20Futsal/Konfigurasi%20Password%20Login/Ubah%20&%20Lihat%20Tanggal%20Lahir/Ubah%20&%20Lihat%20Tanggal%20Lahir.png?raw=true)

        * Lihat List Booking  
          Menu untuk melihat daftar list pembookingan futsal berdasarkan lapangan dan bulan.

            ![Lihat List Booking 1](https://github.com/RizkiDelaga/TugasBesarPBO-Kelompok5-SE03A/blob/main/img/Admin/Menu%20Konfigurasi%20Futsal/Lihat%20List%20Booking/Lihat%20List%20Booking%20-%20Isi%20Data.png?raw=true)

            ![Lihat List Booking 2](https://github.com/RizkiDelaga/TugasBesarPBO-Kelompok5-SE03A/blob/main/img/Admin/Menu%20Konfigurasi%20Futsal/Lihat%20List%20Booking/Lihat%20List%20Booking%20-%20Tampilkan%20Data%20Pembooking.png?raw=true)

2. Pengguna  
   Untuk bisa menggunakan menu pembookingan, admin terlebih dahulu harus mengkonfigurasi bookingan futsalnya.

    ![Menu Pembookingan Futsal](https://github.com/RizkiDelaga/TugasBesarPBO-Kelompok5-SE03A/blob/main/img/Pengguna/Menu%20Pembookingan%20Futsal.png?raw=true)

    * Booking  
      Menu untuk membooking futsal

        ![Booking - Input Data (1)](https://github.com/RizkiDelaga/TugasBesarPBO-Kelompok5-SE03A/blob/main/img/Pengguna/Booking/Booking%20-%20Input%20Data%20(1).png?raw=true)

        ![Booking - Input Data (2)](https://github.com/RizkiDelaga/TugasBesarPBO-Kelompok5-SE03A/blob/main/img/Pengguna/Booking/Booking%20-%20Input%20Data%20(2).png?raw=true)

        ![Booking - Input Data (3)](https://github.com/RizkiDelaga/TugasBesarPBO-Kelompok5-SE03A/blob/main/img/Pengguna/Booking/Booking%20-%20Input%20Data%20(3).png?raw=true)

    * Cek Jadwal  
      Menu untuk ngecek jadwal Futsal (Kosong/Penuh)

        ![Cek Jadwal - Input Data](https://github.com/RizkiDelaga/TugasBesarPBO-Kelompok5-SE03A/blob/main/img/Pengguna/Cek%20Jadwal/Cek%20Jadwal%20-%20Input%20Data.png?raw=true)

        * Jadwal Kosong

        ![Cek Jadwal - Jadwal Kosong](https://github.com/RizkiDelaga/TugasBesarPBO-Kelompok5-SE03A/blob/main/img/Pengguna/Cek%20Jadwal/Cek%20Jadwal%20-%20Jadwal%20Kosong.png?raw=true)

        * Jadwal Penuh

        ![Cek Jadwal - Jadwal Penuh](https://github.com/RizkiDelaga/TugasBesarPBO-Kelompok5-SE03A/blob/main/img/Pengguna/Cek%20Jadwal/Cek%20Jadwal%20-%20Jadwal%20Penuh.png?raw=true)

## CARA INSTALASI PROGRAM

1.	Masuk ke dalam Website repl.it
2.	Silahkan melakukan sign in terlebih dahulu jika pengguna belum memiliki akun
3.	Kemudian buatlah sebuah project repl baru dengan node.js
4.	Lalu masuk ke repository github milik kami https://github.com/RizkiDelaga/TugasBesarPBO-Kelompok5-SE03A
5.	Berikutnya buka file ProgramBookingFutsal.js dan copy code tersebut pada index.js di repl yang sudah anda buat sebelumnya
6.	Selanjutnya, anda tinggal Run code-nya

## LINK VIDEO YOUTUBE
1. 19104074 [Video Tugas Besar PBO - Program Booking Futsal Menggunakan Bahasa Pemrograman Javascript](https://www.youtube.com/watch?v=Kh5T3aojuPk)
2. 19104054 [Video Tugas Besar PBO - Program Booking Futsal Menggunakan Bahasa Pemrograman Javascript](https://www.youtube.com/watch?v=DWM5U90bF8s)
