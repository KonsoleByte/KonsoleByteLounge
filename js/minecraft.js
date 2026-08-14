// GET THAT VIEW PAGE SOURCE CODE BUTTON OUT OF HERE NOW! I DONT EVER WANNA SEE IT AGAIN!
// I mean WHAT was the internet thinking?! A button that just REVEALS everything?!
// Web ARGs are ruined!
// I mean, I wanted to make an ARG thats FAIR and SQUARE but that button ruins EVERYTHING!
// So next time, the clues wont be as easy to find.
// I hate cheaters. You should have never seen this part of the code in the first place.
// also yes, im hardcoding the "password", I am not making a whole web server for this

function codeIg() {
    const i = document.getElementById("passInput").value;
    const p = document.getElementById("reveal"); 
    if (i.toLowerCase() === "time") {
        p.textContent = "vault.konsolebyte.com"
    } else {
        window.location.href = "404.html"
    }
}