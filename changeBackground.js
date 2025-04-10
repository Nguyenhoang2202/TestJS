function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function blackWhile() {
    const body = document.querySelector("body");
    const style = window.getComputedStyle(body);
    const Color = style.backgroundColor;
    if (Color === "rgb(0, 0, 0)") {
        body.style.background = "#fff";
    } else {
        body.style.background = "#000";
    }
}

function background() {
    document.querySelector("body").style.backgroundColor = getRandomColor();
}

intervalID = null;
function flashBang() {
    const body = document.querySelector("body");
    if (intervalID == null) {
        intervalID = setInterval(() => {
            body.style.background = getRandomColor();
        }, 1);
    } else {
        clearInterval(intervalID);
        intervalID = null;
    }
}

const btn1 = document.getElementById("changeBackground-btn")
btn1.onclick = flashBang;