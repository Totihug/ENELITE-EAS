const enlaces = document.querySelectorAll("nav a");
const whatsappBtn = document.querySelector("#whatsappBtn");

enlaces.forEach((enlace) => {
    enlace.addEventListener("click", (event) => {
        event.preventDefault();

        const seccion = document.querySelector(enlace.getAttribute("href"));

        seccion.scrollIntoView({
            behavior: "smooth"
        });
    });
});

whatsappBtn.addEventListener("click", () => {
    const telefono = "595985783030";
    const mensaje = "Hola, quiero consultar sobre baterías para mi vehículo.";
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
});
