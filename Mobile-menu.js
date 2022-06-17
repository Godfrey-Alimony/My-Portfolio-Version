<<<<<<< HEAD
const menuIconMobile = document.querySelector('.navbar__hamb');
const menu = document.querySelector('.navbar__menu');
const viewport = document.querySelector('body');
const menuLinks = document.querySelectorAll('.navbar__menu__link');
const heroLanding = document.querySelector('.hero');

function isActiveClassExisted(element) {
  return element.classList.contains('active');
=======
const menuIconMobile = document.querySelector(".navbar__hamb");
const menu = document.querySelector(".navbar__menu");
const viewport = document.querySelector("body");
const menuLinks = document.querySelectorAll(".navbar__menu__link");
const heroLanding = document.querySelector(".hero");

function isActiveClassExisted(element) {
  return element.classList.contains("active");
>>>>>>> 866879244e47474416deea41cc492a3f87f9be3c
}

function refreshIcon() {
  if (isActiveClassExisted(menu)) {
<<<<<<< HEAD
    menuIconMobile.setAttribute('src', 'images/hamburguer-close.png');
  } else {
    menuIconMobile.setAttribute('src', 'images/hamburguer.png');
  }
}
function openMenu() {
  if (menu.classList.contains('active')) {
    menu.classList.toggle('active');
    viewport.classList.add('blockover');
    heroLanding.classList.remove('blur');
  } else {
    menu.classList.toggle('active');
    viewport.classList.add('blockover');
    heroLanding.classList.add('blur');
=======
    menuIconMobile.setAttribute("src", "images/hamburguer-close.png");
  } else {
    menuIconMobile.setAttribute("src", "images/hamburguer.png");
  }
}

function openMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.toggle("active");
    viewport.classList.add("blockover");
    heroLanding.classList.remove("blur");
  } else {
    menu.classList.toggle("active");
    viewport.classList.add("blockover");
    heroLanding.classList.add("blur");
>>>>>>> 866879244e47474416deea41cc492a3f87f9be3c
  }
  refreshIcon();
}

function closeMenu() {
<<<<<<< HEAD
  menu.classList.remove('active');
  viewport.classList.remove('blockover');
  refreshIcon();
}

menuIconMobile.addEventListener('click', openMenu);
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', closeMenu);
});
=======
  menu.classList.remove("active");
  viewport.classList.remove("blockover");
  refreshIcon();
}

menuIconMobile.addEventListener("click", openMenu);
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", closeMenu);
});
>>>>>>> 866879244e47474416deea41cc492a3f87f9be3c
