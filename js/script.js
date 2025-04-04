// Change header background on mouseover
const header = document.getElementById("mainHeader");
header.addEventListener("mouseover", () => header.style.backgroundColor = "#555");
header.addEventListener("mouseout", () => header.style.backgroundColor = "#333");

// Show alert on button click
const alertButton = document.getElementById("alertButton");
alertButton.addEventListener("click", () => alert("Welcome to Algomon!"));

// Display pressed key
document.addEventListener("keydown", (event) => {
    document.getElementById("keyPressDisplay").textContent = "You pressed: " + event.key;
});


