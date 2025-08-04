const inputItem = document.getElementById("input-item");
let contador = 0; 

const botaoAdicionar = document.getElementById('adicionar-item');

botaoAdicionar.addEventListener("click", (event) => {
    event.preventDefault(); //impede que um link abra uma nova página
    if (inputItem.value === "") {
        alert("Por favor, insira um item!");
        return;
    }

    const itemDaLista = document.createElement("li");
    console.log(itemDaLista);
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");
    const inputCheckBox = document.createElement("input");
    inputCheckBox.type = "checkbox";
    inputCheckBox.id = "checkbox-"+ contador++;


});