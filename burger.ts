const burger = document.getElementById('burger') as HTMLElement;
const navMenu = document.getElementById('nav-menu') as HTMLElement;

function toggleMenu(): void {
  navMenu.classList.toggle('active');
  burger.classList.toggle('active');
}

burger.addEventListener('click', toggleMenu);
