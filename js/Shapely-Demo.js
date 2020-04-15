document.getElementById('scroll-to-button').onclick=function(){
    window.scrollTo(0, 0);
}

window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");

var sticky = header.offsetHeight;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}





