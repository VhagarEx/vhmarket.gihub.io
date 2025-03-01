function myFunction() {
    document.getElementById("dropdown__menu").classList.toggle("show-f");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropdown__button')) {
        let dropdowns = document.getElementsByClassName("dropdown__menu");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show-f')) {
                openDropdown.classList.remove('show-f');
            }
        }
    }
}
