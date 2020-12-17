function menuclick(targetname) {
    Array.from(document.getElementsByClassName("Page")).forEach((element) => element.classList.remove("currentpage"))
    target=document.getElementById(targetname)
    console.log(targetname,target)
    target.classList.add("currentpage")
}

let animemodeactive =false

document.getElementById("animemodebutton").addEventListener("click", makeanime);

function makeanime(){
    if (animemodeactive==false){
        Array.from(document.getElementsByClassName("modetoggleable")).forEach(function(element) {element.classList.add("animemode")})
    }else{ Array.from(document.getElementsByClassName("modetoggleable")).forEach(function(element) {element.classList.remove("animemode")})}
    animemodeactive= !animemodeactive
}

