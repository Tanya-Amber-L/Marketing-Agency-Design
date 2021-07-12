$(document).ready(function(){
    $(".carousel").slick({
    centerMode: true,
    centerPadding: "200px",
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: "40px",
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: "40px",
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: "unslick"
        }
    ]            
});
});

let nav = document.getElementById("nav");
let links = [...document.getElementsByClassName("nav-link")];
let menu = document.getElementById("menu");
menu.addEventListener("click", () => {
    nav.classList.toggle("nav-visible");
})
links.forEach(link =>
    link.addEventListener("click", () => {
        nav.classList.remove("nav-visible");
    })
);