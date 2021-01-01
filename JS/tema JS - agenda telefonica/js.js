let contacte = [
    {
        "nume": "Friend",
        "numar": "0712345678"
    }
]

let indexEditare = -1;

function draw() {
    document.querySelector("[name='nume']").value = "";
    document.querySelector("[name='numar']").value = "";

    let str = "";
    for (let i = 0; i < contacte.length; i++) {
        str += `
        <tr>
            <td>${contacte[i].nume}</td>
            <td>${contacte[i].numar}</td>
            <td><img onclick="edit(${i})" class="image" src="edit.png"/></td>
            <td><img onclick="del(${i});" class="image" src="delete.png"/></td>
        </tr>
        `
    }
    document.querySelector("tbody").innerHTML = str;
}

function addContact() {
    if (indexEditare !== -1) {
        return;
    }
    let nume = document.querySelector("[name='nume']").value;
    let numar = document.querySelector("[name='numar']").value;
    if (nume !== "" && numar !== "") {
        contacte.push(
            {
                "nume": nume,
                "numar": numar
            }
        );
        draw();
    }

    document.querySelector("[name='nume']").value = "";
    document.querySelector("[name='numar']").value = "";
}

function del(idx) {
    if (confirm(`Are you sure do you want to delete ${contacte[idx].nume}?`)) {
        contacte.splice(idx, 1);
        draw();
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
        if(indexEditare === -1){
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

function edit2() {
    if (indexEditare === -1) {
        return;
    }
    let numeNou = document.querySelector("[name='nume']").value;
    let nrNou = document.querySelector("[name='numar']").value;
    contacte[indexEditare].nume = numeNou;
    contacte[indexEditare].numar = nrNou;
    draw();
    indexEditare = -1;
}
