const themeButton = document.getElementById("themeToggle");

themeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeButton.innerHTML = "☀️ Light Mode";
    } else {
        themeButton.innerHTML = "🌙 Dark Mode";
    }
});
