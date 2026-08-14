const image = document.getElementById("eggImage");

let clicked = false;

image.addEventListener("click", function () {
    if (clicked) return;
    clicked = true;
    const openSound = new Audio("assets/open.mp3");
    openSound.play().catch(error => {
        console.error("Door sound failed:", error);
    });
    const eggSong = new Audio("assets/eggsong.mp3");
    eggSong.loop = true;
    eggSong.volume = 1.0;
    eggSong.load();
    eggSong.play()
    image.style.display = "none";
    setTimeout(() => {
        image.src = "assets/tree.png";
        image.alt = "Tree";
        image.style.display = "block";
    }, 1000);
});