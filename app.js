// Importing turbolinks & initializing
// This allows us to fetch the contents of the <body></body> on each page request
// rather than sending the user over to another page. This is a much faster approach 
import Turbolinks from 'turbolinks';
Turbolinks.start();
Turbolinks.setProgressBarDelay(0);

// When a new page loads or user navigates to index this function executes
document.addEventListener('turbolinks:load', () => {
  // Inject the navbar into every page on every page load
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
    <li class="nav-link"><a title="Go to Join Us" href="join-us" class="nav-item">Join Us</a></li>
  </ul>
</div>
<button role="button" title="navbar" class="navbar-trigger">
  <i class="fas fa-bars"></i>
</button>`;

  // Do the same with mobile navbar
  const mobileNav = document.querySelector('.mobile-nav');
  mobileNav.innerHTML = /*html*/ `
    <div class="display-nav">
      <ul class="display-ul">
        <li class="display-link"><a title="Go to Home" class="display-item" href="/">Home</a></li>
        <li class="display-link"><a title="Go to Studies" class="display-item" href="/studies">Studies</a></li>
        <li class="display-link"><a title="Go to About Us" class="display-item" href="/about-us">About Us</a></li>
        <li class="display-link"><a title="Go to Join Us" class="display-item" href="/join-us">Join Us</a></li>
      </ul>
    </div>
    <div class="overlay"></div>
`;

const footer = document.querySelector('.footer');
footer.innerHTML = /*html*/ `
<div class="row">
  <div class="col-xs-6"></div>
  <div class="col-xs-6"></div>
</div>

`;

  // Responsive mobile navbar
  const navbarTrigger = document.querySelector('.navbar-trigger');
  const overlay = document.querySelector('.overlay');
  const displayNav = document.querySelector('.display-nav');

  navbarTrigger?.addEventListener('click', (e) => {
    overlay.classList.toggle('active');
    displayNav.classList.toggle('active');
  });

  // Adding active links to navbar
  const path = window.location.href;
  const navLinks = document.querySelectorAll('.nav-item');

  navLinks.forEach((navLink) => {
    navLink.classList.remove('active');

    if (navLink.href === path) {
      navLink.classList.add('active');
    }
  });
});
