// the profile icon and the dropdown box
const icon = document.getElementById("userIcon");
const dropdown = document.getElementById("userDropdown");

// click on the icon: open the menu if closed, close it if open
icon.addEventListener("click", function (event) {
  event.preventDefault();            // stop the link from going to login.html
  dropdown.classList.toggle("open"); // add or remove the class "open"
});

// click anywhere outside the menu: close it
document.addEventListener("click", function (event) {
    if (!event.target.closest(".user-menu")) {
        dropdown.classList.remove("open");
}
});
