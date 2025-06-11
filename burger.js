var burger = document.getElementById('burger');
var navMenu = document.getElementById('nav-menu');
function toggleMenu() {
    navMenu.classList.toggle('active');
    burger.classList.toggle('active'); // burger düyməsinə də class əlavə et
}
burger.addEventListener('click', toggleMenu);
