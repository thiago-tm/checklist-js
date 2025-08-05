import {criarItemDaLista } from "./scripts/criarItemDaLista.js";
const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");

botaoAdicionar.addEventListener("click", (event) => {
    event.preventDefault(); //impede que um link abra uma nova página
    const itemDaLista = criarItemDaLista();
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia();
});

const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

function verificarListaVazia(){
    const itemLista = listaDeCompras.querySelectorAll("li");

    if (itemLista.length === 0) {
        mensagemListaVazia.style.display = "block";
    } else {
        mensagemListaVazia.style.display = "none";
    }
}

verificarListaVazia();