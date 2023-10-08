// Show/hide the language dropdown on click
document.addEventListener('click', function(event) {
    var languageDropdown = document.querySelector('.language-dropdown');
    if (!event.target.closest('.language-dropdown') && languageDropdown.classList.contains('show')) {
      languageDropdown.classList.remove('show');
    } else if (event.target.closest('.language-dropdown-button')) {
      languageDropdown.classList.toggle('show');
    }
  });
  


