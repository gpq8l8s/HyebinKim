'use strict';

//LANDING PAGE
const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

tl.to('.text', {y: '0%', duration: 0.7, stagger: 1});
tl.to('.intro', {y: '-100%', duration: 0.7});
tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration: 0.1});
tl.fromTo('section', {opacity: 0}, {opacity: 1, duration: 0.3});
tl.fromTo('footer', {opacity: 0}, {opacity: 1, duration: 0.5});
//tl.fromTo('.nav-text', {opacity: 0}, {opacity: 1, duration: 1}, '-=1');

//TYPING EFFECT
const target = document.querySelector('#dynamic');

function randomString() {
  const stringArr = ['Hyebin Kim'];
  const selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
  const selectStringArr = selectString.split('');

  return selectStringArr;
}

function resetTyping() {
  target.textContent = '';
  dynamic(randomString());
}

function dynamic(randomArr) {
  if (randomArr.length > 0) {
    target.textContent += randomArr.shift();
    setTimeout(function () {
      dynamic(randomArr);
    }, 80);
  } else {
    setTimeout(resetTyping, 3000);
  }
}
dynamic(randomString());

function blink() {
  target.classList.toggle('active');
}

setInterval(blink, 500);

//TOGGLE
const toggleBtn = document.querySelector('.toggleBtn-menu');
const jerry = document.querySelector('#jerry');
//const image = document.getElementById('#jerry');

toggleBtn.addEventListener('click', () => {
  jerry.classList.toggle('active');
  //tl.to('.image', {x: '-100%', delay: 0.5});
});
