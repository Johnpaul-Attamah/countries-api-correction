// Global Variables
const goBack = document.querySelector(".back");

document.addEventListener("DOMContentLoaded", () => {

    // Handle go back
    goBack.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "/index.html";
    })

});