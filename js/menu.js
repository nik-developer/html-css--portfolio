// modal/open/close

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('is-hidden');
  }
})();

// mobile-menu
const menuBtn = document.querySelector('.menu-btn-js');
const mobileMenuRef = document.querySelector('.menu-container-js');
menuBtn.addEventListener('click', toggleMenuHandler);
function toggleMenuHandler() {
  menuBtn.classList.toggle('is-open');
  const isOpenMenu = menuBtn.classList.contains('is-open');
  if (isOpenMenu) {
    mobileMenuRef.style.display = 'block';
    return;
  }
  if (!isOpenMenu) {
    mobileMenuRef.style.display = 'none';
  }
}

// (() => {
//   const refs = {
//     openModalBtn: document.querySelector('[data-modal-open]'),
//     closeModalBtn: document.querySelector('[data-modal-close]'),
//     modal: document.querySelector('[data-modal]'),
//   };
//   refs.openModalBtn.addEventListener('click', toggleModal);
//   refs.closeModalBtn.addEventListener('click', toggleModal);
//   function toggleModal() {
//     refs.modal.classList.toggle('is-hidden');
//   }
// })();

// placeholder
// document.querySelectorAll('.form-input').forEach(element => {
//   element.addEventListener('focusin', e => {
//     e.currentTarget.placeholder = e.currentTarget.dataset.placeholder;
//   });
// });
// document.querySelectorAll('.form-input').forEach(element => {
//   element.addEventListener('focusout', e => {
//     e.currentTarget.placeholder = ' ';
//   });
// });
