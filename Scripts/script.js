
const menuIcon = document.querySelector('#menu-icon');
const navigationLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navigationLinks.classList.toggle('active');
}