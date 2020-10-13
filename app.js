import Turbolinks from 'turbolinks';
import initStudies from './js/studies';
Turbolinks.start();

document.addEventListener('turbolinks:load', () => {
  initStudies();

  const navbar = document.querySelector('nav');
  navbar.className = 'navbar';
  navbar.innerHTML = /*html*/ `

  <a role="button" title="icon" href="#page-top"><img class="logo-img" src="/img/uat-logo.png"></a>
  <div class="container">
  <ul class="navbar-nav">
    <li class="nav-link"><a title="Go to home" href="#index.html" class="nav-item">Home</a></li>
    <li class="nav-link"><a title="Go to studies" href="#studies.html" class="nav-item">Studies</a></li>
    <li class="nav-link"><a title="Go to test" href="#" class="nav-item">Test</a></li>
    <li class="nav-link"><a title="Go to test" href="#" class="nav-item">Test</a></li>
  </ul>
</div>
<button role="button" title="navbar" class="navbar-trigger">
  <i class="fas fa-bars"></i>
</button>
<a class="nav-search" role="button" title="search" href="#"><div><i class="fas fa-search"></i></div></a>
`;

  const mobileNav = document.querySelector('.mobile-nav');
  mobileNav.innerHTML = /*html*/ `
<div class="overlay"></div>
    <div class="display-nav">
      <ul class="display-ul">
        <li class="display-link"><a title="Go to test" class="display-item" href="#index.html">Home</a></li>
        <li class="display-link"><a title="Go to test" class="display-item" href="#studies.html">Studies</a></li>
        <li class="display-link"><a title="Go to test" class="display-item" href="#">Test</a></li>
        <li class="display-link"><a title="Go to test" class="display-item" href="#">Test</a></li>
        <li class="display-link"><a title="Go to test" class="display-item" href="#">Test</a></li>
      </ul>
    </div>
`;

  // Responsive navbar
  const navbarTrigger = document.querySelector('.navbar-trigger');
  navbarTrigger?.addEventListener('click', (e) => {});

  $(document).ready(function () {
    $('.navbar-trigger').click(function () {
      $('.overlay').toggleClass('active');
      $('.display-nav').toggleClass('active');
    });
  });
});
