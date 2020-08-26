function menuclick(targetname) {
    Array.from(document.getElementsByClassName("Page")).forEach((element) => element.classList.remove("currentpage"))
    target=document.getElementById(targetname)
    console.log(targetname,target)
    target.classList.add("currentpage")
}