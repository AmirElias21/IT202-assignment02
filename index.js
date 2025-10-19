

const rsi = document.getElementById("revStrInput");
const rsb = document.getElementById("revStrBtn");
const rso = document.getElementById("revStrOutput");

rsb.addEventListener("click", () => {
    const text = rsi.value;
    let str = "";

    for (let i = text.length - 1; i >= 0; i--) {
        str += text[i];
    }

    rso.textContent = str;
});



const pni = document.getElementById("palNumInput"); 
const pnb = document.getElementById("palNumBtn");
const pno = document.getElementById("palNumOutput");

pnb.addEventListener("click", () => {
    const num = pni.valueAsNumber;

    let i_one = Math.floor(num % 10);
    let i_two = Math.floor((num % 100) / 10);
    let i_three = Math.floor(((num - i_one * 100) - (i_two * 10)));

    pno.textContent = i_one === i_three ? "Is Palindrome!" : "It Is Not Palindrome!";
});



const tci = document.getElementById("tipCalcInput");
const tpi = document.getElementById("tipPctInput");
const tcb = document.getElementById("tipCalcBtn");
const tco = document.getElementById("tipCalcOutput");

tcb.addEventListener("click", () => {
    const subtotal = Number(tci.value);
    const pct = Number(tpi.value);

    const tip = subtotal * (pct / 100);
    const total = subtotal + tip;

    tco.textContent = "Tip: $" + tip + ", Total: $" + total;
});