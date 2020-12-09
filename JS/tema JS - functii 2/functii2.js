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

//TEMA 2 JS
//1
function getDigits(str) {
    let rez = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 0 && str[i] <= 9) {
            rez += str[i];
        }
    }
    return rez;
}

//2
function getLetters(str) {
    let rez = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() >= "a" && str[i].toLowerCase() <= "z") {
            rez += str[i];
        }
    }
    return rez;
}

//3
function getFirst5Letters(str) {
    let rez = "";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() >= "a" && str[i].toLowerCase() <= "z") {
            rez += str[i];
            count++;
        }
        if (count === 5) {
            return rez;
        }
    }
    return rez;
}

//4
function concatenate(arr) {
    let final = "";
    for (let i = 0; i < arr.length; i++) {
        final += arr[i];
    }
    return final;
}

//5
function getAllDigits(arr) {
    let final = "";
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] >= 0 && arr[i][j] <= 9) {
                final += arr[i][j];
            }
        }
    }
    return final;
}

//6
function invertAllStrings(arr) {
    let final = [];
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr[i].length - 1; j >= 0; j--) {
            str += arr[i][j];
        }
        final.push(str);
        str = "";
    }
    return final;
}

//7
function factorial(n) {
    let p = 1;
    for (let i = n; i >= 1; i--) {
        p *= i;
    }
    return p;
}

//8
function cmmdc(a, b) {
    for (let i = a; i >= 1; i--) {
        if (a % i === 0 && b % i === 0) {
            return i;
        }
    }
}

//9
function cmmmc(a, b) {
    return (a * b) / cmmdc(a, b);
}

//10
function divizori(n) {
    let final = [];
    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) {
            final.push(i);
        }
    }
    return final;
}

//11
function palindrom(n) {
    let test = n;
    let ogl = 0;
    let c;
    while (n > 0) {
        c = n % 10;
        ogl = ogl * 10 + c;
        n = Math.floor(n / 10);
    }
    console.log(n, ogl);
    if (test === ogl) {
        return true;
    }
    else return false;
}