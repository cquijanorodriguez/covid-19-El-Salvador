function Limpiar() {

    usuario = document.getElementById('nombre_usuario').value = ""

    if (usuario == '') {
        alert("Esta Vacio")

    } else {
        document.getElementById('nombre_usuario').value = ""
        document.getElementById('contraseña').value = ""

    }



}