function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  
  window.onresize = function() {
      if (window.innerWidth > 480) {
          document.getElementById("burger").style.display = "none";
      }
      if (window.innerWidth > 768) {
          document.getElementById("input-search").style.display = "none";
      }
  }   
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("my-slides");
      var dots = document.getElementsByClassName("dot");
      
      if (n > slides.length) {slideIndex = 1}
      
      if (n < 1) {slideIndex = slides.length}
      
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none"; 
      }
      
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      
      slides[slideIndex-1].style.display = "block"; 
      dots[slideIndex-1].className += " active";
  }
  
  function burgerMenu() {
      var x = document.getElementById("burger");
      var y = document.getElementById("burger-button");
  
      if (x.style.display === "block") {
  
          x.style.display = "none";
          y.style.color = "#bababa";
  
      } else {
          
          x.style.display = "block";
          y.style.color = "#bcd546";
      }
  }
  
  function search() {
      var x = document.getElementById("input-search");
      var y = document.getElementById("search-button");
  
      if (window.innerWidth < 768) {
          
          if (x.style.display === "block") {
  
              x.style.display = "none";
              y.style.color = "#bababa";
  
          } else {
              
              x.style.display = "block";
              y.style.color = "#bcd546";
          }
      }	
  }