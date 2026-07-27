const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

export default function verificarListaVazia(listaDeCompras) {
    const itemDaLista = listaDeCompras.querySelectorAll("li");
    if (itemDaLista.length === 0) {
        mensagemListaVazia.style.display = "block";
    } else {
        mensagemListaVazia.style.display = "none";
    }
}