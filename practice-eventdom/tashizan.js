
function plus() {
    let a = document.querySelector("span#answer");
    let x = document.querySelector("input[name=left]");
    let xv = parseInt(x.value);
    let y = document.querySelector("input[name=right]");
    let yv = parseInt(y.value);
    let ans = xv + yv;
    a.textContent = ans;
}
let b = document.querySelector("button#calc");
b.addEventListener("click",plus);