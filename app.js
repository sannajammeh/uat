import Turbolinks from 'turbolinks';
Turbolinks.start();

document.addEventListener('turbolinks:load', () => {
  const navbar = document.querySelector('nav');
  navbar.className = 'navbar';
  navbar.innerHTML = /*html*/ `
  
  `;
});
