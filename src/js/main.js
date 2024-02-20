// handle user menu
const userMenu = document.getElementById("userMenu");

function handleUserMenu() {
  userMenu.classList.toggle("active");
}

$(document).ready(function () {
  $("#searchNav").hide();
  $("#search").click(function () {
    $("#searchNav").toggle();
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    300: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    420: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 40,
    },
  },
});
