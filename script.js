// Script para el menú hamburguesa
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    // Cambiar el ícono a "X" cuando el menú está abierto
    if (navMenu.classList.contains('active')) {
        navToggle.innerHTML = '<i class="fas fa-times"></i>'; // Ícono de cierre (X)
    } else {
        navToggle.innerHTML = '<i class="fas fa-bars"></i>'; // Ícono de hamburguesa
    }
});