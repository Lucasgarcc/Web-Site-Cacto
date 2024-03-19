const menuNav = document.querySelector('#nav-menu'), 
  navTogle = document.querySelector('#nav-toggle'),
  navClose = document.querySelector('#nav-fechar');

  /* mostrar menu */ 
  if (navTogle) {
    navTogle.addEventListener('click', () => {
      menuNav.classList.add('show-menu');
    })
  }

  /*               esconder menu            */

if (navClose) {
  navClose.addEventListener('click', () => {
    menuNav.classList.remove('show-menu');
  });
}

const navLink = document.querySelectorAll('.nav-item');

const actionLink = () => {
  const menuNav = document.querySelector('#nav-menu');
  menuNav.classList.toggle('show-menu');
}

navLink.forEach(n => n.addEventListener('click', actionLink));

/*          Mudar Background Header -cards            */

const blurHeader = () => {
  const header = document.querySelector('.header');
  this.scrollY >= 50 ? header.classList.add('blur-header') 
  : header.classList.toggle('blur-header');
  console.log(header);
}
window.addEventListener('scroll', blurHeader);

