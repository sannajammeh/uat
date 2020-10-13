import Turbolinks from 'turbolinks';
Turbolinks.start();

document.addEventListener('turbolinks:load', () => {
  const navbar = document.querySelector('nav');
  navbar.className = 'navbar';
  navbar.innerHTML = /*html*/ `

  <a role="button" title="icon" href="#page-top"><img class="logo-img" src="/img/uat-logo.png"></a>
  <div class="container">
  <ul class="navbar-nav">
    <li class="nav-link"><a title="Go to home" href="/" class="nav-item active">Home</a></li>
    <li class="nav-link"><a title="Go to studies" href="studies.html" class="nav-item">Studies</a></li>
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
mobileNav.innerHTML = /*html*/`

    <div class="display-nav">
      <ul class="display-ul">
        <li class="display-link"><a title="Go to test" class="display-item" href="/">Home</a></li>
        <li class="display-link"><a title="Go to test" class="display-item" href="studies.html">Studies</a></li>
        <li class="display-link"><a title="Go to test" class="display-item" href="#">Test</a></li>
        <li class="display-link"><a title="Go to test" class="display-item" href="#">Test</a></li>
        <li class="display-link"><a title="Go to test" class="display-item" href="#">Test</a></li>
      </ul>
    </div>
    <div class="overlay"></div>
`;

// Responsive navbar
const navbarTrigger = document.querySelector('.navbar-trigger');
const overlay = document.querySelector(".overlay");
const displayNav = document.querySelector(".display-nav");
const activeNav = document.querySelector(".active");

navbarTrigger?.addEventListener('click', (e) => {
  overlay.classList.toggle('active');
  displayNav.classList.toggle('active');
});

  // Nav-link active
  const path = window.location.href; 
  const navLinks = document.querySelectorAll('.nav-item');

  console.log(path);

  navLinks.forEach((navLink) => {
    navLink.classList.remove('active');
    console.log(navLink.href);
    if(navLink.href === path) {
      navLink.classList.add('active');
    }
  })

});


