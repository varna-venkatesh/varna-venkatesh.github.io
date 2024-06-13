var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("topbanner").style.top = "0";
  } else {
    document.getElementById("topbanner").style.top = "-12vh";
  }
  prevScrollpos = currentScrollPos;
}
