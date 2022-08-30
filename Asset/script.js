const menuToggle = document.querySelector('.menu-mobile input');
const nav = document.querySelector ('#bar-atas ul');

menuToggle.addEventListener('click', function () {
 nav.classList.toggle('slide');
});

const menuWide = document.querySelector('.menu-mobile input');
const humberger = document.querySelector ('#humberger ul');

menuWide.addEventListener('click', function () {
 humberger.classList.toggle('slide');
});