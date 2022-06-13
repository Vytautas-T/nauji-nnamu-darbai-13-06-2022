window.onload = function() {

    //console.log(generateRandom())

    //let remdomcount = generateRandom;
    let a = 15749;
    let b = 95000;
    let x = 39857;
    console.log(skaiciuSudejimas(generateRandom(),a))
    console.log(skaiciuSudejimas(generateRandom(),b))
    console.log(skaiciuSudejimas(generateRandom(),x))
    console.log(generateRandom())
}

function generateRandom(min = 10000, max = 99999) {

    // find diff
    let difference = max - min;

    // generate random number 
    let rand = Math.random();

    // multiply with difference 
    rand = Math.floor( rand * difference);

    // add with min value 
    rand = rand + min;

    return rand;
}

function skaiciuSudejimas (skaicius,skaicius2) {
     let skaicius3 = skaicius + skaicius2;
     return skaicius3.toString().split("").length;

}
