let number = prompt("Enter the number")
let btn = document.querySelector("#btn")

function calc(number) {
    let natija = (number ** 2)
    return natija;
}
let natija = calc(number);

btn.addEventListener("click" , () => {
    document.querySelector(".box").innerHTML = natija;
})