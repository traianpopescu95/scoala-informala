let url = "https://rarekickscom-default-rtdb.europe-west1.firebasedatabase.app/";

async function getProducts() {
    document.querySelector(".loader").classList.remove("hidden");
    let response = await fetch(url + ".json");
    products = await response.json();
    document.querySelector(".loader").classList.add("hidden");
    draw();
    console.log(products);
}

function draw() {
    let str = "";
	let searchedFor = document.querySelector("#search").value;
	
    for(let i=0;i<products.length;i++) {
        if(products[i]===null) {
            continue;
        }
		if(!products[i].name.toLowerCase().includes(searchedFor.toLowerCase())){
			continue;
		}
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

