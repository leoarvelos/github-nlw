// Procurar o botão
document.querySelector('#add-time')

// Quando clicar no botão
.addEventListener('click', cloneField)

//Executar uma ação
function cloneField() {
    //Duplicar os campos
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true) //boolean
    //Pegar os campos
    const fields = newFieldContainer.querySelectorAll('input')
    //para cada campo, limpar
 /*    fields[0].value = ""
    fields[1].value = "" */ //não é legal fazer para cada campo

    fields.forEach(function(field) {
        //pegar o field do momento e limpa ele
        field.value = ""
    })

    //Colocar na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}