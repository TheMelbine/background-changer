const button = document.getElementById("btn")
const color = document.querySelector(".color")
const copyHex = document.getElementById("copy")
const colors = ["#ff0000", "#fbb034", "#ffdd00","#00a4e4","#8a7967"]
let hexColor = getRandomNumber()
button.addEventListener("click", () => {
    const hexColor = getRandomNumber()
    window.hexColor = hexColor
    color.style.color = hexColor
    document.body.style.backgroundColor = hexColor
    color.textContent = hexColor

})

function getRandomNumber(){
    return ('#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'));
}

copyHex.addEventListener("click", () => {
    navigator.clipboard.writeText(window.hexColor);
    color.textContent = hexColor
    new Toast({
        title: 'Цвет был скопирован',
        text: hexColor,
        autohide: true,
        interval: 4000
      });
})




