const input = document.getElementById("item")
const form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log(input.value)
})