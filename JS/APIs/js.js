let url = "https://official-joke-api.appspot.com/";

let queryMap = {
    "One joke": "random_joke",
    "Ten jokes": "random_ten",
    "General joke": "jokes/random",
    "Programming joke": "jokes/programming/random"
}

async function getJoke() {
    let option = document.querySelector("#glume").value;
    let response = await fetch(url + queryMap[option]);
    let json = await response.json();
    let setup = json.setup;
    let punchline = json.punchline;
    document.querySelector("#setup").innerText = setup;
    document.querySelector("#punchline").innerText = punchline;
}

async function getJoke2() {
    let option = document.querySelector("#glume2").value;
    let response = await fetch(url + queryMap[option]);
    let json = await response.json();
    let setup = json.setup;
    let punchline = json.punchline;
    document.querySelector("#setup2").innerText = setup;
    document.querySelector("#punchline2").innerText = punchline;
}