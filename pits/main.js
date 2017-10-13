function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
//index
var slidein = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slidein++;
    if (slidein > x.length) {slidein = 1} 
    x[slidein-1].style.display = "block"; 
    setTimeout(carousel, 9000); 
}



function Function() {
    var x = document.getElementById("page");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}

var slide = 1;

function plusSlides(n) {
  showSlides(slide += n);
}

function currentSlide(n) {
  showSlides(slide = n);
}

function showSlides(n) {
  //alert('showslides('+ n +')\nslide='+slide);
  var i;
  var slides = document.getElementsByClassName("Slides");
  if (n==undefined){n = ++slide}
  if (n > slides.length) {slide = 1}
  if (n < 1) {slide = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slide-1].style.display = "block";
  dots[slide-1].className += " active";
  
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}