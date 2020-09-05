// openModal() is called by column element in lightbox
// and gives it an style attribute of block and opens 
//modal scroll bar
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// closeModal changes dsiplay to none, closes Modal Lightbox
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// varbiable for slide index
var slideIndex = 1;
// calling showSlides
showSlides(slideIndex);

// changes index backwards and forwards cycling through pictures using arrows 
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// this calls showSlides() with the currentSlide index argument
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// shows slides function
function showSlides(n) {
   var i;
   var slides = document.getElementsByClassName("mySlides");
   var dots = document.getElementsByClassName("demo");
   var captionText = document.getElementById("caption");
   if (n > slides.length) {slideIndex = 1}
   if(n < 1) {slideIndex = slides.length}
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none"
   }
   for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
   }
   //Displays slides 
   slides[slideIndex-1].style.display = "block";
   dots[slideIndex-1].className += " active";
   captionText.innerHTML = dots[slideIndex-1].alt;
}