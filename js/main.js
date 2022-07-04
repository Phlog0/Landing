"use strict"


const burger = document.querySelector('.burger-menu')
const burgerOverlay = document.querySelector(".burger-overlay");
const noBodyScroll = document.body;
const burgerLinks = document.querySelector('.burger-link');


burger.addEventListener('click', openMenu);
burgerOverlay.addEventListener('click', closeMenu);

function openMenu(event) {
  burgerOverlay.classList.toggle('active');
  noBodyScroll.classList.toggle('hidden');
}

function closeMenu(event) {
  if (!event.target.closest('.burger-list') || event.target.closest('.burger-close')) {
    burgerOverlay.classList.remove('active');
    noBodyScroll.classList.remove('hidden');
  }
}