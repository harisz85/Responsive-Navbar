let navbar =  document.querySelector('.navbar');
let closeBtn = document.querySelector('.closeBtn');
let menuBtn = document.querySelector('.menuBtn');


menuBtn.addEventListener('click', function() {
   navbar.classList.add('active');
})

closeBtn.addEventListener('click', function() {
  navbar.classList.remove('active');
})