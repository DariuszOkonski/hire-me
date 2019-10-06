const burgerButton = document.querySelector('.burger');
const burgerButtonInner = document.querySelector('header .burger i');
const nav = document.querySelector('.nav');
const liElements = document.querySelectorAll('.nav li');

// Działanie nawigacji

burgerButton.addEventListener('click', function () {
  nav.classList.toggle('active');
  burgerButtonInner.classList.toggle('active');
});

liElements.forEach(li => li.addEventListener('click', function () {
  nav.classList.remove('active');
  burgerButtonInner.classList.remove('active');
}));

// Poruszanie się strony

$('.main').on('click', function () {
  $('body, html').animate({
    scrollTop: $('#main').offset().top
  }, 1500);
});

$('.aboutUs').on('click', function () {
  $('body, html').animate({
    scrollTop: $('#aboutUs').offset().top
  }, 1500);
});

$('.ourOffer').on('click', function () {
  $('body, html').animate({
    scrollTop: $('#ourOffer').offset().top
  }, 1500);
});

$('.ourOfferButton').on('click', function () {
  $('body, html').animate({
    scrollTop: $('#ourOffer').offset().top
  }, 1500);
});

$('.ourGallery').on('click', function () {
  $('body, html').animate({
    scrollTop: $('#ourGallery').offset().top
  }, 1500);
});

$('.ourContact').on('click', function () {
  $('body, html').animate({
    scrollTop: $('#ourContact').offset().top
  }, 1500);
});

$('.ourContactButton').on('click', function () {
  $('body, html').animate({
    scrollTop: $('#ourContact').offset().top
  }, 1500);
});

$('.ourEvents').on('click', function () {
  $('body, html').animate({
    scrollTop: $('#ourEvents').offset().top
  }, 1500);
});

$('.ourPartners').on('click', function () {
  $('body, html').animate({
    scrollTop: $('#ourPartners').offset().top
  }, 1500);
});

// $('nav a').on('click', function () {
//   // console.log($(this).attr('class'));
//   $('body, html').animate({
//       scrollTop: $('#' + $(this).attr('class')).offset().top
//   }, 500);
// })