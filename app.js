// Include all 256*256*256 hex color codes.
const colors = [...Array(16777216).keys()].map(i => `#${i.toString(16).padStart(6, '0')}`);

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    let hexColor = getRandomNumber();
    console.log(hexColor); // Log color index in array
    color.textContent = colors[hexColor];
    document.body.style.backgroundColor = colors[hexColor];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}
