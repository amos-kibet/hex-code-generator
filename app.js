// To Do: Include all 256 hex color codes.
const colors = ["#AA869E", "#36271D", "#30E7C8", "#9DA93C", "#D43494", "#62B5FF", "#EFBBC6", "#522E48", "#542BD5", "#009AE0", "#532671", "#791926", "#173D21", "#BB75D9", "#AB3AB9", "#7D51F5"];
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