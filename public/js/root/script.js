const searchInput = document.getElementById("search");
const resetBtn = document.getElementById("reset");
const resetSymbol = document.getElementById("resetSymbol");
const homeAnchor = document.getElementById("home");
const body = document.body;

// Initially hide reset button and symbol
resetBtn.style.visibility = "hidden";
resetSymbol.style.visibility = "hidden";

searchInput.addEventListener("input", () => {
    // Check if search input value is empty
    if (searchInput.value.trim() !== "") {
        // Show reset button and symbol
        resetBtn.style.visibility = "visible";
        resetSymbol.style.visibility = "visible";
    } else {
        // Hide reset button and symbol
        resetBtn.style.visibility = "hidden";
        resetSymbol.style.visibility = "hidden";
    }
});

resetBtn.addEventListener("click", () => {
    resetBtn.style.visibility = "hidden";
    resetSymbol.style.visibility = "hidden";
});

homeAnchor.addEventListener("click", (event) => {
    event.preventDefault();
    location.reload();
});

const currentYear = new Date().getFullYear();

// Update the content of the span element with id "currentYear"
document.getElementById("currentYear").textContent = currentYear;

// DARK MODE AND LIGHT MODE FUNCTIONALITY
const sun = document.getElementsByClassName("light-mode")[0]; // Get the first element with class "light-mode"
const moon = document.getElementsByClassName("dark-mode")[0]; // Get the first element with class "dark-mode"

sun.addEventListener("click", () => {
    sun.style.display = "none";
    moon.style.display = "block";
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
});

moon.addEventListener("click", () => {
    moon.style.display = "none";
    sun.style.display = "block";
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
});
