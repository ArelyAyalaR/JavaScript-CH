// Función para evaluar la seguridad de una contraseña
function evaluarContrasena(contrasena) {
    if (!contrasena) {
        return "No ingresaste ninguna contraseña. Por favor, ingresa una contraseña.";
    }

    // Inicializar variables para rastrear características de la contraseña
    let longitudSuficiente = false;
    let tieneMayusculas = false;
    let tieneMinusculas = false;
    let tieneNumeros = false;
    let tieneCaracteresEspeciales = false;

    // Comprobar la longitud de la contraseña
    if (contrasena.length >= 8) {
        longitudSuficiente = true;
    }

    // Comprobar si la contraseña contiene letras mayúsculas, minúsculas, números y caracteres especiales
    for (let i = 0; i < contrasena.length; i++) {
        const caracter = contrasena.charAt(i);
        if (caracter.match(/[A-Z]/)) {
            tieneMayusculas = true;
        } else if (caracter.match(/[a-z]/)) {
            tieneMinusculas = true;
        } else if (caracter.match(/[0-9]/)) {
            tieneNumeros = true;
        } else if (caracter.match(/[^A-Za-z0-9]/)) {
            tieneCaracteresEspeciales = true;
        }
    }

    // Construir un mensaje que describe las características necesarias de una contraseña segura
    let mensajeCaracteristicas = "Debes ingresar:\n";
    if (!longitudSuficiente) {
        mensajeCaracteristicas += "- Al menos 8 caracteres\n";
    }
    if (!tieneMayusculas) {
        mensajeCaracteristicas += "- Al menos una letra mayúscula\n";
    }
    if (!tieneMinusculas) {
        mensajeCaracteristicas += "- Al menos una letra minúscula\n";
    }
    if (!tieneNumeros) {
        mensajeCaracteristicas += "- Al menos un número\n";
    }
    if (!tieneCaracteresEspeciales) {
        mensajeCaracteristicas += "- Al menos un carácter especial\n";
    }

    // Evaluar la contraseña en función de las características
    if (longitudSuficiente && tieneMayusculas && tieneMinusculas && tieneNumeros && tieneCaracteresEspeciales) {
        return "es segura";
    }else {
        return `no es segura. \n${mensajeCaracteristicas}`;
    }
}

// Bucle para permitir múltiples intentos
let continuar = true;
alert("Recuerda que una contraseña segura, debe tener:\n- Al menos 8 caracteres\n- Al menos una \
letra mayúscula\n- Al menos una letra minúscula\n- Al menos un número\n- Al menos un \
carácter especial");

while (continuar) {
    // Solicitar al usuario que ingrese una contraseña
    const contrasenaUsuario = prompt("Ingrese su contraseña: ");

    // Evaluar si no ingresó nada
    if (!contrasenaUsuario) {
        alert("No ingresaste ninguna contraseña. Por favor, ingresa una contraseña.");
    } else {
        // Evaluar la contraseña y mostrar el resultado
        const resultado = evaluarContrasena(contrasenaUsuario);
        alert(`La contraseña ingresada ${resultado}`);
    }

    // Intentar nuevamente
    const intentarNuevamente = confirm("¿Desea intentar nuevamente?");
    if (!intentarNuevamente) {
        continuar = false;
    }
}
