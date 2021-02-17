let lista = [];
let url = "https://restaurant-practica-54d8b-default-rtdb.europe-west1.firebasedatabase.app/";

async function getLista () {
    const response = await fetch(url + ".json");
    lista = await response.json();
    draw();
}


let index = window.location.search.substr(4);

function draw() {
    document.querySelector("#nume").innerText = lista[index].nume;
    document.querySelector("#poze").src = lista[index].poze[0];
    document.querySelector("#preparare").innerText = lista[index].preparare;
    let strIngrediente = "";
    let ingrediente = lista[index].ingrediente;
    for(let i=0;i<ingrediente.length;i++) {
        strIngrediente += `<li>${ingrediente[i].valoare} ${ingrediente[i].um} ${ingrediente[i].numeIngredient}</li>`
    }
    document.querySelector("#ingrediente").innerHTML = strIngrediente;
}