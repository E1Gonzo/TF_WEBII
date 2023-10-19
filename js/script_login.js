function cambioboton(e){
    e.style="background-color: #cc004ecb;";
    e.style.color="#ffffff";
    e.style.border="solid #cc004ecb";
    e.style.transition="all 0.2s ease";
    e.style.cursor="pointer";
}
function volverboton(e){
    e.style="background-color: #ff0062;";
    e.style.color="#ffffffdc";
    e.style.transition="all 0.2s ease";
}
function cambiolink(i){
    i.style.textDecoration ="underline";
    i.style.transition="all 0.2s ease";
    i.style.cursor="pointer";
}
function volverlink(i){
    i.style.textDecoration ="none";
    i.style.transition="all 0.2s ease";
}
for(element of document.getElementsByClassName("boton")){
    element.setAttribute("onmouseover", "cambioboton(this)");
    element.setAttribute("onmouseout", "volverboton(this)");
}
for(element of document.getElementsByClassName("link")){
    element.setAttribute("onmouseover", "cambiolink(this)");
    element.setAttribute("onmouseout", "volverlink(this)");
}