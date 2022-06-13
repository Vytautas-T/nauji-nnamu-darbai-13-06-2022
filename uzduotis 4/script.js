window.onload = function() {
    console.log(arKartotiniSkaiciai(90))
    console.log(arKartotiniSkaiciai(10))
    console.log(arKartotiniSkaiciai(-100))
}

function arKartotiniSkaiciai(skaicius) {
    if(skaicius % 3 === 0 && skaicius % 5 === 0 && skaicius % 10 ===0) {
        return true;
    }
    else{
        return false
    }
}