"use strict";
// var nav = document.getElementById('nav');
//      window.onscroll = function () {
//     if(window.pageYOffset > 100) {
//       nav.classList.add("shrink");
//     }else{
//             nav.classList.remove("shrink");
//          }
//       }

// const navbar = document.querySelector("#navbar");
// let top = navbar.offsetTop;
// function stickynavbar() {
//   if (window.scrollY >= top) {
//     navbar.classList.add("sticky");
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
// window.addEventListener("scroll", stickynavbar);
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.padding = "10px 0";
    document.getElementById("navbar").style.boxShadow = "0px 2px 5px rgba(0,0,0,0.1)";
  } else {
    document.getElementById("navbar").style.padding = "20px 0";
    document.getElementById("navbar").style.boxShadow = "none";
  }
}
