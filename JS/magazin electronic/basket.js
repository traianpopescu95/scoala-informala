let storage = window.localStorage;
let url = "https://rarekickscom-default-rtdb.europe-west1.firebasedatabase.app/";

async function getBasket() {
    document.querySelector(".loader").classList.remove("hidden");
    const response = await fetch(url + ".json");
    products = await response.json();

    let str = "";
    for (let i of Object.keys(storage)) {
        if (products[i] === null) {
            continue;
        }
        let price = products[i].price.substr(2, 3);
        let qty = storage[i];
        let subtotal = price * qty;

        str += `
                <tr>
                    <td id="name">
                        <img src="${products[i].picture}" />  
                        <a id="link" href="details.html?id=${i}">${products[i].name}</a>
                    </td>
                    <td id="price">${products[i].price}</td>
                    <td id="flex">
                        <button onclick="decrease(${i});">-</button>
                        <span id="qty">${storage[i]}</span>
                        <button onclick="increase(${i})">+</button>
                    </td>
                    <td id="subtotal">$ ${subtotal}</td>
                    <td id="remove" onclick="remove(${i});"><img src="delete.png" /></td>
                </tr>
                `
    }
    document.querySelector("tbody").innerHTML = str;
    document.querySelector(".loader").classList.add("hidden");
}

function decrease(idx) {
    if (storage[idx] > 0) {
        storage[idx]--;
        getBasket();
    }
}

function increase(idx) {
    if (storage[idx] <= 29) {
        storage[idx]++;
        getBasket();
    }
}

function remove(idx) {
    if(confirm(`Are you sure do you want to remove ${products[idx].name} from the basket?`)){
        storage.removeItem(idx);
        getBasket();
    }
}