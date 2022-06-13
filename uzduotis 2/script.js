window.onload = function() {
    console.log(lygusArbaNeLygusSkaiciai(256))
    console.log(lygusArbaNeLygusSkaiciai(-389))

}

function lygusArbaNeLygusSkaiciai(skaicius) {
    if(skaicius % 2 === 0) {
        return true;
    }
    else{
        return false;
    }
}
