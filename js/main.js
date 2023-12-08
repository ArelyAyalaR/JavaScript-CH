const shopContenido = document.getElementById("shopContenido");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((producto) => {
    let content = document.createElement("div");
    content.className = "card";
    content.innerHTML = `
    <img src="${producto.img}">
    <h3>${producto.nombre}</h3>
    <p class="price">${producto.precio} $</p>
    `;

    shopContenido.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "Comprar";
    comprar.className = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () => {

        const repeat = carrito.some((repeatProduct) => repeatProduct.id == producto.id);

        if (repeat) {
            carrito.map((prod) => {
                if (prod.id === producto.id) {
                    prod.cantidad++;
                }
            });
        } else {
            carrito.push({
                id: producto.id,
                img: producto.img,
                nombre: producto.nombre,
                precio: producto.precio,
                cantidad: producto.cantidad,
            });
        }
        console.log(carrito);
        console.log(carrito.length);
        carritoCounter();
        saveLocal();
    });
});

const saveLocal = () =>{
    localStorage.setItem("carrito", JSON.stringify(carrito));
};
