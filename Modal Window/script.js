'use strict';

const modal = document.querySelector('.modal'),
  overlay = document.querySelector('.overlay'),
  showModalBtn = document.querySelectorAll('.show-modal'),
  closeModalBtn = document.querySelector('.close-modal');

const closeModal = function () {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};

const openModal = function () {
  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
};

for (let i = 0; i < showModalBtn.length; i++) {
  showModalBtn[i].addEventListener('click', openModal);
}

closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
