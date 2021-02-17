let url = "https://magazin-virtual-default-rtdb.europe-west1.firebasedatabase.app/";
let index = window.location.search.substr(4);
let stock;

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
    if(desiredQty!==""){
        if (stock > 0 && stock >= desiredQty) {
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

    console.log(stock, desiredQty, window.localStorage);
}

function closeBtn() {
    document.querySelector(".alertSuccess").classList.add("hidden");
}

function closeBtn2() {
    document.querySelector(".alertFailure").classList.add("hidden");
}