import { criaritemDaLista } from "./scripts/criaraItemDaLista.js";
import verificarListaVazia from "./scripts/verificarListaVazia.js";

const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");

function verificarCaixaDeSelecao() {
    let texto = document.getElementById("nome-do-item");
    let caixa = document.getElementById ("checkbox-1")
    if (caixa.checked) {
        texto.style.textDecoration = "line-through";
    } else {
        texto.style.textDecoration = "none";
    }
}

botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    const itemDaLista = criaritemDaLista();
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia(listaDeCompras);
});

verificarListaVazia(listaDeCompras);