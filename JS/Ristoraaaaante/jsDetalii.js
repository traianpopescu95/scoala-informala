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

let index = window.location.search.substr(7);

function draw() {

    document.querySelector("#nume").innerText = lista[index].nume;

    let poza = lista[index].poze[0];
    if(lista[index].poze[0] === undefined) {
        poza = "https://image.shutterstock.com/image-vector/no-image-available-sign-absence-260nw-373243873.jpg";
    }
    document.querySelector("#poze").src = poza;
    document.querySelector("#preparare").innerText = lista[index].preparare;

    let ingrediente = lista[index].ingrediente;
    let strIngrediente = "";
    for(let i=0;i<ingrediente.length;i++) {
        strIngrediente += `<li>${ingrediente[i].valoare} ${ingrediente[i].um} ${ingrediente[i].numeIngredient}</li>`;
    }
    document.querySelector("#ingrediente").innerHTML = strIngrediente;
}