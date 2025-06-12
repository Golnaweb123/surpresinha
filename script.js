
const revealMessageBtn = document.getElementById("revealMessageBtn");
const specialMessage = document.getElementById("specialMessage");

if (revealMessageBtn && specialMessage) {
    revealMessageBtn.addEventListener("click", () => {
        specialMessage.classList.add("show");
        revealMessageBtn.style.display = "none"; 
    });
}