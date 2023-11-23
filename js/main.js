// Objeto para cada contacto
function Contacto(nombre, apellido, email, telefono) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.telefono = telefono;
}

// Arreglo de contactos
let contactos = [];

// Función para agregar un contacto
function agregarContacto() {
    const nombre = prompt("Ingrese el nombre del contacto:");
    const apellido = prompt("Ingrese el apellido del contacto:");
    const email = prompt("Ingrese el email del contacto:");
    const telefono = prompt("Ingrese el teléfono del contacto:");

    const nuevoContacto = new Contacto(nombre, apellido, email, telefono);
    contactos.push(nuevoContacto);
    alert("Contacto agregado correctamente.");
    mostrarContactos();
}

// Función para mostrar los contactos
function mostrarContactos() {
    let listaContactos = "Lista de contactos:\n";
    contactos.forEach((contacto, index) => {
        listaContactos += `${index + 1}. ${contacto.nombre} ${contacto.apellido}\n`;
    });
    alert(listaContactos);
}

// Función del menú principal
function gestionarContactos() {
    let continuar = true;

    while (continuar) {
        const opcion = prompt("Seleccione una opción:\n1. Agregar contacto\n2. Mostrar contactos\n3. Salir");

        switch (opcion) {
            case "1":
                agregarContacto();
                break;
            case "2":
                mostrarContactos();
                break;
            case "3":
                continuar = false;
                break;
            default:
                alert("Opción inválida. Intente de nuevo.");
        }
    }

    alert("¡Hasta luego!");
}

// Llamada de la función
gestionarContactos();