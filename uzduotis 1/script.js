window.onload = function() {
console.log(daugiauArMaziau(125))
console.log(daugiauArMaziau(-212))
}

function daugiauArMaziau (skaicius) {
    if(skaicius > 100) {
        return "daugiau uz 100"
    }
    else{
        return "maziau uz 100"
    }
}