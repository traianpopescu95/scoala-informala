let url = "https://magazin-virtual-default-rtdb.europe-west1.firebasedatabase.app/";

async function getProducts() {
    document.querySelector(".loader").classList.remove("hidden");
    let response = await fetch(url + ".json");
    products = await response.json();
    document.querySelector(".loader").classList.add("hidden");
    draw();
}

function draw() {
    let str = "";
    for(let i=0;i<products.length;i++) {
        str += `
                <div class="product">
                    <a href="details.html?id=${i}"><img id="picture" src="${products[i].picture}" /></a>
                    <h4 id="name">${products[i].name}</h4>
                    <div class="priceDetails">
                        <span id="price">${products[i].price}</span>
                        <a href="details.html?id=${i}"><button id="details">DETAILS</button></a>
                    </div>
                </div>
        `
    }
    document.querySelector(".main").innerHTML = str;
}

