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
    let divizor=0;
    for(let i=1;i<=n;i++) {
        if(n%i==0) {
            divizor++;
        }
    }
    if (divizor<3) {
        return true;
    }
    else return false;
}

//7
function sumaPrime(n) {
    let array = [];
    for (let i=1 ; array.length <= n ; i++) {
        
    }
}

//8
function invers  
}

//9

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
function palindrom

