function cambiomenu(e){
    e.style="font-size:20px";
    e.style="background-color: #ffffff;";
    e.style.color="#212b49";
    e.style.transition="all 0.3s ease";
}
function volvermenu(e){
    e.style="font-size:17px";
    e.style="background-color: #212b49;";
    e.style.color="#ffffff";
    e.style.transition="all 0.3s ease";
}

for(element of document.getElementsByClassName("elenav")){
    element.setAttribute("onmouseover", "cambiomenu(this)");
    element.setAttribute("onmouseout", "volvermenu(this)");
}