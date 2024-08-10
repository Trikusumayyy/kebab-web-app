"use strict";

var kas = document.getElementById('kas');
kas.addEventListener('keyup', function (e) {
  // Memanggil fungsi formatRupiah dengan nilai dari input dan prefix 'Rp. '
  kas.value = formatRupiah(this.value, 'Rp. ');
});
/* Fungsi untuk format Rupiah */

function formatRupiah(angka, prefix) {
  var number_string = angka.replace(/[^,\d]/g, '').toString(),
      split = number_string.split(','),
      sisa = split[0].length % 3,
      rupiah = split[0].substr(0, sisa),
      ribuan = split[0].substr(sisa).match(/\d{3}/gi); // Menambahkan tanda titik jika ada ribuan

  if (ribuan) {
    separator = sisa ? '.' : '';
    rupiah += separator + ribuan.join('.');
  } // Menggabungkan hasil akhir dengan bagian desimal jika ada


  rupiah = split[1] !== undefined ? rupiah + ',' + split[1] : rupiah; // Mengembalikan hasil dengan atau tanpa prefix 'Rp.'

  return prefix === undefined ? rupiah : rupiah ? prefix + rupiah : '';
}