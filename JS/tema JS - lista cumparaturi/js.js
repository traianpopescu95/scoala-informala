let iteme = {};

let url = "https://shopping-list-app-dd30c-default-rtdb.europe-west1.firebasedatabase.app/";

async function getIteme() {
    let response = await fetch(url + ".json")
    iteme = await response.json();
    draw();
}

function draw() {
    let str = "";
    //for (let i = 0; i < iteme.length; i++) {
    for(let [i, item] of Object.entries(iteme)){
        if (item.checked === false) {
            str += `
                <div class="newItem">
                    <img class="bullet" src="bullet.png"/>
                    <span class="item">${item.nume}</span>
                    <i onclick="check(${i});" class="fas fa-check checked"></i>
                </div>
            `
        }
        else str += `
            <div class="newItem">
                <img class="bullet" src="bullet.png"/>
                <span class="item striked">${item.nume}</span>
                <i onclick="check(${i});" class="fas fa-check checked"></i>
            </div>
        `
    }
    document.querySelector(".items").innerHTML = str;
}

async function addItem() {
    let newItem = document.querySelector("[name='input']").value;
    let newObject = {
        "nume": newItem,
        "checked": false
    };

    await fetch(url + ".json", {
        method: "POST",
        body: JSON.stringify(newObject),
        headers: {"Content-Type": "application/json"}
    });

    getIteme();
    document.querySelector("[name='input']").value = "";
}

function sortDesc() {
    iteme.sort(function (a, b) {
        if (a.nume < b.nume)
            return -1;
        if (a.nume > b.nume)
            return 1;
        else return 0;
    });
    draw();
}

function sortAsc() {
    iteme.sort(function (a, b) {
        if (a.nume < b.nume)
            return 1;
        if (a.nume > b.nume)
            return -1;
        else return 0;
    });
    draw();
}

function checkKey(e) {
    if (e.which === 13) {
        addItem();
    }
}

function check(idx) {
    iteme[idx].checked = !iteme[idx].checked;
    draw();
}