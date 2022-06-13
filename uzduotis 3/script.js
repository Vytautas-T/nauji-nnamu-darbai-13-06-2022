window.onload = function() {
    console.log(raidziuSkaiciusDaugiau10("rutina"))
    console.log(raidziuSkaiciusDaugiau10("dehidratacija"))

}

function raidziuSkaiciusDaugiau10(zodis) {
    if(zodis.length > 10) {
        return true
    }
    else{
        return false
    }
}