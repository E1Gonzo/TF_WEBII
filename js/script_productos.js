function cambioboton(e){
    e.style="background-color: #00bd9d;";
    e.style.color="#ffffff";
    e.style.transition="all 0.2s ease";
}
function volverboton(e){
    e.style="background-color: #00ffd5;";
    e.style.color="#424242";
    e.style.transition="all 0.2s ease";
}
for(element of document.getElementsByClassName("Agregar")){
    element.setAttribute("onmouseover", "cambioboton(this)");
    element.setAttribute("onmouseout", "volverboton(this)");
}