
const ham = document.querySelector('.hamburger');
const navlist = document.querySelector('nav ul');

ham.addEventListener('click', () => {
  ham.classList.toggle('active');  
  navlist.classList.toggle('active'); 
});

const darkmodebutton = document.getElementById('darkmodebutton');
const body = document.body;

const enableDarkMode = () => {
  body.classList.add('darkmode');
}; 

const disableDarkMode = () => {
  body.classList.remove('darkmode');
};

darkmodebutton.addEventListener('change', () => {
  if (darkmodebutton.checked) {
    enableDarkMode();
  } else {
    disableDarkMode(); 
  }
});

const typed = new Typed('.multiple', {
  strings: ['Web Developer', 'Programmer', 'Lifelong Learner'],
  typeSpeed: 100, 
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});


