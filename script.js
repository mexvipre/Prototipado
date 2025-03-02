// Alternar la visibilidad del sidebar
document.getElementById("toggleSidebar").addEventListener("click", function () {
    let sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("hidden");
});

// Función para cargar vistas dinámicamente en el contenedor
function cargarVista(vista) {
    document.getElementById("vista-container").innerHTML = `<iframe src="${vista}" width="100%" height="100%" frameborder="0"></iframe>`;
}

// Función para desplegar u ocultar los submenús
document.querySelectorAll(".dropdown-btn").forEach(button => {
    button.addEventListener("click", function () {
        let dropdownContent = this.nextElementSibling;
        dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
    });
});
