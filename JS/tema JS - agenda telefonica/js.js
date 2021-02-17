let contacte = {};

let indexEditare = -1;

let url = "https://agenda-telefonica-2042d-default-rtdb.europe-west1.firebasedatabase.app/";

async function getContacte() {
    const response = await fetch(url + ".json");
    contacte = await response.json();
    draw();
}

function draw() {
    document.querySelector("[name='nume']").value = "";
    document.querySelector("[name='numar']").value = "";

    let str = "";
    //for (let i = 0; i < contacte.length; i++) {
    if (contacte || contacte === undefined) {
        for (let [i, contact] of Object.entries(contacte)) {
            str += `
        <tr>
            <td>${contact.nume}</td>
            <td>${contact.numar}</td>
            <td><img onclick="edit('${i}')" class="image" src="edit.png"/></td>
            <td><img onclick="del('${i}');" class="image" src="delete.png"/></td>
        </tr>
        `
        }
    }
    document.querySelector("tbody").innerHTML = str;
}

async function addContact() {
    if (indexEditare !== -1) {
        return;
    }
    let nume = document.querySelector("[name='nume']").value;
    let numar = document.querySelector("[name='numar']").value;
    if (nume !== "" && numar !== "") {
        let newObject = {
            "nume": nume,
            "numar": numar
        };
        await fetch(url + ".json", {
            method: "POST",
            body: JSON.stringify(newObject),
            headers: { "Content-Type": "application/json" }
        });

        getContacte();
    }

    document.querySelector("[name='nume']").value = "";
    document.querySelector("[name='numar']").value = "";
}

async function del(idx) {
    if (confirm(`Are you sure do you want to delete this contact?`)) {
        await fetch(url + idx + ".json", {
            method: "DELETE"
        });
        await getContacte();
    }
}

function limitTyping1(event) {
    let text = document.querySelector("[name='nume']").value;
    if (text.length > 9) {
        event.preventDefault();
    }
}

function limitTyping2(event) {
    let nr = document.querySelector("[name='numar']").value;
    if (nr.length > 9 || event.which < 48 || event.which > 57) {
        event.preventDefault();
    }
}


function checkKey(event) {
    if (event.which === 13) {
        if (indexEditare === -1) {
            addContact();
        }
        else edit2();
    }
}

function edit(idx) {
    document.querySelector("[name='nume']").value = contacte[idx].nume;
    document.querySelector("[name='numar']").value = contacte[idx].numar;

    indexEditare = idx;
}

async function edit2() {
    if (indexEditare === -1) {
        return;
    }
    let numeNou = document.querySelector("[name='nume']").value;
    let nrNou = document.querySelector("[name='numar']").value;

    let newObject = {
        nume: numeNou,
        numar: nrNou
    }
    await fetch(url + indexEditare + ".json", {
        method: "PUT",
        body: JSON.stringify(newObject),
        headers: { "Content-Type": "application/json" }
    });
    await getContacte();

    indexEditare = -1;
}
