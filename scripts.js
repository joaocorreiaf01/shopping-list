// Selecionando os elementos
const input = document.getElementById("item")

// Input recebendo apenas letras, não números
input.addEventListener("input",() => {
    const regex = /\d+/g
    input.value = input.value.replace(regex, "")
})

