window.onload = function() {
    console.log(zodzioIlgis("architektūra","švitrinis"))
    console.log(zodzioIlgis("zoologija","reformacija"))
    console.log(zodzioIlgis("pusiausvyra","kardiograma"))

}

function zodzioIlgis(zodis,zodis1) {
    if(zodis.length > zodis1.length) {
        return 1
    }
    if (zodis.length < zodis1.length) {
        return -1
        
    }else{
        return 0
    }
}