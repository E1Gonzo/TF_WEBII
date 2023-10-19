function parpadear(){
    let c = ["cyan", "#22ff00", "yellow", "#ffffff", "red", "magenta", "#FC6E22", "#FF00FF"];
    let r = c[Math.floor(Math.random() * c.length)];
    document.getElementById("h3tit").style.color = r;
}
setInterval(parpadear, 900);


let images = new Array ("../imagenes/Banner1.png", "../imagenes/Banner2.png", "../imagenes/Banner3.png");
let e = 0;
let c = 0;

function carruselasideimg1(){
    let bann1 = document.getElementById("asideimg1");
    e++;
    if(e>images.length-1) e=0;
    bann1.src=images[e];
}
function carruselasideimg2(){
    let bann2 = document.getElementById("asideimg2");
    c++;
    if(c>images.length-1) c=0;
    bann2.src=images[c];
}
setInterval(carruselasideimg1, 3600);
setInterval(carruselasideimg2, 2900);


function cambioboton(e){
    e.style="background-color: #cc004ecb;";
    e.style.color="#ffffff";
    e.style.border="solid #cc004ecb";
    e.style.transition="all 0.2s ease";
    e.style.cursor="pointer";
}
function volverboton1(e){
    e.style="background-color: #ff0062;";
    e.style.color="#ffffffdc";
    e.style.transition="all 0.2s ease";
    e.style.cursor="pointer";
}
function volverboton2(e){
    e.style="background-color: transparent";
    e.style.color="#ff0062";
    e.style.transition="all 0.2s ease";
}
for(element of document.getElementsByClassName("boton1")){
    element.setAttribute("onmouseover", "cambioboton(this)");
    element.setAttribute("onmouseout", "volverboton1(this)");
}
for(element of document.getElementsByClassName("boton2")){
    element.setAttribute("onmouseover", "volverboton1(this)");
    element.setAttribute("onmouseout", "volverboton2(this)");
}