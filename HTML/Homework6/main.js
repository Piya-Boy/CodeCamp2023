
const createElements = () => {
    const counter = document.querySelector(".counter");
    const body = document.querySelector("body");

  const h1 = document.createElement("h1");
    h1.textContent = "Counter";

    const h3 = document.createElement("h3");
    h3.classList.add("number");
    h3.textContent = 0;
        
    const btnplus = document.createElement("button");
    btnplus.classList.add("btn", "btn-plus");
    btnplus.textContent = "+";

    const btnDec = document.createElement("button");
    btnDec.classList.add("btn", "btn-dec");
    btnDec.textContent = "-";

    const btnClr = document.createElement("button");
    btnClr.classList.add("btn", "btn-clr");
    btnClr.textContent = "C";

    body.append(h1, counter);
    counter.append(btnplus, h3,btnDec, btnClr);



}

createElements();


const number = document.querySelector(".number");
const plusbtn = document.querySelector(".btn-plus");
const delbtn = document.querySelector(".btn-dec");
const clrbtn = document.querySelector(".btn-clr");

plus = (num) => {
    number.textContent = Number(number.textContent) + num;
}
plusbtn.addEventListener("click", () => {
    plus(1);
})

del = (num) => {
    if (Number(number.textContent) > 0) {
        number.textContent = Number(number.textContent) - num;
    }
    
}
delbtn.addEventListener("click", () => {
    del(1);
})

clr = () => {
    number.textContent = 0;
}

clrbtn.addEventListener("click", () => {
    clr();
})