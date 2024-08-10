"use strict";

document.addEventListener('DOMContentLoaded', function (event) {
  var modal = document.getElementById('modal');
  var openModalBtn = document.getElementById('openModal');
  var closeModalBtn = document.getElementById('closeModal');

  openModalBtn.onclick = function () {
    modal.style.display = 'flex';
  };

  closeModalBtn.onclick = function () {
    modal.style.display = 'none';
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
});