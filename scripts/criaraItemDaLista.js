import gerarDiaDaSemana from "./gerarDiaDaSemana.js";

const inputItem = document.getElementById ("input-item");
let contador = 0;

export function criaritemDaLista() {
    
    if (inputItem.value === "" || inputItem.value === " ") {
        alert("Por favor, insitra um item!");
        return
    } 
    const itemDaLista = document.createElement("li");

    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");

    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador++;

    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;

    inputCheckbox.addEventListener("click", function() {
        if (inputCheckbox.checked) {
            nomeItem.style.textDecoration = "line-through";
        } else {
            nomeItem.style.textDecoration = "none";
        }
    })

    const dataCompleta = gerarDiaDaSemana();
    
    const dataItemDaLista = document.createElement("p");
    dataItemDaLista.classList.add("texto-data");
    dataItemDaLista.innerText = dataCompleta;    

    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);

    itemDaLista.appendChild(containerItemDaLista);
    itemDaLista.appendChild(dataItemDaLista);

    return itemDaLista;
}