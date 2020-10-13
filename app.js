import Turbolinks from 'turbolinks';
import initStudies from './js/studies';
Turbolinks.start();

document.addEventListener('turbolinks:load', () => {
  initStudies();

  const navbar = document.querySelector('nav');
  navbar.className = 'navbar';
  navbar.innerHTML = /*html*/ `
    <img src="/img/uat-logo.png" />
  `;
});

if (module.hot) {
  module.hot.accept();
}
