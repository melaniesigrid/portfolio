const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.mainMenu');
const openMenu = document.querySelector('.openMenu');

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}

function close() {
  mainMenu.style.top = '-100%';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

openModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

const form = document.getElementById('contact-form');
const email = form.elements['email-address'];
const error = document.querySelector('.email-error');
const regExp = /^[a-z0-9_-]+@[a-z0-9]+\.[a-z]+\.?[a-z]+/g;

form.addEventListener('submit', (event) => {
  if (!regExp.test(email.value)) {
    event.preventDefault();
    error.innerHTML = ('Your email address is not valid.');
  }
});

// data - JSON

const formData = {
  name: "",
  email: "",
  textarea: "",
};

const name = document.querySelector('.name');
const email = document.querySelector('.email');
const textarea = document.querySelector('.textarea');

function getData() {

};

function saveData() {

};