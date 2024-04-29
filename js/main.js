let lista = [
    "pippo",
    "caio",
    "sempronio",
    "semaforo",
    "penna",
    "arcobaleno",
    "giocattoli",
    "v3rde",
    "macchina",
]

// for (let i = 0; i < lista.length; i++) {
//     console.log(lista[i]);
    
// }

const contLista = document.querySelector(".lista");




i = 0;

while (i < lista.length) {
    // console.log(lista[i]);
    const elementsLista = document.createElement("li");
    elementsLista.innerHTML = lista[i]
    contLista.append(elementsLista);
    i++;
}