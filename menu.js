function menuclick(targetname) {
    Array.from(document.getElementsByClassName("Page")).forEach((element) => element.classList.remove("currentpage"))
    target=document.getElementById(targetname)
    console.log(targetname,target)
    target.classList.add("currentpage")
}

let animemodeactive =false

document.getElementById("animemodebutton").addEventListener("click", makeanime);

if(getCookie("animemode")=="true"){
    makeanime()
}
 function makeanime(){
    if (animemodeactive==false){
        Array.from(document.getElementsByClassName("modetoggleable")).forEach(function(element) {element.classList.add("animemode")})
        Array.from(document.getElementsByClassName("animemodepictures")).forEach(function(element) {element.style.visibility="visible"})
    }else{
         Array.from(document.getElementsByClassName("modetoggleable")).forEach(function(element) {element.classList.remove("animemode")})
         Array.from(document.getElementsByClassName("animemodepictures")).forEach(function(element) {element.style.visibility="hidden"})
    }
    animemodeactive= !animemodeactive
    setCookie("animemode", animemodeactive, 365)
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }