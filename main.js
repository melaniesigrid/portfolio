/*const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})*/

function toggleMenu() {
  if (document.getElementsById('mainmenu').style.display == 'block') {
    document.getElementById('mainmenu').style.display = 'none';
    document.getElementById('hamburger').style.color = 'white';
  } else {
    document.getElementById('mainmenu').style.display = 'block';
  }
}
document.getElementById('hamburger').addEventListener('click', toggleMenu);