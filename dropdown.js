const icon = document.getElementById("userIcon");
const dropdown = document.getElementById("userDropdown");

if (icon && dropdown) {
    /*Toggle the dropdown when clicking the user icon */
  icon.addEventListener("click", function (event) {
    event.preventDefault();
    dropdown.classList.toggle("open");
  });
  /*Close the dropdown when clicking outside of it */
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".user-menu")) {
      dropdown.classList.remove("open");
    }
  });
}