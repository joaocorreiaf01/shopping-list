// Selecionando os elementos
const input = document.getElementById("item")
const form = document.querySelector("form")
const footer = document.querySelector("footer")
const imgBinItem = document.querySelector("a img")
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

    // Chamando a função para criar os items
    createElement()
})


// Função para adicionar na lista o item digitado
function createElement () {

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
    img.classList.add("delete-items")
}


// Usando delegação de eventos
// a propriedade target vai capturar onde foi o evento na hora do clique
// o closest vai buscar a classe .delete-items acima
// Se não encontrar, retorna null (false) e não ativa a condicional
// (Isso faz com que o evento só aconteça de fato quando clicar onde tem a classe delete-items (na imagem da lixeira))

form.addEventListener("click", (event) => {
    const imgBinItems = event.target.closest(".delete-items")

    if (imgBinItems) {
        event.preventDefault()
        const divDeleteItem = imgBinItems.closest(".style-content")
        divDeleteItem.remove()
        footer.classList.add("show-result")
    }
})

// Evento de clique na imagem de deletar o footer e remoção da classe
imgBinClassFooter.addEventListener("click", (event) => {
    footer.classList.remove("show-result")
})


