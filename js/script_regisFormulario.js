/*CASILLAS INPUT*/
var nombre = document.querySelector("input[name='txtNombre']");
var correo = document.querySelector("input[name='txtCorreo']");
var telefono = document.querySelector("input[name='txtTelefono']");
var direccionArea = document.querySelector("textarea[name='txtdirec']");

nombre.addEventListener('focus', function(event){
    event.target.style.background = "#ff0062";
    event.target.style.color="white";
});
nombre.addEventListener('blur', function(event){
    event.target.style.background = "white";
    event.target.style.color="black";
});
correo.addEventListener('focus', function(event){
    event.target.style.background = "#ff0062";
    event.target.style.color="white";
});
correo.addEventListener('blur', function(event){
    event.target.style.background = "white";
    event.target.style.color="black";
});
telefono.addEventListener('focus', function(event){
    event.target.style.background = "#ff0062";
    event.target.style.color="white";
});
telefono.addEventListener('blur', function(event){
    event.target.style.background = "white";
    event.target.style.color="black";
});
direccionArea.addEventListener('focus', function(event){
    event.target.style.background = "#ff0062";
    event.target.style.color="white";
});
direccionArea.addEventListener('blur', function(event){
    event.target.style.background = "white";
    event.target.style.color="black";
});


/*BOTNES*/
var botonEnviar = document.querySelector(".boton1[type='submit']");
var botonVolver = document.querySelector(".boton2[type='submit']");

botonEnviar.addEventListener('click', function(event){
    event.preventDefault();
    validacionVacio();
});
botonVolver.addEventListener('click', function(event){
    event.preventDefault();
    borrar();
    redireccionar();
});
function validacionVacio() {
    var nomCompleto = document.getElementById("txtIDNombre").value;
    var emailUsuario = document.getElementById("txtIDCorreo").value;
    var telfUsuario = document.getElementById("txtIDTelefono").value;
    var direcUsuario = document.getElementById("txtIDdirec").value;
    if (nomCompleto.trim() === "") {
        alert("Ingrese un nombre");
        return false;
    }
    else if (emailUsuario.trim() === "") {
        alert("Ingrese un correo electrónico válido");
        return false;
    }
    else if (telfUsuario.trim() === "") {
        alert("Ingrese un número de teléfono");
        return false;
    }
    else if (direcUsuario.trim() === "") {
        alert("Ingrese una dirección");
        return false;
    }
    else {
        alert("¡Su información ha sido registrada exitosamente!");
        borrar();
        return false;
    }
}
function borrar() {
    nombre.value = "";
    correo.value = "";
    telefono.value = "";
    direccionArea.value = "";
}
function redireccionar() {
    window.location.href = "../paginas/login.html";
}


/*VALIDACIÓN DE CASILLAS INPUT*/
document.querySelector("input[name='txtNombre']").addEventListener("keypress", function(event){
    var charCode = event.keyCode || event.which;
    var charStr = String.fromCharCode(charCode);
    var pattern = /^[a-zA-Z\s]+$/;
    if (!pattern.test(charStr)) {
        event.preventDefault();
        return;
    }
});
document.querySelector("input[name='txtCorreo']").addEventListener("keypress", function(event){
    var charCode = event.keyCode || event.which;
    var charStr = String.fromCharCode(charCode);
    var pattern = /^[a-zA-Z0-9@.]+$/;
    if (!pattern.test(charStr)) {
        event.preventDefault();
        return;
    }
});
document.querySelector("input[name='txtTelefono']").addEventListener("keypress", function(event){
    var longTelf=document.querySelector("input[name='txtTelefono']").value.length;
    if(longTelf>=9){
        window.event.preventDefault();
        return;
    }
    var ascii=event.keyCode || event.which; 
    if(ascii<48 || ascii>57){
        window.event.preventDefault();
        return;
    }
});

function validacion(fram){
    testing=/^\s*$/;
    if(testing.test(fram.txtNombre.value)){
        window.event.preventDefault();
        return;
    }
    let caTelf=/^\d{8}$/;
    if(!caTelf.test(fram.txtTelefono.value)){
        window.event.preventDefault(); 
        return;
    }
}