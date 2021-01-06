let iteme = [];

function draw() {
    let str = "";
    for (let i = 0; i < iteme.length; i++) {
        if (iteme[i].checked === false) {
            str += `
                <div class="newItem">
                    <img class="bullet" src="bullet.png"/>
                    <span class="item">${iteme[i].nume}</span>
                    <i onclick="check(${i});" class="fas fa-check checked"></i>
                </div>
            `
        }
        else str += `
            <div class="newItem">
                <img class="bullet" src="bullet.png"/>
                <span class="item striked">${iteme[i].nume}</span>
                <i onclick="check(${i});" class="fas fa-check checked"></i>
            </div>
        `
    }
    document.querySelector(".items").innerHTML = str;
}

function addItem() {
    let newItem = document.querySelector("[name='input']").value;
    iteme.push({
        "nume": newItem,
        "checked": false
    });
    draw();
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