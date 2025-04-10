let totalCount = 0;
function count() {
    totalCount += 1;
    const divCount = document.getElementById("countClick");
    divCount.innerHTML = String(totalCount);
}

const btn = document.getElementById("countClick-btn");
btn.onclick = count;