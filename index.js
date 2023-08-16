
// DECLARALÇÃO DAS VARIAVEIS
const main = document.querySelector("main")
const root = document.querySelector(":root")
const input = document.getElementById("input")
const resultInput = document.getElementById("result")
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

// ISERINDO FUNCIONALIDADE PARA OS "BOTOES" 
document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  charKeyBtn.addEventListener("click", function () {
    const value = charKeyBtn.dataset.value
    input.value += value
  })
})

// ISERINDO FUNCIONALIDADE PARA O BOTAO "LIMPAR"
document.getElementById("clear").addEventListener("click", function () {
  input.value = ""
  input.focus
})

// INSERINDO FUNCIONALIDADE AS TECLAS QUE PODEM SERACIONADAS INCLUINDO "BACKSPACE" E "ENTER"
input.addEventListener("keydown", function (ev) {
  ev.preventDefault()
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key
    return
  }
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1)
  }
  if (ev.key === "Enter") {
    calculete()
  }
})


// ADIONANDO A SAÍDA (RESULTADO DA OPERAÇÃO DO USUARIO)
document.getElementById("equal").addEventListener("click", calculete)

function calculete() {

  const result = eval(input.value)
  resultInput.value = result
}