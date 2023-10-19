let im=0;
function carruselasideim(){
    im++;
    if(im>3) im=1;
    document.getElementById("HeaderImg").setAttribute("src", "../imagenes/Local"+im+".png");
}
setInterval(carruselasideim, 3000);


function cambioparrafo(e){
    e.style.color="#ffffff";
    e.style.transition="all 0.2s ease";
}
function volverparrafo(e){
    e.style.color="#424242";
    e.style.transition="all 0.2s ease";
}
for(element of document.getElementsByClassName("parrafo")){
    element.setAttribute("onmouseover", "cambioparrafo(this)");
    element.setAttribute("onmouseout", "volverparrafo(this)");
}


function cambioparrafoTelf(e){
    e.style.color="#ff01c8";
    e.style.transition="all 0.2s ease";
}
function volverparrafoTelf(e){
    e.style.color="#ffffff";
    e.style.transition="all 0.2s ease";
}
for(element of document.getElementsByClassName("parrafoTelf")){
    element.setAttribute("onmouseover", "cambioparrafoTelf(this)");
    element.setAttribute("onmouseout", "volverparrafoTelf(this)");
}


function cambioboton(e){
    e.style="background-color: #00db50d5;";
    e.style.color="#ffffff";
    e.style.transition="all 0.2s ease";
}
function volverboton(e){
    e.style="background-color: #00ff5e;";
    e.style.color="#424242";
    e.style.transition="all 0.2s ease";
}
for(element of document.getElementsByClassName("boton")){
    element.setAttribute("onmouseover", "cambioboton(this)");
    element.setAttribute("onmouseout", "volverboton(this)");
}