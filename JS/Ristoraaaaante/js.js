let lista = [
    {
        "poze": ["https://www.agro.basf.ro/Pictures/migrated_pictures/imagini_articole_pictures/articol_seo_cultura_porumbului_pictures/cultura_porumb_hibrizi_750x422.jpg"],
        "nume": "Ciolan",
        "ingrediente": [
            {
                "numeIngredient": "carne pui",
                "valoare": 500,
                "um": "g"
            },
            {
                "numeIngredient": "oua",
                "valoare": 5,
                "um": "buc"
            }
        ],
        "preparare": "......",
        "timpPreparare": 75
    },
    {
        "poze": ["https://cich.ro/wp-content/uploads/2017/09/Grau1.jpg"],
        "nume": "Grau",
        "ingrediente": [
            {
                "numeIngredient": "carne pui",
                "valoare": 200,
                "um": "g"
            },
            {
                "numeIngredient": "oua",
                "valoare": 5,
                "um": "buc"
            },
            {
                "numeIngredient": "oua",
                "valoare": 3,
                "um": "buc"
            }
        ],
        "preparare": "......",
        "timpPreparare": 75
    },
    {
        "poze": ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Pylon_ds.jpg/220px-Pylon_ds.jpg"],
        "nume": "Stalp",
        "ingrediente": [
            {
                "numeIngredient": "carne pui",
                "valoare": 100,
                "um": "g"
            },
            {
                "numeIngredient": "carne pui",
                "valoare": 100,
                "um": "g"
            },
            {
                "numeIngredient": "oua",
                "valoare": 5,
                "um": "buc"
            }
        ],
        "preparare": "......",
        "timpPreparare": 75
    },
    {
        "poze": [],
        "nume": "TYYYYYY",
        "ingrediente": [
            {
                "numeIngredient": "carne pui",
                "valoare": 100,
                "um": "g"
            },
            {
                "numeIngredient": "carne pui",
                "valoare": 100,
                "um": "g"
            },
            {
                "numeIngredient": "oua",
                "valoare": 5,
                "um": ""
            }
        ],
        "preparare": "......",
        "timpPreparare": 75
    }
];

function draw() {
    let cuvantCautat = document.querySelector("[name='search']").value;
    let str="";
    for(let i=0;i<lista.length;i++) {
        let ingrediente = lista[i].ingrediente; //array de obiecte ^
        let strIngrediente = "";
        for(let j=0;j<ingrediente.length;j++) {
            strIngrediente += `${ingrediente[j].valoare} ${ingrediente[j].um} ${ingrediente[j].numeIngredient} `
        }
        let poza = lista[i].poze[0];
        if(lista[i].poze[0] === undefined) {
            poza = "https://image.shutterstock.com/image-vector/no-image-available-sign-absence-260nw-373243873.jpg";
        }
        if(strIngrediente.includes(cuvantCautat)) {
            str += `
                <div class="menu-item">
                    <img src="${poza}"/>
                    <div class="menu-description">
                        <div>${lista[i].nume}</div>
                        <div>${strIngrediente}</div>
                    </div>
                    <button>Detalii</button>
                </div>
            `
        }
    }
    document.querySelector("#menu-list").innerHTML = str;
}

function cauta() {
    let cuvantCautat = document.querySelector("[name='search']").value;
    let menuItems = document.querySelectorAll(".menu-item");

    for(let i=0;i<menuItems.length;i++) {
        let menuItem = menuItems[i];
        let text = menuItem.querySelector(".menu-description div:nth-child(2)").innerText;
        if(!text.includes(cuvantCautat)) {
            menuItem.classList.add("hidden");
        }
        else menuItem.classList.remove("hidden");
    }
}