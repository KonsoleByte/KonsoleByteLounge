const p = document.getElementById("betaWarning");

window.addEventListener("load", () => {
    p.showModal();
});

document.getElementById("close").addEventListener("click", () => {
    p.close();
});