let url = "https://rarekickscom-default-rtdb.europe-west1.firebasedatabase.app/";
let index = window.location.search.substr(4);
let stock;
let basketSize = 0;

async function getProduct() {
    document.querySelector(".loader").classList.remove("hidden");
    const response = await fetch(url + index + ".json");
    product = await response.json();
    document.querySelector("#picture").src = product.picture;
    document.querySelector("#name").innerText = product.name;
    document.querySelector("#price").innerText = product.price;
    document.querySelector("#stock").innerText = product.stock;
    document.querySelector(".loader").classList.add("hidden");
    stock = product.stock;
}

let desiredQty = 0;


function addToCart() {
    desiredQty = document.querySelector("#quantity").value;
    if (desiredQty !== "") {
        if (stock >= desiredQty) {

            if (window.localStorage[index] == undefined) {
                localStorage.setItem(index, desiredQty);
            }
            else { window.localStorage[index] = Number(window.localStorage[index]) + Number(desiredQty); }

            stock = stock - desiredQty;

            document.querySelector(".alertSuccess").classList.remove("hidden");
            document.querySelector("#product").innerText = document.querySelector("#name").innerText;
        }
        else {
            document.querySelector(".alertFailure").classList.remove("hidden");
        }
    }
    setTimeout(closeBtn2, 3000);
    setTimeout(closeBtn, 3000);
    console.log(stock, desiredQty, window.localStorage, basketSize);
}

function closeBtn() {
    document.querySelector(".alertSuccess").classList.add("hidden");
}

function closeBtn2() {
    document.querySelector(".alertFailure").classList.add("hidden");
}

function changeTab(button, idx) {
    let oldActiveButton = document.querySelector(".buttonActive");
    oldActiveButton.classList.remove("buttonActive");

    button.classList.add("buttonActive");

    if (idx === 0) {
        document.querySelector(".extra").classList.add("hidden");
        document.querySelector("#price").classList.remove("hidden");
        document.querySelector(".stock").classList.remove("hidden");
        document.querySelector(".quantity").classList.remove("hidden");
        document.querySelector(".more").classList.remove("hidden");
    }
    else
        if (idx === 1) {
            document.querySelector("#price").classList.add("hidden");
            document.querySelector(".stock").classList.add("hidden");
            document.querySelector(".quantity").classList.add("hidden");
            document.querySelector(".more").classList.add("hidden");
            document.querySelector(".extra").classList.remove("hidden");
        }
}