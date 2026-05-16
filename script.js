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
