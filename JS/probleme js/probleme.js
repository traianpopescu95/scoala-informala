//Write a program that prints ‘Hello World’ to the screen.

function hello() {
    document.getElementById("demo").innerHTML = "Hello World!";
}


//Write a program that asks the user for their name and greets them with their name.
//Modify the previous program such that only the users Alice and Bob are greeted with their names.

function greet() {
    let nume = prompt("Your name", "Traian Popescu");
    let text = "Hello, " + nume;
    document.getElementById("greet").innerHTML = text;
}

//Write a program that asks the user for a number n and prints the sum of the numbers 1 to n
function sum() {
    let n = prompt("Insert number");
    let s=0;
    for (let i=1; i<=n; i++) {
        s += i;
    }
    document.getElementById("sum").innerHTML = "Suma primelor " + n + " numere naturale este " + s;
}

//Modify the previous program such that only multiples of three or five are considered in the sum, e.g. 3, 5, 6, 9, 10, 12, 15 for n=17
function sum2() {
    let n = prompt("Insert number");
    let s=0;
    for (let i=1; i<=n; i++) {
        if(i%3===0 || i%5===0){
            s += i;
        }
    }
    document.getElementById("sum2").innerHTML = "Suma primelor " + n + " numere naturale multipli de 3 sau 5 este " + s;
}


//Write a program that prints a multiplication table for a number
function table() {
    let n = prompt("Tabla inmultirii cu:");
    for(let i=1;i<=n;i++){
        document.write(i + " x " + n + " = " + i*n);
        document.write("<br>");
    }
    document.write("</br>");
    document.write("Da tu un refresh te rog pana invat eu cum sa pun buton pentru asta");
}

function guess() {
    let n = Math.floor(Math.random() * 11);
    let nr = prompt("Cate oi are Ion ? (0 - 10)");
    if(n==nr) {
        document.write("Ai ghicit la fix");
    }
    else if(n>nr){
        document.write("ai spus cu " , n-nr , " mai putine")
    }
    else    
        document.write("ai spus cu " , nr-n , " mai multe")
    document.write("</br>");
    document.write("Ion avea " , n , " oi");
    document.write("</br>");
    document.write("Da tu un refresh te rog pana invat eu cum sa pun buton pentru asta");
}

//Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n.
function sumOrProd() {
    let n = document.querySelector("#sumOrProd").value;
    let s=0;
    let p=1;
    for(let i=1;i<=n;i++) {
        s += i;
        p *= i;
    }

    document.querySelector("h4").innerHTML = "Suma este " + s + ". Produsul este " + p + "."; 
}

function fiz(n) {
    let arr="";
    for(let i=1;i<=n;i++){
        if(i%3 == 0 && i%5!=0) {
            arr+=" Fizz ";
        }
        if(i%3 != 0 && i%5==0) {
            arr+=" Buzz ";
        }
        if(i%3 == 0 && i%5==0) {
            arr += " FizzBuzz ";
        }
        if(i%3 != 0 && i%5!=0) {
            arr += i;
        }
    }
    return arr;
}

console.log(fiz(25));

function bolt(n) {
    let sens="dreapta";
    let persoana = 1;
    let str ="";
    for(let i=1;i<=n;i++) {
        if(i%7 !== 0) {
            str += "P" + persoana + ": " + i;
            if(sens == "dreapta"){
                persoana ++;
                if(persoana>5){
                    persoana=1;
                }
            } else {
                persoana --;
                if(persoana<1){
                    persoana=5;
                }
            }
        }
        else if(i%7 === 0 || div7(i)){
            str += " Bolt ";
            if(sens === "dreapta"){
                sens="stanga";
            }
            else sens="dreapta";
        }
    }
    return str;
}


function div7(x){
    while (x>0){
        if(x%10 ===7){
            return true;
        }
        x = Math.floor(x/10);
    }
    return false;

}


console.log(bolt(30));

let lista = ["dasndasds", "dasdsadsa", "213123"];

//completeaza html
function draw() {
    let str = "";
    for (let i = 0; i <= lista.length - 1; i++) {
        str += `
            <li>${lista[i]}</li>
        `;
    }

    let listaMea = document.querySelector("ul");
    listaMea.innerHTML = str;
}


//adauga element in lista[]
function add() {
    let input = document.querySelector("input");
    let val = input.value;
    if (val !== "") {
        lista.push(val);
    }
    draw();
    input.value = "";
}

//afiseaza suma a 2 inputuri
function sum() {
    let val1 = document.querySelector("#nr1").value;
    let val2 = document.querySelector("#nr2").value;

    let htmlMeu = document.querySelector("p");
    htmlMeu.innerHTML = parseInt(val1) + parseInt(val2);
}