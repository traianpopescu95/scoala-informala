let url = "https://rarekickscom-default-rtdb.europe-west1.firebasedatabase.app/";
let index = -1;

async function getProducts() {
    const response = await fetch(url + ".json");
    products = await response.json();
    let str = "";
    for (let i = 0; i < products.length; i++) {
        if (products[i] === null) {
            continue;
        }
        str += `
            <tr>
                <td id="name">
                    <img src="${products[i].picture}" />  
                    <a id="link" href="details.html?id=${i}">${products[i].name}</span>
                </td>
                <td>${products[i].price}</td>
                <td>${products[i].stock}</td>
                <td id="editRemove"><img onclick="editStep1(${i});" src="edit.png" /> <img onclick="deleteItem(${i});showDelete()" src="delete.png" /></td>
            </tr>
        `
    }
    document.querySelector("tbody").innerHTML = str;
}

async function deleteItem(idx) {
    if (confirm(`Are you sure do you want to remove ${products[idx].name} from the website?`)) {
        await fetch(url + idx + ".json", {
            method: "DELETE"
        });
        await getProducts();
    }
}

function addItem1() {
    document.querySelector("form").classList.remove("hidden");
    document.querySelector("#admin").classList.add("hidden");
    document.querySelector("#cancel").classList.remove("hidden");
    document.querySelector("#add").classList.add("hidden");

    document.querySelector("#nume").value = "";
    document.querySelector("#picture").value = "";
    document.querySelector("#price").value = "";
    document.querySelector("#stock").value = "";
}

async function addItem2() {
    if (index !== -1) {
        return;
    }
    let nume = document.querySelector("#nume").value;
    let picture = document.querySelector("#picture").value;
    let price = document.querySelector("#price").value;
    let stock = document.querySelector("#stock").value;

    let newObject = {
        "name": nume,
        "picture": picture,
        "price": price,
        "stock": stock
    };

    await fetch(url + products.length + ".json", {
        method: "PUT",
        body: JSON.stringify(newObject),
        headers: { "Content-Type": "application/json" }
    });

    await getProducts();
    hideForm();
}

function hideForm() {
    document.querySelector("form").classList.add("hidden");
    document.querySelector("#admin").classList.remove("hidden");
    document.querySelector("#cancel").classList.add("hidden");
    document.querySelector("#add").classList.remove("hidden");
}

function editStep1(idx) {
    index = idx;
    document.querySelector("form").classList.remove("hidden");
    document.querySelector("#admin").classList.add("hidden");
    document.querySelector("#cancel").classList.remove("hidden");
    document.querySelector("#add").classList.add("hidden");

    document.querySelector("#nume").value = products[idx].name;
    document.querySelector("#picture").value = products[idx].picture;
    document.querySelector("#price").value = products[idx].price;
    document.querySelector("#stock").value = products[idx].stock;
    console.log(products[idx].name);
}

async function editStep2() {
    if (index === -1) {
        return;
    }
    let newName = document.querySelector("#nume").value;
    let newPicture = document.querySelector("#picture").value;
    let newPrice = document.querySelector("#price").value;
    let newStock = document.querySelector("#stock").value;
    let newObject = {
        "name": newName,
        "picture": newPicture,
        "price": newPrice,
        "stock": newStock
    };

    await fetch(url + index + ".json", {
        method: "PUT",
        body: JSON.stringify(newObject),
        headers: { "Content-Type": "application/json" }
    });

    await getProducts();
    hideForm();
    index = -1;
}

function showDialog() {
    document.querySelector(".alertSuccess").classList.remove("hidden");
    document.querySelector("#product").innerText = document.querySelector("#nume").value;
}

function showDelete() {
    document.querySelector(".alertDelete").classList.remove("hidden");
}

function closeBtn() {
    document.querySelector(".alertSuccess").classList.add("hidden");
}