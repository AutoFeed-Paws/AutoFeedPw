// Función para validar el formulario de inicio de sesión
function validar() {
    // Obtener los valores de usuario y contraseña
    var usuario = document.getElementById("Usuario").value.trim();
    var contraseña = document.getElementById("Contraseña").value.trim();

    // Validación para verificar que los campos no estén vacíos
    if (usuario === "" || contraseña === "") {
        alert("Todos los campos son obligatorios");
        return false;
    }

    // validación personalizada
    if (usuario === "prueba" && contraseña === "prueba") {
        alert("Inicio de sesión exitoso");
        return true;
    } else {
        alert("Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
        return false;
    }
}

// Función para registrar la comida
function registrarComida() {
    // Obtiene los valores de las entradas de comida
    var timesPerDay = document.getElementById("timesPerDay").value.trim();
    var mealSize = document.getElementById("mealSize").value.trim();

    // Validar si algun campo esta vacio
    if (timesPerDay === "" || mealSize === "") {
        alert("Por favor complete todos los campos.");
        return false;
    }

    // ventana emergente
    document.getElementById("popup").style.display = "block";

    // dracion de venta la segundos
    setTimeout(function() {
        document.getElementById("popup").style.display = "none";
    }, 3000);

    // Borrar la información de los labels cuando se quita la ventana emergente
    document.getElementById("timesPerDay").value = "";
    document.getElementById("mealSize").value = "";
}

// Deshabilita la opción de registrar si los campos están vacíos
document.addEventListener('DOMContentLoaded', function() {
    var btnRegistrar = document.getElementById("btnRegistrar");
    var timesPerDayInput = document.getElementById("timesPerDay");
    var mealSizeInput = document.getElementById("mealSize");



    mealSizeInput.addEventListener('input', function() {
        btnRegistrar.disabled = timesPerDayInput.value.trim() === "" || mealSizeInput.value.trim() === "";
        btnRegistrar.style.backgroundColor = btnRegistrar.disabled ? "#CCCCCC" : ""; // Cambiar color de fondo según esté deshabilitado
    });
});



// Función para mostrar el mensaje y borrar los campos del formulario de registro
function mostrarMensaje() {
    alert("¡Datos registrados!");

    // Borrar todos los campos del formulario de registro
    document.getElementById("nombreUsuario").value = ' ';
    document.getElementById("contraseña").value = ' ';
    document.getElementById("email").value = ' ';
    document.getElementById("nombre").value = ' ';
    document.getElementById("edad").value = ' ';
    document.getElementById("raza").value = ' ';
    document.getElementById("peso").value = ' ';
    document.getElementById("tamaño").value = ' ';
}

function validarRegistro() {
    // Lógica de validación del formulario de registro
}
