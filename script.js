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
