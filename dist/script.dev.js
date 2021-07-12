"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

$(document).ready(function () {
  $(".carousel").slick({
    centerMode: true,
    centerPadding: "200px",
    slidesToShow: 3,
    responsive: [{
      breakpoint: 1024,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 2
      }
    }, {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 2
      }
    }, {
      breakpoint: 480,
      settings: "unslick"
    }]
  });
});
var nav = document.getElementById("nav");

var links = _toConsumableArray(document.getElementsByClassName("nav-link"));

var menu = document.getElementById("menu");
menu.addEventListener("click", function () {
  nav.classList.toggle("nav-visible");
});
links.forEach(function (link) {
  return link.addEventListener("click", function () {
    nav.classList.remove("nav-visible");
  });
});