function enterSite() {
    const code = document.getElementById("code").value;
    const msg = document.getElementById("msg");

    if (code === "pinkrot") {
        window.location.href = "videos.html";
    } else {
        msg.innerText = "";
        setTimeout(() => {
            msg.innerText = " ";
        }, 300);
    }
}
let startTime = Date.now();

function updateRot() {
    let seconds = (Date.now() - startTime) / 1000;
    let body = document.body;

    body.classList.remove("rot1","rot2","rot3","rot4","rot5");

    if (seconds > 10) body.classList.add("rot1");
    if (seconds > 25) body.classList.add("rot2");
    if (seconds > 45) body.classList.add("rot3");
    if (seconds > 70) body.classList.add("rot4");
    if (seconds > 100) body.classList.add("rot5");

    requestAnimationFrame(updateRot);
}

updateRot();
const kuyaLines = [
    "kūya was here.",
    "don’t follow him again.",
    "you walked too far that night.",
    "he didn’t disappear alone.",
    "something was already there.",
    "you remember wrong."
];

function spawnGhostText() {
    const text = document.createElement("div");
    text.innerText = kuyaLines[Math.floor(Math.random() * kuyaLines.length)];

    text.style.position = "fixed";
    text.style.left = Math.random() * window.innerWidth + "px";
    text.style.top = Math.random() * window.innerHeight + "px";
    text.style.color = "rgba(255, 182, 193, 0.4)";
    text.style.fontSize = "12px";
    text.style.pointerEvents = "none";
    text.style.zIndex = "9999";
    text.style.filter = "blur(0.5px)";

    document.body.appendChild(text);

    setTimeout(() => {
        text.remove();
    }, 2500);
}

setInterval(() => {
    if (Math.random() > 0.92) {
        spawnGhostText();
    }
}, 3000);
