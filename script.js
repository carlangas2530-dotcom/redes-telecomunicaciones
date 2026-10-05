// ==========================================
// REDES & TELECOMUNICACIONES
// JAVASCRIPT
// ==========================================


// ==========================================
// INFORMACIÓN DE LOS TEMAS
// ==========================================

const temas = {

    ip: {
        titulo: "Dirección IP",
        texto: "Una dirección IP identifica lógicamente a un dispositivo dentro de una red. IPv4 utiliza 32 bits, mientras que IPv6 utiliza 128 bits."
    },

    vlan: {
        titulo: "VLAN",
        texto: "Una VLAN permite dividir una red física en diferentes redes lógicas. Se utiliza para organizar y separar el tráfico de una red."
    },

    router: {
        titulo: "Router",
        texto: "Un router conecta diferentes redes y determina el camino que deben seguir los paquetes de datos para llegar a su destino."
    },

    switch: {
        titulo: "Switch",
        texto: "Un switch conecta diferentes dispositivos dentro de una red local. Utiliza direcciones MAC para enviar la información al dispositivo correspondiente."
    },

    wifi: {
        titulo: "Wi-Fi",
        texto: "Wi-Fi es una tecnología de comunicación inalámbrica que permite conectar dispositivos a una red sin utilizar cables."
    },

    tcp: {
        titulo: "TCP/IP",
        texto: "TCP/IP es el conjunto de protocolos utilizado para permitir la comunicación entre dispositivos y redes, incluyendo Internet."
    }

};


// ==========================================
// INFORMACIÓN DE LOS DISPOSITIVOS
// ==========================================

const dispositivos = {

    pc: {
        titulo: "Computador",
        texto: "El computador es un dispositivo final de la red. Puede enviar y recibir información, acceder a servicios y comunicarse con otros equipos."
    },

    switch: {
        titulo: "Switch",
        texto: "El switch conecta varios dispositivos dentro de una red local. Utiliza direcciones MAC para determinar hacia qué puerto debe enviar la información."
    },

    router: {
        titulo: "Router",
        texto: "El router conecta diferentes redes. Su función principal es dirigir los paquetes de datos hacia la red o dispositivo de destino."
    },

    internet: {
        titulo: "Internet",
        texto: "Internet es una enorme red de redes que conecta dispositivos y sistemas ubicados en diferentes lugares del mundo."
    }

};


// ==========================================
// FUNCIÓN PARA MOSTRAR TEMAS
// ==========================================

function mostrarTema(tema) {

    const modal = document.getElementById("modal");
    const titulo = document.getElementById("modal-title");
    const texto = document.getElementById("modal-text");

    if (!modal || !titulo || !texto) {
        console.error("No se encontró el modal.");
        return;
    }

    titulo.textContent = temas[tema].titulo;

    texto.textContent = temas[tema].texto;

    modal.classList.add("show");

}


// ==========================================
// FUNCIÓN PARA MOSTRAR DISPOSITIVOS
// ==========================================

function mostrarDispositivo(dispositivo) {

    const modal = document.getElementById("modal");
    const titulo = document.getElementById("modal-title");
    const texto = document.getElementById("modal-text");

    if (!modal || !titulo || !texto) {
        console.error("No se encontró el modal.");
        return;
    }

    titulo.textContent = dispositivos[dispositivo].titulo;

    texto.textContent = dispositivos[dispositivo].texto;

    modal.classList.add("show");

}


// ==========================================
// CERRAR MODAL
// ==========================================

function cerrarModal() {

    const modal = document.getElementById("modal");

    if (modal) {

        modal.classList.remove("show");

    }

}


// ==========================================
// CERRAR MODAL AL HACER CLIC AFUERA
// ==========================================

const modal = document.getElementById("modal");

if (modal) {

    modal.addEventListener("click", function(event) {

        if (event.target === modal) {

            cerrarModal();

        }

    });

}


// ==========================================
// DATOS CURIOSOS
// ==========================================

const datos = [

    {
        titulo: "IPv4 utiliza 32 bits",
        descripcion: "Esto permite aproximadamente 4.300 millones de direcciones IPv4."
    },

    {
        titulo: "IPv6 utiliza 128 bits",
        descripcion: "IPv6 proporciona una cantidad enorme de direcciones para los dispositivos conectados."
    },

    {
        titulo: "Wi-Fi no significa Internet",
        descripcion: "Puedes estar conectado a una red Wi-Fi aunque esa red no tenga conexión a Internet."
    },

    {
        titulo: "Los routers utilizan tablas de enrutamiento",
        descripcion: "Estas tablas ayudan al router a determinar hacia dónde debe enviar los paquetes."
    },

    {
        titulo: "Los switches utilizan direcciones MAC",
        descripcion: "Los switches utilizan las direcciones MAC para determinar a qué puerto enviar una trama."
    }

];


let numeroDato = 0;


// ==========================================
// CAMBIAR DATO CURIOSO
// ==========================================

function nuevoDato() {

    numeroDato++;

    if (numeroDato >= datos.length) {

        numeroDato = 0;

    }

    const numero = document.getElementById("numeroDato");
    const titulo = document.getElementById("dato");
    const descripcion = document.getElementById("descripcionDato");

    if (numero && titulo && descripcion) {

        numero.textContent =
            String(numeroDato + 1).padStart(2, "0");

        titulo.textContent =
            datos[numeroDato].titulo;

        descripcion.textContent =
            datos[numeroDato].descripcion;

    }

}


// ==========================================
// MENSAJE DE PRUEBA
// ==========================================

console.log("✅ Redes & Telecomunicaciones cargado correctamente.");