let lista = [];

let url = "https://restaurant-practica-54d8b-default-rtdb.europe-west1.firebasedatabase.app/";

async function getLista() {
    document.querySelector(".lds-facebook").classList.remove("hidden");
    const response = await fetch(url + ".json");
    lista = await response.json();
    draw();
    document.querySelector(".lds-facebook").classList.add("hidden");

}

function draw() {
    let str="";
    for(let i=0;i<lista.length;i++) {
        let strIngrediente = "";
        let ingrediente = lista[i].ingrediente;
        for(let j=0;j<ingrediente.length;j++){
            strIngrediente += `${ingrediente[j].valoare} ${ingrediente[j].um} ${ingrediente[j].numeIngredient}`
        }
        str += `
            <div class="produs">
                <img src=${lista[i].poze[0]}/>
                <h4>${lista[i].nume}</h4>
                <p>${strIngrediente}</p>
                <a href="detalii.html?id=${i}"><button>Detalii</button></a>
            </div>
        `
    }
    document.querySelector(".main").innerHTML = str;
}

function cauta() {
    let cuvantCautat = document.querySelector("[name='search']").value; // luam cuvantul
    let produse = document.querySelectorAll(".produs"); // luam toate elementele unde cautam 
    for(let i=0;i<produse.length;i++) {     //le parcurgem
        let produs = produse[i];    //luam fiecare element in parte intr-o bucla
        let text = produs.querySelector("p").innerText; //luam textul unde vrem sa cautam
        if(!text.includes(cuvantCautat)) {  //daca cuvantul nu se afla in text
            produs.classList.add("hidden");     //ascundem elementul
        }
        else produs.classList.remove("hidden");

    }
}