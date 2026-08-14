let t =  "";

document.addEventListener("keydown", (event) => {
    t += event.key.toLowerCase()
    if (t.length > 9) {
        t = t.slice(-9);
    }
    if (t === "deltarune") {
        document.getElementById("style").href = "css/deltarune.css";
    }
})