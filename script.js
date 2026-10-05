function openModal() {
    const modal = document.getElementById("userModal");
    modal.hidden = false;
}

function closeModal() {
    const modal = document.getElementById("userModal");
    modal.hidden = true;
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeModal();
    }
});
