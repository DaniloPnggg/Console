const input = document.querySelector(`#textbox`)
let isClicked = false

input.addEventListener(`keypress`, function (e) {
    if (e.key === `Enter`) {
        const inputValue = input.value
        if (inputValue === `/help`) {
            alert(`Teste`)
        } else {
            alert(`Comando errado`)
        }
    }
})


