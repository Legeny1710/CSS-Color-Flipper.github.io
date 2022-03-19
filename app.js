const colors = ["linear-gradient(90deg, #1CB5E0 0%, #000851 100%)", 
"linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)", 
"linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)", 
"linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%)", 
"linear-gradient(90deg, #f8ff00 0%, #3ad59f 100%)", 
"linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)", 
"linear-gradient(90deg, #FDBB2D 0%, #22C1C3 100%)", 
"linear-gradient(90deg, #4b6cb7 0%, #182848 100%)", 
"linear-gradient(90deg, #3F2B96 0%, #A8C0FF 100%)", 
"linear-gradient(90deg, #efd5ff 0%, #515ada 100%)",
"linear-gradient(90deg, #d53369 0%, #daae51 100%)",
]

let Btn = document.getElementById("btn")
let colorEl = document.getElementById("color-el")

function SwitchColor() {
    const randomNumber = getRandomColor()
    document.body.style.background = colors[randomNumber]
    colorEl.textContent = colors[randomNumber]

}

function getRandomColor() {
    return Math.floor(Math.random()*colors.length)
}

