import Turbolinks from 'turbolinks';
// import initStudies from './js/studies';
Turbolinks.start();
Turbolinks.setProgressBarDelay(0);

document.addEventListener('turbolinks:load', () => {
  // initStudies();

  const navbar = document.querySelector('nav');
  if (!navbar) {
    return;
  }
  navbar.className = 'navbar';
  navbar.innerHTML = /*html*/ `

  <a role="button" title="icon" href="/"><img class="logo-img" src="/img/uat-logo.png"></a>
  <div class="container">
  <ul class="navbar-nav">
    <li class="nav-link"><a title="Go to home" href="/" class="nav-item active">Home</a></li>
    <li class="nav-link"><a title="Go to studies" href="studies" class="nav-item">Studies</a></li>
    <li class="nav-link"><a title="Go to studies" href="about-us" class="nav-item">About us</a></li>
  </ul>
</div>
<button role="button" title="navbar" class="navbar-trigger">
  <i class="fas fa-bars"></i>
</button>
<a class="nav-search" role="button" title="search" href="#"><div><i class="fas fa-search"></i></div></a>
`;

  const mobileNav = document.querySelector('.mobile-nav');
  mobileNav.innerHTML = /*html*/ `
    <div class="display-nav">
      <ul class="display-ul">
        <li class="display-link"><a title="Go to test" class="display-item" href="/">Home</a></li>
        <li class="display-link"><a title="Go to test" class="display-item" href="/studies">Studies</a></li>
        <li class="display-link"><a title="Go to test" class="display-item" href="/about-us">About Us</a></li>
      </ul>
    </div>
    <div class="overlay"></div>
`;

  // Responsive navbar
  const navbarTrigger = document.querySelector('.navbar-trigger');
  const overlay = document.querySelector('.overlay');
  const displayNav = document.querySelector('.display-nav');

  navbarTrigger?.addEventListener('click', (e) => {
    overlay.classList.toggle('active');
    displayNav.classList.toggle('active');
  });

  // Nav-link active
  const path = window.location.href;
  const navLinks = document.querySelectorAll('.nav-item');

  navLinks.forEach((navLink) => {
    navLink.classList.remove('active');

    if (navLink.href === path) {
      navLink.classList.add('active');
    }
  });
});
