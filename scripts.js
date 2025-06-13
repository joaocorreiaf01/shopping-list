// Selecionando os elementos
const input = document.getElementById("item")
const form = document.querySelector("form")
const footer = document.querySelector("footer")
const imgsBinItems = document.querySelectorAll("a img")
const imgBinClassFooter = document.querySelector("#delete-footer")

// Input recebendo apenas letras, não números
input.addEventListener("input",() => {
    const regex = /\d+/g
    input.value = input.value.replace(regex, "")
    
})

// Recuperando o valor do input e chamando a função para adicionar na lista
form.addEventListener("submit", (event) => {
    event.preventDefault()
    value = input.value
    createElement(value)
})


// Função para adicionar na lista o item digitado
function createElement (valueText) {

    // Criação dos elementos
    const div = document.createElement("div")
    const input = document.createElement("input")
    const label = document.createElement("label")
    const a = document.createElement("a")
    const img = document.createElement("img")

    // Colocando um dentro do outro
    a.append(img)
    div.append(input)
    div.append(label)
    div.append(a)
    form.append(div)

    // Adicionando seus respectivos id, classes e atributos
    div.classList.add("style-content")

    input.setAttribute("type", "checkbox")
    input.id = value.replace(" ", "").toLocaleLowerCase()
    input.setAttribute("name", "items")
    input.setAttribute("value", input.id)

    label.setAttribute("for", input.id)
    label.classList.add("items")
    label.textContent = value

    a.setAttribute("href", "#")

    img.setAttribute("src", "assets/icons/bin.svg")
}

// Chamando todas as imagens de bin selecionadas e percorrendo o evento em cada uma (pois o método remove não funciona em HTML Collections (coleção de elementos))
// Callback function tendo img como parâmetro
imgsBinItems.forEach(img => {
    try {
        img.addEventListener("click", (event) => {
        event.preventDefault()
        // Vai procurar a classe style-content subindo a partir de img e remover
        img.closest(".style-content").remove()

        // Vai adicionar a classe show-result, tornando o footer visível
        footer.classList.add("show-result")
        })
    } catch {
        alert ("Não foi possível excluir o item da lista. Tente novamente!")
    }
})


// Evento de clique na imagem de deletar o footer e remoção da classe
imgBinClassFooter.addEventListener("click", (event) => {
    footer.classList.remove("show-result")
})


