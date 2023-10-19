function parpadearh3(){
    let c = ["cyan", "#22ff00", "yellow", "#ffffff", "red", "magenta", "#FC6E22", "#FF00FF"];
    let r = c[Math.floor(Math.random() * c.length)];
    document.getElementById("h3tit").style.color = r;
}
setInterval(parpadearh3, 900);


function desapareceimg(e){
    e.style.opacity="0.4";
    e.style.transition="all 0.9s ease";
}
function apareceimg(e){
    e.style.opacity="1";
    e.style.transition="all 0.7s ease";
}
for(element of document.getElementsByClassName("imgcont")){
    element.setAttribute("onmouseover", "desapareceimg(this)");
    element.setAttribute("onmouseout", "apareceimg(this)");
}

function clickimagen(e){
    alert("Por favor, regístrese para poder utilizar una de estas ofertas en su próxima compra");
}
for(element of document.getElementsByClassName("imgcont")){
    element.setAttribute("onclick", "clickimagen(this)");
}


function cambioboton(e){
    e.style="background-color: #00db50d5;";
    e.style.color="#ffffff";    
    e.style.border="solid #00db50d5";
    e.style.transition="all 0.2s ease";
}
function volverboton1(e){
    e.style="background-color: #00ff5e;";
    e.style.color="#424242";
    e.style.transition="all 0.2s ease";
}
function volverboton2(e){
    e.style="background-color: transparent;";
    e.style.color="#00ff5e";
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