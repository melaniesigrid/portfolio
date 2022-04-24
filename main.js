const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.mainMenu');
const openMenu = document.querySelector('.openMenu');

function show() {
  mainMenu.style.display = 'flex';
  mainMenu.style.top = '0';
}

function close() {
  mainMenu.style.top = '-150%';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.querySelector('.overlay');

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

const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
let inputMessage = document.getElementById('comment');

function changeValue() {
  const allInfo = JSON.stringify({
    name: inputName.value.trim(),
    email: inputEmail.value.trim(),
    comment: inputMessage.value.trim(),
  });
  localStorage.setItem('allInfo', allInfo);
}

function replaceData() {
  const storedData = JSON.parse(localStorage.getItem('allInfo'));
  inputName.value = storedData.name;
  inputEmail.value = storedData.email;
  inputMessage = storedData.comment;
}

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (
      e.code === 22 || e.code === 1014 || e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') && (storage && storage.length !== 0);
  }
}

if (storageAvailable('localStorage')) {
  // Yippee! We can use localStorage awesomeness
  form.addEventListener('change', changeValue);
  window.onload = replaceData();
} else {
  // Too bad, no localStorage for us
}
