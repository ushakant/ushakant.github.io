//Get the button
var mybutton = document.getElementById('myBtn');
var navbar = document.getElementById('navbar');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = () => {
  scrollFunction();
  stickNav();
};

const scrollFunction = () => {
  if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
};

// When the user clicks on the button, scroll to the top of the document
const topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
eyes
white_check_mark
heavy_plus_sign












