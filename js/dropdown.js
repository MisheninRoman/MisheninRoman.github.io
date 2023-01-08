function dropdownMenu() {
  var dropdownContent = document.getElementById("dropdown-content");
  dropdownContent.classList.toggle("show");

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches(".dropdown-button")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
}

// Close the dropdown menu when the user clicks on a link in the dropdown content
var dropdownLinks = document.getElementsByClassName("dropdown-content");
for (i = 0; i < dropdownLinks.length; i++) {
  dropdownLinks[i].onclick = function () {
    this.classList.remove("show");
  };
}
