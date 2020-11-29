//1
function equals(a,b) {
    if(a===b) {
        return true;
    }
    else return false;
}

//2
function compare(a,b) {
    if(a<b) {
        return -1;
    }
    else if(a==b) {
        return 0;
    }
    else return 1;
}

//3
function max(a,b) {
    if(a>b) {
        return a;
    }
    else return b;
}

//4
function min(a,b) {
    if(a<b) {
        return a;
    }
    else return b;
}

//5
function suma(n) {
    let sum = 0;
    for(let i=1;i<=n;i++){
        sum += i;
    }
    return sum;
}

//6
function prim(n) {
    for(let i=2;i<=n/2;i++) {
        if(n%i==0) {
            return false;
        }
    }
    return true;
}

//7
function sumaPrime(n) {
    let count = 0;
    let sum = 0;
    let i = 2;
    while (count<n){
        if(prim(i)) {
            sum += i;
            count++;
        }
        i++;
    }
    return sum;
}

//8
function invers(n){
    let rezultat=0;
    let cifra;
    while(n>0){
        cifra = n%10;
        rezultat = rezultat*10 + cifra;
        n= parseInt(n/10); 
    }
    return rezultat;
}

//9
function produsImpare(n) {
    let p = 1;
    let count = 0;
    let i = 1;
    while(count<n) {
        if(i%2==1){
            p=p*i;
            count++;
        }
        i++;
    }
    return p;
}


//10
function contains(arr,x) {
    for(let i=0;i<=arr.length;i++){
        if (arr[i]==x) {
            return true;
        }
    }
    return false;
}

//11
function maxArray(arr){
    let max = arr[0];
    for (let i=0;i<=arr.length;i++) {
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}

//12
function sumMinMax(arr) {
    let max = arr[0];
    let min = arr[0];
    for (let i=0;i<=arr.length;i++) {
        if(arr[i]>max) {
            max = arr[i];
        }
    }
    for (let i=0;i<=arr.length;i++) {
        if(arr[i]<min) {
            min = arr[i];
        }
    }
    return min + max;
}


//13
function hasDuplicates(arr) {
    let dup = arr[0];
    for (let i=1; i<=arr.length; i++) {
        if (arr[i] == dup) {
            return true;
        }
    }
    return false;
}

//14
function produsPozitive(arr) {
    let p = 1;
    for (let i=0; i<=arr.length; i++) {
        if (arr[i] > 0) {
            p = p * arr[i];
        }
    }
    return p;
}

//15
function palindrom(str){
    let invers="";
    for (let i=str.length-1;i>=0;i--){
        invers += str[i];
    }
    if(str === invers){
        return true;
    }
    else return false;
}