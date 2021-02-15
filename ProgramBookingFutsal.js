const prompt = require("prompt-sync")()

// Object Admin
var Admin = {
    // Inisialisasi Property Array Sbg Tempat Menampung Data-Data
    arr_DaftarKodeBooking: ['L0000000'],
    arr_DaftarPembooking: [],
    arr_TipeLapangan: [],
    arr_HargaLapangan: [],

    // Inisialisasi Property Variabel Yang Akan Digunakan Untuk Login Sbg Admin Futsal
    // Password Default Bagi Pengguna Baru Yaitu = '12345'
    // Tanggal Lahir Digunakan Untuk Apabila Si Admin Lupa Password. Dengan Memasukan Tgl Lahir Admin Dapat Mengetahui Password Yang Lupa.
    passwordAdmin: '12345',
    tglLahirAdmin: 'Belum DI Inputkan',

    // Function Constructor
    constructor: function (namaFutsal, alamatFutsal, telpFutsal, emailFutsal) {
        this.namaFutsal = namaFutsal
        this.alamatFutsal = alamatFutsal
        this.telpFutsal = telpFutsal
        this.emailFutsal = emailFutsal
    },

    // Function menuLoginAdmin
    menuLoginAdmin: function () {
        while (true) {
            console.log('\n\n1. Login')
            console.log('2. Lupa Password')
            console.log('0. Kembali')
            var menuLogin = prompt('Pilih Inputan\t\t: ')

            if (menuLogin == '1') {
                console.log('\n\t----------------------------------------------')
                console.log('\t\t\t\t   !!PENGGUNA BARU!!')
                console.log('\t\tPassword Default Pengguna Baru = 12345')
                console.log('\t----------------------------------------------\n')
                var passwordLogin = prompt('Masukan Password Admin\t\t: ')

                if (passwordLogin == this.passwordAdmin) {
                    this.menuAdmin()
                } else {
                    console.log('\n\t--------------------------')
                    console.log('\t\t!!PASSWORD SALAH!!')
                    console.log('\t--------------------------')
                    break
                }
            } else if (menuLogin == '2') {
                if (this.tglLahirAdmin == 'Belum DI Inputkan') {
                    console.log('\n\t-----------------------------------------')
                    console.log('\t\tAnda Belum Mengatur Tanggal Lahir')
                    console.log('\t-----------------------------------------')
                    break
                }

                console.log()
                var tglLahir = prompt('Masukan Tanggal Lahir Admin\t\t: ')
                if (tglLahir == this.tglLahirAdmin) {
                    this.passwordAdmin = prompt('Masukan Password Terbaru\t\t: ')
                } else {
                    console.log('\n\t--------------------------------')
                    console.log('\t\t!!Password Admin Salah!!')
                    console.log('\t--------------------------------')
                }
            } else if (menuLogin == '0') {
                break
            } else {
                console.log('\n\t-------------------------------------------')
                console.log("\t\tKesalahan Input!! Masukan angka 0-2")
                console.log('\t-------------------------------------------')
            }
        }
    },

    // Function printKonfigurasiFutsal
    printKonfigurasiFutsal: function () {
        //Print data profil futsal
        console.log('\n---------------------------------------------------------------------------------------')
        console.log('\n\t\t\t\t\t\tKonfigurasi Futsal Anda Saat Ini')
        console.log('\n---------------------------------------------------------------------------------------')
        console.log('\nNama Futsal\t\t: ', this.namaFutsal || 'Belum ada Nama')
        console.log('Alamat Futsal\t: ', this.alamatFutsal || 'Belum ada Alamat')
        console.log('No.Telp Futsal\t: ', this.telpFutsal || 'Belum ada Nomor Telephone')
        console.log('E-mail Futsal\t: ', this.emailFutsal || 'Belum ada E-Mail')
        console.log('\n---------------------------------------------------------------------------------------')
        console.log('|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||')
        console.log('---------------------------------------------------------------------------------------')

        // Print data lapangan futsal yang dimiliki
        if (!this.arr_TipeLapangan.length) {
            console.log('\nBelum Ada Lapangan!!')
            console.log('\n---------------------------------------------------------------------------------------\n')
        } else {
            console.log('\nTotal Lapangan Futsal Yang Dimiliki\t: ', this.arr_TipeLapangan.length - 1, ' Lapangan')
            let index = 1
            for (let x in this.arr_TipeLapangan) {
                console.log(`Lapangan Ke-${ index }`)
                index++
                console.log(`Tipe Lapangan\t: ${this.arr_TipeLapangan[x]}`)
                console.log(`Harga Per-Jam\t: ${this.arr_HargaLapangan[x] || 'Belum Ada Harga' }\n`)
            }
            console.log('---------------------------------------------------------------------------------------\n')
        }
    },

    // Function printDataPembooking Untuk Menampilkan Data Pesanan Pembooking
    printDataPembooking : function (indexArrayBooking) {
        console.log(`-----------------------------------------------------------------------------`)
        console.log('|\t\t\t\t\t\t\t\tDetail Booking \t\t\t\t\t\t\t\t|')
        console.log(`-----------------------------------------------------------------------------`)
        console.log(' Nama Pembooking\t\t\t\t||\t ' + this.arr_DaftarPembooking[indexArrayBooking].namaPembooking)
        console.log(`-----------------------------------------------------------------------------`)
        console.log(' Club Yang Akan Bermain\t\t\t||\t ' + this.arr_DaftarPembooking[indexArrayBooking].club)
        console.log(`-----------------------------------------------------------------------------`)
        console.log(' Nomor Telephone Pembooking\t\t||\t ' + this.arr_DaftarPembooking[indexArrayBooking].noTelp)
        console.log(`-----------------------------------------------------------------------------`)
        console.log(' Lama Bermain\t\t\t\t\t||\t ' + this.arr_DaftarPembooking[indexArrayBooking].lamaBermain)
        console.log(`-----------------------------------------------------------------------------`)
        console.log(' Tanggal Bermain\t\t\t\t||\t ' + this.arr_DaftarPembooking[indexArrayBooking].tanggalBermain)
        console.log(`-----------------------------------------------------------------------------`)
        console.log(' Tipe lapangan\t\t\t\t\t||\t ' + this.arr_DaftarPembooking[indexArrayBooking].tipeLapangan)
        console.log(`-----------------------------------------------------------------------------`)
        console.log(' Total Harga\t\t\t\t\t||\t ' + this.arr_DaftarPembooking[indexArrayBooking].hitungHargaBooking)
        console.log(`-----------------------------------------------------------------------------`)
    },

    // Function menuAdmin
    menuAdmin: function () {
        var kondisiMenuAdmin
        do {
            console.log('\n----- KONFIGURASI BOOKING FUTSAL -----')
            console.log('1. Ubah Profil Futsal')
            console.log('2. Ubah Harga')
            console.log('3. Lihat Konfigurasi Futsal')
            console.log('4. Konfigurasi Password Login')
            console.log('5. Lihat List Booking')
            console.log('0. Logout')
            let inputMenuKonfigurasi = prompt('Masukan Pilihan Konfigurasi\t: ')

            // Menu Untuk Mengubah Konfigurasi Futsal
            if (inputMenuKonfigurasi == 1) {
                this.printKonfigurasiFutsal() // Menampilkan Konfigurasi Futsal Sekarang

                var editProfil
                console.log()
                editProfil = prompt('Ingin Merubah Konfigurasi Profil Futsal? [IYA/TIDAK]\t\t\t: ')
                console.log()

                var editKonfigurasi = editProfil.toUpperCase()
                if (editKonfigurasi == 'IYA') {
                    editProfil = prompt('Merubah Profil Akan Menset Ulang Semua Konfigurasi Yang Ada!! [IYA/TIDAK]\t:')
                    editKonfigurasi = editProfil.toUpperCase()

                    if (editKonfigurasi == 'IYA') {
                        console.log('\n---- Isi Profil ----')
                        var namaFutsal = prompt('Nama Futsal\t\t: ')
                        var alamatFutsal = prompt('Alamat Futsal\t: ')
                        var telpFutsal = prompt('No.Telp Futsal\t: ')
                        var emailFutsal = prompt('E-mail Futsal\t: ')

                        Admin.constructor(namaFutsal, alamatFutsal, telpFutsal, emailFutsal)

                        console.log()
                        let totalLapangan = prompt('Total Lapangan Futsal Yang Dimiliki\t: ')
                        for (let i = 1; i <= totalLapangan; i++) {
                            console.log('Lapangan Ke-' + i)
                            var tipeLapangan = prompt('Tipe Lapangan\t: ')
                            console.log()
                            this.arr_TipeLapangan[i] = tipeLapangan
                        }
                    } else if (editKonfigurasi == 'TIDAK') {

                    } else {
                        console.log('\n\t---------------------------------------------------------------------')
                        console.log('\t\tKesalahan Input Data. Masukan Huruf Yang Sesuai!! [IYA/TIDAK]')
                        console.log('\t---------------------------------------------------------------------')
                    }

                } else if (editKonfigurasi == 'TIDAK') {

                } else {
                    console.log('\t---------------------------------------------------------------------')
                    console.log('\t\tKesalahan Input Data. Masukan Huruf Yang Sesuai!! [IYA/TIDAK]')
                    console.log('\t---------------------------------------------------------------------')
                }
                kondisiMenuAdmin = true

                // Menu Untuk Mengubah Harga Dari Lapangan-Lapangan Futsal
            } else if (inputMenuKonfigurasi == 2) {
                if (!this.arr_TipeLapangan.length) {
                    console.log('\n\t-------------------------------------------------------')
                    console.log('\t\tAnda Belum Mengatur Konfigurasi Profil Futsal!!')
                    console.log('\t-------------------------------------------------------')
                } else if (this.arr_TipeLapangan.length != 0) {
                    var kondisiMenuEditHarga
                    do {
                        console.log('\nTotal Lapangan Futsal Yang Dimiliki\t: ', this.arr_TipeLapangan.length - 1, ' Lapangan')
                        console.log('\nEdit Harga!!')

                        let y = 1
                        for (y; y <= this.arr_TipeLapangan.length - 1; y++) {
                            console.log(y + '. Lapangan Ke-' + y + ' dengan Tipe Lapangan ' + this.arr_TipeLapangan[y])
                        }
                        console.log('0. Exit')
                        var pilihanEditHarga = prompt('Masukan Lapangan Yang Ingin DI Ubah Harganya\t: ')

                        if (pilihanEditHarga == 0) {
                            break
                        } else if (pilihanEditHarga > this.arr_TipeLapangan.length - 1) {
                            console.log('\n\t-----------------------------------------')
                            console.log('\t\tMasukan Salah!! Masukan Angka 0-' + (this.arr_TipeLapangan.length - 1))
                            console.log('\t-----------------------------------------')
                            kondisiMenuEditHarga = 'true'
                        } else if (pilihanEditHarga < 0) {
                            console.log('\n\t-----------------------------------------')
                            console.log('\t\tMasukan Salah!! Masukan Angka 0-' + (this.arr_TipeLapangan.length - 1))
                            console.log('\t-----------------------------------------')
                            kondisiMenuEditHarga = 'true'
                        } else if (parseInt(pilihanEditHarga) % 1 == 0) {
                            console.log()
                            var updateHarga = prompt('Masukan Harga Lapangan Ke-' + pilihanEditHarga + '\t: ')

                            if (updateHarga <= 0) {
                                console.log('\n\t---------------------------------------------------------------')
                                console.log('\t\tMasukan Salah!! Masukan Harga Diatas 0. Contoh = 100000')
                                console.log('\t---------------------------------------------------------------')
                                kondisiMenuEditHarga = 'true'
                            } else if (parseInt(updateHarga) % 1 == 0) {
                                this.arr_HargaLapangan[pilihanEditHarga] = updateHarga
                                console.log('\n\t------------------------------------------')
                                console.log('\t\tSelamat Data Berhasil Diperbaharui!!')
                                console.log('\t------------------------------------------')
                                kondisiMenuEditHarga = 'true'
                            } else {
                                console.log('\n\t---------------------------------------------------------------')
                                console.log('\t\tMasukan Salah!! Masukan Harga Diatas 0. Contoh = 100000')
                                console.log('\t---------------------------------------------------------------')
                                kondisiMenuEditHarga = 'true'
                            }
                        } else {
                            console.log('\n\t-----------------------------------------')
                            console.log('\t\tMasukan Salah!! Masukan Angka 0-' + (this.arr_TipeLapangan.length - 1))
                            console.log('\t-----------------------------------------')
                            kondisiMenuEditHarga = 'true'
                        }
                    } while (kondisiMenuEditHarga == 'true')
                }
                kondisiMenuAdmin = true
            } else if (inputMenuKonfigurasi == 3) { // Menu Untuk Melihat Konfigurasi Futsal
                this.printKonfigurasiFutsal()

                kondisiMenuAdmin = true
            } else if (inputMenuKonfigurasi == 4) { // Menu Untuk Mengubah Konfigurasi Password Login Admin
                while (true) {
                    console.log('\n\n1. Ubah Password')
                    console.log('2. Ubah Tanggal Lahir')
                    console.log('3. Lihat Tanggal Lahir')
                    console.log('0. Kembali')
                    var menuKonfigurasiPassword = prompt('Masukan Pilihan\t: ')

                    if (menuKonfigurasiPassword == 1) {
                        this.passwordAdmin = prompt('Masukan Password Baru\t: ')

                        console.log('\n\t-----------------------------------------------')
                        console.log('\t\tSelamat Password Admin Berhasil Di Ubah')
                        console.log('\t-----------------------------------------------\n')
                    } else if (menuKonfigurasiPassword == 2) {
                        console.log('\n"Tanggal Lahir Digunakan Untuk Mengetahui Password Admin Apabila Suatu Saat Lupa"')
                        console.log('"Masukan Sesuai Format. Jika Tidak, Anda Tidak Bisa Mendapatkan Pemberitahuan Password Anda Dari Kami"')
                        console.log('\nFormat\t: (Tanggal-Bulan-Tahun). Bisa Tanggal Lahir Ayah, Ibu DLL Yang Tidak Diketahui Orang Banyak')
                        console.log('Example\t: 06-09-2001')

                        this.tglLahirAdmin = prompt('Masukan Tanggal Lahir\t: ')
                    } else if (menuKonfigurasiPassword == 3) {
                        console.log('\nTanggal Lahir\t: ' + this.tglLahirAdmin)
                    } else if (menuKonfigurasiPassword == 0) {
                        break
                    } else {
                        console.log('\n\t-----------------------------------------')
                        console.log('\t\tMasukan Salah!! Masukan Angka 0-2')
                        console.log('\t-----------------------------------------')
                    }
                }
                kondisiMenuAdmin = true
            } else if (inputMenuKonfigurasi == 5) { // Menu Untuk Melihat Daftar-Daftar Pembooking Pada Bulan Tertentu
                if (this.arr_TipeLapangan.length == 0) {
                    console.log('\n\t--------------------------------------------------------------------------')
                    console.log('\t\tKonfigurasi Futsal Belum Diatur! Admin Harus Mengatur Konfigurasi.')
                    console.log('\t--------------------------------------------------------------------------')
                } else {

                    // Memilih Lapangan
                    var kondisiMenuLapangan
                    var pilihanLapangan
                    do {
                        console.log()
                        for (let z = 1; z < this.arr_TipeLapangan.length; z++) {
                            console.log(z + '. Lapangan ' + z + ' : Tipe Lapangan ' + this.arr_TipeLapangan[z])
                        }
                        console.log('0. Kembali')
                        pilihanLapangan = prompt('Masukan tipe lapangan\t: ')

                        if (pilihanLapangan <= 0) {
                            console.log('\n\t-----------------------------------------------------------------')
                            console.log('\t\tKesalahan Input!! Masukan Angka Sesuai Yang Ada Di Atas!!')
                            console.log('\t-----------------------------------------------------------------')
                            kondisiMenuLapangan = 'true'
                        } else if (pilihanLapangan > this.arr_TipeLapangan.length - 1) {
                            console.log('\n\t-----------------------------------------------------------------')
                            console.log('\t\tKesalahan Input!! Masukan Angka Sesuai Yang Ada Di Atas!!')
                            console.log('\t-----------------------------------------------------------------')
                            kondisiMenuLapangan = 'true'
                        } else if (parseInt(pilihanLapangan) % 1 == 0) {
                            break
                        } else {
                            console.log('\n\t-----------------------------------------------------------------')
                            console.log('\t\tKesalahan Input!! Masukan Angka Sesuai Yang Ada Di Atas!!')
                            console.log('\t-----------------------------------------------------------------')
                            kondisiMenuLapangan = 'true'
                        }
                    } while (kondisiMenuLapangan == 'true')

                    // Memilih Bulan
                    let pilihanBulan
                    while (true) {
                        console.log('\n+=======================================+')
                        console.log('|\t\t\t   DAFTAR BULAN\t\t\t\t|')
                        console.log('+=======================================+')
                        console.log('|\t1. Januari\t\t|\t7. Juli\t\t\t|')
                        console.log('|\t2. Februari\t\t|\t8. Agustus\t\t|')
                        console.log('|\t3. Maret\t\t|\t9. September\t|')
                        console.log('|\t4. April\t\t|\t10. Oktober\t\t|')
                        console.log('|\t5. Mei\t\t\t|\t11. November\t|')
                        console.log('|\t6. Juni\t\t\t|\t12. Desember\t|')
                        console.log('+=======================================+')
                        pilihanBulan = prompt('Masukan Pilihan Bulan\t: ')

                        if (pilihanBulan < 1 || pilihanBulan > 12) {
                            console.log('\n\t--------------------------------------------------')
                            console.log('\t\tKesalahan Input!! Masukan ANGKA Range(1-12)')
                            console.log('\t--------------------------------------------------')
                        } else if (pilihanBulan % 1 == 0) {
                            break
                        } else {
                            console.log('\n\t--------------------------------------------------')
                            console.log('\t\tKesalahan Input!! Masukan ANGKA Range(1-12)')
                            console.log('\t--------------------------------------------------')
                        }
                    }

                    // Mengecek & Menampilkan Daftar Detail Pemesanan Pada Lapangan dan Bulan Yang Di Pilih
                    var arr_Bulan = ['Null', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']

                    // var tambah_L = 'L'
                    pilihanLapangan = 'L' + pilihanLapangan // Menambahkan Huruf 'L' Agar Menjadi Sebuah Code Unik

                    var daftarJadwal = 'Tidak Ada Jadwal'
                    for (let d = 0; d < this.arr_DaftarKodeBooking.length; d++) {
                        var kdLapangan = this.arr_DaftarKodeBooking[d].slice(0, 2)
                        var kdBulan = this.arr_DaftarKodeBooking[d].slice(4, 6)

                        if (pilihanLapangan == kdLapangan) {
                            // console.log('Salah a' + kdLapangan)
                            if (arr_Bulan[pilihanBulan] == kdBulan) {
                                console.log('\n\n=============================================================================')
                                console.log('|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||')
                                this.printDataPembooking(d - 1)
                                console.log('|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||')
                                console.log('=============================================================================')
                                daftarJadwal = 'Ada Jadwal'
                            }
                            // console.log('Salah b' + kdBulan)
                        }
                        // console.log('Salah a' + kdLapangan)
                    }

                    if (daftarJadwal == 'Tidak Ada Jadwal') { // Jika Tidak Ada Jadwal
                        console.log('\n\n\t-------------------------------------------')
                        console.log('\t\t!!Tidak Ada Jadwal Pada Bulan Ini!!')
                        console.log('\t-------------------------------------------\n')
                    }
                }
                kondisiMenuAdmin = true
            } else if (inputMenuKonfigurasi == '0') {
                break
            } else {
                kondisiMenuAdmin = true
            }
        } while (kondisiMenuAdmin == true)
    }
}

// Object Inheritance With Obeject.create()
// Membuat Object Baru Yang Diwarisi Dari Object Admin
var Pengguna = Object.create(Admin)

// Inisialisasi Property Variabel Yang Akan Diguakan Untuk Mencari Jadwal Futsal
Pengguna.statusJadwal
Pengguna.kodeBooking

// Function jadwal Untuk Mencari Jadwal Futsal (Kosong/Penuh) & Membentuk Sebuah Kode Booking
Pengguna.jadwal = function (noLapangan, lamaBermain) {
    // Inisialisasi Variabel Yang akan Digunakan Untuk Menyusun Kode Booking
    var lamaMain = lamaBermain
    var lapangan = noLapangan
    var kodeLapangan = 'L' + lapangan

    // Inisialisasi Variabel Yang Digunakan Untuk Menambah Angka '0' Pada Jam Yang Apabila Length Dari Jam == 1, Maka Ditambahkan '0' Didepannya.
    // Jadi Misal Jam '3' Menjadi Jam '03'
    var tambahNol = '0'

    // Inisialisasi Array Untuk Menentukan Jumlah Tanggal-Tanggal Disetiap Bulan Yang Ada.
    var arr_Bulan = ['Null', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
    var arr_TotalTanggal_DariBulan = ['Null', '31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31']

    // Mencari Bulan
    var kondisiCariBulan
    let pilihBulan
    do {
        console.log('\n+=======================================+')
        console.log('|\t\t\t   DAFTAR BULAN\t\t\t\t|')
        console.log('+=======================================+')
        console.log('|\t1. Januari\t\t|\t7. Juli\t\t\t|')
        console.log('|\t2. Februari\t\t|\t8. Agustus\t\t|')
        console.log('|\t3. Maret\t\t|\t9. September\t|')
        console.log('|\t4. April\t\t|\t10. Oktober\t\t|')
        console.log('|\t5. Mei\t\t\t|\t11. November\t|')
        console.log('|\t6. Juni\t\t\t|\t12. Desember\t|')
        console.log('+=======================================+')
        pilihBulan = prompt('Masukan Pilihan Bulan\t: ')

        if (pilihBulan < 1 || pilihBulan > 12) {
            console.log('\n\t--------------------------------------------------')
            console.log('\t\tKesalahan Input!! Masukan ANGKA Range(1-12)')
            console.log('\t--------------------------------------------------')
            kondisiCariBulan = true
        } else if (pilihBulan % 1 == 0) {
            break
        } else {
            console.log('\n\t--------------------------------------------------')
            console.log('\t\tKesalahan Input!! Masukan ANGKA Range(1-12)')
            console.log('\t--------------------------------------------------')
            kondisiCariBulan = true
        }
    } while (kondisiCariBulan == true)


    // Mencari Tanggal
    var kondisiCariTanggal
    let pilihTanggal
    do {
        console.log('\n+=======================================+')
        console.log('|\t\t\t  DAFTAR TANGGAL\t\t\t|')
        console.log('+=======================================+')

        for (let c = 1; c <= arr_TotalTanggal_DariBulan[pilihBulan]; c++) {
            var d
            d = c + 1
            if (c >= arr_TotalTanggal_DariBulan[pilihBulan]) {
                if (arr_TotalTanggal_DariBulan[pilihBulan] % 2 == 1) {
                    console.log('|\t\t\t' + c + '\t    ||\t    ' + '\t\t\t|\t')
                    console.log('+---------------------------------------+')
                }
                break
            }
            console.log('|\t\t\t' + c + '\t    ||\t    ' + d + '\t\t\t|\t')
            c++
            console.log('+---------------------------------------+')

            if (d >= arr_TotalTanggal_DariBulan[pilihBulan]) {
                break
            }
        }
        pilihTanggal = prompt('Masukan Pilihan Tanggal\t: ')
        if (pilihTanggal.length == 1) {
            pilihTanggal = tambahNol + pilihTanggal
        }

        if (pilihTanggal > parseInt(arr_TotalTanggal_DariBulan[pilihBulan]) || pilihTanggal < 1) {
            console.log('\n\t-------------------------------------------------------------')
            console.log('\t\tKesalahan Input!! Masukan ANGKA Sesuai Range Yang Ada')
            console.log('\t-------------------------------------------------------------')
            kondisiCariTanggal = true
        } else if (parseInt(pilihTanggal) % 1 == 0) {
            break
        } else {
            console.log('\n\t-------------------------------------------------------------')
            console.log('\t\tKesalahan Input!! Masukan ANGKA Sesuai Range Yang Ada')
            console.log('\t-------------------------------------------------------------')
            kondisiCariTanggal = true
        }
    } while (kondisiCariTanggal == true)

    // Mencari Jam Bermain
    var kondisiCariJam
    let pilihJamBermain
    do {
        console.log('\n+=======================================+')
        console.log('|\t\t\t   JAM BERMAIN\t\t\t\t|')
        console.log('+=======================================+')
        console.log('|\t' + 0 + '\t||\t' + 1 + '\t||\t' + 2 + '\t||\t' + 3 + '\t||\t' + 4 + '\t|')
        console.log('|\t' + 5 + '\t||\t' + 6 + '\t||\t' + 7 + '\t||\t' + 8 + '\t||\t' + 9 + '\t|')
        console.log('|\t' + 10 + '\t||\t' + 11 + '\t||\t' + 12 + '\t||\t' + 13 + '\t||\t' + 14 + '\t|')
        console.log('|\t' + 15 + '\t||\t' + 16 + '\t||\t' + 17 + '\t||\t' + 18 + '\t||\t' + 19 + '\t|')
        console.log('|\t' + 20 + '\t||\t' + 21 + '\t||\t' + 22 + '\t||\t' + 23 + '\t||\t' + '\t|')
        console.log('+---------------------------------------+')
        pilihJamBermain = prompt('Masukan Pilihan Jam Bermain\t: ')

        if (pilihJamBermain > 23 || pilihJamBermain < 0) {
            console.log('\n\t--------------------------------------------------')
            console.log('\t\tKesalahan Input!! Masukan ANGKA Range(0-23)')
            console.log('\t--------------------------------------------------')
            kondisiCariJam = true
        } else if (parseInt(pilihJamBermain) % 1 == 0) {
            break
        } else {
            console.log('\n\t--------------------------------------------------')
            console.log('\t\tKesalahan Input!! Masukan ANGKA Range(0-23)')
            console.log('\t--------------------------------------------------')
            kondisiCariJam = true
        }
    } while (kondisiCariJam == true)

    // Menambahkan Jam Bermain apabila jam bermain lebih dari (1 jam). Yang Akan Dimasukan Kedalam Array Sementara (Buat Nampung Jam Yang Dicari)
    var arr_TambahanJamBermain = []

    // Menambahkan Jam Bermain Sesuai Dengan Lama Bermain
    for (let j = 0; j < lamaMain; j++) {
        let jumlahJamBermain = parseInt(pilihJamBermain) + parseInt(j)
        if (jumlahJamBermain >= 24) {
            jumlahJamBermain = jumlahJamBermain - 24
            arr_TambahanJamBermain[j] = jumlahJamBermain
        } else if (jumlahJamBermain <= 23) {
            arr_TambahanJamBermain[j] = jumlahJamBermain
        }
    }

    // Menambahkan Angka '0' Pada Array arr_TambahanJamBermain Yang Indexnya Memiliki Jam Bermain Dibawah Jam 9 (Termasuk 9)
    for (let p = 0; p < arr_TambahanJamBermain.length; p++) {
        if (arr_TambahanJamBermain[p] <= 9) {
            var temp = tambahNol + arr_TambahanJamBermain[p]
            arr_TambahanJamBermain[p] = temp
        }
    }

    // Menggabungkan Seluruh Tambahan Jam Bermain Menjadi Satu (Kode Jam)
    var kodeJam = ''
    for (let q = 0; q < arr_TambahanJamBermain.length;) {
        kodeJam = '' + kodeJam + arr_TambahanJamBermain[q++]
    }

    // Menggabungkan Kode Lapangan, Tanggal, Bulan Dan Kode Jam Menjadi Sebuah Kode Booking
    this.kodeBooking = kodeLapangan + pilihTanggal + arr_Bulan[pilihBulan] + kodeJam


    // Inisialisasi Array Sementara (Buat Nampung Data)
    var arr_TampungJam_Dari_arr_DaftarKodeBooking = []
    var arr_TampungJam_Dari_kodeBooking = []

    for (let n = 0; n < this.arr_DaftarKodeBooking.length; n++) {
        var tambah_2 = 2
        var indexMinSlice = 0
        var indexMaxSlice = 2

        // Menyalin Kode Jam Yang Ada Di this.arr_DaftarKodeBooking dan Dimasukan Kedalam arr_TampungJam_Dari_arr_DaftarKodeBooking
        let jam_Dari_arr_DaftarKodeBooking = this.arr_DaftarKodeBooking[n].slice(6, this.arr_DaftarKodeBooking[n].length)
        if (jam_Dari_arr_DaftarKodeBooking.length > 2) {
            for (let e = 0; e < jam_Dari_arr_DaftarKodeBooking.length / 2; e++) {
                let jam = jam_Dari_arr_DaftarKodeBooking.slice(indexMinSlice, indexMaxSlice)
                arr_TampungJam_Dari_arr_DaftarKodeBooking[arr_TampungJam_Dari_arr_DaftarKodeBooking.length] = jam
                indexMinSlice = indexMinSlice + tambah_2
                indexMaxSlice = indexMaxSlice + tambah_2
            }
        } else {
            arr_TampungJam_Dari_arr_DaftarKodeBooking[arr_TampungJam_Dari_arr_DaftarKodeBooking.length] = jam_Dari_arr_DaftarKodeBooking
        }
        indexMinSlice = 0
        indexMaxSlice = 2

        // Menyalin Kode Lapangan dari this.arr_DaftarKodeBooking
        let kodeLapangan_Dari_arr_DaftarKodeBooking = this.arr_DaftarKodeBooking[n].slice(0, 2)

        // Menyalin Tanggal dan bulan Dari this.kodeBooking
        let tanggalDanBulan_Dari_kodeBooking = this.kodeBooking.slice(2, 6)

        // Menyalin Tanggal Dan Bulan Dari this.arr_DaftarKodeBooking
        var tanggalDanBulan_Dari_arr_DaftarKodeBooking = this.arr_DaftarKodeBooking[n].slice(2, 6)

        // Menyalin Kode Jam Yang Ada Di this.kodeBooking dan Dimasukan Kedalam arr_TampungJam_Dari_kodeBooking
        let jam_Dari_kodeBooking = this.kodeBooking.slice(6, this.kodeBooking.length)
        if (jam_Dari_kodeBooking.length > 2) {
            for (let m = 0; m < jam_Dari_kodeBooking.length / 2; m++) {
                let jam2 = jam_Dari_kodeBooking.slice(indexMinSlice, indexMaxSlice)
                arr_TampungJam_Dari_kodeBooking[arr_TampungJam_Dari_kodeBooking.length] = jam2
                indexMinSlice = indexMinSlice + tambah_2
                indexMaxSlice = indexMaxSlice + tambah_2
            }
        } else {
            arr_TampungJam_Dari_kodeBooking[arr_TampungJam_Dari_kodeBooking.length] = jam_Dari_kodeBooking
            // console.log(arr_TampungJam_Dari_arr_DaftarKodeBooking[arr_TampungJam_Dari_arr_DaftarKodeBooking.length])
        }


        /**
         * Mengecek Apakah Jadwal Yang Dicari Sudah Penuh Atau Masih Kosong.
         * Dengan Mencocokan Antara Kode Booking Yang Di Cari Pengguna Dengan Kode Booking Yang Sudah Ada Di this.arr_DaftarKodeBooking
         */

        // Mengecek Apakah Kode Lapangan yang di cari Sama Dengan Kode Lapangan Yang Ada Di kodeLapangan_Dari_arr_DaftarKodeBooking
        if (kodeLapangan == kodeLapangan_Dari_arr_DaftarKodeBooking) {
            // Mengecek Apakah Tanggal Dan Bulan Yang Dicari Sama Dengan Tanggal Dan Bulan Dari tanggalDanBulan_Dari_arr_DaftarKodeBooking
            if (tanggalDanBulan_Dari_kodeBooking == tanggalDanBulan_Dari_arr_DaftarKodeBooking) {
                // Looping Untuk Mencari kecocokan Jam
                for (let k = 0; k < arr_TampungJam_Dari_arr_DaftarKodeBooking.length; k++) {
                    for (let u = 0; u < arr_TampungJam_Dari_kodeBooking.length; u++) {
                        // Mengecek Apakah Jam Yang Dicari Sama Dengan Jam yang Ada di arr_TampungJam_Dari_arr_DaftarKodeBooking
                        if (arr_TampungJam_Dari_kodeBooking[u] == arr_TampungJam_Dari_arr_DaftarKodeBooking[k]) {
                            this.statusJadwal = 'Penuh' // Jika Semua Pencocokan Diatas Sama Semua Maka this.statusJadwal menjadi 'Penuh'

                            console.log('\n\t-----------------------------------------------')
                            console.log('\t\tMohon Maaf, Jadwal Jam ' + arr_TampungJam_Dari_kodeBooking[u] + ' Sudah Penuh!!')
                            console.log('\t-----------------------------------------------')

                            // Menghentikan Looping
                            k = arr_TampungJam_Dari_arr_DaftarKodeBooking.length
                            u = arr_TampungJam_Dari_kodeBooking.length
                            n = this.arr_DaftarKodeBooking.length
                        } else {
                            this.statusJadwal = 'Kosong' // Jika Semua Pencocokan Diatas Ada Yang Tidak Sama Maka this.statusJadwal Menjadi 'Kosong'
                        }
                    }
                }
            } else {
                this.statusJadwal = 'Kosong' // Jika Semua Pencocokan Ada Yang Tidak Sama Maka this.statusJadwal Menjadi 'Kosong'
            }
        } else {
            this.statusJadwal = 'Kosong' // Jika Semua Pencocokan Ada Yang Tidak Sama Maka this.statusJadwal Menjadi 'Kosong'
        }

        // Menghapus/Mengkosongkan Isi Dari Array Sementara
        arr_TampungJam_Dari_kodeBooking = []
        arr_TampungJam_Dari_arr_DaftarKodeBooking = []
    }
}

// Function Untuk Menampilkan Menu Pengguna
Pengguna.menuPengguna = function () {
    var kondisiMenuPengguna = true
    do {
        console.log('\n\n----- Selamat Datang di Booking Futsal ' + Admin.namaFutsal + ' -----')
        console.log('1. Booking')
        console.log('2. Cek Jadwal')
        console.log('0. Exit!')
        let inputMenuPengguna = prompt("Masukan Pilihan : ")

        // Menu Untuk Membooking Futsal
        if (inputMenuPengguna == 1) {
            console.log()
            var namaPembooking = prompt('Masukan Nama Pembooking\t\t\t\t\t\t\t: ')
            var club = prompt('Masukan Club Yang Akan Bermain\t\t\t\t\t: ')
            var noTelp = prompt('Masukan Nomor Telephone Yang Bisa Dihubungi\t\t: ')

            // Memasukan Lama Waktu Bermain (Format Jam)
            var kondisiLamaBermain
            var lamaBermain
            do {
                console.log()
                lamaBermain = prompt('Masukan Lama Waktu Bermain (Jam)\t\t\t\t: ')
                console.log()
                if (lamaBermain == 0) {
                    console.log('\n\t-------------------------------------------------------')
                    console.log('\t\tKesalahan Input!! Masukan Angka & Tidak Boleh 0')
                    console.log('\t-------------------------------------------------------')
                    kondisiLamaBermain = 'true'
                } else if (parseInt(lamaBermain) % 1 == 0) {
                    break
                } else {
                    console.log('\n\t-------------------------------------------------------')
                    console.log('\t\tKesalahan Input!! Masukan Angka & Tidak Boleh 0')
                    console.log('\t-------------------------------------------------------')
                    kondisiLamaBermain = 'true'
                }
            } while (kondisiLamaBermain == 'true')

            // Memilih Lapangan
            var kondisiTipeLapangan
            var noLapangan
            var tipeLapangan
            do {
                for (let u = 1; u < this.arr_TipeLapangan.length; u++) {
                    console.log(u + '. Lapangan ' + u + ' : Tipe Lapangan ' + this.arr_TipeLapangan[u])
                }
                noLapangan = prompt('Masukan tipe lapangan\t\t\t\t\t\t\t: ')

                if (noLapangan <= 0) {
                    console.log('\n\t-----------------------------------------------------------------')
                    console.log('\t\tKesalahan Input!! Masukan Angka Sesuai Yang Ada Di Atas!!')
                    console.log('\t-----------------------------------------------------------------\n')
                    kondisiTipeLapangan = 'true'
                } else if (noLapangan > this.arr_TipeLapangan.length - 1) {
                    console.log('\n\t-----------------------------------------------------------------')
                    console.log('\t\tKesalahan Input!! Masukan Angka Sesuai Yang Ada Di Atas!!')
                    console.log('\t-----------------------------------------------------------------\n')
                    kondisiTipeLapangan = 'true'
                } else if (parseInt(noLapangan) % 1 == 0) {
                    tipeLapangan = this.arr_TipeLapangan[noLapangan]
                    break
                } else {
                    console.log('\n\t-----------------------------------------------------------------')
                    console.log('\t\tKesalahan Input!! Masukan Angka Sesuai Yang Ada Di Atas!!')
                    console.log('\t-----------------------------------------------------------------\n')
                    kondisiTipeLapangan = 'true'
                }
            } while (kondisiTipeLapangan == 'true')

            // Memilih Jadwal Booking
            console.log('\n\n\t ---- Pilih Jadwal Bermain ----\n')
            this.jadwal(noLapangan, lamaBermain)

            if (this.statusJadwal == 'Kosong') {// Cek Jadwal Apakah Kosong?
                // Menyalin tanggal dari this.kodeBooking
                var tanggalBooking = this.kodeBooking.slice(2, 4)
                var bulanBooking = this.kodeBooking.slice(4, 6)
                var jamBooking = this.kodeBooking.slice(6, 8)

                // Memasukan Semua Salinan Diatas Kedalam Variabel
                var tanggalBermain
                if (this.kodeBooking.length > 8) {
                    var bagiJamAkhir_CariJadwal = this.kodeBooking.slice(this.kodeBooking.length - 2, this.kodeBooking.length)
                    tanggalBermain = 'Tanggal : ' + tanggalBooking + ', Bulan : ' + bulanBooking + ', Jam : ' + jamBooking + ' - ' + bagiJamAkhir_CariJadwal
                } else {
                    tanggalBermain = 'Tanggal : ' + tanggalBooking + ', Bulan : ' + bulanBooking + ', Jam : ' + jamBooking
                }

                // Menghitung Harga Bookingan Sesuai Tipe Lapangan Dan Lama Bermain
                var hitungHargaBooking = lamaBermain * this.arr_HargaLapangan[noLapangan]

                // Memasukan Semua Detail Pembooking Kedalam Object
                var objPengguna = {
                    namaPembooking,
                    club,
                    noTelp,
                    lamaBermain,
                    tanggalBermain,
                    tipeLapangan,
                    hitungHargaBooking
                }
                this.arr_DaftarPembooking.push(objPengguna) // Memasukan Object Kedalam Array (Array of Object)

                this.printDataPembooking(this.arr_DaftarPembooking.length - 1) // Menampilkan Detail Pemesanan Futsal

                // Verifikasi Detail Pememsanan Oleh Pengguna
                while (true) {
                    console.log()
                    var cekDataBookingan = prompt('Apakan Anda Sudah Yakin Ingin Membooking? [IYA/TIDAK]\t\t: ')
                    if (cekDataBookingan.toUpperCase() == 'IYA') {
                        this.arr_DaftarKodeBooking[this.arr_DaftarKodeBooking.length] = this.kodeBooking // Memasukan kode Booking Pemesanan Kedalam Daftar Booking Futsal

                        console.log('\n\t-----------------------------------------------')
                        console.log('\t\tSelamat, Jadwal Anda Berhasil Terdaftar!!')
                        console.log('\t\t  Silahkan Melakukan Pembayaran Dikasir')
                        console.log('\t-----------------------------------------------')
                        break
                    } else if (cekDataBookingan.toUpperCase() == 'TIDAK') {
                        this.arr_DaftarPembooking.pop() // Menghapus Data Pembooking Pada Index Terakhir
                        console.log('\n\t------------------------------------------')
                        console.log('\t\t\tAnda Membatalkan Pesanan!!')
                        console.log('\t------------------------------------------')
                        break
                    } else {
                        console.log('\n\t---------------------------------------------------------------------')
                        console.log('\t\tKesalahan Input Data. Masukan Huruf Yang Sesuai!! [IYA/TIDAK]')
                        console.log('\t---------------------------------------------------------------------')
                    }
                }
            }
        } else if (inputMenuPengguna == 2) { // Menu Untuk Mengecek Jadwal Booking (Kosong/Penuh)
            var kondisiMenuLapangan
            var pilihanLapangan
            do {
                console.log()
                for (let z = 1; z < this.arr_TipeLapangan.length; z++) {
                    console.log(z + '. Lapangan ' + z + ' : Tipe Lapangan ' + this.arr_TipeLapangan[z])
                }
                console.log('0. Kembali')
                pilihanLapangan = prompt('Masukan tipe lapangan\t\t\t\t\t\t\t: ')

                if (pilihanLapangan < 0) {
                    console.log('\n\t-----------------------------------------------------------------')
                    console.log('\t\tKesalahan Input!! Masukan Angka Sesuai Yang Ada Di Atas!!')
                    console.log('\t-----------------------------------------------------------------')
                    kondisiMenuLapangan = 'true'
                } else if (pilihanLapangan == 0) {
                    break
                } else if (pilihanLapangan > this.arr_TipeLapangan.length - 1) {
                    console.log('\n\t-----------------------------------------------------------------')
                    console.log('\t\tKesalahan Input!! Masukan Angka Sesuai Yang Ada Di Atas!!')
                    console.log('\t-----------------------------------------------------------------')
                    kondisiMenuLapangan = 'true'
                } else if (parseInt(pilihanLapangan) % 1 == 0) {
                    this.jadwal(pilihanLapangan, 1) // Memanggil Function Jadwal

                    if (this.statusJadwal == 'Kosong') {
                        console.log('\n\t-----------------------------------------------')
                        console.log('\t\tSelamat, Jadwal Yang Anda Cari Kosong!!')
                        console.log('\t-----------------------------------------------')
                    }
                    break
                } else {
                    console.log('\n\t-----------------------------------------------------------------')
                    console.log('\t\tKesalahan Input!! Masukan Angka Sesuai Yang Ada Di Atas!!')
                    console.log('\t-----------------------------------------------------------------')
                    kondisiMenuLapangan = 'true'
                }
            } while (kondisiMenuLapangan == 'true')
            kondisiMenuPengguna = true
        } else if (inputMenuPengguna == '0') {
            break
        } else {
            console.log('\n\t-------------------------------------------')
            console.log("\t\tKesalahan Input!! Masukan angka 0-2")
            console.log('\t-------------------------------------------')
            kondisiMenuPengguna = true
        }
    } while (kondisiMenuPengguna == true)
}

// Menu Aplikasi Booking Futsal
var kondisiMenu
do {
    console.log('\n\n----- Selamat Datang Di Aplikasi Booking Futsal -----')
    console.log('1. Admin')
    console.log('2. Pengguna')
    console.log('3. Keluar')
    let inputUser = prompt("Pilih Tipe User\t: ")
    if (inputUser == 1) {
        Admin.menuLoginAdmin() // Memanggil Function menuLoginAdmin Pada Object Admin

        kondisiMenu = true
    } else if (inputUser == 2) {
        if (Admin.arr_TipeLapangan.length == 0) {
            console.log('\n\n\t-------------------------------------------------------------------------')
            console.log('\t\tKonfigurasi Futsal Belum Diatur! Admin Harus Mengatur Konfigurasi')
            console.log('\t\t\t  Sampai Harga Lapangan Terisi Semua Terlebih Dahulu.')
            console.log('\t-------------------------------------------------------------------------')
        } else {
            var kondisiArrayHarga = 'Harga Sudah Terisi Semua'
            for (let h = 1; h < Admin.arr_TipeLapangan.length; h++) {
                if (Admin.arr_HargaLapangan[h] === undefined) {
                    console.log('\n\n\t-------------------------------------------------------------------------')
                    console.log('\t\tKonfigurasi Futsal Belum Diatur! Admin Harus Mengatur Konfigurasi')
                    console.log('\t\t\t  Sampai Harga Lapangan Terisi Semua Terlebih Dahulu.')
                    console.log('\t-------------------------------------------------------------------------')
                    console.log(Admin.arr_HargaLapangan[h] + ' ' + Admin.arr_HargaLapangan.length)
                    kondisiArrayHarga = 'Ada Harga Yang Belum Diisi'
                    break
                }
            }
            if (kondisiArrayHarga == 'Harga Sudah Terisi Semua') {
                Pengguna.menuPengguna() // Memanggil Function menuPengguna Pada Object Pengguna
            }
        }
        kondisiMenu = true
    } else if (inputUser == 3) { // Keluar Dari Program
        break
    } else {
        kondisiMenu = true
    }
} while (kondisiMenu == true)