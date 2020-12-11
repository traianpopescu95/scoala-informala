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

//12
function sort(arr) {
    let k; //variabila de pastrare
    let final = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                k = arr[i];
                arr[i] = arr[j];
                arr[j] = k;
            }
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            final.push(arr[i]);
        }
    }
    return final;
}

//13
function sortAscDesc(arr) {
    let k;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] % 2 === 0 && arr[j] % 2 === 0) {
                if (arr[i] > arr[j]) {
                    k = arr[i];
                    arr[i] = arr[j];
                    arr[j] = k;
                }
            }
            if (arr[i] % 2 !== 0 && arr[j] % 2 !== 0) {
                if (arr[i] < arr[j]) {
                    k = arr[i];
                    arr[i] = arr[j];
                    arr[j] = k;
                }
            }
            if (arr[i] % 2 !== 0 && arr[j] % 2 === 0) {
                k = arr[i];
                arr[i] = arr[j];
                arr[j] = k;
            }
        }
    }
    return arr;
}

//14
function binarySearch(arr, n) {
    sort(arr);
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] === n) {
            return true;
        }
        else if (arr[mid] < n) {
            start = mid + 1;
        }
        else end = mid - 1;
    }
    return false;
}

//15
function countBinarySearch(arr, n) {
    sort(arr);
    let count = 0;
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        count++;
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] === n) {
            return count;
        }
        else {
            if (arr[mid] < n)
                start = mid + 1;
            else
                end = mid - 1;
        }
    }
    return count;
}