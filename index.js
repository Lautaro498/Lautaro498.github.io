function mostrarDatosContacto() {
    var datosContacto = document.getElementById("datos-contacto");
    if (datosContacto.style.display === "none") {
        datosContacto.style.display = "block";
    } else {
        datosContacto.style.display = "none";
    }
}