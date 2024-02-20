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
